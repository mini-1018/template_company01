import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/src/shared/component/menuItems";

export default function Footer () {
    return (
<footer className="h-[35%] bg-black py-8">
        <div className="flex flex-col-reverse md:flex-row justify-between w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* 왼쪽 영역 */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Link href="/">
              <Image 
                src="/images/logo/logo_gtech_white.png" 
                alt="G-TECH Logo" 
                width={100} 
                height={40} 
                className="h-auto w-auto mb-6 cursor-pointer"
              />
            </Link>

            <ul className="flex gap-4 mb-5">
              <li>
                <Link href="/intro/outline" className="text-white text-sm hover:text-blue-secondary transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white text-sm hover:text-blue-secondary transition-colors">
                  서비스 이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white text-sm hover:text-blue-secondary transition-colors">
                  개인정보 처리방침
                </Link>
              </li>
            </ul>

            <div className="text-white mb-5">
              <p className="text-xs leading-relaxed mb-1">
                경기도 의정부시 산단로 68번길 29 | 031-852-4070
              </p>
              <p className="text-xs leading-relaxed">
                © G-TECH INTERNATIONAL. ALL RIGHTS RESERVED
              </p>
            </div>

            <div className="text-white mb-5">
              <p className="text-sm font-medium">담당자 연락처</p>
              <p className="text-xs">장대웅 팀장 : 010-9282-4070</p>
            </div>

            <ul className="flex gap-6">
              <li>
                <Link href="https://blog.naver.com/gtech" className="block hover:opacity-80 transition-opacity" target="_blank">
                  <Image src="/images/icon/blog.svg" alt="Blog" width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@Gtech-international" className="block hover:opacity-80 transition-opacity" target="_blank">
                  <Image src="/images/icon/youtube.svg" alt="YouTube" width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/gtech__official" className="block hover:opacity-80 transition-opacity" target="_blank">
                  <Image src="/images/icon/insta.svg" alt="Instagram" width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href="tel:010-9282-4070" className="block hover:opacity-80 transition-opacity">
                  <Image src="/images/icon/phone.svg" alt="Phone" width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href="mailto:stmo11@gtech21.net" className="block hover:opacity-80 transition-opacity" target="_blank">
                  <Image src="/images/icon/email.svg" alt="Email" width={24} height={24} />
                </Link>
              </li>
            </ul>
          </div>

          {/* 오른쪽 영역 - 사이트맵 */}
          <div className="w-full md:w-1/2">
            <nav>
              <ul className="flex justify-between md:justify-end">
                {menuItems.map((menu, index) => (
                  <li key={index} className="md:ml-[15%] md:first:ml-0">
                    <p className="text-white text-xs md:text-base font-bold mb-6">
                      {menu.name}
                    </p>
                    <ul>
                      {menu.submenu.map((sub, subIndex) => (
                        <li key={subIndex} className="mb-4">
                          <Link 
                            href={sub.path} 
                            className="text-xs md:text-sm text-white hover:text-blue-secondary transition-colors"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    );
}