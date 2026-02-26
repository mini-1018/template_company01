import ProductCard from "../ProductCard";

const vfws = [
  { id: "GRC900", category: "environmental", src: "/images/product/product_test.jpg", title: "재활용품 무인회수기(압축형)", content: "GRC900" },
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