import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'indie-flower': ['Indie Flower', 'sans-serif'],
      },
      borderRadius: {
        'circle': '50%',
        'square': '0',
        'diamond': '10% 50%',
      },
      backgroundColor: {
        'semi-transparent': 'rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        'mobile-image': "url('../public/Inner-fit bg mobile.jpeg')",
      },
    },
  },
  plugins: [],
};
export default config;
