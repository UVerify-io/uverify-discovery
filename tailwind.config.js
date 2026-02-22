export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': [
          '0.6rem',
          {
            lineHeight: '1rem',
          },
        ],
      },
      screens: {
        'h-xs': { raw: '(max-height: 460px)' },
      },
      boxShadow: {
        center: '0 0 12px 0 rgb(0 0 0 / 0.1)',
        'white-center': '0 0 12px 0 rgb(255 255 255 / .5)',
      },
      dropShadow: {
        'center-lg': '0 0 12px white',
        center: '0 0 6px white',
        'center-sm': '0 0 3px white',
        'center-xs': '0 0 1px white',
        'center-ice': '0 0 6px rgb(var(--color-ice-600) / 0.7)',
        'center-purple': '0 0 6px rgb(var(--color-purple-600) / 0.7)',
      },
      backgroundImage: {
        // HERO: ice aurora from bottom-left + green accent from top-right
        'main-gradient': [
          'radial-gradient(ellipse 90% 70% at 10% 95%, rgb(var(--color-ice-600) / 0.38) 0%, transparent 55%)',
          'radial-gradient(ellipse 55% 50% at 88% 8%, rgb(var(--color-green-700) / 0.22) 0%, transparent 50%)',
          'linear-gradient(160deg, rgb(3 8 18), rgb(var(--color-blue-950)))',
        ].join(', '),

        // PATH CHOOSER: deep blue glow from center-top
        'path-gradient': [
          'radial-gradient(ellipse 80% 65% at 65% 18%, rgb(var(--color-blue-700) / 0.38) 0%, transparent 60%)',
          'linear-gradient(160deg, rgb(3 8 18), rgb(var(--color-blue-950)))',
        ].join(', '),

        // HOW IT WORKS: green aurora from the right
        'explanation-gradient': [
          'radial-gradient(ellipse 62% 78% at 88% 55%, rgb(var(--color-green-700) / 0.32) 0%, transparent 58%)',
          'linear-gradient(160deg, rgb(3 8 18), rgb(var(--color-green-950) / 0.5))',
        ].join(', '),

        // STATISTICS: minimal depth — very dark with a quiet blue core
        'dark-gradient': [
          'radial-gradient(ellipse 65% 50% at 50% 50%, rgb(var(--color-blue-800) / 0.22) 0%, transparent 60%)',
          'linear-gradient(160deg, rgb(2 5 12), rgb(var(--color-blue-950)))',
        ].join(', '),

        // USE CASES: cyan-teal glow from bottom-right, hint from top-left
        'ocean-gradient': [
          'radial-gradient(ellipse 72% 65% at 82% 82%, rgb(var(--color-cyan-700) / 0.38) 0%, transparent 55%)',
          'radial-gradient(ellipse 45% 38% at 12% 12%, rgb(var(--color-ice-800) / 0.2) 0%, transparent 50%)',
          'linear-gradient(160deg, rgb(3 8 18), rgb(var(--color-cyan-950) / 0.55))',
        ].join(', '),

        // FEATURES: pink aurora from top-left, ice whisper from bottom-right
        'features-gradient': [
          'radial-gradient(ellipse 65% 60% at 15% 20%, rgb(var(--color-pink-700) / 0.28) 0%, transparent 55%)',
          'radial-gradient(ellipse 45% 38% at 85% 85%, rgb(var(--color-ice-600) / 0.18) 0%, transparent 50%)',
          'linear-gradient(160deg, rgb(3 8 18), rgb(var(--color-blue-950)))',
        ].join(', '),

        // DEVELOPER: blue aurora rising from the bottom
        'developer-gradient': [
          'radial-gradient(ellipse 88% 60% at 40% 95%, rgb(var(--color-blue-600) / 0.32) 0%, transparent 55%)',
          'linear-gradient(160deg, rgb(2 5 12), rgb(var(--color-blue-950)))',
        ].join(', '),

        // ROADMAP: green glow from upper-left area
        'roadmap-gradient': [
          'radial-gradient(ellipse 75% 58% at 28% 10%, rgb(var(--color-green-500) / 0.2) 0%, transparent 55%)',
          'linear-gradient(160deg, rgb(3 8 18), rgb(var(--color-green-950) / 0.4))',
        ].join(', '),
      },
      colors: {
        pink: {
          50: 'rgb(var(--color-pink-50))',
          100: 'rgb(var(--color-pink-100))',
          200: 'rgb(var(--color-pink-200))',
          300: 'rgb(var(--color-pink-300))',
          400: 'rgb(var(--color-pink-400))',
          500: 'rgb(var(--color-pink-500))',
          600: 'rgb(var(--color-pink-600))',
          700: 'rgb(var(--color-pink-700))',
          800: 'rgb(var(--color-pink-800))',
          900: 'rgb(var(--color-pink-900))',
          950: 'rgb(var(--color-pink-950))',
        },
        blue: {
          50: 'rgb(var(--color-blue-50))',
          100: 'rgb(var(--color-blue-100))',
          200: 'rgb(var(--color-blue-200))',
          300: 'rgb(var(--color-blue-300))',
          400: 'rgb(var(--color-blue-400))',
          500: 'rgb(var(--color-blue-500))',
          600: 'rgb(var(--color-blue-600))',
          700: 'rgb(var(--color-blue-700))',
          800: 'rgb(var(--color-blue-800))',
          900: 'rgb(var(--color-blue-900))',
          950: 'rgb(var(--color-blue-950))',
        },
        red: {
          50: 'rgb(var(--color-red-50))',
          100: 'rgb(var(--color-red-100))',
          200: 'rgb(var(--color-red-200))',
          300: 'rgb(var(--color-red-300))',
          400: 'rgb(var(--color-red-400))',
          500: 'rgb(var(--color-red-500))',
          600: 'rgb(var(--color-red-600))',
          700: 'rgb(var(--color-red-700))',
          800: 'rgb(var(--color-red-800))',
          900: 'rgb(var(--color-red-900))',
          950: 'rgb(var(--color-red-950))',
        },
        yellow: {
          50: 'rgb(var(--color-yellow-50))',
          100: 'rgb(var(--color-yellow-100))',
          200: 'rgb(var(--color-yellow-200))',
          300: 'rgb(var(--color-yellow-300))',
          400: 'rgb(var(--color-yellow-400))',
          500: 'rgb(var(--color-yellow-500))',
          600: 'rgb(var(--color-yellow-600))',
          700: 'rgb(var(--color-yellow-700))',
          800: 'rgb(var(--color-yellow-800))',
          900: 'rgb(var(--color-yellow-900))',
          950: 'rgb(var(--color-yellow-950))',
        },
        purple: {
          50: 'rgb(var(--color-purple-50))',
          100: 'rgb(var(--color-purple-100))',
          200: 'rgb(var(--color-purple-200))',
          300: 'rgb(var(--color-purple-300))',
          400: 'rgb(var(--color-purple-400))',
          500: 'rgb(var(--color-purple-500))',
          600: 'rgb(var(--color-purple-600))',
          700: 'rgb(var(--color-purple-700))',
          800: 'rgb(var(--color-purple-800))',
          900: 'rgb(var(--color-purple-900))',
          950: 'rgb(var(--color-purple-950))',
        },
        ice: {
          50: 'rgb(var(--color-ice-50))',
          100: 'rgb(var(--color-ice-100))',
          200: 'rgb(var(--color-ice-200))',
          300: 'rgb(var(--color-ice-300))',
          400: 'rgb(var(--color-ice-400))',
          500: 'rgb(var(--color-ice-500))',
          600: 'rgb(var(--color-ice-600))',
          700: 'rgb(var(--color-ice-700))',
          800: 'rgb(var(--color-ice-800))',
          900: 'rgb(var(--color-ice-900))',
          950: 'rgb(var(--color-ice-950))',
        },
        green: {
          50: 'rgb(var(--color-green-50))',
          100: 'rgb(var(--color-green-100))',
          200: 'rgb(var(--color-green-200))',
          300: 'rgb(var(--color-green-300))',
          400: 'rgb(var(--color-green-400))',
          500: 'rgb(var(--color-green-500))',
          600: 'rgb(var(--color-green-600))',
          700: 'rgb(var(--color-green-700))',
          800: 'rgb(var(--color-green-800))',
          900: 'rgb(var(--color-green-900))',
          950: 'rgb(var(--color-green-950))',
        },
        cyan: {
          50: 'rgb(var(--color-cyan-50))',
          100: 'rgb(var(--color-cyan-100))',
          200: 'rgb(var(--color-cyan-200))',
          300: 'rgb(var(--color-cyan-300))',
          400: 'rgb(var(--color-cyan-400))',
          500: 'rgb(var(--color-cyan-500))',
          600: 'rgb(var(--color-cyan-600))',
          700: 'rgb(var(--color-cyan-700))',
          800: 'rgb(var(--color-cyan-800))',
          900: 'rgb(var(--color-cyan-900))',
          950: 'rgb(var(--color-cyan-950))',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /pink|blue|cyan|purple|ice|green|white|red|yellow|black/,
      variants: ['hover'],
    },
    { pattern: /^bg-opacity-/, variants: ['hover'] },
    { pattern: /^border-opacity-/, variants: ['hover'] },
  ],
};
