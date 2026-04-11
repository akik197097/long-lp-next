import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "男の価値再構築プロジェクト | AKITO",
  description:
    "テクニックではなく構造的自己変革で、40代以上の男性が本物の魅力を手に入れる。CORE・PRESENCE・INSIGHT・DEPTH・EVOLUTIONの5軸で、あなたの価値を根本から再構築する。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${cormorant.variable} ${notoSerifJP.variable}`}>
      <body>{children}</body>
    </html>
  );
}
