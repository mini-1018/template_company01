import ProductCard from "../ProductCard";

const fws = [
    { src: "/images/intro/performance/performance_01_01.jpg", title: "음식물 종량기", content: "GRC700" },
    { src: "/images/intro/performance/performance_01_01.jpg", title: "음식물 종량기", content: "GRC700" },
    { src: "/images/intro/performance/performance_01_01.jpg", title: "음식물 종량기", content: "GRC700" },
    { src: "/images/intro/performance/performance_01_01.jpg", title: "음식물 종량기", content: "GRC700" },
]


export default function FWS() {
    return (
        <div className="grid grid-cols-[repeat(3,minmax(0,400px))] justify-between gap-y-25">
          {fws.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
        );
}