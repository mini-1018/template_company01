"use client";
import ContentTabs from "@/src/shared/component/ContentTab";
import { useState } from "react";
import GovernmentPerformance from "./GovernmentPerformance";
import LocalPerformance from "./LocalPerformance";
import EnterprisePerformance from "./EnterprisePerformance";
import HospitalPerformance from "./HospitalPerformance";
import GlobalPerformance from "./GlobalPerformance";
import MainHeader from "../../../../shared/component/MainHeader";
import FadeUpOnView from "@/src/shared/component/FadeUpOnView";

const performance = [
  { id: "government", tab: "공공기관", component : <GovernmentPerformance /> },
  { id: "local", tab: "지자체", component : <LocalPerformance /> },
  { id: "enterprise", tab: "기업체", component : <EnterprisePerformance /> },
  { id: "hospital", tab: "대형병원", component : <HospitalPerformance /> },
  { id: "global", tab: "해외", component : <GlobalPerformance /> },
];


export default function Performance() {
    const [activeTab, setActiveTab] = useState("local");

    const currentContent = performance.find(item => item.id === activeTab);

    const tabs = performance.map(loc => ({
    id: loc.id,
    label: loc.tab
    }));

    return (
    <div>
        {/* 헤더 */}
        <FadeUpOnView>
            <MainHeader text={"공공기관 및 지자체와 기업 및 병원 등\n국 · 내외 다양한 곳에서 설치 및 운영중에 있습니다."}/>
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