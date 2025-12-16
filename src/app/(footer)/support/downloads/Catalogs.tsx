import DownloadCard from "./DownloadCard";

export default function Catalogs() {

    const downloads = [
        {
            src: "/images/product/product_test.jpg",
            title: "제품 카탈로그 1",
            link: "/downloads/catalog1.pdf"
        },
        {
            src: "/images/product/product_test.jpg",
            title: "제품 카탈로그 2",
            link: "/downloads/catalog1.pdf"
        },
        {
            src: "/images/product/product_test.jpg",
            title: "제품 카탈로그 3",
            link: "/downloads/catalog1.pdf"
        },
        {
            src: "/images/product/product_test.jpg",
            title: "제품 카탈로그 4",
            link: "/downloads/catalog1.pdf"
        },
        {
            src: "/images/product/product_test.jpg",
            title: "제품 카탈로그 5",
            link: "/downloads/catalog1.pdf"
        },
    ];


    return (
        <div className="grid grid-cols-[repeat(3,minmax(0,400px))] justify-between gap-y-25">
            {downloads.map(
                (item, index) => (
                    <DownloadCard 
                        key={index}
                        {...item}
                    />
                )
            )}
        </div>
    );
}