"use client";

import { useState } from "react";
import ContentTabs from "@/src/shared/component/ContentTab";
import MainHeader from "@/src/shared/component/MainHeader";
import Catalogs from "./Catalogs";
import Manuals from "./Manuals";
import Software from "./Software";
import FadeUpOnView from "@/src/shared/component/FadeUpOnView";

const downloadsTab = [
    {id: "카탈로그", tab: "카탈로그", component: <Catalogs />},
    {id: "사용설명서", tab: "사용설명서", component: <Manuals />},
    {id: "소프트웨어", tab: "소프트웨어", component: <Software />},
]  


export default function DownloadsPage() {
    const [activeTab, setActiveTab] = useState("카탈로그");

    const currentContent = downloadsTab.find(item => item.id === activeTab);

    const tabs = downloadsTab.map(tab => ({
    id: tab.id,
    label: tab.tab
    }));

    return (
        <div className="max-w-[1440px] mx-auto">
            <FadeUpOnView>
                <MainHeader text={"각 제품의 카탈로그·사용설명서·소프트웨어를 \n 직접 다운로드 받으실 수 있습니다."} />
            </FadeUpOnView>
            <ContentTabs
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                className="mb-24"
            />

            <div className="mt-8">
                {currentContent?.component}
            </div>
        </div>
    );
}