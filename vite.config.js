import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
    plugins: [
        laravel({
            input: ['client/src/style.css', 'client/src/main.js'],
            refresh: true,
        }),
        vue({
            template: { transformAssetUrls }
        }),
        quasar({
        })
    ],
});
