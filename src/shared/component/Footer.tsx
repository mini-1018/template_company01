'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const footerLinks = [
    { label: "이용약관", href: "/intro/outline" },
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이메일무단수집거부", href: "/terms" },
    { label: "위치안내", href: "/terms" },
  ];

  const companyInfo = [
    { label: "대표이사 : 한성우" },
    { label: "사업자등록번호 : 204-81-49088" },
    { label: "주소 : 경기도 의정부시 산단로 68번길 29" },
    { label: "대표전화 : 031-852-4070" },
  ];

  const socialLinks = [
    { href: "https://blog.naver.com/gtech", icon: "/images/icon/blog.svg", alt: "Blog" },
    { href: "https://www.youtube.com/@Gtech-international", icon: "/images/icon/youtube.svg", alt: "YouTube" },
    { href: "https://www.instagram.com/gtech__official", icon: "/images/icon/insta.svg", alt: "Instagram" },
  ];

  const relatedSites = [
    { label: "CODA", href: "https://www.coda.ai.kr/" },
    { label: "지테크몰", href: "https://smartstore.naver.com/gmall" },
    { label: "나라장터", href: "https://shop.g2b.go.kr" },
  ];

  // 외부 클릭 감지
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSiteClick = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
    setIsDropdownOpen(false);
  };

  return (
    <footer className="w-full bg-white border-t border-[#ccccca]">
      {/* SNS Channel Section */}
      <div className="w-full bg-[#f0f0f0] border-b border-[#ccccca]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-0 h-[62px] flex items-center justify-between">
          <p className="font-normal text-[#434343] text-sm">SNS Channel</p>
          
          <ul className="flex gap-6">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <Link 
                  href={social.href} 
                  className="block hover:opacity-70 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src={social.icon} 
                    alt={social.alt} 
                    width={24} 
                    height={24} 
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full pt-15 pb-25">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-0">
          <div className="flex flex-col gap-7">
            {/* Top Section - Logo, Links, Related Sites */}
            <div className="flex items-center justify-between">
              <div className="flex items-end gap-[45px]">
                {/* Logo */}
                <Link href="/">
                  <Image 
                    src="/images/logo/logo_gtech.png" 
                    alt="G-TECH Logo" 
                    width={150} 
                    height={50}
                    className="cursor-pointer"
                  />
                </Link>

                {/* Footer Navigation Links */}
                <nav aria-label="Footer navigation">
                  <ul className="flex items-center gap-2">
                    {footerLinks.map((link, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Link 
                          href={link.href}
                          className="text-[#434343] text-sm hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-[#434343]"
                        >
                          {link.label}
                        </Link>
                        {index < footerLinks.length - 1 && (
                          <div className="w-px h-3 bg-[#ccccca]" aria-hidden="true" />
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Related Sites Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-[127px] h-9 px-3 border border-[#ccccca] bg-white text-[#434343] text-sm text-left flex items-center justify-between hover:border-[#999] transition-colors"
                  aria-label="관련사이트 선택"
                  aria-expanded={isDropdownOpen}
                >
                  <span>관련사이트</span>
                  <svg 
                    className={`w-2.5 h-2.5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-0 w-[127px] bg-white border border-[#ccccca] border-b-0 shadow-lg">
                    {relatedSites.map((site, index) => (
                      <button
                        key={index}
                        onClick={() => handleSiteClick(site.href)}
                        className="w-full px-3 h-9 text-left text-[#434343] text-sm hover:bg-[#f0f0f0] transition-colors border-b border-[#ccccca]"
                      >
                        {site.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Company Info Section */}
            <div className="flex flex-col gap-3">
              <address className="not-italic">
                <ul className="flex items-center gap-2">
                  {companyInfo.map((info, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-[#434343] text-sm whitespace-nowrap">
                        {info.label}
                      </span>
                      {index < companyInfo.length - 1 && (
                        <div className="w-px h-3 bg-[#ccccca]" aria-hidden="true" />
                      )}
                    </li>
                  ))}
                </ul>
              </address>

              <p className="text-[#434343] text-sm">
                Copyright © 2026 G-tech International Co., Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}