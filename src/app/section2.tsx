"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Button from "../shared/component/Button";

export default function Section2() {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [displayTime, setDisplayTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    const startDate = new Date(1995, 2, 20);

    const updateTime = () => {
      const now = new Date();
      const diffTime = now.getTime() - startDate.getTime();

      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  // 카운트업 애니메이션
  useEffect(() => {
    if (!isInView || hasAnimated) {
      if (!isInView) {
        setHasAnimated(false);
        setDisplayTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
      return;
    }

    setHasAnimated(true);
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setDisplayTime({
        days: Math.floor(timeElapsed.days * progress),
        hours: Math.floor(timeElapsed.hours * progress),
        minutes: Math.floor(timeElapsed.minutes * progress),
        seconds: Math.floor(timeElapsed.seconds * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayTime(timeElapsed);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, timeElapsed, hasAnimated]);

  // 실시간 업데이트
  useEffect(() => {
    if (hasAnimated && isInView) {
      setDisplayTime(timeElapsed);
    }
  }, [timeElapsed, hasAnimated, isInView]);

  const topStats = [
    {
      title: "품질인정",
      description: "기술력과 품질로 인정받는 기업",
    },
    {
      title: "기술강화",
      description: "고정밀 원천 기술에 대한 핵심 사업 강화",
    },
    {
      title: "가치경영",
      description: "인공지능을 통한 브랜드 가치경영",
    },
  ];

  // 애니메이션 variants - Variants 타입 명시
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -32, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 1, ease: [0.42, 0, 0.58, 1] }
    },
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: -16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeInOut", delay: 0.2 }
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 64, rotate: -3 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      transition: { duration: 1, ease: "easeInOut" }
    },
  };

  const cardTitleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, ease: "easeInOut" }
    },
  };

  const cardDescVariants: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeInOut" }
    },
  };

  const timeContainerVariants: Variants = {
    hidden: { opacity: 0, y: 48, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 1, ease: "easeInOut", delay: 0.85 }
    },
  };

  const timeLabelVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: "easeInOut", delay: 0.9 }
    },
  };

  const timeItemVariants: Variants = {
    hidden: { opacity: 0, y: 32, scale: 0.75 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: "easeInOut", 
        delay: 1.0 + index * 0.1 
      }
    }),
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeInOut", delay: 1.4 }
    },
  };

  return (
    <div ref={sectionRef} className="w-full h-screen relative overflow-hidden bg-black">
      <Image 
        src="/images/home/main_section_02_01.jpg"
        alt="Section 2 Background"
        fill
        className="object-cover"
        priority
      />
      
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* 상단 타이틀 */}
        <div className="text-center text-white mb-8 md:mb-12">
          <motion.h1 
            variants={titleVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
          >
            가족의 행복을 만드는 NO.1 기업
          </motion.h1>
          <motion.p 
            variants={subtitleVariants}
            className="text-sm md:text-base lg:text-lg text-white/90"
          >
            높은 품질을 기반으로 고정밀 원천기술 확보와 핵심 산업의 강화를 통하여 브랜드 가치경영에 대한 목표를 이룹니다. 
          </motion.p>
        </div>

        {/* 통계 카드 영역 */}
        <div className="w-full max-w-7xl mb-12 md:mb-16 space-y-4 md:space-y-6">
          {/* 상단 3개 통계 */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
            variants={containerVariants}
          >
            {topStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                transition={{ duration: 0.3 }}
                className="backdrop-blur-md bg-white/20 p-6 py-12 md:px-8 md:py-16 text-center text-white"
              >
                <div className="flex items-baseline justify-center mb-3 md:mb-8">
                  <motion.span 
                    variants={cardTitleVariants}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
                  >
                    {stat.title}
                  </motion.span>
                </div>
                <motion.p 
                  variants={cardDescVariants}
                  className="text-sm md:text-base whitespace-pre-line leading-relaxed"
                >
                  {stat.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* 하단 통계 */}
          <motion.div 
            variants={timeContainerVariants}
            className="p-6 md:p-8 text-white"
          >
            <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
              <motion.span 
                variants={timeLabelVariants}
                className="text-sm md:text-base lg:text-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              >
                지테크인터내셔날이 걸어온 시간
              </motion.span>
              <div className="flex items-baseline gap-2 md:gap-3 tabular-nums">
                {[
                  { value: displayTime.days, label: "일" },
                  { value: displayTime.hours, label: "시간", padded: true },
                  { value: displayTime.minutes, label: "분", padded: true },
                  { value: displayTime.seconds, label: "초", padded: true },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={timeItemVariants}
                    custom={index}
                    className="flex items-baseline"
                  >
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                      {item.padded 
                        ? item.value.toString().padStart(2, '0')
                        : item.value.toLocaleString()
                      }
                    </span>
                    <span className="text-lg md:text-xl font-medium ml-1">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 버튼 */}
        <motion.div variants={buttonVariants}>
          <Button 
            text="회사소개"
            href="/intro/outline"
            showArrow={true}
            size="lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}