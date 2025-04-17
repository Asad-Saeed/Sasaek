import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pilat: ["var(--font-pilat)", "sans-serif"], // Uses CSS variable
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#533FFF",
        "primary-light": "#5FDAF5",
        secondary: "#202020",
        "secondary-light": "#D1D5DB",
        "secondary-dark": "#111827",
      },
    },
  },
  plugins: [],
} satisfies Config;
