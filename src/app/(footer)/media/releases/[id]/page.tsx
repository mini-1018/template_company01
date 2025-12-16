"use client";

import FadeUpOnView from "@/src/shared/component/FadeUpOnView";
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

        지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 ‘축복의 땅’이다.

        이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이 담겼다. 화면에는 현실에 존재하지 않는 ‘파랑새 나무’가 등장하며, 이는 희망을 상징하는 상상 속 존재다. 작가는 이 나무를 통해 고단한 삶에서 벗어나 기쁨과 위로를 찾아가는 인간의 여정을 은유했다.

        ‘축복의 땅’은 단순한 자연 풍경을 넘어 내면의 회복과 재도약을 암시하는 작품으로 평가된다. 

        한성우 대표는 "많은 시민이 이 그림을 통해 작은 위로와 희망을 얻길 바란다"고 말했다.

        해당 작품은 시청 본관 대강당 앞에 상설 전시된다. 시는 이번 기증을 계기로 시청 공간을 시민과 예술이 만나는 문화공간으로 조성할 방침이다.

        김동근 시장은 "귀한 작품을 나눠주신 데 깊이 감사드린다"며 "시도 시민 모두에게 희망을 전하는 도시가 되도록 최선을 다하겠다"고 말했다.

        의정부=안유신 기자 ays@kihoilbo.co.kr

        출처 : 기호일보 (www.kihoilbo.co.kr/news/articleView.html?idxno=1144308)
    `,
      date: "2025-05-18",
      image: "/images/media/releases/release01.png"
    }

  const safeContent = DOMPurify.sanitize(releases.content);


  return (
    <>
      <FadeUpOnView>
        <MainHeader text={"지테크인터내셔날의 흥미로운 소식과 \n 다양한 활동 소식을 한 곳에서 확인하실 수 있습니다."} />
      </FadeUpOnView>

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