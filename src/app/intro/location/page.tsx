"use client";

import ContentTabs from "@/src/shared/component/ContentTab";
import Image from "next/image";
import { useState } from "react";
import MainHeader from "../../../shared/component/MainHeader";

const locations = [
  {
    id: "headquarters",
    tab: "본사",
    name: "(주)지테크인터내셔날 본사",
    address: "경기도 의정부시 산단로 68번길 29",
    tel: "031-852-4070",
    fax: "031-852-4656",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.0756549455273!2d127.07717497641195!3d37.74136931408292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cc6fe281558b9%3A0x3305b07c6a020528!2z6rK96riw64-EIOydmOygleu2gOyLnCDsgrDri6jroZw2OOuyiOq4uCAyOQ!5e0!3m2!1sko!2skr!4v1764057901490!5m2!1sko!2skr"
  },
  {
    id: "nambu",
    tab: "남부지사",
    name: "남부 지사",
    address: "대구광역시 북구 동변로 15길 22",
    tel: "053-588-4070",
    fax: "053-588-4074",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.076498649713!2d128.59865987635078!3d35.92062751678514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e0fca8722c2b%3A0x9bc93dcaacf9798e!2z64yA6rWs6rSR7Jet7IucIOu2geq1rCDrj5nrs4DroZwxNeq4uCAyMg!5e0!3m2!1sko!2skr!4v1764057986457!5m2!1sko!2skr"
  },
  {
    id: "jeju",
    tab: "제주지사",
    name: "제주 지사",
    address: "제주특별자치도 제주시 조천읍 조천우회로 302-1",
    tel: "010-9369-4071",
    fax: null,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.0126687788197!2d126.63873407627504!3d33.52705624527798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350d1db804dac193%3A0x1c53e3aa230bfa0d!2z7KCc7KO87Yq567OE7J6Q7LmY64-EIOygnOyjvOyLnCDsobDsspzsnY0g7KGw7LKc7Jqw7ZqM66GcIDMwMi0x!5e0!3m2!1sko!2skr!4v1764058022669!5m2!1sko!2skr"
  }
];

export default function Location() {
  const [activeTab, setActiveTab] = useState("headquarters");

  const currentLocation = locations.find(loc => loc.id === activeTab);

  const tabs = locations.map(loc => ({
    id: loc.id,
    label: loc.tab
  }));

  return (
    <div>
      <div className="w-full max-w-[1426px] mx-auto px-8 md:px-10 lg:px-12">
        {/* 헤더 */}
        <div className="sr-only">
          <h1 className="sr-only">
            오시는 길
          </h1>
        </div>

        <MainHeader text={"주요 사업별로 특화된 사업장을 운영하며\n신속하고 정확한 서비스를 제공하고 있습니다."}/>

        {/* 탭 네비게이션 */}
        <ContentTabs 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className="mb-16"
        />

        {/* 지도 및 정보 */}
        {currentLocation && (
          <div className="flex border border-gray-primary">
            {/* 구글 맵 */}
            <div className="w-[50%] h-[500px] overflow-hidden">
              <iframe
                src={currentLocation.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* 상세 정보 */}
            <div className="w-[50%] flex flex-col justify-start px-16 py-12 gap-8">
              <h2 className="text-3xl font-bold text-black-primary">
                {currentLocation.name}
              </h2>

              {/* 구분선 */}
              <div className="border-t border-gray-primary" />

              {/* 주소 섹션 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6">
                      <Image 
                        src="/images/icon/location.svg"
                        alt="phone icon"
                        fill
                        className="object-cover"
                      />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-secondary">
                    Address
                  </h3>
                </div>
                <p className="text-xl text-black-primary leading-relaxed">
                  {currentLocation.address}
                </p>
              </div>

              {/* 전화번호 섹션 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6">
                    <Image 
                      src="/images/icon/tel.svg"
                      alt="phone icon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-secondary">
                    TEL
                  </h3>
                </div>
                <p className="text-xl text-black-primary">
                  {currentLocation.tel}
                </p>
              </div>

              {/* 팩스 섹션 */}
              {currentLocation.fax && (
                <>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="relative w-6 h-6">
                      <Image 
                        src="/images/icon/fax.svg"
                        alt="phone icon"
                        fill
                        className="object-cover"
                      />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-secondary">
                        FAX
                      </h3>
                    </div>
                    <p className="text-xl text-black-primary">
                      {currentLocation.fax}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}