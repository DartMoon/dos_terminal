import type { Metadata } from 'next';

import './styles/globals.css';

import { DOSFont } from '@/app/fontsConfig';
import { WithChildren } from '@/app/types/global';

export const metadata: Metadata = {
  title: 'DOS terminal',
  description: 'DOS terminal UI',
};

export default function RootLayout({ children }: Readonly<WithChildren>) {
  return (
    <html lang="en">
      <body className={`${DOSFont.className} antialiased bg-primary-color`}>{children}</body>
    </html>
  );
}
