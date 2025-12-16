"use client";

import MainHeader from "@/src/shared/component/MainHeader";
import ReleaseCard from "./releaseCard";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FadeUpOnView from "@/src/shared/component/FadeUpOnView";

export default function ReleasesPage() {
    const [visibleCount, setVisibleCount] = useState(5);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const releases = [
        {
            id: 1,
            title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
            content: `용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 

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
        },
        {
            id: 2,
            title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
            content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 '축복의 땅'이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
            date: "2025-05-18",
            image: "/images/media/releases/release01.png"
        },
        {
            id: 3,
            title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
            content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 '축복의 땅'이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
            date: "2025-05-18",
            image: "/images/media/releases/release01.png"
        },
        {
            id: 4,
            title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
            content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 '축복의 땅'이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
            date: "2025-05-18",
            image: "/images/media/releases/release01.png"
        },
        {
            id: 5,
            title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
            content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 '축복의 땅'이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
            date: "2025-05-18",
            image: "/images/media/releases/release01.png"
        },
        {
            id: 6,
            title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
            content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 '축복의 땅'이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
            date: "2025-05-18",
            image: "/images/media/releases/release01.png"
        },
        {
            id: 7,
            title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
            content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 '축복의 땅'이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
            date: "2025-05-18",
            image: "/images/media/releases/release01.png"
        },
        {
            id: 8,
            title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
            content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 '축복의 땅'이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
            date: "2025-05-18",
            image: "/images/media/releases/release01.png"
        },
        {
            id: 9,
            title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
            content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 '축복의 땅'이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
            date: "2025-05-18",
            image: "/images/media/releases/release01.png"
        },
        {
            id: 10,
            title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
            content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 '축복의 땅'이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
            date: "2025-05-18",
            image: "/images/media/releases/release01.png"
        },
        {
            id: 11,
            title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
            content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 '축복의 땅'이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
            date: "2025-05-18",
            image: "/images/media/releases/release01.png"
        },
    ];

    const handleReleaseClick = (id: number) => {
        router.push(`/media/releases/${id}`);
    }

    const handleLoadMore = async () => {
        setIsLoading(true);

        // 로딩 시뮬레이션 (실제로는 API 호출)
        await new Promise(resolve => setTimeout(resolve, 1000));

        setVisibleCount(prev => prev + 5);
        setIsLoading(false);
    };

    const visibleReleases = releases.slice(0, visibleCount);
    const hasMore = visibleCount < releases.length;

    return (
        <>
            <div>
                {/* 헤더 */}
                <FadeUpOnView>
                    <MainHeader text={"지테크인터내셔날의 흥미로운 소식과 \n 다양한 활동 소식을 한 곳에서 확인하실 수 있습니다."} />
                </FadeUpOnView>

                <div className="max-w-[1440px] mx-auto border-b border-gray-primary">
                    {visibleReleases.map((release) => (
                        <ReleaseCard
                            key={release.id}
                            title={release.title}
                            content={release.content}
                            date={release.date}
                            image={release.image}
                            onClick={() => handleReleaseClick(release.id)}
                        />
                    ))}
                </div>

                {/* 더보기 버튼 - 더 볼 데이터가 있을 때만 표시 */}
                {hasMore && (
                    <div className="flex justify-center mt-25">
                        <button
                            onClick={handleLoadMore}
                            disabled={isLoading}
                            className="w-[350px] h-[75px] bg-gray-secondary text-black-primary text-[25px] hover:bg-gray-primary transition-colors flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    {/* 로딩 스피너 */}
                                    <div className="w-6 h-6 border-3 border-black-primary border-t-transparent rounded-full animate-spin" />
                                    로딩중...
                                </>
                            ) : (
                                <>
                                    더보기
                                    <Image
                                        src={"/images/icon/plus.svg"}
                                        width={22}
                                        height={22}
                                        alt="더보기 아이콘"
                                    />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}