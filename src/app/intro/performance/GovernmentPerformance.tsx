import PerformanceCard from "./PerformanceCard";

const government = [
  { src: "/images/intro/performance/performance_01_01.jpg", title: "인천국제공항", content: "수하물 콘베어 스케일" },
  { src: "/images/intro/performance/performance_01_02.jpg", title: "김포공항", content: "수하물 콘베어 스케일" },
  { src: "/images/intro/performance/performance_01_03.jpg", title: "제주공항", content: "수하물 콘베어 스케일" },
  { src: "/images/intro/performance/performance_01_04.jpg", title: "여수공항", content: "수하물 콘베어 스케일" },
  { src: "/images/intro/performance/performance_01_05.jpg", title: "대한적십자사", content: "혈액팩 체크 시스템" },
  { src: "/images/intro/performance/performance_01_06.jpg", title: "한국담배인삼공사", content: "홍삼선별기 및 PC 프로그램" },
  { src: "/images/intro/performance/performance_01_07.jpg", title: "소방공사", content: "스프링쿨러 물분포도\n확인검사 시스템" },
  { src: "/images/intro/performance/performance_01_08.jpg", title: "축산 기술 연구소", content: "개체 관리 시스템" },
];

export default function GovernmentPerformance() {
  return (
    <div className="grid grid-cols-5 gap-x-10 gap-y-25">
      {government.map((item, index) => (
        <PerformanceCard key={index} {...item} />
      ))}
    </div>
  );
}
