"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const tabs = [
  { id: "outline", label: "개요", sub: "About Us",path: "/intro/outline", image: "/images/intro/subtop_01.jpg"},
  { id: "business", label: "사업분야", sub: "Business Areas", path: "/intro/business", image: "/images/intro/subtop_01.jpg" },
  { id: "history", label: "연혁", sub: "About Us", path: "/intro/history", image: "/images/intro/subtop_01.jpg" },
  { id: "license", label: "인허가", sub: "About Us", path: "/intro/license", image: "/images/intro/subtop_01.jpg" },
  { id: "directions", label: "오시는길",sub: "About Us", path: "/intro/direction", image: "/images/intro/subtop_01.jpg" },
];

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const currentTab = tabs.find(tab => pathname === tab.path) || tabs[0];

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={currentTab.image}
          alt={currentTab.label}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-[80px] font-bold text-white mb-8">
            {tabs.find(tab => pathname === tab.path)?.label}
          </h1>
          <div className="flex items-center gap-2 text-white text-sm md:text-[30px]">
          {tabs.find(tab => pathname === tab.path)?.sub}
          </div>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto">
          <nav className="w-full flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => router.push(tab.path)}
                className={`flex-1 px-4 py-4 text-sm md:text-base font-extrabold transition-colors whitespace-nowrap cursor-pointer ${
                  pathname === tab.path
                    ? "text-blue-primary border-b-4 border-blue-primary font-bold"
                    : "text-gray-600 hover:text-black-primary hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* 페이지 콘텐츠 */}
      <main>{children}</main>
    </div>
  );
}