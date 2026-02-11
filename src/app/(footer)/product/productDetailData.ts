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
  detailImage: string;
}

const productDetailData: ProductDetail[] = [
  // ===== 친환경 (Environmental) =====
  {
    id: "GRC700",
    category: "environmental",
    name: "재활용품 무인회수기(압축형)",
    model: "GRC700",
    specs: [
      { label: "모델명", value: "GRC700" },
      { label: "크기", value: "1,200 × 800 × 1,800 mm" },
      { label: "무게", value: "약 250 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },
  {
    id: "GRC800",
    category: "environmental",
    name: "재활용품 무인회수기(압축형)",
    model: "GRC800",
    specs: [
      { label: "모델명", value: "GRC800" },
      { label: "크기", value: "1,400 × 900 × 2,000 mm" },
      { label: "무게", value: "약 300 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },
  {
    id: "GRC900",
    category: "environmental",
    name: "재활용품 무인회수기(압축형)",
    model: "GRC900",
    specs: [
      { label: "모델명", value: "GRC900" },
      { label: "크기", value: "1,500 × 1,000 × 2,100 mm" },
      { label: "무게", value: "약 350 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },
  {
    id: "GRC1000",
    category: "environmental",
    name: "재활용품 무인회수기(파쇄형)",
    model: "GRC1000",
    specs: [
      { label: "모델명", value: "GRC1000" },
      { label: "크기", value: "1,600 × 1,100 × 2,200 mm" },
      { label: "무게", value: "약 400 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },
  {
    id: "GRC2000",
    category: "environmental",
    name: "재활용품 무인회수기(ESG압축형)",
    model: "GRC2000",
    specs: [
      { label: "모델명", value: "GRC2000" },
      { label: "크기", value: "1,800 × 1,200 × 2,400 mm" },
      { label: "무게", value: "약 500 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },
  {
    id: "GRC2100",
    category: "environmental",
    name: "재활용품 무인회수기(ESG압축형)",
    model: "GRC2100",
    specs: [
      { label: "모델명", value: "GRC2100" },
      { label: "크기", value: "1,900 × 1,300 × 2,500 mm" },
      { label: "무게", value: "약 520 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },
  {
    id: "GRC2200",
    category: "environmental",
    name: "재활용품 무인회수기(ESG파쇄형)",
    model: "GRC2200",
    specs: [
      { label: "모델명", value: "GRC2200" },
      { label: "크기", value: "2,000 × 1,400 × 2,600 mm" },
      { label: "무게", value: "약 550 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },
  {
    id: "GOS-060KM",
    category: "environmental",
    name: "폐식용유회수기",
    model: "GOS-060KM",
    specs: [
      { label: "모델명", value: "GOS-060KM" },
      { label: "크기", value: "800 × 600 × 1,500 mm" },
      { label: "무게", value: "약 120 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },

  // ===== 헬스케어 (Healthcare) =====
  {
    id: "GL-150R",
    category: "healthcare",
    name: "신장 체중 자동 측정기 GL-150R 시리즈",
    model: "GL-150R, GL-150RC, GL-150RP, GL-150RB, GL-150RWT, FAPS-100",
    specs: [
      { label: "모델명", value: "GL-150R, GL-150RC, GL-150RP, GL-150RB,\nGL-150RWT, FAPS-100" },
      { label: "크기", value: "330 × 520 × 2,200 mm" },
      { label: "무게", value: "약 13 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },
  {
    id: "GL-310",
    category: "healthcare",
    name: "환자용 측정기 GL-310 시리즈",
    model: "GL-310, GL-310P",
    specs: [
      { label: "모델명", value: "GL-310, GL-310P" },
      { label: "크기", value: "600 × 600 × 1,200 mm" },
      { label: "무게", value: "약 25 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },
  {
    id: "GHS-100",
    category: "healthcare",
    name: "손소독기 GHS-100",
    model: "GHS-100",
    specs: [
      { label: "모델명", value: "GHS-100" },
      { label: "크기", value: "280 × 150 × 380 mm" },
      { label: "무게", value: "약 3 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },
  {
    id: "GPW-200",
    category: "healthcare",
    name: "반려동물 체중계 GPW-200",
    model: "GPW-200",
    specs: [
      { label: "모델명", value: "GPW-200" },
      { label: "크기", value: "600 × 400 × 100 mm" },
      { label: "무게", value: "약 5 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },

  // ===== 농축산 (Smart Farm) =====
  {
    id: "GFS-500",
    category: "smartfarm",
    name: "과일 선별기 GFS-500",
    model: "GFS-500",
    specs: [
      { label: "모델명", value: "GFS-500" },
      { label: "크기", value: "3,000 × 1,500 × 1,800 mm" },
      { label: "무게", value: "약 800 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },
  {
    id: "GTB-1000",
    category: "smartfarm",
    name: "자동 톤백 저울 GTB-1000",
    model: "GTB-1000",
    specs: [
      { label: "모델명", value: "GTB-1000" },
      { label: "크기", value: "2,000 × 2,000 × 3,000 mm" },
      { label: "무게", value: "약 500 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },
  {
    id: "GAS-300",
    category: "smartfarm",
    name: "농산물 자동 선별기 GAS-300",
    model: "GAS-300",
    specs: [
      { label: "모델명", value: "GAS-300" },
      { label: "크기", value: "2,500 × 1,200 × 1,600 mm" },
      { label: "무게", value: "약 600 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },

  // ===== 산업용 (Industrial) =====
  {
    id: "GI-100",
    category: "industrial",
    name: "인디케이터 GI-100",
    model: "GI-100",
    specs: [
      { label: "모델명", value: "GI-100" },
      { label: "크기", value: "240 × 170 × 90 mm" },
      { label: "무게", value: "약 1.2 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },
  {
    id: "GLC-500",
    category: "industrial",
    name: "로드셀 GLC-500",
    model: "GLC-500",
    specs: [
      { label: "모델명", value: "GLC-500" },
      { label: "크기", value: "100 × 100 × 50 mm" },
      { label: "무게", value: "약 2 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
  },
  {
    id: "GPS-2000",
    category: "industrial",
    name: "플랫폼 스케일 GPS-2000",
    model: "GPS-2000",
    specs: [
      { label: "모델명", value: "GPS-2000" },
      { label: "크기", value: "1,500 × 1,500 × 100 mm" },
      { label: "무게", value: "약 150 kg" },
      { label: "제조국", value: "대한민국" },
    ],
    thumbnail: "/images/product/product_test.jpg",
    productImage: "/images/product/product_test.jpg",
    detailImage: "/images/test.png",
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
