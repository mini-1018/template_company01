"use client";

import MainHeader from "@/src/shared/component/MainHeader";
import DOMPurify from "dompurify";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ReleasePage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"release" | "notice">("release");

  // 더미 데이터
  const releases = 
    {
      id: 1,
      title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
      content: `
      <img src="/images/media/releases/release01.png" alt="축복의 땅" style="height:auto; margin-bottom:20px;" />
      용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다.

지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 '축복의 땅'이다.

이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이 담겨 있다. 화면에 펼쳐진 꽃밭과 인물 등을 통해 희망과 위로의 기쁨을 전달하는 작품이며, 한 작가의 대표적 화풍이 잘 드러나는 작품으로도 알려져 있다. 그의 작품은 한국미술의 정통성을 지킨다는 평가가 있으며, 지난 2021년 기쁨으로 작품이 경기도 소장품으로 선정되기도 했다.

예술 작품을 단순히 거래 상품이 아닌 비대적 창의성을 담은 그릇이라고 믿고 애정을 보여온 한 대표는 대학교 재학 시절부터 이어온 미술에 대한 관심으로 이어졌다.

한성우 대표는 "많은 사람이 아름다운 미술이 삶에 주는 긍정적 전달을 받아가길 바란다"며 "앞으로도 예술을 사랑하고 예술이 삶을 뒷받침하는 이번과 같은 기증 기회를 마련할 계획"이라고 전했다.

입춘성 시장은 "귀한 작품을 나눠주신 한성우 대표께 감사를 드린다"며 "시는 이번 기증품을 계기로 시민 공공장소에 미술 공공재산을 확대할 수 있도록 더 노력하겠다"고 전했다.

정임작 상품은 www.kiheiho.co.kr

출처 : 기호일보(https://www.kihoilbo.co.kr/news/articleView.html?idxno=1144308)`,
      date: "2025-05-18",
      image: "/images/media/releases/release01.png"
    }

  const safeContent = DOMPurify.sanitize(releases.content);


  return (
    <>
      <MainHeader text={"지테크인터내셔날의 흥미로운 소식과 \n 다양한 활동 소식을 한 곳에서 확인하실 수 있습니다."} />

        {/* 본문 컨테이너 */}
        <div className="w-[1440px] mx-auto">

          {/* 제목과 날짜 */}
          <div className="border-b-2 border-b-gray-primary border-t-2 border-t-black-primary mb-8 flex items-center justify-between px-[50px] h-[100px] bg-gray-secondary">
            <h1 className="font-bold text-black-primary text-[30px]">
              {releases.title}
            </h1>
            <p className="text-black-primary text-[25px]">{releases.date}</p>
          </div>

          {/* 본문 내용 */}
          <div className="prose max-w-none mb-16">
            <div
                className="text-base md:text-lg leading-relaxed text-black-primary whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: safeContent }}
            />
            </div>

        <div className="border-b border-b-gray-primary"/>

          {/* 목록 */}
          <div className="flex justify-center mt-25">
            <button
              onClick={() => router.push("/media/releases")}
              className="w-[350px] h-[75px] bg-gray-secondary text-black-primary text-[25px] hover:bg-gray-primary transition-colors flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              목록
            </button>
          </div>
        </div>
    </>
  );
}