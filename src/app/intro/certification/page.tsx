import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "인증현황 | G-TECH International",
  description: "지테크인터내셔날의 인증현황입니다.",
  openGraph: {
    title: "인증현황 | G-TECH International",
    description: "지테크인터내셔날의 인증현황입니다.",
  },
};

export default function Certification() {
  const certificates = [
    {
      image: "/images/intro/certification/certification01.png",
      name: "인증서",
    },
    {
      image: "/images/intro/certification/certification02.jpg",
      name: "인증서",
    },    {
      image: "/images/intro/certification/certification03.jpg",
      name: "인증서",
    },
    {
      image: "/images/intro/certification/certification03.jpg",
      name: "인증서",
    },
    {
      image: "/images/intro/certification/certification03.jpg",
      name: "인증서",
    },
    {
      image: "/images/intro/certification/certification03.jpg",
      name: "인증서",
    },
  ];

  return (
    <div className="w-full bg-white py-[200px]">
      <div className="w-full mx-auto px-8 md:px-12 lg:px-16">
        {/* 헤더 */}
        <div className="text-center mb-16 md:mb-20">
          <div className="w-20 border-5 border-blue-secondary m-auto mb-[30px]"/>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black-primary mb-6">
            인증현황
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            지테크인터내셔날의 기술력과 품질을 인정받은 인증서입니다.
          </p>
        </div>

        {/* 인증서 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-4">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* 인증서 이미지 */}
              <div className="relative w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* 인증서 이름 */}
              <h3 className="mt-4 text-center text-base md:text-lg font-semibold text-black-primary">
                {cert.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}