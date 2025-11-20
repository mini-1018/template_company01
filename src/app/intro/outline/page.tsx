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
      {/* CEO 메시지 섹션 */}
      <section className="w-full py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden">
            {/* 배경 이미지 */}
            <Image
              src="/images/intro/company_ceo.jpg"
              alt="지테크 본사 전경"
              fill
              className="object-cover"
              priority
            />
            
            {/* 텍스트 콘텐츠 - 왼쪽 배치 */}
            <div className="relative z-10 h-full flex items-center px-8 md:px-12 lg:px-16 py-12">
              <div className="max-w-2xl text-black-primary">
                <h3 className="text-3xl font-bold mb-6 drop-shadow-lg">
                  안녕하세요 지테크인터내셔날 입니다.
                </h3>

                <div className="space-y-4 text-sm md:text-base leading-relaxed drop-shadow-md">
                  <p>
                    (주)지테크인터내셔날은 좋은사람들이 모여<br />
                    사용하기쉬운 제품을 만드는 <span className="font-bold">"즐거운 회사"</span>입니다.
                  </p>

                  <p>
                    1995년 설립한 지테크인터내셔날은 하중 감지 센서기술을 기반으로 측정 및 계량기술 개발에 매진하여 원천기술을 확보하였고, 
                    우수한 품질을 실현하고자 산업용시스템분야, 건강관리 측정분야, 농축산계량분야, 음식물 쓰레기 종량제 분야에 대한 사업을 확장하며 성장했습니다.
                  </p>

                  <p>
                    ㈜지테크인터내셔날에서 개발된 모든제품은 정확성, 안전성, 신뢰성에 대한 <span className="font-bold">"Safety system"</span>을 적용하여 
                    각 제품의 사용 환경에 최고의 성능을 발휘할수있도록 개발되었습니다.
                  </p>

                  <p>
                    언제나 고객 가까이에서 기술 그 이상의 가치로 최고의 제품만을 추구하여 최상의 만족을 드리겠습니다.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/30">
                  <p className="text-lg md:text-xl font-bold drop-shadow-lg">
                    대표이사 한성우
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 본사 조직도 섹션 */}
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              본사 조직도
            </h3>
            <p className="text-lg md:text-xl text-blue-primary font-semibold mb-8">
              가치를 만드는 기업! 지테크인터내셔날
            </p>
            <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                지테크 조직도는 미래지향적으로서, 누구나 자기의 능력을 최고로 발휘할 수 있는 시스템입니다.
              </p>
              <p className="text-base md:text-lg">
                각 구성원들은 최고의 능력을 발휘하고, 경영진은 다년간 쌓아온 경험을 바탕으로 선택이 아닌 결정을 할 수 있습니다.
              </p>
              <p className="text-base md:text-lg">
                지테크 조직시스템의 최고 장점은 신입사원의 간단한 아이디어가 빠른 기간내에 제품으로 출시 될 수 있는 
                <span className="text-blue-primary font-semibold"> 능력 위주 조직</span>이라는 것입니다.
              </p>
            </div>
          </div>

          {/* 조직도 이미지 */}
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-2xl bg-white">
              <Image
                src="/images/intro/company_organization.png"
                alt="지테크 조직도"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}