/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-up-delay': 'fadeInUp 0.7s ease-out 0.2s forwards',
        'fade-in-up-delay-2': 'fadeInUp 0.7s ease-out 0.4s forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
