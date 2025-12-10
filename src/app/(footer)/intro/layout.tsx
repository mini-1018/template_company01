import HeroLayout from "@/src/shared/component/HeroLayout";

const introTabs = [
  { id: "about", label: "개요", sub: "About Us", path: "/intro/about", image: "/images/subtop/subtop_01_01.jpg" },
  { id: "business", label: "사업분야", sub: "Business Areas", path: "/intro/business", image: "/images/subtop/subtop_01_01.jpg" },
  { id: "history", label: "연혁", sub: "History", path: "/intro/history", image: "/images/subtop/subtop_01_01.jpg" },
  { id: "certifications", label: "인증현황", sub: "Certifications", path: "/intro/certifications", image: "/images/subtop/subtop_01_01.jpg" },
  { id: "performance", label: "납품실적", sub: "Performance", path: "/intro/performance", image: "/images/subtop/subtop_01_01.jpg" },
  { id: "directions", label: "위치안내", sub: "Location", path: "/intro/location", image: "/images/subtop/subtop_01_01.jpg" },
];

export default function IntroLayout({ children }: { children: React.ReactNode }) {
  return <HeroLayout tabs={introTabs}>{children}</HeroLayout>;
}