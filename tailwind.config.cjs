/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#2563eb",
				secondary: "#9333ea",
				par: "#1e293b",
				accent: "#67cba0",
				faded: "#6b7280",
				info: "#2563eb",
				success: "#16a34a",
				warning: "#d97706",
				error: "#dc2626",
			},
		},
	},
	plugins: [],
}
