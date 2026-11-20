/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#07070A',
          900: '#0E0F14',
          850: '#13141D',
          800: '#181A26',
          700: '#222536',
          600: '#2F344B',
        },
        gold: {
          DEFAULT: '#D4A843',
          light: '#ECC66F',
          dark: '#B0882C',
          glow: 'rgba(212, 168, 67, 0.25)',
        },
        cinema: {
          cyan: '#38BDF8',
          red: '#E11D48',
          purple: '#818CF8',
        },
        cream: '#F5F3EE',
        slateText: '#94A3B8',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(212, 168, 67, 0.2)',
        'glow-card': '0 10px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 168, 67, 0.05)',
        'glow-subtle': '0 0 25px rgba(56, 189, 248, 0.15)',
      },
    },
  },
  plugins: [],
};

