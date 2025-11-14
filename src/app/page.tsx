"use client";

import { useState, useEffect, useRef } from "react";
import Nav from "@/shared/component/Nav";
import Section1 from "@/app/section1";
import Section2 from "@/app/section2";
import Section3 from "@/app/section3";
import Section4 from "@/app/section4";
import Section5 from "@/app/section5";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["home", "company", "business area", "product", "community"];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop + window.innerHeight / 2;
      
      sections.forEach((_, index) => {
        const section = document.getElementById(`section-${index}`);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 네비게이션 */}
      <Nav />

      <div 
        ref={containerRef}
        className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          scrollSnapType: "y mandatory",
        }}
      >
        {/* 가이드바 - hover 시 나타남 */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group">
          {/* 화살표 아이콘 - 왼쪽으로 통통 튀기 */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 animate-bounce-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-white/60 group-hover:text-white transition-colors"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          {/* 가이드바 네비게이션 */}
          <nav className="pr-12 opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex flex-col items-end bg-black/20 backdrop-blur-sm rounded-l-2xl py-4 px-6">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className="flex justify-end gap-3 group/item relative py-1"
                aria-label={section}
              >
                <span className={`text-sm uppercase transition-all duration-300 leading-none whitespace-nowrap ${
                  activeSection === index
                    ? "text-white font-semibold opacity-100"
                    : "text-white/40 opacity-70 group-hover/item:opacity-100"
                }`}>
                  {section}
                </span>
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === index
                      ? "bg-white scale-125"
                      : "bg-white/40 group-hover/item:bg-white/60"
                  }`} />
                  {index < sections.length - 1 && (
                    <div className="w-px h-8 bg-white/20" />
                  )}
                </div>
              </button>
            ))}
          </nav>
        </div>

        {/* 섹션들 */}
        <section id="section-0" className="snap-start h-screen">
          <Section1 />
        </section>
        <section id="section-1" className="snap-start h-screen">
          <Section2 />
        </section>
        <section id="section-2" className="snap-start h-screen">
          <Section3 />
        </section>
        <section id="section-3" className="snap-start h-screen">
          <Section4 />
        </section>
        <section id="section-4" className="snap-start h-screen">
          <Section5 />
        </section>
      </div>

      {/* 커스텀 애니메이션 추가 */}
      <style jsx global>{`
        @keyframes bounce-left {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10px);
          }
        }

        .animate-bounce-left {
          animation: bounce-left 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}