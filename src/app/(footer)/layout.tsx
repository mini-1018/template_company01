import Footer from "@/src/shared/component/Footer";

export default function FooterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
        <Footer />
    </>
  );
}
