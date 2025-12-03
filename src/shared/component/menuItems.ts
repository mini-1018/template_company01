export const menuItems = [
    {
      name: "회사소개",
      submenu: [
        { label: "개요", path: "/intro/about" },
        { label: "사업분야", path: "/intro/business" },
        { label: "연혁", path: "/intro/history" },
        { label: "인증현황", path: "/intro/certifications" },
        { label: "납품실적", path: "/intro/performance" },
        { label: "위치안내", path: "/intro/location" },
      ],
    },
    {
      name: "제품소개",
      submenu: [
        { label: "친환경", path: "/product/environmental" },
        { label: "헬스케어", path: "/product/healthcare" },
        { label: "농축산", path: "/product/smartfarm" },
        { label: "산업용", path: "/product/industrial" },
      ],
    },
    {
      name: "미디어",
      submenu: [
        { label: "보도자료", path: "/media/releases" },
        { label: "소셜미디어", path: "/media/social" },
      ],
    },
    {
      name: "고객지원",
      submenu: [
        // { label: "공지사항", path: "/support/notice" },
        { label: "다운로드", path: "/support/downloads" },
        { label: "고객문의", path: "/support/contact" },
      ],
    },
  ];