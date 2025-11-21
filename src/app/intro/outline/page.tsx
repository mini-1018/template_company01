import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "개요 | G-TECH International",
  description: "좋은 사람들이 모여 사용하기 쉬운 제품을 만드는 즐거운 회사, 지테크인터내셔날입니다.",
  openGraph: {
    title: "개요 | G-TECH International",
    description: "좋은 사람들이 모여 사용하기 쉬운 제품을 만드는 즐거운 회사, 지테크인터내셔날입니다.",
  },
};

export default function OutlinePage() {
  return (
    <div className="w-full bg-white">
      {/* CEO 메시지 섹션 - 16:9 비율 */}
      <section className="relative w-full aspect-[16/9]">
        {/* 배경 이미지 */}
        <Image
          src="/images/intro/company_ceo.jpg"
          alt="지테크 본사 전경"
          fill
          className="object-cover"
          priority
        />
        
        {/* 텍스트 콘텐츠 - 왼쪽 배치 */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="w-full mx-auto px-8 md:px-24 lg:px-[200px]">
            <div className="max-w-4xl text-black-primary">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-[70px]">
                가족의 행복을 만드는 NO.1 기업
              </h3>

              <div className="w-[813px] text-[25px] md:text-[25px] leading-normal tracking-normal wrap-break-word ">
                <p>
                  주식회사 지테크인터내셔날은 좋은 사람들이 모여<br />
                  사용하기 쉬운 제품을 만드는 "즐거운 회사"입니다.
                </p>
                <br />
                <p>
                1995년 설립한 지테크인터내셔날은 하중 감지 센서기술을 기반으로
                측정 및 계량기술 개발에 매진하여 원천기술을 확보하였고 우수한 품질을 실현하고자
                산업용 · 헬스케어 · 농축산 · 친환경 분야에 대한 사업을 확장하며 성장했습니다.
                </p>
                <br />
                <p>
                지테크인터내셔날에서 개발된 모든 제품은 정확성 · 안전성 · 신뢰성에 대한
                "Safety system"을 적용하여 각 제품의 사용 환경에 최고의 성능을 발휘
                할 수 있도록 개발되었습니다.
                </p>
                <br />
                <p>
                "가족의 행복을 만드는 NO.1 기업" 슬로건을 바탕으로 언제나 고객 가까이에서
                기술 그 이상의 가치로 최고의 제품만을 추구하여 최상의 만족을 드리겠습니다.
                </p>
                <br />
                <p>
                  (주)지테크인터내셔날 대표이사 한성우
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 경영철학 섹션 */}
      <section className="relative w-full aspect-[16/9]">
        {/* 배경 이미지 */}
        <Image
          src="/images/intro/company_philosophy_bg.jpg"
          alt="경영철학 배경"
          fill
          className="object-cover"
          priority
        />
        
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        
        {/* 콘텐츠 */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-12">
          <div className="w-full max-w-7xl mx-auto text-center">
            {/* 상단 구분선 */}
            <div className="w-20 border-5 border-blue-secondary m-auto mb-[30px]"/>
            
            {/* 제목 */}
            <h3 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-white mb-[90px]">
              경영철학
            </h3>
            
            {/* 부제목 */}
            <p className="text-xl md:text-[50px] text-white mb-16 md:mb-20">
              "가족의 행복을 만드는 NO.1 기업"
            </p>
            
            <p className="text-base md:text-[25px] text-white mb-16 md:mb-20 mx-auto">
              높은 품질을 기반으로 고정밀 원천기술 확보와 핵심 산업의 강화를 통하여 브랜드 가치경쟁에 대한 목표를 이룹니다.
            </p>
            
            {/* 3가지 가치 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mx-auto">
              {/* 품질인증 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 relative mb-6">
                  <Image
                    src="/images/intro/intro_icon_01.png"
                    alt="품질인정"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl md:text-[30px] font-bold text-white mb-4">
                  품질인정
                </h4>
                <div className="w-[50px] border-2 border-white mx-auto mb-4"/>
                <p className="text-sm md:text-[25px] text-white/90">
                  기술력과 품질로 인정받는 기업
                </p>
              </div>
              
              {/* 기술강화 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 relative mb-6">
                  <Image
                    src="/images/intro/intro_icon_02.png"
                    alt="기술강화"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl md:text-[30px] font-bold text-white mb-4">
                  기술강화
                </h4>
                <div className="w-[50px] border-2 border-white mx-auto mb-4"/>
                <p className="text-sm md:text-[25px] text-white/90">
                  고정밀 원천 기술에 대한 핵심 사업 강화
                </p>
              </div>
              
              {/* 가치경영 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 relative mb-6">
                  <Image
                    src="/images/intro/intro_icon_03.png"
                    alt="가치경영"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl md:text-[30px] font-bold text-white mb-4">
                  가치경영
                </h4>
                <div className="w-[50px] border-2 border-white m-auto mb-4"/>
                <p className="text-sm md:text-[25px] text-white/90">
                  인공지능(AI)을 통한 브랜드 가치경영
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 본사 조직도 섹션 - 16:9 비율 */}
      <section className="relative w-full aspect-[16/9] bg-gray-50">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="w-20 border-5 border-blue-secondary m-auto mb-[30px]"/>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black-primary mb-[90px]">
                조직도
              </h3>
            </div>

            {/* 조직도 이미지 */}
            <div className="relative w-full max-w-6xl mx-auto">
              <div className="relative w-full aspect-2/1">
                <Image
                  src="/images/intro/company_organization.png"
                  alt="지테크 조직도"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 본사 CI 섹션 - 16:9 비율 */}
      <section className="relative w-full aspect-[16/9] bg-white">
        <div className="inset-0 flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="w-20 border-5 border-blue-secondary m-auto mb-[30px]"/>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black-primary mb-[90px]">
                CI
              </h3>
            </div>

            {/* CI 로고 이미지 */}
            <div className="relative w-full max-w-2xl mx-auto mb-12">
              <div className="relative w-full aspect-[16/6] flex items-center justify-center">
                <Image
                  src="/images/intro/logo_ci.png"
                  alt="지테크 CI"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>

            {/* Section 1 다운로드 버튼 */}
            <div className="text-center mb-16">
              <div className="flex justify-center gap-4">
                <div 
                  className="w-[250px] h-[60px] border border-black/10 cursor-pointer text-[15px] flex items-center justify-center font-bold gap-[15px] bg-gradient-to-t from-[#f0f0f0] to-[#ffffff]"
                >
                  CI DOWNLOAD
                <div className="w-[13px] h-[13px] relative">
                  <Image 
                    src={"/images/intro/download.png"}
                    alt="download icon"
                    fill
                  />
                </div>
                </div>
              </div>
            </div>

            {/* 의미 섹션 */}
            <div className="mb-12">
              <h4 className="text-xl md:text-2xl font-bold">의미</h4>
              <div className="w-full border border-gray-primary mt-[22px] mb-[40px]"/>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base list-disc list-inside">
                <li>국선의 정면는 유연한 확장성과 연결의 상징</li>
                <li>사선 처리된 그래픽 요소는 정밀하고 신뢰할 수 있는 기술의 상징</li>
                <li>정확함을 넘어는 불투과 균형과 가능성을 상징하는 스카이블루가 조화를 이루며 혁신과 열린 사고를 의미과 하는 의지</li>
              </ul>
            </div>

            {/* 규정 섹션 */}
            <div className="mb-12">
              <h4 className="text-xl md:text-2xl font-bold">규정</h4>
              <div className="w-full border border-gray-primary mt-[22px] mb-[40px]"/>
              <p className="text-gray-700 text-sm md:text-base mb-8">
                지테크인터내셔날의 전용 색상은 Process Color를 기본으로 합니다. 전용 색상은 지테크의 이미지를 가장 잘 나타내는 수단이므로 제시된 다자인 가이드 라인을 준수하여 사용하여야 합니다.
              </p>
              
              {/* 컬러 샘플 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1320px] mx-auto">
                {/* G-tech Blue */}
                <div className="flex items-center">
                  <div className="w-[300px] h-[100px] bg-blue-primary flex items-center justify-center">
                    <span className="text-white font-bold text-xl">G-tech Blue</span>
                  </div>
                  <div className="flex items-center justify-center gap-5 text-left w-[300px] h-[100px] text-sm border border-gray-primary">
                    <div className="font-bold">
                      <p>Printed Color</p>
                      <p>Process Color</p>
                      <p>RGB Color</p>
                    </div>
                    <div>
                      <p>PANTONE 288C</p>
                      <p>C100+M10+Y0+K15</p>
                      <p>R44+G34+B118</p>
                    </div>
                  </div>
                </div>

                {/* G-tech Sky Blue */}
                <div className="flex items-center">
                <div className="w-[300px] h-[100px] bg-blue-secondary flex items-center justify-center">
                    <span className="text-white font-bold text-xl">G-tech Sky Blue</span>
                  </div>
                  <div className="flex items-center justify-center gap-5 text-left w-[300px] h-[100px] text-sm space-y-1 border border-gray-primary">
                    <div className="font-bold">
                      <p>Printed Color</p>
                      <p>Process Color</p>
                      <p>RGB Color</p>
                    </div>
                    <div>
                      <p>PANTONE 2995C</p>
                      <p>C70+M15+Y0+K0</p>
                      <p>R54+G169+B225</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}