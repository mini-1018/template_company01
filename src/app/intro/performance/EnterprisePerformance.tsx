import PerformanceCard from "./PerformanceCard";

const enterprise = [
    { src: "/images/intro/performance/performance_02_01.jpg", title: "삼성SDI", content: "배터리 각 전지 충진검사기" },
    { src: "/images/intro/performance/performance_02_02.jpg", title: "삼성전기", content: "발란스 저울 외" },
    { src: "/images/intro/performance/performance_02_03.jpg", title: "삼성전자", content: "발란스 저울 외 다이오드 인장시험기" },
    { src: "/images/intro/performance/performance_02_04.jpg", title: "삼성엔지니어링", content: "업다운 스케일" },
    { src: "/images/intro/performance/performance_02_05.jpg", title: "삼성디스플레이", content: "업다운 스케일 외" },
    { src: "/images/intro/performance/performance_02_06.jpg", title: "LG화학", content: "호파 탱크용 로드셀 외" },
    { src: "/images/intro/performance/performance_02_07.jpg", title: "LG디스플레이", content: "업다운 스케일 외" },
    { src: "/images/intro/performance/performance_02_08.jpg", title: "LG반도체", content: "가스 계량 시스템" },
    { src: "/images/intro/performance/performance_02_09.jpg", title: "현대반도체", content: "가스 계량 시스템" },
    { src: "/images/intro/performance/performance_02_10.jpg", title: "삼성반도체", content: "가스 계량 시스템" },
    { src: "/images/intro/performance/performance_02_11.jpg", title: "하림", content: "닭 자동 개체관리" },
    { src: "/images/intro/performance/performance_02_12.jpg", title: "조선일보", content: "정남사옥 잉크 계량 시스템" },
    { src: "/images/intro/performance/performance_02_13.jpg", title: "TS대한제당", content: "설탕 지대백 Weight Checker" },
    { src: "/images/intro/performance/performance_02_14.jpg", title: "영미식품", content: "식용유 Weight Checker" },
    { src: "/images/intro/performance/performance_02_15.jpg", title: "태평양", content: "박스 Weight Checker" },
    { src: "/images/intro/performance/performance_02_16.jpg", title: "한국신문잉크", content: "잉크 계량 시스템" },
    { src: "/images/intro/performance/performance_02_17.jpg", title: "대우일렉트로닉스", content: "청소기 부품 Weight Checker" },
    { src: "/images/intro/performance/performance_02_18.jpg", title: "베스콘", content: "렌즈 세정액 충진 시스템" },
    { src: "/images/intro/performance/performance_02_19.jpg", title: "신화오로라", content: "테이프 인장시험기" },
    { src: "/images/intro/performance/performance_02_20.jpg", title: "세방전지", content: "배터리액 주입 및 중량검사기" },
    { src: "/images/intro/performance/performance_02_21.jpg", title: "두영에너지", content: "자동차 에어컨 가스 충진 콘트롤러" },
    { src: "/images/intro/performance/performance_02_22.jpg", title: "라이프종합무역", content: "유리 투명도 검사장비" },
    { src: "/images/intro/performance/performance_02_23.jpg", title: "창원특수강", content: "압연 강파 검사 시스템" },
];


export default function EnterprisePerformance() {
    return (
        <div className="grid grid-cols-[repeat(4,minmax(0,300px))] justify-between gap-y-25">
        {enterprise.map((item, index) => (
            <PerformanceCard key={index} {...item} />
        ))}
        </div>
    );
}