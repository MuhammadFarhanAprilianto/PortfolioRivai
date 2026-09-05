/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        questrial: ['Questrial', 'sans-serif'],
        agrandir: ['Agrandir', 'Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        darkBg: '#000000',
        darkCard: '#1F1E25',
        darkCardHover: '#26252e',
        labs: {
          lime: '#a6f30d',
          accent: '#d4f938',
          dark: '#1F1E25',
          card: '#1F1E25',
        }
      },
      animation: {
        'marquee-left': 'marquee-left 40s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
