import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ハクリペア｜困ったを「良かった」に - 修繕工事専門",
  description: "茨城県石岡市の修繕工事専門会社。個人様から企業様まで、お庭・外構工事から建物・設備工事まで幅広く対応。悪徳リフォーム業者撲退宣言企業。",
  keywords: "修繕工事,リフォーム,外構工事,建物工事,茨城県,石岡市,ハクリペア",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
} 