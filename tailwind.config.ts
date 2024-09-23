import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: "1.5rem",
        padding: {
          DEFAULT: "1.5rem", // default padding for mobile
          sm: "2rem", // padding for small screens (sm)
          lg: "5rem", // larger padding for large screens (lg)
          xl: "6rem", // even larger padding for extra-large screens (xl)
        },
      },
      transitionDuration: {
        300: '300ms', // Add custom transition duration
      }
    },
  },
  plugins: [],
};
export default config;
