import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import babel from '@rolldown/plugin-babel';
import { defineConfig } from 'vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), babel({ presets: [reactCompilerPreset()] })],
    server: {
        port: 3000,
        open: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(process.cwd(), './src'),
        },
    },
    build: {
        rolldownOptions: {
            output: {
                codeSplitting: {
                    groups: [
                        {
                            test: /node_modules\/(react|react-dom|react-helmet-async|react-router-dom|animejs)/,
                            name: 'vendor',
                        },
                        {
                            test: /node_modules\/@tabler\/icons-react/,
                            name: 'ui',
                        },
                    ],
                },
            },
        },
    },
});
