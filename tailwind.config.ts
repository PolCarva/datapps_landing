import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#1C1C1C",
          hover: "#2C2C2C",
        },
        white: {
          DEFAULT: "#FFFFFF",
          secondary: "#F9F9F9",
          tertiary: "#E4E4E4",
        },
        
      },
    },
  },
  plugins: [],
};
export default config;
