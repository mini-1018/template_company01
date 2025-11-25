"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function History() {
  const [activeYear, setActiveYear] = useState("1995");
  const historyRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const historyData = [
    {
      year: "1995",
      items: [
        { month: "03", content: "지테크인터내셔날 설립" },
        { month: "10", content: "국내 최초 196t비트 Load Cell Data 수집기 개발" },
      ],
      image: "/images/intro/history/1995.jpg",
      description: "1995년 이미지 설명",
    },
    {
      year: "2000",
      items: [
        { month: "03", content: "주식회사 지테크인터내셔날로 법인 전환" },
        { month: "09", content: "공장 현장 신뢰 수주 업계해외향 10년 기업 선정" },
        { month: "10", content: "산업 제품 비어드 측정기(GL-1504시리즈) 개발" },
      ],
      image: "/images/intro/history/2000.jpg",
      description: "2000년 이미지 설명",
    },
    {
      year: "2002",
      items: [
        { month: "09", content: "본사 공장 2층 증축 (연면 759m²)" },
      ],
      image: "/images/intro/history/2002.jpg",
      description: "2002년 이미지 설명",
    },
    {
      year: "2003",
      items: [
        { month: "08", content: "기업 부설 연구소 인증" },
      ],
      image: "/images/intro/history/2003.jpg",
      description: "2003년 이미지 설명",
    },
    {
      year: "2004",
      items: [
        { month: "10", content: "한국산업기술진흥원 등록" },
        { month: "11", content: "IOS9001 인증" },
      ],
      image: "/images/intro/history/2004.jpg",
      description: "2004년 이미지 설명",
    },
    {
      year: "2005",
      items: [
        { month: "04", content: "과학기술부 장관 표창" },
        { month: "06", content: "벤처기업 확정 (중소기업청), 유망기술기업인증 (기술신용보증기금)" },
        { month: "07", content: "이노비즈 인증 (중소기업청)" },
        { month: "09", content: "유망중소기업 인증 (경기도청)" },
        { month: "12", content: "경기중소기업 대상 수상 (경기도청)" },
      ],
      image: "/images/intro/history/2005.jpg",
      description: "2005년 이미지 설명",
    },
    {
      year: "2006",
      items: [
        { month: "04", content: "과학기술부 장관 표창" },
        { month: "07", content: "한국기 특허 등록" },
      ],
      image: "/images/intro/history/2006.jpg",
      description: "2006년 이미지 설명",
    },
    {
      year: "2007",
      items: [
        { month: "08", content: "디지털 센드 블 개발" },
        { month: "12", content: "체지방 측정기 및 산업용 인디케이터 CE 획득" },
      ],
      image: "/images/intro/history/2007.jpg",
      description: "2007년 이미지 설명",
    },
    {
      year: "2008",
      items: [
        { month: "03", content: "2008 KIMES (의료기기 전시회) 참가" },
        { month: "04", content: "본사 공장 3층 증축 (연면 200m²)" },
      ],
      image: "/images/intro/history/2008.jpg",
      description: "2008년 이미지 설명",
    },
    {
      year: "2009",
      items: [
        { month: "03", content: "체지방 측정기 개발" },
      ],
      image: "/images/intro/history/2009.jpg",
      description: "2009년 이미지 설명",
    },
  ];

  // Intersection Observer로 정확한 연도 추적 + 스크롤 끝 감지
  useEffect(() => {
    const observerOptions = {
      root: historyRef.current,
      rootMargin: "-50% 0px -50% 0px", // 화면 중앙에 올 때 활성화
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

    // 모든 연도 요소 관찰
    Object.values(yearRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // 스크롤 이벤트로 맨 끝 감지
    const handleScroll = () => {
      const container = historyRef.current;
      if (!container) return;
      
      const isAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 50;
      if (isAtBottom) {
        setActiveYear(historyData[historyData.length - 1].year);
      }
    };

    const container = historyRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      observer.disconnect();
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const currentImage = historyData.find(item => item.year === activeYear)?.image || historyData[0].image;
  const currentDescription = historyData.find(item => item.year === activeYear)?.description || historyData[0].description;

  return (
    <div className="w-full bg-white py-[200px]">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        {/* 메인 콘텐츠 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* 왼쪽: 이미지 영역 */}
          <div className="relative w-full h-[500px] lg:h-[700px] overflow-hidden sticky top-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentImage}
                  alt={`${activeYear}년 주요 활동`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.p
                    key={`description-${activeYear}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="text-lg md:text-xl font-medium text-blue-primary"
                  >
                    {currentDescription}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 오른쪽: 연혁 타임라인 */}
          <div 
            ref={historyRef}
            className="overflow-y-auto max-h-[700px] pr-4 scrollbar-thin scrollbar-thumb-blue-primary scrollbar-track-gray-200"
          >
            <div className="space-y-16">
              {historyData.map((yearData, yearIndex) => (
                <div 
                  key={yearData.year} 
                  ref={(el) => {yearRefs.current[yearData.year] = el}}
                  data-year={yearData.year}
                  className="relative min-h-[300px]"
                >
                  {/* 연도 헤더 */}
                  <motion.div 
                    className={`sticky top-0 bg-white z-10 pb-4 transition-all duration-300 ${
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
                          className="absolute -left-[37px] top-2 right-0.5 w-3 h-3 rounded-full bg-blue-primary border-4 border-white shadow-md"
                          whileInView={{ scale: [0, 1.2, 1] }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.1, duration: 0.3 }}
                        />
                        
                        {/* 월 */}
                        <div className="text-sm font-bold text-blue-secondary mb-2">
                          {item.month}월
                        </div>
                        
                        {/* 내용 */}
                        <div className="text-base md:text-lg text-gray-700">
                          {item.content}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* 마지막 항목이 아닐 경우 여백 추가 */}
                  {yearIndex < historyData.length - 1 && (
                    <div className="h-32" />
                  )}
                  
                  {/* 마지막 항목에는 넉넉한 여백 추가 */}
                  {yearIndex === historyData.length - 1 && (
                    <div className="h-[500px]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}