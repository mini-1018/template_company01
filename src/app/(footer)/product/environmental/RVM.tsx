import ProductCard from "../ProductCard";

const rvm = [
    { src: "/images/intro/performance/performance_01_01.jpg", title: "재활용품 무인회수기(압축형)", content: "GRC700" },
    { src: "/images/intro/performance/performance_01_01.jpg", title: "재활용품 무인회수기(압축형)", content: "GRC800" },
    { src: "/images/intro/performance/performance_01_01.jpg", title: "재활용품 무인회수기(압축형)", content: "GRC900" },
    { src: "/images/intro/performance/performance_01_01.jpg", title: "재활용품 무인회수기(파쇄형)", content: "GRC1000" },
    { src: "/images/intro/performance/performance_01_01.jpg", title: "재활용품 무인회수기(ESG압축형)", content: "GRC2000" },
    { src: "/images/intro/performance/performance_01_01.jpg", title: "재활용품 무인회수기(ESG압축형)", content: "GRC2100" },
    { src: "/images/intro/performance/performance_01_01.jpg", title: "재활용품 무인회수기(ESG파쇄형)", content: "GRC2200" },
    { src: "/images/intro/performance/performance_01_01.jpg", title: "폐식용유회수기", content: "GOS-060KM" },
]


export default function RVM() {
    return (
        <div className="grid grid-cols-[repeat(3,minmax(0,400px))] justify-between gap-y-25">
          {rvm.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
        );
}