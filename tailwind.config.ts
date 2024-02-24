import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        spacemono: "'Space Mono', monospace",
        ptsans: "'PT sans', sans-serif",
        ptsansnarrow: "'PT Sans Narrow', sans-serif",
      },
      backgroundImage: theme => ({
        'gradient-1': 'linear-gradient(to right, #253442, #959a9c)',
        'gradient-2': 'linear-gradient(to right, #734b6d, #42275a)',
        'gradient-3': 'linear-gradient(to right, #89253e, #3a6186)',
      }),
    },
  },
  plugins: []
};
export default config;
