import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  category: string;
  src: string;
  title: string;
  content: string;
}

export default function ProductCard({ id, category, src, title, content }: ProductCardProps) {
  return (
    <Link href={`/product/${category}/${id}`}>
      <div className="flex flex-col items-center gap-[24px]">
        <div className="relative w-[400px] h-[400px] border-gray-primary border hover:border-2 hover:border-blue-secondary">
          <Image src={src} alt="Logo" fill />
        </div>
        <div className="text-center">
          <p className="text-[25px] text-blue-secondary font-bold">{title}</p>
          <p className="text-[25px] whitespace-pre-line">{content}</p>
        </div>
      </div>
    </Link>
  );
}
