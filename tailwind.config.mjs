/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#181a1b",
        secondary: "#f4f5f6",
        accent: "#54ea54",
      },
      dropShadow: {
        md: "0 3px 6px rgb(0 0 0 / 0.07)"
      }
    },
  },
  plugins: [],
};
