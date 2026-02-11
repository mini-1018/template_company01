import ProductCard from "../ProductCard";

const fws = [
    { id: "GRC700", category: "environmental", src: "/images/product/product_test.jpg", title: "음식물 종량기", content: "GRC700" },
    { id: "GRC700", category: "environmental", src: "/images/product/product_test.jpg", title: "음식물 종량기", content: "GRC700" },
    { id: "GRC700", category: "environmental", src: "/images/product/product_test.jpg", title: "음식물 종량기", content: "GRC700" },
    { id: "GRC700", category: "environmental", src: "/images/product/product_test.jpg", title: "음식물 종량기", content: "GRC700" },
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