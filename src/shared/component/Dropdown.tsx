'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  className?: string;
}

export default function Dropdown({ value, onChange, options, className = '' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* 드롭다운 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 h-[50px] border border-gray-primary text-[25px] bg-white flex items-center gap-2 min-w-[150px] justify-between hover:border-blue-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-blue-secondary"
      >
        <span>{value}</span>
        <div className="relative w-4 h-4">
          <Image
            src={isOpen ? '/images/icon/up_arrow.svg' : '/images/icon/down_arrow.svg'}
            alt="arrow"
            fill
            className="object-contain"
          />
        </div>
      </button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-primary shadow-lg z-10 ">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full px-4 text-[25px] text-left ${
                value === option ? 'bg-blue-secondary text-white min-w-[150px] h-[50px]' : 'text-black-primary hover:bg-gray-secondary transition-colors min-w-[150px] h-[50px]'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}