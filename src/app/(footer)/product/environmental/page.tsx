"use client";
import { useState } from "react";
import ContentTabs from "@/src/shared/component/ContentTab";
import MainHeader from "@/src/shared/component/MainHeader";
import RVM from "./RVM";
import FWS from "./FWS";
import VFWS from "./VFWS";
import IOTW from "./IOTW";

const environmentalProducts = [
    {id: "무인회수기", tab: "재활용품 무인회수기", component: <RVM />},
    {id: "음식물종량기", tab: "음식물 종량기", component: <FWS />},
    {id: "RFID", tab: "음식물 수거차량 RFID 결제 시스템", component: <VFWS />},
    {id: "IOT", tab: "IOT 자원계측 시스템", component: <IOTW />},
]

export default function Environmental() {
 const [activeTab, setActiveTab] = useState("무인회수기");

    const currentContent = environmentalProducts.find(item => item.id === activeTab);

    const tabs = environmentalProducts.map(loc => ({
    id: loc.id,
    label: loc.tab
    }));

    return (
    <div>
        {/* 헤더 */}
        <MainHeader text={"무게 측정 기술 기반으로 AI 인공지능 및 ICT 기술을 더해 재활용품 무인회수기 및\n 음식물 종량기 등 지자체에서 관리하기 용이한 친환경 제품을 갖추고 있습니다."}/>

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