/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	
	theme: {
		extend: {
			margin:{
				'8%':'8%',
				'6%':'6%'
			},
			fontSize:{

			}
		},
	},
	important: true,
	plugins: [],
}
