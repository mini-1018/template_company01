"use client";
import { useState } from "react";
import ContentTabs from "@/src/shared/component/ContentTab";
import MainHeader from "@/src/shared/component/MainHeader";
import FadeUpOnView from "@/src/shared/component/FadeUpOnView";

const healthcareProducts = [
    {id: "신장 체중 자동 측정기", tab: "신장 체중 자동 측정기", component: ""},
    {id: "환자용 측정기", tab: "환자용 측정기", component: ""},
    {id: "손소독기", tab: "손소독기", component: ""},
    {id: "기타", tab: "기타", component: ""},
]

export default function Healthcare() {
 const [activeTab, setActiveTab] = useState("신장 체중 자동 측정기");

    const currentContent = healthcareProducts.find(item => item.id === activeTab);

    const tabs = healthcareProducts.map(loc => ({
    id: loc.id,
    label: loc.tab
    }));

    return (
    <div>
        {/* 헤더 */}
        <FadeUpOnView>
            <MainHeader text={"신체를 측정하는 기술을 기반으로 신장 체중 자동 측정기 · 환자용 측정기 · \n 손소독기 · 반려동물 체중계 등으로 헬스케어 사업분야를 넓히고 있습니다."}/>
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