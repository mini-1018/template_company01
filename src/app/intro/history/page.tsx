"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { historyData } from "./historyData";

export default function History() {
  const [activeYear, setActiveYear] = useState("2025");
  const yearRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Intersection Observer로 스크롤 위치에 따른 연도 추적
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const year = entry.target.getAttribute("data-year");
          if (year) {
            setActiveYear(year);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(yearRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const currentImage = historyData.find(item => item.year === activeYear)?.image || historyData[0].image;
  const currentDescription = historyData.find(item => item.year === activeYear)?.description || historyData[0].description;

  return (
    <div className="w-full bg-white py-[200px]">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        {/* 메인 콘텐츠 */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* 왼쪽: 이미지 영역 (sticky) */}
          <div className="w-full lg:w-[800px] lg:flex-shrink-0 sticky top-32 h-fit">
            <div className="relative w-full aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeYear}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative top-10 w-full h-full"
                >
                <div className="relative w-full h-full">
                  <Image
                    src={currentImage}
                    alt={`${activeYear}년 주요 활동`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,black_100%)] pointer-events-none" />
                </div>
      
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.p
                      key={`description-${activeYear}`}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="text-lg md:text-xl font-medium text-white"
                    >
                      {currentDescription}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 오른쪽: 연혁 타임라인 (일반 스크롤) */}
          <div className="w-full lg:flex-1 space-y-16 pb-[300px]">
            {historyData.map((yearData, yearIndex) => (
              <div 
                key={yearData.year} 
                ref={(el) => {yearRefs.current[yearData.year] = el}}
                data-year={yearData.year}
                className="relative"
              >
                {/* 연도 헤더 */}
                <motion.div 
                  className={`pb-4 transition-all duration-300 ${
                    activeYear === yearData.year ? "text-blue-primary" : "text-gray-400"
                  }`}
                >
                  <h3 className="text-3xl md:text-4xl font-bold">
                    {yearData.year}
                  </h3>
                </motion.div>

                {/* 타임라인 선 */}
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200" />

                {/* 연혁 항목들 */}
                <div className="space-y-6 ml-14">
                  {yearData.items.map((item, itemIndex) => (
                    <motion.div 
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: itemIndex * 0.1, duration: 0.3 }}
                      className="relative pb-6 group"
                    >
                      {/* 타임라인 점 */}
                      <motion.div
                        className={`absolute -left-[37px] top-2 w-3 h-3 rounded-full transition-colors duration-300 ${
                          activeYear === yearData.year ? "bg-blue-secondary" : "bg-gray-300"
                        }`}
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1, duration: 0.3 }}
                      />
                      
                      {/* 월 */}
                      <div className="text-sm font-bold text-blue-secondary mb-2">
                        {item.month}월
                      </div>
                      
                      {/* 내용 */}
                      <div className="text-base md:text-lg text-black-primary whitespace-pre-line">
                        {item.content}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 마지막 항목이 아닐 경우 여백 추가 */}
                {yearIndex < historyData.length - 1 && (
                  <div className="h-32" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}