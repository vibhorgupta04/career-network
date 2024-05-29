import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-green': 'linear-gradient(180deg, #fff 0%, #D4FFF2 96.87%)',
      },
      colors: {
        'blue-1': '#275DF5',
        'gray-1': '#474D6A',
        'gray-2': '#717B9E',
        'gray-3': '#F8F9FA',
        'gray-4': '#121224',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 25px 60px rgba(113, 106, 147, .2)',
        '1': '0 6px 12px rgba(30, 10, 58, .04)',
      },
    },
  },
  plugins: [],
};
export default config;
