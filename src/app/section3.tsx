"use client";

import { useState } from "react";

export default function Section3() {
  const [activeColumn, setActiveColumn] = useState(0);

  const columns = [
    {
      title: "1",
      heading: "헬스케어",
      text: "",
      bgImage: "/images/home/main_section_03_01.jpg",
      bgFixed: false,
    },
    {
      title: "2",
      heading: "농축산",
      text: "",
      bgImage: "/images/home/main_section_03_02.jpg",
      bgFixed: true,
    },
    {
      title: "3",
      heading: "산업",
      text: "",
      bgImage: "/images/home/main_section_03_03.jpg",
      bgFixed: true,
    },
    {
      title: "4",
      heading: "친환경",
      text: "",
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
                  ? "backdrop-blur-sm bg-black/20"
                  : "backdrop-blur-none bg-transparent"
              }`}
            />

            {/* Content */}
            <div className="relative h-full">
              {/* Info Box */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 box-border p-6 md:p-8 lg:p-10 text-center transition-all duration-500 z-10 max-w-[90%] ${
                  activeColumn === index
                    ? "opacity-100 -translate-y-1/2 scale-100"
                    : "opacity-0 translate-y-full scale-95"
                }`}
              >
                <h2 className="m-0 p-0 text-xl md:text-2xl lg:text-3xl text-white mb-3 font-bold">
                  {column.heading}
                </h2>
                <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  {column.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}