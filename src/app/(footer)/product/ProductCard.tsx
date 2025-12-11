import Image from "next/image";

interface ProductCardProps {
  src: string;
  title: string;
  content: string;
}

export default function ProductCard({ src, title, content }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center gap-[24px]">
      <div className="relative w-[400px] h-[400px] border-gray-primary border hover:border-2 hover:border-blue-secondary">
        <Image src={src} alt="Logo" fill />
      </div>
      <div className="text-center">
        <p className="text-[25px] text-blue-secondary font-bold">{title}</p>
        <p className="text-[25px] whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
}
