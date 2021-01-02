import { VitePWA } from 'vite-plugin-pwa';
import type { UserConfig } from 'vite';
import ViteComponents from 'vite-plugin-components';
import ViteSVG from 'vite-plugin-svg';
import voie from 'vite-plugin-voie';
import Markdown from 'vite-plugin-md';

const manifest = {
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
};

export default <UserConfig> {
	plugins: [
		Markdown(),
		ViteComponents({
			extensions: ['vue', 'md'],
	  		customLoaderMatcher: ({ path }) => path.endsWith('.md'),
		}),
		VitePWA({
			manifest,
		}),
		ViteSVG(),
		voie({
			extensions: ['vue', 'md'],
		}),
	],
}
