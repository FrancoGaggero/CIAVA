// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://ciavastudio.com',
	integrations: [tailwind(), sitemap()],
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto',
	},
	image: {
		domains: [],
		remotePatterns: [],
	},
	vite: {
		build: {
			cssMinify: true,
			rollupOptions: {
				output: {
					manualChunks: {
						anime: ['animejs'],
					},
				},
			},
		},
	},
});
