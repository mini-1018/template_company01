"use client";

import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/src/shared/component/menuItems";
import Button from "../shared/component/Button";
import Footer from "../shared/component/Footer";

export default function Section5() {

  return (
    <div className="relative w-full h-screen bg-gray-50">
      {/* 상단 65% - 미디어/고객센터 */}
      <div className="h-[65%] relative flex flex-col md:flex-row">
        {/* 왼쪽 - 미디어 */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
          {/* 배경 이미지 */}
          <Image
            src="/images/home/main_section_05_01.jpg"
            alt="Media"
            fill
            className="object-cover"
            quality={75}
          />
          
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-black/50" />

          {/* 콘텐츠 */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              MEDIA
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-8 text-center">
              지테크의 최신 소식을 만나보세요
            </p>
            <Button 
              text="보러가기"
              href="/media/news"
              showArrow={true}
              size="lg"
            />
          </div>
        </div>

        {/* 오른쪽 - 고객센터 */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
          {/* 배경 이미지 */}
          <Image
            src="/images/home/main_section_05_02.jpg"
            alt="Customer Service"
            fill
            className="object-cover"
            quality={75}
          />
          
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-black/50" />

          {/* 콘텐츠 */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              SUPPORT
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-8 text-center">
              궁금한 점이 있으신가요?
            </p>
            <Button 
              text="문의하기"
              href="/support/support"
              showArrow={true}
              size="lg"
            />
          </div>
        </div>
      </div>

      {/* 하단 35% - 푸터 */}
      <Footer />
    </div>
  );
}