import type { Config } from "tailwindcss";
const { createThemes } = require("tw-colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

const BREAKPOINTS = {
	SM: {
		MIN: 0,
		MAX: 1024,
	},
	LG: {
		MIN: 1025,
		MAX: 1920,
	},
};

const defaultColors = {
	error: {
		light: "#e57373",
		DEFAULT: "#f44336",
		dark: "#d32f2f",
	},
	warning: {
		light: "#ffb74d",
		DEFAULT: "#ffa726",
		dark: "#f57c00",
	},
	info: {
		light: "#4fc3f7",
		DEFAULT: "#29b6f6",
		dark: "#0288d1",
	},
	success: {
		light: "#81c784",
		DEFAULT: "#66bb6a",
		dark: "#388e3c",
	},
	secondary: {
		extralight: "#f9fafb", // 50
		light: "#f4f4f5", // 100
		DEFAULT: "#71717a", // 500
		dark: "#27272a", // 800
		extradark: "#09090b", // 950
	},
};

const primaryColors = {
	primary: {
		light: "#bfdbfe",
		DEFAULT: "#3b82f6",
		dark: "#1e3a8a",
	},
};

const config: Config = {
	darkMode: "class",
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/providers/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: { max: `${BREAKPOINTS.SM.MAX}px` },
			lg: `${BREAKPOINTS.LG.MIN}px`,
		},
		container: {
			screens: {
				sm: { max: `${BREAKPOINTS.SM.MAX}px` },
				lg: `${BREAKPOINTS.LG.MIN}px`,
			},
		},
		fontFamily: {
			sans: ["Inter", ...fontFamily.sans],
		},
		fontWeight: {
			light: "200",
			normal: "400",
			medium: "500",
			bold: "700",
		},
		extends: {
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		createThemes({
			light: {
				black: "#000000",
				white: "#FFFFFF",
				gray: "#666",
				divider: "#d1d5db",
				...primaryColors,
				...defaultColors,
			},
			dark: {
				black: "#000000",
				white: "#FFFFFF",
				gray: "#888",
				divider: "#27272a",
				...primaryColors,
				...defaultColors,
			},
		}),
		require("tailwindcss-animate"),
	],
};
export default config;
