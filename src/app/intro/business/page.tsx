"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Business() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const businessData = [
    {
      title: "친환경 솔루션",
      image: "/images/intro/business/business_areas_01.jpg",
      description: "무게 측정 기술 기반으로\n AI 인공지능 및 ICT 기술을 더해\n 재활용품 무인회수기 · 음식물 종량기 등 지자체에서 \n관리하기 용이한 친환경 제품을 갖추고 있습니다.",
    },
    {
      title: "헬스케어 제품",
      image: "/images/intro/business/business_areas_02.jpg",
      description: "신체를 측정하는 기술을 기반으로\n 신장 체중 자동 측정기 · 환자용 측정기 · \n손소독기 · 반려동물 체중계 등으로\n헬스케어 사업분야를 넓히고 있습니다.",
    },
    {
      title: "농축산 시스템",
      image: "/images/intro/business/business_areas_03.jpg",
      description: "농업 · 수산업 · 축산업 현장에서 정보통신기술(ICT)을\n접목하여 계량장비를 자동화 · 최적화 함으로써\n생산효율을 높이는데 힘쓰고 있습니다.",
    },
    {
      title: "산업용 시스템",
      image: "/images/intro/business/business_areas_04.jpg",
      description: "반도체 생산 라인 · 공항용 스케일 등 정밀한 중량을\n측정하는 자동화 라인을 구축하고 기술 지원하여\n만족도를 높이고 있습니다.",
    },
  ];

  return (
    <div className="w-full bg-white py-[200px]">
      <div className="w-full max-w-[1426px] mx-auto px-8 md:px-10 lg:px-12">
        {/* 헤더 */}
        <div className="text-center mb-16 md:mb-40">
          <h1 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-black-primary mb-6 leading-15">
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
              <div className="relative w-full h-[360px]">
                <Image
                  src={business.image}
                  alt={business.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* 하단 텍스트 영역 (#36a9e1 색상 - 항상 유지) */}
              <motion.div
                className="absolute bottom-0 left-0 right-0"
                style={{ backgroundColor: "#36a9e1" }}
                initial={{ height: "100px" }}
                animate={{ height: hoveredCard === index ? "100px" : "100px" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="absolute inset-y-0 left-0 right-0 px-6 flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {business.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: hoveredCard === index ? 0 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {hoveredCard === index ? (
                      // - 아이콘
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                      </svg>
                    ) : (
                      // + 아이콘
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
              </motion.div>

              {/* 이미지 위 검은색 오버레이 영역 - 호버 시 펼쳐짐 */}
              <AnimatePresence>
                {hoveredCard === index && (
                  <motion.div
                    className="absolute bottom-[100px] left-0 right-0 bg-black/70"
                    initial={{ height: 0 }}
                    animate={{ height: "360px" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="relative h-full p-6 flex items-center justify-center">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="text-[25px] font-medium text-white leading-relaxed whitespace-pre-line text-center"
                      >
                        {business.description}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}