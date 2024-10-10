import localFont from 'next/font/local';

export const DOSFont = localFont({
  src: './fonts/ModernDOS8x16.woff2',
  fallback: ['Courier New'],
  display: 'swap',
  variable: '--font-dos-mono',
});
