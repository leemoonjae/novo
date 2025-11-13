import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVO - 빛으로 남는 기록",
  description: "NOVO는 당신의 이야기가 빛이 되어 남겨지는 기록입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
