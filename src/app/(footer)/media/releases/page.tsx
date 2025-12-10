"use client";

import MainHeader from "@/src/shared/component/MainHeader";
import ReleaseCard from "./releaseCard";
import Image from "next/image";
import { useState } from "react";

export default function ReleasesPage() {
    const [visibleCount, setVisibleCount] = useState(5);
    const [isLoading, setIsLoading] = useState(false);

    const releases = [
        {
            id: 1,
            title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
            content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 '축복의 땅'이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
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
                <MainHeader text={"지테크인터내셔날의 흥미로운 소식과 \n 다양한 활동 소식을 한 곳에서 확인하실 수 있습니다."} />

                <div className="max-w-[1440px] mx-auto border-b border-gray-primary">
                    {visibleReleases.map((release) => (
                        <ReleaseCard
                            key={release.id}
                            title={release.title}
                            content={release.content}
                            date={release.date}
                            image={release.image}
                            onClick={() => console.log(`Release ${release.id} clicked`)}
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


// "use client";

// import MainHeader from "@/src/shared/component/MainHeader";
// import ReleaseCard from "./releaseCard";
// import Image from "next/image";

// export default function ReleasesPage() {
//     const releases = [
//         {
//             id: 1,
//             title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
//             content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 ‘축복의 땅’이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
//             date: "2025-05-18",
//             image: "/images/media/releases/release01.png"
//         },
//         {
//             id: 2,
//             title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
//             content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 ‘축복의 땅’이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
//             date: "2025-05-18",
//             image: "/images/media/releases/release01.png"

//         },
//         {
//             id: 3,
//             title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
//             content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 ‘축복의 땅’이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
//             date: "2025-05-18",
//             image: "/images/media/releases/release01.png"

//         },
//         {
//             id: 4,
//             title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
//             content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 ‘축복의 땅’이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
//             date: "2025-05-18",
//             image: "/images/media/releases/release01.png"

//         },
//         {
//             id: 5,
//             title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
//             content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 ‘축복의 땅’이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
//             date: "2025-05-18",
//             image: "/images/media/releases/release01.png"

//         },
//         {
//             id: 6,
//             title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
//             content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 ‘축복의 땅’이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
//             date: "2025-05-18",
//             image: "/images/media/releases/release01.png"

//         },
//         {
//             id: 7,
//             title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
//             content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 ‘축복의 땅’이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
//             date: "2025-05-18",
//             image: "/images/media/releases/release01.png"

//         },
//         {
//             id: 8,
//             title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
//             content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 ‘축복의 땅’이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
//             date: "2025-05-18",
//             image: "/images/media/releases/release01.png"

//         },
//         {
//             id: 9,
//             title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
//             content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 ‘축복의 땅’이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
//             date: "2025-05-18",
//             image: "/images/media/releases/release01.png"

//         },
//         {
//             id: 10,
//             title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
//             content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 ‘축복의 땅’이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
//             date: "2025-05-18",
//             image: "/images/media/releases/release01.png"

//         },
//         {
//             id: 11,
//             title: "한성우 (주)지테크인터내셔날 대표, 의정부시에 미술 소장품 기증",
//             content: "용현산업단지 기업인협의회 명예회장인 한성우 ㈜지테크인터내셔날 대표가 미술 소장품을 의정부시에 기증했다. 지난 16일 전달된 작품은 한국 현대미술계에서 활발히 활동 중인 한귀원 작가의 대표작 ‘축복의 땅’이다. 이번 작품은 따뜻하고 서정적인 감성으로 잘 알려진 한 작가 특유의 화풍이...",
//             date: "2025-05-18",
//             image: "/images/media/releases/release01.png"

//         },
//     ];

//     return (

//         <>
//             <div>
//                 {/* 헤더 */}
//                 <MainHeader text={"지테크인터내셔날의 흥미로운 소식과 \n 다양한 활동 소식을 한 곳에서 확인하실 수 있습니다."} />

//                 <div className="max-w-[1440px] mx-auto border-b border-gray-primary">
//                     {releases.map((release) => (
//                         <ReleaseCard
//                             key={release.id}
//                             title={release.title}
//                             content={release.content}
//                             date={release.date}
//                             image={release.image}
//                             onClick={() => console.log(`Release ${release.id} clicked`)}
//                         />
//                     ))}
//                 </div>
//                 <div className="flex justify-center mt-25">
//                     <button className="w-[350px] h-[75px] bg-gray-secondary text-black-primary text-[25px] hover:bg-gray-primary transition-colors flex items-center justify-center gap-2.5 cursor-pointer">
//                         더보기
//                         <Image
//                             src={"/images/icon/plus.svg"}
//                             width={22}
//                             height={22}
//                             alt="더보기 아이콘"
//                         />
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }