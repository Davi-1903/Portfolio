import {
    IconBook,
    IconBrain,
    IconBrandCss3,
    IconBrandDocker,
    IconBrandFigma,
    IconBrandGit,
    IconBrandGithub,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandMysql,
    IconBrandPython,
    IconBrandReact,
    IconBrandRust,
    IconBrandSupabase,
    IconBrandTailwind,
    IconBrandTypescript,
    IconBrandVite,
    IconBrandVscode,
    IconCode,
    IconDatabase,
    IconDeviceGamepad2,
    IconFlask,
    IconSquareNumber0,
} from '@tabler/icons-react';
import type { SkillProps } from '@/interfaces/Props';
import clsx from 'clsx';

const Technology = ({ technology, theme = 'light' }: SkillProps) => {
    const icons = {
        python: (
            <IconBrandPython className='stroke-blue-600 dark:stroke-blue-300 dark:drop-shadow-[0_0_6px_var(--color-blue-600)]' />
        ),
        rust: (
            <IconBrandRust className='stroke-orange-500 dark:stroke-orange-200 dark:drop-shadow-[0_0_6px_var(--color-orange-500)]' />
        ),
        html: (
            <IconBrandHtml5 className='stroke-orange-600 dark:stroke-orange-300 dark:drop-shadow-[0_0_6px_var(--color-orange-600)]' />
        ),
        css: (
            <IconBrandCss3 className='stroke-blue-600 dark:stroke-blue-300 dark:drop-shadow-[0_0_6px_var(--color-blue-600)]' />
        ),
        javascript: (
            <IconBrandJavascript className='stroke-yellow-600 dark:stroke-yellow-300 dark:drop-shadow-[0_0_6px_var(--color-yellow-600)]' />
        ),
        typescript: (
            <IconBrandTypescript className='stroke-blue-600 dark:stroke-blue-300 dark:drop-shadow-[0_0_6px_var(--color-blue-600)]' />
        ),
        mysql: (
            <IconBrandMysql className='stroke-blue-600 dark:stroke-blue-300 dark:drop-shadow-[0_0_6px_var(--color-blue-600)]' />
        ),
        sqlite: (
            <IconDatabase className='stroke-blue-600 dark:stroke-blue-300 dark:drop-shadow-[0_0_6px_var(--color-blue-600)]' />
        ),
        markdown: (
            <IconBook className='stroke-teal-600 dark:stroke-teal-300 dark:drop-shadow-[0_0_6px_var(--color-teal-600)]' />
        ),
        flask: <IconFlask className='dark:drop-shadow-[0_0_6px_var(--color-secund)]' />,
        // O ícone é do supabase, mas nesse caso será do FastAPI ;)
        fastapi: (
            <IconBrandSupabase className='stroke-teal-400 dark:stroke-teal-100 dark:drop-shadow-[0_0_6px_var(--color-teal-400)]' />
        ),
        react: (
            <IconBrandReact className='stroke-cyan-600 dark:stroke-cyan-300 dark:drop-shadow-[0_0_6px_var(--color-cyan-600)]' />
        ),
        tailwind: (
            <IconBrandTailwind className='stroke-teal-400 dark:stroke-teal-100 dark:drop-shadow-[0_0_6px_var(--color-teal-400)]' />
        ),
        git: (
            <IconBrandGit className='stroke-orange-600 dark:stroke-orange-300 dark:drop-shadow-[0_0_6px_var(--color-orange-600)]' />
        ),
        github: <IconBrandGithub className='dark:drop-shadow-[0_0_6px_var(--color-secund)]' />,
        figma: (
            <IconBrandFigma className='stroke-rose-500 dark:stroke-rose-200 dark:drop-shadow-[0_0_6px_var(--color-rose-500)]' />
        ),
        vscode: (
            <IconBrandVscode className='stroke-blue-600 dark:stroke-blue-300 dark:drop-shadow-[0_0_6px_var(--color-blue-600)]' />
        ),
        vite: (
            <IconBrandVite className='stroke-purple-600 dark:stroke-purple-300 dark:drop-shadow-[0_0_6px_var(--color-purple-600)]' />
        ),
        docker: (
            <IconBrandDocker className='stroke-blue-600 dark:stroke-blue-300 dark:drop-shadow-[0_0_6px_var(--color-blue-600)]' />
        ),
        ai: (
            <IconBrain className='stroke-blue-600 dark:stroke-blue-300 dark:drop-shadow-[0_0_6px_var(--color-blue-600)]' />
        ),
        pygame: (
            <IconDeviceGamepad2 className='stroke-green-600 dark:stroke-green-300 dark:drop-shadow-[0_0_6px_var(--color-green-600)]' />
        ),
        numpy: (
            <IconSquareNumber0 className='stroke-blue-400 dark:stroke-blue-100 dark:drop-shadow-[0_0_6px_var(--color-blue-400)]' />
        ),
    };
    const icon = icons[technology.toLowerCase() as keyof typeof icons] ?? <IconCode />;

    return (
        <span
            className={clsx(
                'flex gap-2 rounded-md border-2 px-2 py-1 font-primary',
                theme === 'light' ? 'text-secund' : 'text-first',
            )}
        >
            {icon}
            {technology}
        </span>
    );
};

export default Technology;
