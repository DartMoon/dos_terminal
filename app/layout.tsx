import type { Metadata } from 'next';
import './globals.css';
import { DOSFont } from '@/app/fontsConfig';
import { WithChildren } from '@/app/types/globl';

export const metadata: Metadata = {
  title: 'DOS terminal',
  description: 'DOS terminal UI',
};

export default function RootLayout({ children }: Readonly<WithChildren>) {
  return (
    <html lang="en">
      <body className={`${DOSFont.className} antialiased`}>{children}</body>
    </html>
  );
}
