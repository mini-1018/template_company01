"use client";
import { useRef, useEffect, useState, PropsWithChildren } from "react";

interface FadeUpOnViewProps extends PropsWithChildren {
  delay?: number; // ms 단위
  y?: number;     // px 단위
}

export default function FadeUpOnView({
  children,
  delay = 0,
  y = 50,
}: FadeUpOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
      }}
      className={`transition-all duration-700 ease-out
        ${inView ? "opacity-100" : "opacity-0"}
      `}
    >
      {children}
    </div>
  );
}