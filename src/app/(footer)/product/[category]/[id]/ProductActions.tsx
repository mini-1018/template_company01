'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductActions() {
    const [showToast, setShowToast] = useState(false);

    const handleShare = async () => {
        try {
            // 모바일 기기에서만 Web Share API 사용
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            
            if (isMobile && navigator.share) {
                await navigator.share({
                    title: document.title,
                    url: window.location.href,
                });
            } else {
                // PC에서는 클립보드 복사
                await navigator.clipboard.writeText(window.location.href);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 1500);
            }
        } catch (error) {
            try {
                await navigator.clipboard.writeText(window.location.href);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 1500);
            } catch (clipboardError) {
                alert('링크 복사에 실패했습니다.');
            }
        }
    };

    return (
        <>
            <div className="mt-10 flex gap-4 px-6">
                <Link 
                    href='https://smartstore.naver.com/gmall' 
                    className="w-[250px] h-[75px] bg-gray-secondary text-black-primary text-[25px] flex items-center justify-center hover:bg-gray-primary transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    구매하기
                </Link>
                <Link 
                    href='/support/downloads' 
                    className="w-[250px] h-[75px] bg-gray-secondary text-black-primary text-[25px] flex items-center justify-center hover:bg-gray-primary transition-colors"
                >
                    다운로드    
                </Link>
                <button
                    onClick={handleShare}
                    className="w-[75px] h-[75px] bg-gray-secondary flex items-center justify-center hover:bg-gray-primary transition-colors cursor-pointer"
                    aria-label="공유하기"
                >
                    <Image
                        src="/images/icon/share.svg"
                        alt="공유"
                        width={32}
                        height={32}
                    />
                </button>
            </div>

            {/* 토스트 메시지 */}
            {showToast && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black-primary text-white px-6 py-3 rounded-lg shadow-lg z-50 text-[18px]">
                    링크가 복사되었습니다
                </div>
            )}
        </>
    );
}