import HeroLayout from "@/src/shared/component/HeroLayout";

const mediaTabs = [
  { id: "press", label: "보도자료", sub: "Press Releases", path: "/media/releases", image: "/images/subtop/subtop_03_01.jpg" },
  { id: "social", label: "소셜미디어", sub: "Social Media", path: "/media/social", image: "/images/subtop/subtop_03_01.jpg" },
];

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return <HeroLayout tabs={mediaTabs}>{children}</HeroLayout>;
}