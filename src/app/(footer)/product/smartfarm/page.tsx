"use client";
import { useState } from "react";
import ContentTabs from "@/src/shared/component/ContentTab";
import MainHeader from "@/src/shared/component/MainHeader";

const smartFarmProducts = [
    { id: "과일 선별기", tab: "과일 선별기", component: "" },
    { id: "자동 톤백 저울", tab: "자동 톤백 저울", component: "" },
    { id: "파렛트 저울", tab: "파렛트 저울", component: "" },
    { id: "농업 저울", tab: "농업 저울", component: "" },
    { id: "축산업 저울", tab: "축산업 저울", component: "" },
]

export default function SmartFarm() {
    const [activeTab, setActiveTab] = useState("과일 선별기");

    const currentContent = smartFarmProducts.find(item => item.id === activeTab);

    const tabs = smartFarmProducts.map(loc => ({
        id: loc.id,
        label: loc.tab
    }));

    return (
        <div>
            {/* 헤더 */}
            <MainHeader text={"농업 · 수산업 · 축산업 현장에서 정보통신기술(ICT)을 접목하여 \n 계량장비를 자동화 · 최적화 함으로써 생산효율을 높이는데 힘쓰고 있습니다."} />

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