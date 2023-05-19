/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        // primary: '#050816',
        // secondary: '#aaa6c3',
        // tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        one: '#1d2786',
        two: '#2633b0',
        three: '#141b5c',
        four: '#ffb3c2',
        five: '#ffe6eb',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        // 'hero-pattern': "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
