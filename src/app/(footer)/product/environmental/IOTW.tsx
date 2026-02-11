import ProductCard from "../ProductCard";

const iotw = [
    { id: "GRC700", category: "environmental", src: "/images/product/product_test.jpg", title: "IOT 자원계측 시스템", content: "GRC700" },
]


export default function IOTW() {
    return (
        <div className="grid grid-cols-[repeat(3,minmax(0,400px))] justify-between gap-y-25">
          {iotw.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
        );
}