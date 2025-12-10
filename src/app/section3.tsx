"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import Button from "../shared/component/Button";

export default function Section3() {
  const [activeColumn, setActiveColumn] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const columns = [
    {
      title: "1",
      heading: "헬스케어 시스템",
      icon: "/images/home/main_section_03_area_01.png",
      text: "신체를 측정하는 기술을 기반으로 신장 체중 자동 측정기는 물론 손소독기ㆍ동물용 체중계 등으로 사업분야를 넓히고 있습니다.",
      bgImage: "/images/home/main_section_03_01.jpg",
      href: "/business/healthcare",
    },
    {
      title: "2",
      heading: "농축산 시스템",
      icon: "/images/home/main_section_03_area_02.png",
      text: "농업ㆍ수산업ㆍ축산업 현장에서 ICT 기술을 접목하여 계량 장비를 자동화ㆍ최적화 함으로써 생산효율을 높이는데 힘쓰고 있습니다.",
      bgImage: "/images/home/main_section_03_02.jpg",
      href: "/business/agriculture",
    },
    {
      title: "3",
      heading: "산업용 시스템",
      icon: "/images/home/main_section_03_area_03.png",
      text: "반도체 생산 라인ㆍ공항용 스케일 등 정밀한 중량을 측정하는 자동화 라인을 구축하고 기술지원하여 만족도를 높이고 있습니다.",
      bgImage: "/images/home/main_section_03_03.jpg",
      href: "/business/industrial",
    },
    {
      title: "4",
      heading: "친환경 시스템",
      icon: "/images/home/main_section_03_area_04.png",
      text: "무게 측정 기술 기반으로 AI 인공지능 및 ICT 기술을 더해 재활용품 무인회수기, 음식물 종량기 등 지자체에서 관리하기 용이한 친환경 제품을 갖추고 있습니다.",
      bgImage: "/images/home/main_section_03_04.jpg",
      href: "/business/eco-friendly",
    },
  ];

  // 애니메이션 variants
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const columnContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const columnVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const plusIconVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: 90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      rotate: 90,
      transition: {
        duration: 0.3,
      },
    },
  };

  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      height: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      height: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={sectionRef} className="w-full h-screen overflow-hidden relative">
      {/* Background Images */}
      {columns.map((column, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: activeColumn === index ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10"
        >
          <Image
            src={column.bgImage}
            alt={column.heading}
            fill
            priority={index === 0}
            className="object-cover"
            quality={90}
          />
        </motion.div>
      ))}

      {/* 상단 타이틀 */}
      <div className="absolute top-[15%] left-0 right-0 flex justify-center z-20">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        >
          BUSINESS AREA
        </motion.h1>
      </div>

      {/* Columns */}
      <motion.div
        className="w-full h-full flex flex-col md:flex-row md:flex-wrap"
        variants={columnContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {columns.map((column, index) => (
          <motion.div
            key={index}
            variants={columnVariants}
            whileHover={{ scale: 1.02 }}
            className={`
              w-full md:w-1/2 lg:w-1/4 
              h-1/4 md:h-1/2 lg:h-full 
              border-black/50 
              md:border-r-2 md:even:border-r-2 
              lg:border-r-2
              border-b-2 md:border-b-2 md:[&:nth-child(n+3)]:border-b-0
              lg:border-b-0
              box-border z-10 relative
            `}
            onMouseEnter={() => setActiveColumn(index)}
          >
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{
                backdropFilter: activeColumn === index ? "blur(8px)" : "blur(0px)",
                backgroundColor: activeColumn === index ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0)",
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 lg:mt-16">
              {/* 아이콘 */}
              <motion.div
                variants={iconVariants}
                animate={activeColumn === index ? "hover" : "visible"}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative"
              >
                <Image
                  src={column.icon}
                  alt={column.heading}
                  fill
                  className="object-contain p-2 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                />
              </motion.div>

              {/* + 아이콘 */}
              <motion.div
                variants={plusIconVariants}
                animate={activeColumn === index ? "exit" : "visible"}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4 md:translate-y-6 lg:translate-y-8 mt-5"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
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
              </motion.div>

              {/* hover 시 나타나는 콘텐츠 */}
              <motion.div
                variants={contentVariants}
                animate={activeColumn === index ? "visible" : "hidden"}
                className="flex flex-col items-center overflow-hidden"
              >
                {/* 세로 라인 */}
                <motion.div
                  variants={lineVariants}
                  className="w-0.5 h-10 bg-white/50 my-3 origin-top"
                />

                {/* 제목 */}
                <motion.h2
                  variants={textVariants}
                  className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 md:mb-4 text-center whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                >
                  {column.heading}
                </motion.h2>

                {/* 설명 텍스트 */}
                <motion.p
                  variants={textVariants}
                  className="text-xs md:text-sm lg:text-base text-white/90 text-center leading-relaxed mb-4 md:mb-16 max-w-xs break-keep drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                >
                  {column.text}
                </motion.p>

                {/* 자세히 보기 버튼 */}
                <motion.div variants={buttonVariants}>
                  <Button text="자세히 보기" href={column.href} size="lg" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}