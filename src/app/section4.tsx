"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Section4() {
  const products = [
    {
      title: "재활용품\n무인회수기",
      description: "CODA만의 독자적인 인공지능을 통한\n자원 순환 회수 프로세스",
      image: "/images/home/main_product_01.png",
    },
    {
      title: "재활용품 무인회수기\n(ESG전용)",
      description: "탄소 배출 감축 전용",
      image: "/images/home/main_product_02.png",
    },
    {
      title: "음식물 종량기",
      description: "RFID를 이용해 ID를 식별하여\n배출량에 따라 요금을 부과",
      image: "/images/home/main_product_03.png",
    },
    {
      title: "음식물 수거 차량\n RFID 결제 시스템",
      description: "RFID를 이용해 업소에서 발생하는\n배출량에 따라 결제되는 선·후불 시스템",
      image: "/images/home/main_product_04.png",
    },
    {
      title: "재활용 IoT 저울",
      description: "품목별 무게를 측정하고 실시간으로 서버에\n전송·저장할 수 있는 지능형 계측기",
      image: "/images/home/main_product_05.png",
    },
  ];

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* 배경 이미지 */}
      <Image
        src="/images/home/main_section_04_01.jpg"
        alt="Section 4 Background"
        fill
        className="object-cover"
        quality={75}
        priority
      />
      
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 콘텐츠 */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 md:px-8">
        {/* 상단 타이틀 */}
        <div className="text-center text-white mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            PRODUCTS
          </h1>
        </div>

        {/* 캐러셀 */}
        <div className="w-full max-w-7xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 lg:basis-1/3 px-2 md:px-3"
                >
                  <div className="w-full h-[400px] md:h-[480px] lg:h-[530px] backdrop-blur-md bg-white/20 p-6 md:p-8 lg:p-10 shadow-xl flex flex-col items-center justify-between cursor-pointer hover:shadow-2xl transition-all duration-300">
                    {/* 상단 텍스트 */}
                    <div className="flex flex-col items-center">
                      {/* 제목 */}
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center whitespace-pre-line leading-tight mb-4">
                        {product.title}
                      </h3>

                      {/* 구분선 */}
                      <div className="w-8 md:w-10 border-t-2 border-white my-3 md:my-4" />

                      {/* 설명 */}
                      <p className="text-sm md:text-base text-white text-center whitespace-pre-line leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* 제품 이미지 */}
                    <div className="relative w-full h-40 md:h-48 lg:h-56 mt-4">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 캐러셀 하단 버튼 */}
          <div className="flex justify-center mt-8 md:mt-12">
            <button className="group flex items-center gap-2 px-8 md:px-10 py-3 md:py-4 border-2 border-white text-white text-sm md:text-base font-medium rounded-full hover:bg-blue-secondary hover:border-transparent transition-all duration-300">
              <span>제품 더보기</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
      </div>
    </div>
  );
}