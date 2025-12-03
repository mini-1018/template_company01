"use client";

interface ContentTab {
  id: string;
  label: string;
}

interface ContentTabsProps {
  tabs: ContentTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export default function ContentTabs({ tabs, activeTab, onTabChange, className = "" }: ContentTabsProps) {
  return (
    <div className={`flex border-b border-gray-200 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 py-2 text-[25px] font-bold transition-colors cursor-pointer ${
            activeTab === tab.id
              ? "bg-blue-secondary text-white"
              : "bg-gray-secondary text-black-primary hover:bg-gray-primary"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}