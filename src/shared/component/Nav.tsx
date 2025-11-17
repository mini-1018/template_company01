"use client";

import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "회사소개",
      submenu: ["회사소개", "인재상", "인허가", "조직도", "연혁"],
    },
    {
      name: "사업소개",
      submenu: ["CODA", "HUEL", "헬스케어", "산업용"],
    },
    {
      name: "미디어",
      submenu: ["뉴스룸", "소셜미디어"],
    },
    {
      name: "커뮤니티",
      submenu: ["공지사항", "FnQ", "고객문의", "다운로드"],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isMenuOpen || isMobileMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => {
        setIsMenuOpen(false);
        setHoveredMenu(null);
      }}
    >
      <div className="w-full">
        <div className="mx-auto">
          {/* 메인 메뉴바 */}
          <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8 lg:px-12">
            {/* 로고 */}
            <div className="relative w-[80px] h-[24px] md:w-[100px] md:h-[30px]">
              <Image
                src={isMenuOpen || isMobileMenuOpen ? "/images/logo/logo_gtech.png" : "/images/logo/logo_gtech_white.png"}
                alt="G-TECH LOGO"
                fill
                className="object-contain transition-opacity duration-300"
                priority
              />
            </div>

            {/* 데스크톱 메뉴 */}
            <div className="hidden lg:flex items-center gap-12 xl:gap-16">
              {menuItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative w-20 xl:w-24 group"
                  onMouseEnter={() => setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <button
                    className={`text-base xl:text-lg font-medium transition-colors duration-300 relative w-full ${
                      isMenuOpen
                        ? "text-gray-900 hover:text-blue-primary"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    {item.name}
                    {/* 밑줄 효과 */}
                    <span
                      className={`absolute -bottom-[26px] left-1/2 -translate-x-1/2 w-16 h-1.5 bg-blue-primary transition-transform duration-300 ${
                        hoveredMenu === item.name ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* 모바일 햄버거 메뉴 */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="메뉴 열기"
            >
              <svg
                className={`w-6 h-6 transition-colors ${isMobileMenuOpen ? "text-gray-900" : "text-white"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* 데스크톱 구분선 */}
          <div 
            className={`hidden lg:block w-full h-[1px] transition-all duration-300 ${
              isMenuOpen ? "bg-[#ccccca] opacity-100" : "bg-transparent opacity-0"
            }`}
          />

          {/* 데스크톱 서브메뉴 */}
          <div
            className={`hidden lg:block overflow-hidden transition-all duration-300 px-8 lg:px-12 ${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex justify-end gap-12 xl:gap-16 py-6">
              {menuItems.map((item, menuIndex) => (
                <div 
                  key={item.name} 
                  className="flex flex-col gap-3 items-center w-20 xl:w-24 group"
                  onMouseEnter={() => setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  {item.submenu.map((subItem, index) => (
                    <button
                      key={index}
                      className="text-center text-gray-600 hover:text-blue-primary transition-colors whitespace-nowrap text-sm cursor-pointer"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 모바일 메뉴 */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item, menuIndex) => (
                <div key={menuIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h3 className="text-gray-900 font-medium mb-3 text-base">
                    {item.name}
                  </h3>
                  <div className="flex flex-col gap-2 pl-4">
                    {item.submenu.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className="text-left text-gray-600 hover:text-blue-600 transition-colors text-sm py-1"
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}