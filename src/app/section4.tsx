"use client";

import { useRef, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

export default function Section4() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const products = [
    {
      title: "재활용품 무인회수기",
      subtitle: "GRC700",
      image: "/images/home/main_product_01.jpg",
    },
    {
      title: "재활용품 무인회수기",
      subtitle: "GRC700 (ESG전용)",
      image: "/images/home/main_product_01.jpg",
    },
    {
      title: "음식물 종량기",
      subtitle: "GRC700",
      image: "/images/home/main_product_01.jpg",
    },
    {
      title: "음식물 수거 차량 RFID 결제 시스템",
      subtitle: "GRC700",
      image: "/images/home/main_product_01.jpg",
    },
    {
      title: "재활용 IoT 저울",
      subtitle: "GRC700",
      image: "/images/home/main_product_01.jpg",
    },
  ];

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      skipSnaps: false,
      containScroll: "trimSnaps",
    },
    [autoplayPlugin.current]
  );

  // 뷰포트 진입/이탈 시 carousel 제어
  useEffect(() => {
    if (!emblaApi) return;

    if (isInView) {
      // 뷰포트 진입 시 첫 슬라이드로 리셋하고 autoplay 시작
      emblaApi.scrollTo(0, true);
      autoplayPlugin.current.play();
    } else {
      // 뷰포트 이탈 시 autoplay 정지
      autoplayPlugin.current.stop();
    }
  }, [isInView, emblaApi]);

  // carousel 초기화 시 리셋
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

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

  const carouselContainerVariants: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.5 + index * 0.1,
      },
    }),
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textContainerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* 배경 이미지 */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/home/main_section_04_01.jpg"
          alt="Section 4 Background"
          fill
          className="object-cover"
          quality={75}
          priority
        />
      </motion.div>
    
      {/* 콘텐츠 */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 md:px-8">
        {/* 상단 타이틀 */}
        <div className="text-center text-white mb-8 md:mb-12">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            PRODUCT
          </motion.h1>
        </div>

        {/* 캐러셀 */}
        <motion.div
          variants={carouselContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full max-w-7xl"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 px-5 md:px-6"
                >
                  <div className="w-full shadow-xl flex flex-col cursor-pointer overflow-hidden">
                    {/* 제품 이미지 영역 - 1:1 비율 */}
                    <div className="relative w-full aspect-square bg-white flex items-center justify-center p-8 overflow-hidden">
                      <motion.div
                        variants={imageVariants}
                        className="relative w-full h-full"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* 하단 텍스트 영역 */}
                    <motion.div
                      variants={textContainerVariants}
                      className="relative w-full flex flex-col items-start justify-center px-6 py-4 bg-gray-200/20"
                    >
                      <motion.h3
                        variants={textVariants}
                        className="text-white text-base md:text-lg font-bold mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                      >
                        {product.title}
                      </motion.h3>
                      <motion.p
                        variants={textVariants}
                        className="text-white text-sm md:text-base font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                      >
                        {product.subtitle}
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}