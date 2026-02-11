"use client";
import { useRef, useEffect, useState, PropsWithChildren } from "react";

interface FadeUpOnViewProps extends PropsWithChildren {
  delay?: number; // ms 단위
  y?: number;     // px 단위
  duration?: number; // ms 단위
}

export default function FadeUpOnView({
  children,
  delay = 0,
  y = 50,
  duration = 700,
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
        transitionDuration: `${duration}ms`,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        opacity: inView ? 1 : 0,
      }}
      className="transition-all ease-out"
    >
      {children}
    </div>
  );
}