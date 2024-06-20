import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'red': 'rgb(255, 0, 0)',
        'pink-650': 'rgb(224, 0, 94)',
        'pink-550': 'rgb(255, 0, 107)',
        'pink-450': 'rgb(255, 42, 131)',
        'pink-360': 'rgb(255, 182, 193)',
        'pink-370': 'rgb(255, 192, 203)',
        'pink-330': 'rgb(243, 175, 186)',
        'pink-340': 'rgb(246, 123, 145)',

      },
    },
  },
  plugins: [],
};
export default config;

