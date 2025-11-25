"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Business() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const businessData = [
    {
      title: "전환경 솔루션",
      image: "/images/intro/business/business_areas_01.jpg",
      description: "친환경 에너지 관리 시스템으로 지속 가능한 미래를 만들어갑니다.",
      details: [
        "IoT 기반 스마트 에너지 관리",
        "실시간 전력 모니터링",
        "에너지 효율 최적화 솔루션",
        "탄소 배출량 감축 시스템",
      ],
    },
    {
      title: "헬스케어 제품",
      image: "/images/intro/business/business_areas_02.jpg",
      description: "정밀한 측정 기술로 건강한 삶을 지원합니다.",
      details: [
        "체성분 분석기",
        "의료용 정밀 저울",
        "건강 관리 플랫폼",
        "병원용 측정 장비",
      ],
    },
    {
      title: "농축산 시스템",
      image: "/images/intro/business/business_areas_03.jpg",
      description: "스마트 농축산 기술로 생산성을 향상시킵니다.",
      details: [
        "축사 환경 모니터링",
        "사료 자동 급이 시스템",
        "가축 체중 측정 시스템",
        "농축산 데이터 분석 플랫폼",
      ],
    },
    {
      title: "산업용 시스템",
      image: "/images/intro/business/business_areas_04.jpg",
      description: "산업 현장의 정확한 계량 솔루션을 제공합니다.",
      details: [
        "산업용 정밀 저울",
        "물류 자동화 시스템",
        "중량 선별 장비",
        "생산 라인 통합 솔루션",
      ],
    },
  ];

  return (
    <div className="w-full bg-white py-[200px]">
      <div className="w-full max-w-[1426px] mx-auto px-8 md:px-10 lg:px-12">
        {/* 헤더 */}
        <div className="text-center mb-16 md:mb-40">
          <h1 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-black-primary mb-6">
          융복합 측정기술 전문기업 지테크인터내셔날은 <br/> 4대 사업군을 기반으로 지속 가능한 미래 가치를 만들어 갑니다.
          </h1>
        </div>

        {/* 사업 카드 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] justify-items-center">
          {businessData.map((business, index) => (
            <motion.div
              key={index}
              className="relative w-full lg:w-[640px] h-[460px] overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              transition={{ duration: 0.3 }}
            >
              {/* 이미지 영역 */}
              <div className="relative w-full max-w-[640px] h-[360px]">
                <Image
                  src={business.image}
                  alt={business.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* 하단 텍스트 영역 */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 max-w-[640px] bg-blue-secondary"
                initial={{ height: "100px" }}
                animate={{ height: hoveredCard === index ? "460px" : "100px" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="relative h-full max-w-[640px] p-6 flex flex-col">
                  {/* 타이틀과 아이콘 */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {business.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: hoveredCard === index ? 0 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {hoveredCard === index ? (
                        // - 아이콘 (호버 시)
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      ) : (
                        // + 아이콘 (기본)
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      )}
                    </motion.div>
                  </div>

                  {/* 상세 내용 - 호버 시 표시 */}
                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="mt-4 flex-1 overflow-hidden"
                      >
                        <p className="text-sm md:text-base text-white/90 mb-4">
                          {business.description}
                        </p>
                        <ul className="space-y-2">
                          {business.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detailIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + detailIndex * 0.1 }}
                              className="text-sm text-white/80 flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}