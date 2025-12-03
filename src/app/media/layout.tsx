import HeroLayout from "@/src/shared/component/HeroLayout";

const mediaTabs = [
  { id: "news", label: "뉴스", sub: "News", path: "/media/news", image: "/images/media/subtop_03.jpg" },
  { id: "press", label: "보도자료", sub: "Press Release", path: "/media/press", image: "/images/media/subtop_03.jpg" },
  { id: "gallery", label: "갤러리", sub: "Gallery", path: "/media/gallery", image: "/images/media/subtop_03.jpg" },
];

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return <HeroLayout tabs={mediaTabs}>{children}</HeroLayout>;
}