import { defineConfig } from 'vite';
import { VitePWA as PWA } from 'vite-plugin-pwa';
import Components from 'vite-plugin-components';
import Icons, { ViteIconsResolver } from 'vite-plugin-icons';
import Markdown from 'vite-plugin-md';
import Pages from 'vite-plugin-pages';
import SVG from 'vite-plugin-svg';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

const extensions: Array<string> = ['vue', 'js', 'ts', 'md'];

export default defineConfig({
	plugins: [
		Components({
			extensions,
			customLoaderMatcher: (id) => id.endsWith('.md'),
			customComponentResolvers: [
				ViteIconsResolver({
					componentPrefix: '',
					enabledCollections: ['feather'],
				}),
			],
		}),
		Icons(),
		Markdown(),
		Pages({ extensions }),
		PWA({
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
		SVG(),
		Vue({
			include: [/\.vue$/, /\.md$/],
		}),
		...WindiCSS({
			windicssOptions: {
				darkMode: 'class',
				plugins: [require('windicss/plugin/aspect-ratio')],
			},
		}),
	],
});
