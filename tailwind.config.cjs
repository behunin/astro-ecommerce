/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				back: "#eee",
				primary: "#2563eb",
				secondary: "#9333ea",
				par: "#1e293b",
				accent: "#67cba0",
				fade: "#6b7280",
				faded: "#d6d3d1",
				info: "#eab308",
				success: "#16a34a",
				warning: "#d97706",
				error: "#dc2626",
			},
		},
	},
	plugins: [],
}
