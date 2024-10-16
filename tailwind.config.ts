import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-roboto-mono)'],
      },
      fontSize: {
        '32': '32px',
      },
      colors: {
        'accent-color': 'var(--color-accent)',
        'accent-dark-color': 'var(--color-accent-dark)',
        'accent-secondary-color': 'var(--color-accent-secondary)',
        'primary-color': 'var(--color-primary)',
        'dark-color': 'var(--color-dark)',
        'white-color': 'var(--color-white)',
        'gray-color': 'var(--color-gray)',
      },
      borderWidth: {
        4: '4px',
      },
    },
  },
  plugins: [],
};
export default config;
