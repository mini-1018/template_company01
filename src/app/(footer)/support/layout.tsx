import HeroLayout from "@/src/shared/component/HeroLayout";

const supportTabs = [
  { id: "downloads", label: "다운로드", sub: "Downloads", path: "/support/downloads", image: "/images/support/subtop_04_01.jpg" },
  { id: "contact", label: "고객문의", sub: "contact", path: "/support/contact", image: "/images/support/subtop_04_01.jpg" },
];

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <HeroLayout tabs={supportTabs}>{children}</HeroLayout>;
}