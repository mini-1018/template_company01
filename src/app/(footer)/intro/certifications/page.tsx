import FadeUpOnView from "@/src/shared/component/FadeUpOnView";
import { Metadata } from "next";
import Image from "next/image";
import MainHeader from "../../../../shared/component/MainHeader";

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
      image: "/images/intro/certification/certifications_01.jpg",
      name: "기업부설연구소 인정서",
    },
    {
      image: "/images/intro/certification/certifications_02.jpg",
      name: "벤처기업 확인서",
    },
    {
      image: "/images/intro/certification/certifications_03.jpg",
      name: "기술혁신형 중소기업 확인서",
    },
    {
      image: "/images/intro/certification/certifications_04.jpg",
      name: "ISO 품질경영시스템 인증서",
    },
    {
      image: "/images/intro/certification/certifications_05.jpg",
      name: "글로벌 강소기업 지정서",
    },
    {
      image: "/images/intro/certification/certifications_06.jpg",
      name: "우수제품지정증서 2건",
    },
    {
      image: "/images/intro/certification/certifications_07.jpg",
      name: "우수구매추천확인서 2건",
    },
    {
      image: "/images/intro/certification/certifications_08.jpg",
      name: "ICT 품질 인증서",
    },
    {
      image: "/images/intro/certification/certifications_09.jpg",
      name: "품질인증(Q-MARK)지정서",
    },
    {
      image: "/images/intro/certification/certifications_10.jpg",
      name: "계량기 제작업 등록증",
    },
    {
      image: "/images/intro/certification/certifications_11.jpg",
      name: "KTC 형식승인서 9건",
    },
    {
      image: "/images/intro/certification/certifications_12.jpg",
      name: "CE인증서",
    },
    {
      image: "/images/intro/certification/certifications_13.jpg",
      name: "특허증 64건",
    },
    {
      image: "/images/intro/certification/certifications_14.jpg",
      name: "디자인등록증 34건",
    },
    {
      image: "/images/intro/certification/certifications_15.jpg",
      name: "실용신안등록증 9건",
    },
    {
      image: "/images/intro/certification/certifications_16.jpg",
      name: "녹색기술 인증서",
    },
    {
      image: "/images/intro/certification/certifications_17.jpg",
      name: "과학의날 표창장",
    },
    {
      image: "/images/intro/certification/certifications_18.jpg",
      name: "우량기술기업 선정서",
    },
    {
      image: "/images/intro/certification/certifications_19.jpg",
      name: "대한체육협회 감사장",
    },
    {
      image: "/images/intro/certification/certifications_20.jpg",
      name: "NTEP 미국 형식인증서",
    },
  ];

  return (
    <div>

      {/* 헤더 */}
      <MainHeader text={"전체 인력의 25%를 연구개발에 투입하여\n안정적이고 검증된 기술 경쟁력을 유지하고 있습니다."}/>
      
      <div className="w-full max-w-[1440px] mx-auto">
        {/* 인증서 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-x-4 md:gap-y-[125px]">
          {certificates.map((cert, index) => (
            <FadeUpOnView key={index} delay={index * 0.1}>
            <div 
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* 인증서 이미지 */}
              <div className="relative w-[300px] h-[400px] overflow-hidden transition-transform duration-300 group-hover:scale-105 border-gray-primary border">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-cover"
                />
                {/* border-gray-primary border-1 */}
              </div>
              
              {/* 인증서 이름 */}
              <div className="mt-4 h-[60px] flex items-start justify-center">
                <h3 className="text-center text-base md:text-[20px] text-black-primary whitespace-pre-line leading-relaxed">
                  {cert.name}
                </h3>
              </div>
            </div>
            </FadeUpOnView>
          ))}
        </div>
      </div>
    </div>
  );
}