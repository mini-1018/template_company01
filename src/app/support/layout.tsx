import HeroLayout from "@/src/shared/component/HeroLayout";

const supportTabs = [
  { id: "faq", label: "FAQ", sub: "Frequently Asked Questions", path: "/support/faq", image: "/images/support/subtop_04.jpg" },
  { id: "inquiry", label: "문의하기", sub: "Inquiry", path: "/support/inquiry", image: "/images/support/subtop_04.jpg" },
  { id: "download", label: "자료실", sub: "Download", path: "/support/download", image: "/images/support/subtop_04.jpg" },
];

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <HeroLayout tabs={supportTabs}>{children}</HeroLayout>;
}