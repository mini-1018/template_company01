import HeroImageWithTabs from "@/src/shared/component/HeroImageWithTabs";

const productTabs = [
  { id: "environmental", label: "친환경", sub: "Environmental Systems", path: "/product/environmental", image: "/images/subtop/subtop_02_01.jpg" },
  { id: "healthcare", label: "헬스케어", sub: "Healthcare Products", path: "/product/healthcare", image: "/images/subtop/subtop_02_02.jpg" },
  { id: "smartfarm", label: "농축산", sub: "Smart Farm Systems", path: "/product/smartfarm", image: "/images/subtop/subtop_02_03.jpg" },
  { id: "industrial", label: "산업용", sub: "Industrial Systems", path: "/product/industrial", image: "/images/subtop/subtop_02_04.jpg" },
];

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <HeroImageWithTabs tabs={productTabs}>{children}</HeroImageWithTabs>;
}