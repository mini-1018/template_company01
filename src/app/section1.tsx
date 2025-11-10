"use client";

import { useState, useEffect } from "react";

export default function Section1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const slides = [
    {
      image: "/images/home/main_01.jpg",
      title: "Global Business Leader",
      subtitle: "Website Design",
      description: "여러분의 성공적인 비즈니스를 실현해 드립니다.",
    },
    {
      image: "/images/home/main_02.jpg",
      title: "Innovation & Technology",
      subtitle: "Digital Solutions",
      description: "최첨단 기술로 미래를 선도합니다.",
    },
    {
      image: "/images/home/main_03.jpg",
      title: "Trusted Partner",
      subtitle: "Business Growth",
      description: "함께 성장하는 파트너가 되겠습니다.",
    },
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / 300);
      });
    }, 10);

    const slideInterval = setInterval(() => {
      setDirection("left");
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "left" : "right");
    setCurrentIndex(index);
    setProgress(0);
  };

  const goToPrevious = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const goToNext = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 배경 이미지 슬라이드 */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          let position = "translate-x-full";
          let opacity = "opacity-0";

          if (index === currentIndex) {
            position = "translate-x-0";
            opacity = "opacity-100";
          } else if (
            (direction === "left" && index === (currentIndex - 1 + slides.length) % slides.length) ||
            (direction === "right" && index === (currentIndex + 1) % slides.length)
          ) {
            position = direction === "left" ? "-translate-x-full" : "translate-x-full";
            opacity = "opacity-0";
          }

          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${position} ${opacity}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          );
        })}
      </div>

      {/* 콘텐츠 */}
      <div className="absolute inset-0 z-10 w-full h-full flex flex-col justify-center px-16 text-white">
        <div className="max-w-4xl">
          <h1 className="text-7xl font-bold mb-4 animate-fadeIn">
            {slides[currentIndex].title}
          </h1>
          <h2 className="text-5xl font-bold mb-6 animate-fadeIn">
            {slides[currentIndex].subtitle}
          </h2>
          <p className="text-2xl animate-fadeIn">
            {slides[currentIndex].description}
          </p>
        </div>

        {/* 하단 컨트롤 */}
        <div className="absolute bottom-12 left-16 flex items-center gap-8">
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
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* 페이지 인디케이터 */}
          <div className="flex items-center gap-4 text-white">
            {/* 현재 페이지 */}
            <span className="text-lg">{currentIndex + 1}</span>
            
            {/* 프로그레스 바 */}
            <div className="w-32 h-0.5 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* 전체 페이지 */}
            <span className="text-lg text-white/70">{slides.length}</span>
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
              className="w-8 h-8"
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
        <div className="absolute bottom-12 right-16 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentIndex
                  ? "bg-white w-8"
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