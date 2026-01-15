/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
