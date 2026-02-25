'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const footerLinks = [
    { label: "이용약관", href: "https://sites.google.com/view/coda-service-terms-of-use/%ED%99%88", blank: true },
    { label: "개인정보처리방침", href: "https://sites.google.com/view/coda-privacy/%ED%99%88", blank: true },
    { label: "이메일무단수집거부", href: "/content/email-prohibit", blank: false },
    { label: "위치안내", href: "/intro/location", blank: false },
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
    { label: "코다(CODA)", href: "https://www.coda.ai.kr/" },
    { label: "지테크몰", href: "https://smartstore.naver.com/gmall" },
    { label: "나라장터", href: "https://shop.g2b.go.kr" },
  ];

  const badges = [
    { src: "/images/footer/innobiz.png", alt: "기술혁신중소기업" },
    { src: "/images/footer/KAB.png", alt: "KAB 인증" },
    { src: "/images/footer/IAF.png", alt: "IAF" },
    { src: "/images/footer/red_dot.png", alt: "레드닷 수상" },
    { src: "/images/footer/public_procurement.png", alt: "조달청" },
    { src: "/images/footer/NTEP.png", alt: "NTEP" },
    { src: "/images/footer/excellent_product.png", alt: "우수제품" },
    { src: "/images/footer/venture.png", alt: "벤처확인기업" },
  ]

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
      <div className="w-full bg-white border-b border-[#ccccca]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-0 h-[62px] flex items-center gap-10 justify-end">
          {badges.map((badge, index) => (
            <Image
              key={index}
              src={badge.src}
              alt={badge.alt}
              width={45}
              height={45}
              className="object-contain"
            />
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full pt-15 pb-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-0 flex justify-between">
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
                          className="text-black-primary text-sm hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-black-primary"
                          target={link.blank ? "_blank" : "_self"}
                          rel={link.blank ? "noopener noreferrer" : undefined}
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
            </div>

            {/* Company Info Section */}
            <div className="flex flex-col gap-3">
              <address className="not-italic">
                <ul className="flex items-center gap-2">
                  {companyInfo.map((info, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-black-primary text-sm whitespace-nowrap">
                        {info.label}
                      </span>
                      {index < companyInfo.length - 1 && (
                        <div className="w-px h-3 bg-[#ccccca]" aria-hidden="true" />
                      )}
                    </li>
                  ))}
                </ul>
              </address>

              <p className="text-black-primary text-sm">
                Copyright © 2026 G-tech International Co., Ltd. All rights reserved.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-8">
            {/*Social Media Links */}
            <ul className="flex gap-10">
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

            {/* Related Sites Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-[152px] h-9 px-3 border border-[#ccccca] bg-white text-[#434343] text-sm text-left flex items-center justify-between hover:border-[#999] transition-colors"
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
                <div className="absolute w-[152px] bg-white border border-[#ccccca] border-b-0 shadow-lg">
                  {relatedSites.map((site, index) => (
                    <button
                      key={index}
                      onClick={() => handleSiteClick(site.href)}
                      className="w-full px-3 h-9 text-left text-[#434343] text-sm hover:bg-[#f0f0f0] transition-colors border-b border-[#ccccca] cursor-pointer"
                    >
                      {site.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}