"use client";
import { useState } from "react";
import ContentTabs from "@/src/shared/component/ContentTab";
import MainHeader from "@/src/shared/component/MainHeader";
import FadeUpOnView from "@/src/shared/component/FadeUpOnView";

const industrialProducts = [
    { id: "인디케이터", tab: "인디케이터", component: "" },
    { id: "로드셀", tab: "로드셀", component: "" },
    { id: "고정밀 로드셀", tab: "고정밀 로드셀", component: "" },
    { id: "발란스 저울", tab: "발란스 저울", component: "" },
    { id: "플랫폼 저울", tab: "플랫폼 저울", component: "" },
]

export default function Industrial() {
    const [activeTab, setActiveTab] = useState("인디케이터");

    const currentContent = industrialProducts.find(item => item.id === activeTab);

    const tabs = industrialProducts.map(loc => ({
        id: loc.id,
        label: loc.tab
    }));

    return (
        <div>
            {/* 헤더 */}
            <FadeUpOnView>
                <MainHeader text={"반도체 생산 라인 · 공항용 스케일 등 정밀한 중량을 측정하는 \n 자동화 라인을 구축하고 기술 지원하여 만족도를 높이고 있습니다."} />
            </FadeUpOnView>

            <div className="max-w-[1440px] mx-auto">
                <ContentTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    className="mb-24"
                />

                {/* 탭 컨텐츠 - 5열 그리드, 40px 간격 */}
                <div className="mt-8">
                    {currentContent?.component}
                </div>
            </div>
        </div>
    );
}