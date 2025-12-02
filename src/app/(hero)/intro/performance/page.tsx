"use client";
import ContentTabs from "@/src/shared/component/ContentTab";
import { useState } from "react";
import GovernmentPerformance from "./GovernmentPerformance";
import LocalPerformance from "./LocalPerformance";
import EnterprisePerformance from "./EnterprisePerformance";
import HospitalPerformance from "./HospitalPerformance";
import GlobalPerformance from "./GlobalPerformance";
import IntroHeader from "../IntroHeader";

const performance = [
  { id: "government", tab: "공공기관", component : <GovernmentPerformance /> },
  { id: "local", tab: "지자체", component : <LocalPerformance /> },
  { id: "enterprise", tab: "기업체", component : <EnterprisePerformance /> },
  { id: "hospital", tab: "병원", component : <HospitalPerformance /> },
  { id: "global", tab: "해외", component : <GlobalPerformance /> },
];


export default function Performance() {
    const [activeTab, setActiveTab] = useState("government");

    const currentContent = performance.find(item => item.id === activeTab);

    const tabs = performance.map(loc => ({
    id: loc.id,
    label: loc.tab
    }));

    return (
    <div className="w-full bg-white py-[200px]">
        {/* 헤더 */}
        <IntroHeader text={"공공기관 및 지자체와 기업 및 병원 등\n국 · 내외 다양한 곳에서 설치 및 운영중에 있습니다."}/>

        <div className="max-w-7xl mx-auto p-4 md:p-8">
            <ContentTabs 
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                className="mb-16"
            />

            {/* 탭 컨텐츠 */}
            <div className="mt-8">
                {currentContent?.component}
            </div>
        </div>
    </div>
    );
}