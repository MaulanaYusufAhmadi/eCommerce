/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '414px',
      // => @media (min-width: 640px) { ... }

      'tablet': '768px',
      // => @media (min-width: 1024px) { ... }
      
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1920px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      primary_1: '#07484A',
      primary_2: '#70908B',
      secondary_1: '#CAF3E5',
      secondary_2: '#E0EFF6',
      secondary_3: '#EEEBFF',
      secondary_4: '#FFF4E7',
      secondary_5: '#FDFBF8',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      title: ['Playfair Display', 'serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

