/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#111111',
        muted: '#6B7280',
        soft: '#F9F9F9',
        accent: '#18181B',
        cream: '#F5F0E8',
      },
      gridTemplateColumns: {
        bento: 'repeat(3, 1fr)',
      },
    },
  },
  plugins: [],
};
