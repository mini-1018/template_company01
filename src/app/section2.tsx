"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 개설일: 1995년 3월 1일
    const startDate = new Date(1995, 2, 1); // 월은 0부터 시작 (2 = 3월)

    const updateTime = () => {
      const now = new Date();
      const diffTime = now.getTime() - startDate.getTime();

      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    // 초기 실행
    updateTime();

    // 1초마다 업데이트
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  // 카운트업 애니메이션
  useEffect(() => {
    if (!isVisible || hasAnimated) {
      if (!isVisible) {
        setHasAnimated(false);
        setDisplayTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
      return;
    }

    setHasAnimated(true);
    const duration = 2000; // 2초
    const steps = 60;
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
        // 애니메이션 완료 후 실시간 값 동기화
        setDisplayTime(timeElapsed);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, timeElapsed, hasAnimated]);

  // 실시간 업데이트 (애니메이션 완료 후)
  useEffect(() => {
    if (hasAnimated && isVisible) {
      setDisplayTime(timeElapsed);
    }
  }, [timeElapsed, hasAnimated, isVisible]);

  // Intersection Observer로 섹션 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 섹션이 보이면 애니메이션 시작
            setIsVisible(true);
          } else {
            // 섹션이 안 보이면 애니메이션 리셋
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.3, // 30% 이상 보일 때 트리거
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 상단 3개 통계
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

  return (
    <div ref={sectionRef} className="w-full h-screen relative overflow-hidden bg-black">
      {/* 배경 이미지 */}
      <Image 
        src="/images/home/main_section_02_01.jpg"
        alt="Section 2 Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* 컨텐츠 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8">
        {/* 상단 타이틀 */}
        <div className="text-center text-white mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            가족의 행복을 만드는 NO.1 기업
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white/90">
            높은 품질을 기반으로 고정밀 원천기술 확보와 핵심 산업의 강화를 통하여 브랜드 가치경영에 대한 목표를 이룹니다. 
          </p>
        </div>

        {/* 통계 카드 영역 */}
        <div className="w-full max-w-7xl mb-12 md:mb-16 space-y-4 md:space-y-6">
          {/* 상단 3개 통계 - 아래에서 위로 애니메이션 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {topStats.map((stat, index) => (
              <div
                key={index}
                className={`backdrop-blur-md bg-white/20 rounded-2xl p-6 py-12 md:px-8 md:py-16 text-center text-white transition-all duration-700 ease-out ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-baseline justify-center mb-3 md:mb-8">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {stat.title}
                  </span>
                </div>
                <p className="text-sm md:text-base whitespace-pre-line leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* 하단 1개 통계 (일수) - 실시간 카운트 */}
          <div 
            className={`p-6 md:p-8 text-white transition-all duration-700 ease-out ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
              <span className="text-sm md:text-base lg:text-2xl">
                지테크인터내셔날이 걸어온 시간
              </span>
              <div className="flex items-baseline gap-2 md:gap-3 tabular-nums">
                <div className="flex items-baseline">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {displayTime.days.toLocaleString()}
                  </span>
                  <span className="text-lg md:text-xl font-medium ml-1">일</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {displayTime.hours.toString().padStart(2, '0')}
                  </span>
                  <span className="text-lg md:text-xl font-medium ml-1">시간</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {displayTime.minutes.toString().padStart(2, '0')}
                  </span>
                  <span className="text-lg md:text-xl font-medium ml-1">분</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {displayTime.seconds.toString().padStart(2, '0')}
                  </span>
                  <span className="text-lg md:text-xl font-medium ml-1">초</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 회사소개 버튼 */}
        <button
                className="group flex items-center gap-2 px-6 md:px-8 lg:px-10 py-2 md:py-2.5 lg:py-3 border-2 border-white text-white text-sm md:text-m lg:text-lg font-medium rounded-full hover:bg-blue-secondary hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
                onClick={() => {
                  console.log('회사소개 페이지로 이동');
                }}
              >
                <span>회사소개</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
      </div>
    </div>
  );
}