"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ContentTabs from "@/src/shared/component/ContentTab";
import MainHeader from "@/src/shared/component/MainHeader";
import Catalogs from "./Catalogs";
import Manuals from "./Manuals";
import Software from "./Software";
import FadeUpOnView from "@/src/shared/component/FadeUpOnView";

const downloadsTab = [
    {id: "catalog", tab: "카탈로그", component: <Catalogs />},
    {id: "manual", tab: "사용설명서", component: <Manuals />},
    {id: "software", tab: "소프트웨어", component: <Software />},
]  


export default function DownloadsPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const tabParam = searchParams.get('tab');
    
    const [activeTab, setActiveTab] = useState(tabParam || "catalog");

    // URL 쿼리 파라미터와 동기화
    useEffect(() => {
        if (tabParam && downloadsTab.some(tab => tab.id === tabParam)) {
            setActiveTab(tabParam);
        }
    }, [tabParam]);

    // 탭 변경 시 URL 업데이트
    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        router.push(`/support/downloads?tab=${tabId}`, { scroll: false });
    };

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
                onTabChange={handleTabChange}
                className="mb-24"
            />

            <div className="mt-8">
                {currentContent?.component}
            </div>
        </div>
    );
}