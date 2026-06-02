/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pit: {
          black: '#030604',
          panel: '#08110d',
          line: '#143226',
          neon: '#39ff88',
          mint: '#9fffc4',
          cyan: '#54e6ff',
          ink: '#dceee4',
        },
      },
      boxShadow: {
        glow: '0 0 28px rgba(57, 255, 136, 0.22)',
        panel: '0 18px 70px rgba(0, 0, 0, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.9' },
        },
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        scan: 'scan 5s linear infinite',
        pulseLine: 'pulseLine 3s ease-in-out infinite',
        floatSoft: 'floatSoft 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
