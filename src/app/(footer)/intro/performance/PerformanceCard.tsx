import Image from "next/image";

interface PerformanceCardProps {
  src: string;
  title: string;
  content: string;
}

export default function PerformanceCard({ src, title, content }: PerformanceCardProps) {
  return (
    <div className="flex flex-col items-center gap-[24px] w-[300px]">
      <div className="relative w-full h-[100px] border-gray-primary border">
        <Image src={src} alt="Logo" fill />
      </div>
      <div className="text-center">
        <p className="text-[25px] text-blue-secondary font-bold">{title}</p>
        <p className="text-[25px] whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
}
