import type { Metadata } from 'next';
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Bae Minkyoung – Frontend Developer',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
