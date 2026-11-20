/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#080A0D',
          950: '#050709',
          900: '#080A0D',
          850: '#0D1015',
          800: '#111419',
          700: '#1A1E26',
          600: '#252B36',
        },
        mutedText: '#A7A7A7',
        accentBlue: {
          DEFAULT: '#2788B8',
          hover: '#3399CC',
          dim: 'rgba(39, 136, 184, 0.2)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
};
