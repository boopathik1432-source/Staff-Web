import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#131414",
        paper: "#f5f6f2",
        lime: "#d8f36a",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 45px rgba(19, 20, 20, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
