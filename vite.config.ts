import { VitePWA } from 'vite-plugin-pwa';
import Markdown from 'vite-plugin-md';
import { defineConfig } from 'vite';
import ViteComponents from 'vite-plugin-components';
import ViteSVG from 'vite-plugin-svg';
import voie from 'vite-plugin-voie';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [
		Markdown(),
		ViteComponents({
			extensions: ['vue', 'md'],
		}),
		VitePWA({
			manifest: {
				name: 'nuro',
				short_name: 'nuro',
				theme_color: '#ffffff',
				icons: [
					{
						src: '/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		}),
		ViteSVG(),
		voie({
			extensions: ['vue', 'md'],
		}),
		vue(),
	],
});
