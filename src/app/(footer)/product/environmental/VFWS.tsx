import ProductCard from "../ProductCard";

const vfws = [
    { src: "/images/intro/performance/performance_01_01.jpg", title: "차량용 RFID", content: "GRC700" },
]


export default function VFWS() {
    return (
        <div className="grid grid-cols-[repeat(3,minmax(0,400px))] justify-between gap-y-25">
          {vfws.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
        );
}