"use client";

import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

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
      name: "커뮤니티",
      submenu: ["공지사항", "FnQ", "고객문의", "다운로드"],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => {
        setIsMenuOpen(false);
        setHoveredMenu(null);
      }}
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-8">
          {/* 메인 메뉴바 */}
          <div className="flex items-center justify-between h-20">
            {/* 로고 */}
            <Image
              src={"/images/logo_gtech.png"}
              className={`transition-colors duration-300`}
              alt="G-TECH LOGO"
              width={100}
              height={30}
            />

            {/* 메뉴 아이템들 */}
            <div className="flex items-center gap-12">
              {menuItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative w-24"
                  onMouseEnter={() => setHoveredMenu(item.name)}
                >
                  <button
                    className={`text-lg font-medium transition-colors duration-300 pb-1 relative w-full ${
                      isMenuOpen
                        ? "text-gray-900 hover:text-blue-600"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    {item.name}
                    {/* 밑줄 효과 */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 origin-left ${
                        hoveredMenu === item.name ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 전체 서브메뉴 영역 */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex justify-end gap-12 py-6">
              {menuItems.map((item) => (
                <div 
                  key={item.name} 
                  className="flex flex-col gap-3 items-center w-24"
                >
                  {item.submenu.map((subItem, index) => (
                    <button
                      key={index}
                      className="text-center text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap text-sm"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}