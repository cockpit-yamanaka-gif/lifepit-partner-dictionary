import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LifePit Partner Dictionary",
  description:
    "保険募集人様がLifePitのサービス理解と活用方法をキーワードから探せる辞典サイトです。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
