"use client";

import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/src/shared/component/menuItems";

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
            <button className="group flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 border-2 border-white text-white text-sm md:text-base font-medium rounded-full hover:bg-blue-secondary hover:border-transparent transition-all duration-300">
              <span>보러가기</span>
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
              CUSTOMER SERVICE
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8">
              031-852-4070
            </p>
            <button className="group flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 border-2 border-white text-white text-sm md:text-base font-medium rounded-full hover:bg-blue-secondary hover:border-transparent transition-all duration-300">
              <span>문의하기</span>
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

      {/* 하단 35% - 푸터 */}
      <footer className="h-[35%] bg-black py-8">
        <div className="flex flex-col-reverse md:flex-row justify-between w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* 왼쪽 영역 */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image 
              src="/images/logo/logo_gtech_white.png" 
              alt="G-TECH Logo" 
              width={100} 
              height={40} 
              className="h-auto w-auto mb-6"
            />

            <ul className="flex gap-4 mb-5">
              <li>
                <Link href="/company" className="text-white text-sm">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white text-sm">
                  서비스 이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white text-sm">
                  개인정보 처리방침
                </Link>
              </li>
            </ul>

            <div className="text-white mb-5">
              <p className="text-xs leading-relaxed mb-1">
                경기도 의정부시 산단로 68번길 29 | 031-852-4070
              </p>
              <p className="text-xs leading-relaxed">
                © G-TECH INTERNATIONAL. ALL RIGHTS RESERVED
              </p>
            </div>

            <div className="text-white mb-5">
              <p className="text-sm font-medium">담당자 연락처</p>
              <p className="text-xs">장대웅 팀장 : 010-9282-4070</p>
            </div>

            <ul className="flex gap-6">
              <li>
                <Link href="https://blog.naver.com/gtech" className="block" target="_blank">
                  <Image src="/images/icon/blog.svg" alt="Blog" width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@Gtech-international" className="block" target="_blank">
                  <Image src="/images/icon/youtube.svg" alt="YouTube" width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/gtech__official" className="block" target="_blank">
                  <Image src="/images/icon/insta.svg" alt="Instagram" width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href="tel:010-9282-4070" className="block">
                  <Image src="/images/icon/phone.svg" alt="Phone" width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href="mailto:stmo11@gtech21.net" className="block" target="_blank">
                  <Image src="/images/icon/email.svg" alt="Email" width={24} height={24} />
                </Link>
              </li>
            </ul>
          </div>

          {/* 오른쪽 영역 - 사이트맵 */}
          <div className="w-full md:w-1/2">
            <nav>
              <ul className="flex justify-between md:justify-end">
                {menuItems.map((menu, index) => (
                  <li key={index} className="md:ml-[15%] md:first:ml-0">
                    <p className="text-white text-xs md:text-base font-bold mb-6">
                      {menu.name}
                    </p>
                    <ul>
                      {menu.submenu.map((sub, subIndex) => (
                        <li key={subIndex} className="mb-4">
                          <Link 
                            href="#" 
                            className="text-xs md:text-sm text-white"
                          >
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}