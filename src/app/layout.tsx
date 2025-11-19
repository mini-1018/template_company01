import type { Metadata } from "next";
import "@/app/globals.css";
import Nav from "../shared/component/Nav";

export const metadata: Metadata = {
  title: "",
  description: "",
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
      </body>
    </html>
  );
}
