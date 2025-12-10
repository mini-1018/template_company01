"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface SocialLink {
  platform: "blog" | "instagram" | "youtube";
  url: string;
}

interface SocialCardProps {
  brandLogo: string;
  brandName: string;
  title: string;
  socialLinks: SocialLink[];
}

const socialIcons = {
  blog: "/images/media/social/sns_01.png",
  instagram: "/images/media/social/sns_02.png",
  youtube: "/images/media/social/sns_03.png",
};

const socialColors = {
  blog: "text-green-500",
  instagram: "text-pink-500",
  youtube: "text-red-600",
};

export default function SocialCard({ 
  brandLogo, 
  brandName, 
  title,
  socialLinks 
}: SocialCardProps) {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* 왼쪽 - 브랜드 로고 */}
        <div className="w-full md:w-1/2 bg-white flex border border-gray-primary items-center justify-center p-12 md:p-20">
          <div className="relative w-full max-w-[340px] h-[100px]">
            <Image
              src={brandLogo}
              alt={brandName}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* 오른쪽 - SNS 링크 */}
        <div className="w-full md:w-1/2 bg-gray-secondary flex flex-col items-center justify-center p-12 md:p-20 gap-8">
          {/* 타이틀 - 호버된 플랫폼 색상으로 변경 */}
          <h3 
            className={`text-xl md:text-[30px] font-bold text-center transition-colors duration-300 ${
              hoveredPlatform 
                ? socialColors[hoveredPlatform as keyof typeof socialColors]
                : "text-blue-secondary"
            }`}
          >
            {title}
            <span className="text-[30px] text-bold text-black-primary"> SNS 바로가기</span>
          </h3>

          {/* SNS 아이콘 */}
          <div className="flex gap-25">
            {socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredPlatform(link.platform)}
                onMouseLeave={() => setHoveredPlatform(null)}
                className="transition-transform duration-300 hover:scale-110"
              >
                {/* 아이콘 */}
                <div className="relative w-25 h-25">
                  <Image
                    src={socialIcons[link.platform]}
                    alt={link.platform}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}