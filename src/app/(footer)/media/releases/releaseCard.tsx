"use client";
import Image from "next/image";

interface ReleaseCardProps {
  title: string;
  content: string;
  date: string;
  image: string;
  onClick?: () => void;
}

export default function ReleaseCard({ 
  title, 
  content, 
  date, 
  image,
  onClick 
}: ReleaseCardProps) {
  return (
    <div 
      className="w-full border-t border-gray-primary py-[70px] px-[80px] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex gap-25 items-center">
        {/* 왼쪽 - 텍스트 콘텐츠 */}
        <div className="flex flex-col gap-6">
          {/* 제목 */}
          <h3 className="text-lg md:text-[30px] font-bold text-black-primary mb-3 line-clamp-1 overflow-hidden text-ellipsis">
            {title}
          </h3>
          
          {/* 내용 */}
          <p className="text-sm md:text-[25px] text-black-primary mb-4 line-clamp-4 overflow-hidden text-ellipsis">
            {content}
          </p>
          
          {/* 날짜 */}
          <time className="text-[25px] text-black-primary">
            {date}
          </time>
        </div>

        {/* 오른쪽 - 이미지 */}
        <div className="relative w-32 h-32 md:w-[450px] md:h-[300px] shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}