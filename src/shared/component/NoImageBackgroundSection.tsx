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
    <section className={`w-full py-[75px] lg:py-[150px] ${bgColorClass} ${className}`}>
      <div className="w-full max-w-[1448px] mx-auto px-8 md:px-12 lg:px-16">
        {children}
      </div>
    </section>
  );
}