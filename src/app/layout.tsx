import "../styles/globals.scss";

import { CursorFlock } from "./_components/CursorFlock";

import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Bae Minkyoung – Frontend Developer",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <CursorFlock />
        {children}
      </body>
    </html>
  );
}
