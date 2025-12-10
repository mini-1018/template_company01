"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import Button from "../shared/component/Button";
import Footer from "../shared/component/Footer";

export default function Section5() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // 애니메이션 variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
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

  const footerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  return (
    <div ref={sectionRef} className="relative w-full h-screen bg-gray-50">
      {/* 상단 65% - 미디어/고객센터 */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="h-[65%] relative flex flex-col md:flex-row"
      >
        {/* 왼쪽 - 미디어 */}
        <motion.div
          variants={sectionVariants}
          className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden"
        >
          {/* 배경 이미지 */}
          <motion.div
            variants={imageVariants}
            className="absolute inset-0"
          >
            <Image
              src="/images/home/main_section_05_01.jpg"
              alt="Media"
              fill
              className="object-cover"
              quality={75}
            />
          </motion.div>
          
          {/* 오버레이 */}
          <motion.div
            variants={overlayVariants}
            className="absolute inset-0 bg-black/50"
          />

          {/* 콘텐츠 */}
          <motion.div
            variants={contentVariants}
            className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-white"
          >
            <motion.h2
              variants={titleVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              MEDIA
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-sm md:text-base lg:text-lg mb-8 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            >
              지테크의 최신 소식을 만나보세요
            </motion.p>
            <motion.div variants={buttonVariants}>
              <Button 
                text="보러가기"
                href="/media/releases"
                showArrow={true}
                size="lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 오른쪽 - 고객센터 */}
        <motion.div
          variants={sectionVariants}
          className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden"
        >
          {/* 배경 이미지 */}
          <motion.div
            variants={imageVariants}
            className="absolute inset-0"
          >
            <Image
              src="/images/home/main_section_05_02.jpg"
              alt="Customer Service"
              fill
              className="object-cover"
              quality={75}
            />
          </motion.div>
          
          {/* 오버레이 */}
          <motion.div
            variants={overlayVariants}
            className="absolute inset-0 bg-black/50"
          />

          {/* 콘텐츠 */}
          <motion.div
            variants={contentVariants}
            className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-white"
          >
            <motion.h2
              variants={titleVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              SUPPORT
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-sm md:text-base lg:text-lg mb-8 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            >
              궁금한 점이 있으신가요?
            </motion.p>
            <motion.div variants={buttonVariants}>
              <Button 
                text="문의하기"
                href="/support/contact"
                showArrow={true}
                size="lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 하단 35% - 푸터 */}
      <motion.div
        variants={footerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Footer />
      </motion.div>
    </div>
  );
}