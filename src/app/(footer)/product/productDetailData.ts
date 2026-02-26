export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductDetail {
  id: string;
  category: string;
  name: string;
  model: string;
  specs: ProductSpec[];
  thumbnail: string;
  productImage: string;
  detailImages: string[];
}

const productDetailData: ProductDetail[] = [
  // ===== 친환경 (Environmental) =====
  {
    id: "GRC900",
    category: "environmental",
    name: "재활용품 무인회수기(압축형)",
    model: "GRC700",
    specs: [
      { label: "모델명", value: "GRC900" },
      { label: "크기", value: "1,200 × 800 × 1,800 mm" },
      { label: "무게", value: "약 250 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImages: Array.from({ length: 10 }, (_, i) => `/images/product/grc900/GRC900_${String(i + 1).padStart(2, '0')}.jpg`),
  },
];

export function getProductById(category: string, id: string): ProductDetail | undefined {
  return productDetailData.find(
    (product) => product.category === category && product.id === id
  );
}

export function getProductsByCategory(category: string): ProductDetail[] {
  return productDetailData.filter((product) => product.category === category);
}

const categoryLabelMap: Record<string, string> = {
  environmental: "친환경",
  healthcare: "헬스케어",
  smartfarm: "농축산",
  industrial: "산업용",
};

export function getCategoryLabel(category: string): string {
  return categoryLabelMap[category] || category;
}

export default productDetailData;
