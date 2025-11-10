"use client";

import { useState } from "react";

export default function Section3() {
  const [activeColumn, setActiveColumn] = useState(0);

  const columns = [
    {
      title: "1",
      heading: "1번 블록",
      text: "유비소프트 퀘벡이 개발하고 유비소프트가 발매한 어쌔신 크리드 시리즈의 11번째 메인 시리즈 타이틀. 전작인 오리진에 이어 고대를 배경으로 하는 2번째 게임으로, 기원전 431년 고대 그리스의 펠로폰네소스 전쟁 시기를 배경으로 한다.",
      bgImage: "https://i.postimg.cc/ZRYZ24Ss/ac-odyssey-min.jpg",
      bgFixed: false,
    },
    {
      title: "2",
      heading: "2번 블록",
      text: "이미 이 분야에서 거하게 말아먹은 바 있는 헬게이트 런던의 존재로 인해 불안하다는 시각도 있었지만 발매 후 이런 우려들은 불식되었다. 전체적인 분위기나, FPS + RPG라는 특성 때문에 폴아웃 3와 닮았다. 출시 전부터 무려 50만 종류의 압도적인 총기 수가 관심을 끌었다.",
      bgImage: "https://i.postimg.cc/x8h2XmbB/borderlands-3-min.jpg",
      bgFixed: true,
    },
    {
      title: "3",
      heading: "3번 블록",
      text: "플레이스테이션 스튜디오 산하의 SIE 산타모니카 스튜디오에서 개발한 갓 오브 워 시리즈의 8번째 작품이자 그리스 사가의 뒤를 잇는 북유럽 사가의 첫번째 작품.",
      bgImage: "https://i.postimg.cc/1RjPCkYM/god-of-war-4-min.jpg",
      bgFixed: true,
    },
    {
      title: "4",
      heading: "4번 블록",
      text: "리스폰 엔터테인먼트가 개발, EA가 배급하는 스타워즈 배경의 액션 게임. 2019년 11월 15일 발매되었다.",
      bgImage: "https://i.postimg.cc/qqzrBwg8/sw-jedi-fallen-order-min.jpg",
      bgFixed: true,
    },
  ];

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Background Image - 전체 영역에 표시 */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 transition-all duration-500 bg-cover bg-center"
        style={{
          backgroundImage: `url(${columns[activeColumn].bgImage})`,
          backgroundAttachment: columns[activeColumn].bgFixed ? "fixed" : "scroll",
        }}
      />

      {/* Columns */}
      <div className="w-full h-full flex">
        {columns.map((column, index) => (
          <div
            key={index}
            className="w-1/4 h-full border-r-2 border-black/50 last:border-r-0 box-border z-10 relative"
            onMouseEnter={() => setActiveColumn(index)}
          >
            {/* Content */}
            <div className="relative h-full">
              {/* Large Number */}
              <h1 className="absolute top-1/2 -translate-y-1/2 w-full bg-black/10 text-center m-0 p-0 text-white/20 text-[15rem] border-t-2 border-b-2 border-black/50">
                {column.title}
              </h1>

              {/* Info Box */}
              <div
                className={`absolute top-1/2 box-border p-10 bg-white text-center transition-all duration-500 z-10 ${
                  activeColumn === index
                    ? "opacity-100 -translate-y-1/2"
                    : "opacity-0 translate-y-full"
                }`}
              >
                <h2 className="m-0 p-0 text-3xl text-[#262626]">
                  {column.heading}
                </h2>
                <p className="text-[#262626] text-lg">{column.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}