import { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { DOSFont } from '@/app/fontsConfig';

export const metadata: Metadata = {
  title: 'DOS terminal',
  description: 'DOS terminal UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DOSFont.className} antialiased`}>{children}</body>
    </html>
  );
}
