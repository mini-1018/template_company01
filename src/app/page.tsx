"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Section1 from "@/app/section1";
import Section2 from "@/app/section2";
import Section3 from "@/app/section3";
import Section4 from "@/app/section4";
import Section5 from "@/app/section5";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const sections = ["home", "company", "business area", "product", "support"];
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTimeRef = useRef(0);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  // 클라이언트에서만 viewport height 설정
  useEffect(() => {
    setViewportHeight(window.innerHeight);
    setIsMounted(true);
    
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (index: number) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    setActiveSection(index);
    
    setTimeout(() => setIsScrolling(false), 1000);
  };

  // 스크롤 이벤트 처리
  useEffect(() => {
    if (!isMounted) return;
    
    const container = containerRef.current;
    if (!container) return;

    const scrollCooldown = 1000;
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTimeRef.current < scrollCooldown) return;
      
      if (isScrolling) return;

      if (e.deltaY > 30 && activeSection < sections.length - 1) {
        lastScrollTimeRef.current = now;
        scrollToSection(activeSection + 1);
      } else if (e.deltaY < -30 && activeSection > 0) {
        lastScrollTimeRef.current = now;
        scrollToSection(activeSection - 1);
      }
    };

    // 터치 이벤트 처리
    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndRef.current = e.changedTouches[0].clientY;
      
      const now = Date.now();
      if (now - lastScrollTimeRef.current < scrollCooldown) return;
      
      if (isScrolling) return;

      const diff = touchStartRef.current - touchEndRef.current;
      const minSwipeDistance = 50;

      if (Math.abs(diff) > minSwipeDistance) {
        if (diff > 0 && activeSection < sections.length - 1) {
          // 위로 스와이프 (아래 섹션으로)
          lastScrollTimeRef.current = now;
          scrollToSection(activeSection + 1);
        } else if (diff < 0 && activeSection > 0) {
          // 아래로 스와이프 (위 섹션으로)
          lastScrollTimeRef.current = now;
          scrollToSection(activeSection - 1);
        }
      }
    };

    // 키보드 지원
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      const now = Date.now();
      if (now - lastScrollTimeRef.current < scrollCooldown) return;
      
      if ((e.key === "ArrowDown" || e.key === "PageDown") && activeSection < sections.length - 1) {
        e.preventDefault();
        lastScrollTimeRef.current = now;
        scrollToSection(activeSection + 1);
      } else if ((e.key === "ArrowUp" || e.key === "PageUp") && activeSection > 0) {
        e.preventDefault();
        lastScrollTimeRef.current = now;
        scrollToSection(activeSection - 1);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMounted, activeSection, isScrolling, sections.length]);

  // 초기 로딩 중
  if (!isMounted || viewportHeight === 0) {
    return <div className="h-screen bg-black" />;
  }

  return (
    <>
      <div 
        ref={containerRef}
        className="h-screen overflow-hidden bg-black touch-none"
      >
        {/* 가이드바 */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden sm:block">
          <nav className="flex flex-col items-end">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className="flex justify-end gap-3 group relative py-1"
                aria-label={section}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === index
                      ? "bg-white scale-125"
                      : "bg-white/40 group-hover:bg-white/60"
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
        <motion.div
          animate={{ y: -activeSection * viewportHeight }}
          transition={{ 
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="will-change-transform"
        >
          <section className="h-screen">
            <Section1 />
          </section>
          <section className="h-screen">
            <Section2 />
          </section>
          <section className="h-screen">
            <Section3 />
          </section>
          <section className="h-screen">
            <Section4 />
          </section>
          <section className="h-screen">
            <Section5 />
          </section>
        </motion.div>
      </div>
    </>
  );
}