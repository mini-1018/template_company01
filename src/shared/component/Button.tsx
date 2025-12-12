import Link from "next/link";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Button({
  text,
  onClick,
  href,
  showArrow = false,
  size = "lg",
}: ButtonProps) {

  const sizeClasses = {
    sm: "px-6 py-2 text-xs",
    md: "px-8 py-2.5 text-sm",
    lg: "px-15 py-2 text-base",
  };

  const baseClasses =
    "group flex items-center gap-3 border-1 border-white text-white font-medium hover:bg-blue-secondary hover:border-transparent hover:text-white transition-all duration-300 cursor-pointer";

  const content = (
    <>
      <span>{text}</span>
      {showArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${sizeClasses[size]}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]}`}
    >
      {content}
    </button>
  );
}
