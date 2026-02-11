import ProductCard from "../ProductCard";

const rvm = [
    { id: "GRC700", category: "environmental", src: "/images/product/product_test.jpg", title: "재활용품 무인회수기(압축형)", content: "GRC700" },
    { id: "GRC800", category: "environmental", src: "/images/product/product_test.jpg", title: "재활용품 무인회수기(압축형)", content: "GRC800" },
    { id: "GRC900", category: "environmental", src: "/images/product/product_test.jpg", title: "재활용품 무인회수기(압축형)", content: "GRC900" },
    { id: "GRC1000", category: "environmental", src: "/images/product/product_test.jpg", title: "재활용품 무인회수기(파쇄형)", content: "GRC1000" },
    { id: "GRC2000", category: "environmental", src: "/images/product/product_test.jpg", title: "재활용품 무인회수기(ESG압축형)", content: "GRC2000" },
    { id: "GRC2100", category: "environmental", src: "/images/product/product_test.jpg", title: "재활용품 무인회수기(ESG압축형)", content: "GRC2100" },
    { id: "GRC2200", category: "environmental", src: "/images/product/product_test.jpg", title: "재활용품 무인회수기(ESG파쇄형)", content: "GRC2200" },
    { id: "GOS-060KM", category: "environmental", src: "/images/product/product_test.jpg", title: "폐식용유회수기", content: "GOS-060KM" },
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