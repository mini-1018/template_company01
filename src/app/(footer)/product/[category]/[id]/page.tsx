import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById, getCategoryLabel } from "../../productDetailData";
import ProductActions from './ProductActions';

interface ProductDetailPageProps {
    params: Promise<{
        category: string;
        id: string;
    }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
    const { category, id } = await params;
    const product = getProductById(category, decodeURIComponent(id));

    if (!product) {
        notFound();
    }

    const categoryLabel = getCategoryLabel(category);

    return (
        <div>
            <div className="max-w-[1440px] mx-auto mb-16">
                <div className="flex items-center gap-2 text-[18px] text-black-primary">
                    <Link href={`/product/${category}`} className="hover:text-blue-secondary">
                        제품소개
                    </Link>
                    <span>&gt;</span>
                    <span className="text-blue-secondary font-semibold">{categoryLabel}</span>
                </div>
            </div>

            {/* 제품 정보 섹션 */}
            <section className="max-w-[1440px] mx-auto mb-32">
                <div className="flex gap-16">
                    {/* 제품 이미지 */}
                    <div className="relative w-[650px] h-[650px] shrink-0 border border-gray-primary">
                        <Image
                            src={product.thumbnail}
                            alt={product.name}
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* 제품 스펙 및 버튼들 */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h2 className="text-[32px] font-bold text-black-primary mb-6 px-6">
                            {product.name}
                        </h2>
                        <div className="border border-text-primary"></div>
                        <table className="w-full mt-10 mb-10">
                            <tbody>
                                {product.specs.map((spec, index) => (
                                    <tr key={index}>
                                        <th className="w-[140px] py-5 px-6 text-left text-[18px] font-semibold text-black-primary  whitespace-nowrap">
                                            {spec.label}
                                        </th>
                                        <td className="py-5 px-6 text-[18px] text-black-primary whitespace-pre-line">
                                            {spec.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="border border-gray-primary"></div>

                        <ProductActions />
                    </div>
                </div>
            </section>

            {/* 제품 상세 이미지 섹션 */}
            <section className="max-w-[1440px] mx-auto">
                <div className="flex flex-col">
                    {product.detailImages.map((imagePath, index) => (
                        <div key={index} className="w-full flex justify-center">
                            <Image
                                src={imagePath}
                                alt={`${product.name} 상세 이미지 ${index + 1}`}
                                width={0}
                                height={0}
                                className="w-auto h-auto"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
