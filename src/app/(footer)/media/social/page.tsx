import MainHeader from "@/src/shared/component/MainHeader";
import SocialCard from "./socialCard";

export default function SocialPage() {
  const brands = [
    {
      id: 1,
      brandLogo: "/images/logo/logo_gtech.png",
      brandName: "지테크인터내셔날",
      title: "지테크인터내셔날",
      socialLinks: [
        { platform: "blog" as const, url: "https://blog.naver.com/gtech_official" },
        { platform: "instagram" as const, url: "https://www.instagram.com/gtech_international/" },
        { platform: "youtube" as const, url: "https://www.youtube.com/@Gtech-international" },
      ],
    },
    {
      id: 2,
      brandLogo: "/images/logo/logo_coda.png",
      brandName: "코다",
      title: "친환경 자원 순환 브랜드 코다",
      socialLinks: [
        { platform: "blog" as const, url: "https://blog.naver.com/gtech_official" },
        { platform: "instagram" as const, url: "https://www.instagram.com/gtech_international/" },
        { platform: "youtube" as const, url: "https://www.youtube.com/@Gtech-international" },
      ],
    },
  ];

  return (
    <>
        <div>
            {/* 헤더 */}
            <MainHeader text={"지테크인터내셔날의 흥미로운 소식과 \n 다양한 활동 소식을 한 곳에서 확인하실 수 있습니다."}/>
    
            <div className="max-w-[1440px] mx-auto flex flex-col gap-20">
              {brands.map((brand) => (
                <SocialCard
                  key={brand.id}
                  brandLogo={brand.brandLogo}
                  brandName={brand.brandName}
                  title={brand.title}
                  socialLinks={brand.socialLinks}
                />
              ))}
            </div>
        </div>
    </>
  );
}