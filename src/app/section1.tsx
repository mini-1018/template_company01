"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Section1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const slides = [
    {
      type: "video" as const,
      src: "/video/main_section_01_01.webm",
      titleEN: "Recognized for Quality",
      title: "품질인정",
      description: "기술력과 품질로 인정받는 기업",
    },
    {
      type: "video" as const,
      src: "/video/main_section_01_02.webm",
      titleEN: "Technology Advancement",
      title: "기술강화",
      description: "고정밀 원천 기술에 대한 핵심사업 강화",
    },
    {
      type: "video" as const,
      src: "/video/main_section_01_03.webm",
      titleEN: "Value Management",
      title: "가치경영",
      description: "인공지능을 통한 브랜드 가치경영",
    },
  ];

  // 슬라이드 변경 시 애니메이션 트리거
  useEffect(() => {
    setShowTitle(false);
    setShowDescription(false);
    setProgress(0);

    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 500);

    const descriptionTimer = setTimeout(() => {
      setShowDescription(true);
    }, 500);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(descriptionTimer);
    };
  }, [currentIndex]);

  // 동영상 제어 및 프로그레스 업데이트
  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];

    if (currentVideo) {
      // 동영상 처음부터 재생
      currentVideo.currentTime = 0;
      currentVideo.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });

      // 프로그레스 업데이트
      const updateProgress = () => {
        if (currentVideo.duration) {
          const progressPercent = (currentVideo.currentTime / currentVideo.duration) * 100;
          setProgress(progressPercent);
        }
      };

      // 동영상 종료 시 다음 슬라이드로
      const handleVideoEnd = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      };

      // 이벤트 리스너 등록
      currentVideo.addEventListener("timeupdate", updateProgress);
      currentVideo.addEventListener("ended", handleVideoEnd);

      return () => {
        currentVideo.removeEventListener("timeupdate", updateProgress);
        currentVideo.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, [currentIndex, slides.length]);

  // 다른 동영상들 정지 (약간 지연)
  useEffect(() => {
    const timer = setTimeout(() => {
      videoRefs.current.forEach((video, index) => {
        if (video && index !== currentIndex) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }, 1500); // 크로스페이드 완료 후 정지

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 배경 동영상 슬라이드 */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 1 : 0,
            }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              zIndex: { duration: 0 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              ref={(el) => { videoRefs.current[index] = el; }}
              className="w-full h-full object-cover"
              muted
              playsInline
              preload="auto"
            >
              <source src={slide.src} type="video/webm" />
            </video>
            {/* 오버레이 */}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        ))}
      </div>

      {/* 콘텐츠 */}
      <div className="absolute inset-0 z-10 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32 xl:px-48 text-white">
        <div className="max-w-4xl">
          <div
            className={`transition-all duration-1000 ease-out ${showTitle ? "opacity-100 blur-0" : "opacity-0 blur-sm"
              }`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 md:mb-4 lg:mb-6">
              {slides[currentIndex].titleEN}
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 lg:mb-10">
              {slides[currentIndex].title}
            </h1>
          </div>
          <p
            className={`text-base md:text-lg lg:text-xl xl:text-2xl transition-all duration-1000 ease-out ${showDescription ? "opacity-100 blur-0" : "opacity-0 blur-sm"
              }`}
          >
            {slides[currentIndex].description}
          </p>
        </div>

        {/* 하단 컨트롤 */}
        <div className="absolute bottom-60 left-8 md:left-16 lg:left-32 xl:left-48 flex items-center gap-4 md:gap-6 lg:gap-8">
          {/* 이전 버튼 */}
          <button
            onClick={goToPrevious}
            className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            aria-label="이전 슬라이드"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* 페이지 인디케이터 */}
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4 text-white">
            {/* 현재 페이지 */}
            <span className="text-base md:text-lg">{currentIndex + 1}</span>

            {/* 프로그레스 바 - 동영상 진행률 */}
            <div className="w-20 md:w-24 lg:w-32 h-0.5 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-200 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* 전체 페이지 */}
            <span className="text-sm md:text-base lg:text-lg text-white/70">{slides.length}</span>
          </div>

          {/* 다음 버튼 */}
          <button
            onClick={goToNext}
            className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            aria-label="다음 슬라이드"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* 도트 네비게이션 */}
        <div className="absolute bottom-8 right-8 md:right-16 gap-2 hidden sm:flex">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all cursor-pointer ${index === currentIndex
                  ? "bg-white w-6 md:w-8"
                  : "bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}