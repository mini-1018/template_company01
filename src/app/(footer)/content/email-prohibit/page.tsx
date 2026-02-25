
import MainHeader from "@/src/shared/component/MainHeader";
import FadeUpOnView from "@/src/shared/component/FadeUpOnView";
import Image from "next/image";

export default function EmailProhibitPage() {
    return (

        <div className="min-h-screen">
            {/* 히어로 섹션 */}
            <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                    src={"/images/subtop/subtop_01_01.jpg"}
                    alt={"이메일무단수집거부"}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl md:text-[60px] font-bold text-white mb-8">
                        이메일무단수집거부
                    </h1>
                    <div className="flex items-center gap-2 text-white text-sm md:text-[25px]">
                        No unauthorized email collection
                    </div>
                </div>
            </div>


            {/* 페이지 콘텐츠 */}
            <main className="w-full bg-white pt-[100px] pb-[200px]">

                <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                    <FadeUpOnView>
                        <MainHeader text={"이메일 무단 수집 거부"} />
                    </FadeUpOnView>

                    <div className="max-w-[900px]">
                        {/* 안내 박스 */}
                        <div className="bg-blue-50 border-l-4 border-blue-secondary p-8 mb-8">
                            <div className="flex items-start gap-4">
                                <div>
                                    <h3 className="text-[22px] font-bold text-black-primary mb-3">
                                        이메일 무단 수집 금지
                                    </h3>
                                    <p className="text-[18px] text-gray-700 leading-relaxed">
                                        본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 법적 근거 */}
                        <div className="bg-gray-50 rounded-lg p-8 mb-8">
                            <h4 className="text-[20px] font-bold text-black-primary mb-4 flex items-center gap-2">
                                법적 근거
                            </h4>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="text-blue-secondary font-bold text-[18px]">•</span>
                                    <p className="text-[18px] text-gray-700">
                                        <span className="font-semibold">관련 법률:</span> 정보통신망 이용촉진 및 정보보호 등에 관한 법률
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-blue-secondary font-bold text-[18px]">•</span>
                                    <p className="text-[18px] text-gray-700">
                                        <span className="font-semibold">조항:</span> 제50조의2
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-blue-secondary font-bold text-[18px]">•</span>
                                    <p className="text-[18px] text-gray-700">
                                        <span className="font-semibold">처벌:</span> 1년 이하의 징역 또는 1천만 원 이하의 벌금
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 추가 안내 */}
                        <div className="border border-gray-primary p-8">
                            <h4 className="text-[20px] font-bold text-black-primary mb-4">
                              연락 방법
                            </h4>
                            <p className="text-[18px] text-gray-700 leading-relaxed mb-4">
                                공식적인 문의나 제휴 제안은 아래 방법을 이용해 주시기 바랍니다:
                            </p>
                            <ul className="space-y-2 text-[18px] text-gray-700">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-secondary rounded-full"></span>
                                    고객센터: <span className="font-semibold">031-852-4070</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-secondary rounded-full"></span>
                                    이메일: <span className="font-semibold">seob@gtech21.net</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-secondary rounded-full"></span>
                                    온라인 문의: <a href="/support/contact" className="text-blue-secondary hover:underline">문의하기 페이지</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>

            </main>
        </div>
    );
}