"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Section4() {
  const products = [
    {
      title: "재활용품 무인회수기",
      subtitle: "GRC700",
      image: "/images/home/main_product_01.png",
    },
    {
      title: "재활용품 무인회수기",
      subtitle: "GRC700 (ESG전용)",
      image: "/images/home/main_product_02.png",
    },
    {
      title: "음식물 종량기",
      subtitle: "GRC700",
      image: "/images/home/main_product_03.png",
    },
    {
      title: "음식물 수거 차량 RFID 결제 시스템",
      subtitle: "GRC700",
      image: "/images/home/main_product_04.png",
    },
    {
      title: "재활용 IoT 저울",
      subtitle: "GRC700",
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
            PRODUCT
          </h1>
        </div>

        {/* 캐러셀 */}
        <div className="w-full max-w-7xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 lg:basis-1/3 px-5 md:px-6"
                >
                  <div className="w-full h-[400px] md:h-[450px] shadow-xl flex flex-col cursor-pointer overflow-hidden">
                    {/* 제품 이미지 영역 */}
                    <div className="relative w-full h-[80%] bg-white flex items-center justify-center p-8">
                      <div className="relative w-[70%] h-[70%]">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* 하단 텍스트 영역 */}
                    <div className="w-full h-[20%] bg-gray-200 opacity-80 flex flex-col items-start justify-center px-6 py-4">
                      <h3 className="text-[#434343] text-base md:text-lg font-black mb-1">
                        {product.title}
                      </h3>
                      <p className="text-[#434343] text-sm md:text-base font-midium">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}