/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lottery: {
          red: '#b91c1c',
          green: '#16a34a',
          gold: '#FFD700',
          dark: '#22223b',
        },
        background: '#f3f4f6',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        inter: ['var(--font-inter)'],
      },
      animation: {
        'flip': 'flip 0.6s ease-in-out',
        'slide-in': 'slide-in 0.5s ease-out',
        'pulse-gold': 'pulse-gold 2s infinite',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(255, 215, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
} 