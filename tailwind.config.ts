import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './blueprint/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fdfcfa',
          100: '#f8f5f0',
          200: '#efe9df',
          300: '#e2d9cb',
        },
        bark: {
          400: '#a68a64',
          500: '#8b6f47',
          600: '#6b5535',
          700: '#4a3a24',
          800: '#3a2d1c',
          900: '#2c2217',
        },
        meadow: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          400: '#4ade80',
          500: '#22c55e',
          600: '#10b981',
          700: '#059669',
          800: '#064e3b',
          900: '#022c22',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
export default config;
