import { memo, useEffect, useRef } from 'react';
import { createTimeline, splitText, stagger, Timeline } from 'animejs';
import type { WelcomeProps } from '@/interfaces/Props';
import Parallax from './components/Parallax';

const Welcome = ({ loadingEnd }: WelcomeProps) => {
    const animationRef = useRef<Timeline | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        if (loadingEnd) animationRef.current?.play();
    }, [loadingEnd]);

    useEffect(() => {
        if (!titleRef.current) return;

        const split = splitText(titleRef.current, { chars: true });

        animationRef.current = createTimeline({ autoplay: false }).add(
            split.chars,
            {
                y: [{ to: ['100%', '0'] }],
                opacity: [0, 1],
                ease: 'inOutBack',
                duration: 1500,
            },
            stagger(50, { start: 0, from: 'center' }),
        );

        return () => {
            split.revert();
            animationRef.current?.cancel();
        };
    }, []);

    return (
        <section className='relative -z-1 grid h-screen place-items-center select-none'>
            <Parallax />
            <h1
                ref={titleRef}
                className='font-primary text-5xl font-bold text-secund md:text-8xl'
            >
                Hi! I'm Davi
            </h1>
        </section>
    );
};

export default memo(Welcome);
