import Image from "next/image";

interface PerformanceCardProps {
  src: string;
  title: string;
  content: string;
}

export default function PerformanceCard({ src, title, content }: PerformanceCardProps) {
  return (
    <div>
      <Image src={src} alt="Logo" width={300} height={100} />
      <p className="text-[25px]">{title}</p>
      <p className="text-[25px]">{content}</p>
    </div>
  );
}
