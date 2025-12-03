import type { Metadata } from "next";
import "@/app/globals.css";
import Nav from "../shared/component/Nav";
import Footer from "../shared/component/Footer";

export const metadata: Metadata = {
  title: "G-TECH International | 지테크인터내셔날",
  description: "좋은 사람들이 모여 사용하기 쉬운 제품을 만드는 즐거운 회사, 지테크인터내셔날입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        {/* 네비게이션 */}
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
