"use client";

import { useState } from "react";
import Image from "next/image";

export default function Section3() {
  const [activeColumn, setActiveColumn] = useState(0);

  const columns = [
    {
      title: "1",
      heading: "헬스케어 시스템",
      icon: "/images/home/main_section_03_area_01.png",
      text: "신체를 측정하는 기술을 기반으로 신장 체중 자동 측정기는 물론 손소독기ㆍ동물용 체중계 등으로 사업분야를 넓히고 있습니다.",
      bgImage: "/images/home/main_section_03_01.jpg",
      bgFixed: false,
    },
    {
      title: "2",
      heading: "농축산 시스템",
      icon: "/images/home/main_section_03_area_02.png",
      text: "농업ㆍ수산업ㆍ축산업 현장에서 ICT 기술을 접목하여 계량 장비를 자동화ㆍ최적화 함으로써 생산효율을 높이는데 힘쓰고 있습니다.",
      bgImage: "/images/home/main_section_03_02.jpg",
      bgFixed: true,
    },
    {
      title: "3",
      heading: "산업용 시스템",
      icon: "/images/home/main_section_03_area_03.png",
      text: "반도체 생산 라인ㆍ공항용 스케일 등 정밀한 중량을 측정하는 자동화 라인을 구축하고 기술지원하여 만족도를 높이고 있습니다.",
      bgImage: "/images/home/main_section_03_03.jpg",
      bgFixed: true,
    },
    {
      title: "4",
      heading: "친환경 시스템",
      icon: "/images/home/main_section_03_area_04.png",
      text: "무게 측정 기술 기반으로 AI 인공지능 및 ICT 기술을 더해 재활용품 무인회수기, 음식물 종량기 등 지자체에서 관리하기 용이한 친환경 제품을 갖추고 있습니다.",
      bgImage: "/images/home/main_section_03_04.jpg",
      bgFixed: true,
    },
  ];

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Background Image - 전체 영역에 표시 */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 transition-all duration-500 bg-cover bg-center"
        style={{
          backgroundImage: `url(${columns[activeColumn].bgImage})`,
          backgroundAttachment: columns[activeColumn].bgFixed ? "fixed" : "scroll",
        }}
      />

      {/* 상단 타이틀 */}
      <div className="absolute top-[15%] left-0 right-0 flex justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider">
          BUSINESS AREA
        </h1>
      </div>

      {/* Columns - 반응형 그리드 */}
      <div className="w-full h-full flex flex-col md:flex-row md:flex-wrap">
        {columns.map((column, index) => (
          <div
            key={index}
            className={`
              w-full md:w-1/2 lg:w-1/4 
              h-1/4 md:h-1/2 lg:h-full 
              border-black/50 
              md:border-r-2 md:even:border-r-2 
              lg:border-r-2
              border-b-2 md:border-b-2 md:[&:nth-child(n+3)]:border-b-0
              lg:border-b-0
              box-border z-10 relative
              transition-all duration-500
            `}
            onMouseEnter={() => setActiveColumn(index)}
          >
            {/* Backdrop Blur Overlay */}
            <div
              className={`absolute inset-0 transition-all duration-500 ${
                activeColumn === index
                  ? "backdrop-blur-sm bg-black/60"
                  : "backdrop-blur-none bg-transparent"
              }`}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
              {/* 아이콘 - hover 시 위로 이동 */}
              <div 
                className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative transition-all duration-1000 ${
                  activeColumn === index 
                    ? "translate-y-0" 
                    : "translate-y-0"
                }`}
              >
                <Image
                  src={column.icon}
                  alt={column.heading}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* + 아이콘 - hover 시 숨김 */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4 md:translate-y-6 lg:translate-y-8 transition-all duration-1000 mt-5 ${
                  activeColumn === index
                    ? "opacity-0 scale-0"
                    : "opacity-100 scale-100"
                }`}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <line
                    x1="20"
                    y1="8"
                    x2="20"
                    y2="32"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="8"
                    y1="20"
                    x2="32"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* hover 시 나타나는 콘텐츠 */}
              <div
                className={`flex flex-col items-center transition-all duration-1000 ${
                  activeColumn === index
                    ? "opacity-100 translate-y-0 max-h-screen"
                    : "opacity-0 translate-y-8 max-h-0 overflow-hidden"
                }`}
              >
                {/* 세로 라인 */}
                <div className="w-0.5 h-10 bg-white/50 my-3" />

                {/* 제목 */}
                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 md:mb-4 text-center whitespace-nowrap">
                  {column.heading}
                </h2>

                {/* 설명 텍스트 */}
                <p className="text-xs md:text-sm lg:text-base text-white/90 text-center leading-relaxed mb-4 md:mb-12 max-w-xs break-keep">
                  {column.text}
                </p>

                {/* 자세히 보기 버튼 */}
                <button
                  className="px-6 md:px-8 lg:px-10 py-2 md:py-2.5 lg:py-3 border-2 border-white text-white text-xs md:text-sm lg:text-base font-medium rounded-full hover:bg-blue-secondary hover:border-transparent hover:text-white transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    console.log(`자세히 보기: ${column.heading}`);
                  }}
                >
                  자세히 보기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}