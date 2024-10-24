import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        lightBackground: "var(--foreground)",
        lightText: "var(--background)",
        darkBackground: "var(--background)",
        darkText: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
