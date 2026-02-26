import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
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
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                    vendor: ['tailwindcss', 'clsx', 'animejs'],
                    ui: ['@tabler/icons-react'],
                },
            },
        },
    },
});
