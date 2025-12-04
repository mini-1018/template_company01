import React from 'react';

interface WhiteBackgroundSectionProps {
  children: React.ReactNode;
  bgColor?: 'white' | 'gray';
  className?: string;
}

export default function NoImageBackgroundSection({ 
  children, 
  bgColor = 'white',
  className = '' 
}: WhiteBackgroundSectionProps) {
  const bgColorClass = bgColor === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  return (
    <section className={`w-full ${bgColorClass} ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-0 lg:px-0">
        {children}
      </div>
    </section>
  );
}