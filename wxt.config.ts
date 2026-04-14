import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    srcDir: 'src',
    manifest: {
        name: 'WXT Starter Template',
        description: 'A simple WXT starter template preconfigued with Vue, Tailwind and Shadcn-Vue'
    },
    modules: ['@wxt-dev/module-vue'],
    vite: () => ({
        plugins: [tailwindcss()]
    })
});
