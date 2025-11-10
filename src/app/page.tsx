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
  const sections = ["home", "company", "business", "product", "contact"];
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
        {/* 가이드바 */}
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className="flex items-center gap-3 group"
              aria-label={section}
            >
              <span className={`text-sm transition-all duration-300 ${
                activeSection === index
                  ? "text-foreground font-semibold"
                  : "text-foreground/50 group-hover:text-foreground/70"
              }`}>
                {section}
              </span>
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? "bg-foreground scale-150"
                  : "bg-foreground/30 group-hover:bg-foreground/50"
              }`} />
            </button>
          ))}
        </nav>

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
    </>
  );
}