/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'primary':'#F9EF23',
			  },
			  height:{
				'mxScreem':'85vh',
				'2/8':'45%',
				'97':'26rem',
			  },
		},
	},
	plugins: [animations],
}
