"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

interface Tab {
  id: string;
  label: string;
  sub: string;
  path: string;
  image: string;
}

interface HeroLayoutProps {
  tabs: Tab[];
  children: ReactNode;
}

export default function HeroLayout({ tabs, children }: HeroLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);

  // pathname과 정확히 일치하거나, /media/releases/[id] 같은 하위 경로도 처리
  const currentTab = tabs.find(tab => {
    if (pathname === tab.path) return true;
    // /media/releases/1 같은 동적 경로 처리
    if (pathname.startsWith(tab.path + '/')) return true;
    return false;
  }) || tabs[0];

    // 현재 탭인지 확인하는 함수
    const isActiveTab = (tabPath: string) => {
      if (pathname === tabPath) return true;
      if (pathname.startsWith(tabPath + '/')) return true;
      return false;
    };

  useEffect(() => {
    const handleScroll = () => {
      const tabNav = document.getElementById('tab-navigation');
      if (tabNav) {
        const rect = tabNav.getBoundingClientRect();
        setIsSticky(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <h1 className="text-4xl md:text-[60px] font-bold text-white mb-8">
            {currentTab.label}
          </h1>
          <div className="flex items-center gap-2 text-white text-sm md:text-[25px]">
            {currentTab.sub}
          </div>
        </div>
      </div>

      {/* 탭 네비게이션 - sticky 적용 + 동적 너비 */}
      <div
        id="tab-navigation"
        className="sticky top-0 z-40 w-full bg-white border-b border-gray-200"
      >
        <nav className={`w-full flex transition-all duration-100 ${isSticky ? 'max-w-full' : 'max-w-[1440px] mx-auto'
          }`}>
          {tabs.map((tab) => (
            <div key={tab.id} className="flex-1 flex items-center justify-center">
              <button
                onClick={() => router.push(tab.path)}
                className="relative py-4 text-sm md:text-[20px] font-extrabold transition-colors whitespace-nowrap cursor-pointer group"
              >
                <span className="text-black-primary">
                  {tab.label}
                </span>
                {/* 텍스트 너비에 맞춘 밑줄 */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-1.5 bg-blue-secondary transition-all duration-300 ${
                    isActiveTab(tab.path)
                      ? 'opacity-100 scale-x-100'
                      : 'opacity-0 scale-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </nav>
      </div>

      {/* 페이지 콘텐츠 */}
      <main className="w-full bg-white pt-[200px] pb-[400px]">{children}</main>
    </div>
  );
}