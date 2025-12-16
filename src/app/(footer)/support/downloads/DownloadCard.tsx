import Image from "next/image";

interface DownloadCardProps {
    src: string;
    title: string;
    link: string;
}

export default function DownloadCard({ src, title, link }: DownloadCardProps) {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative w-[400px] h-[400px] border-gray-primary border hover:border-2 hover:border-blue-secondary">
                <Image src={src} alt="Logo" fill />
            </div>
            <div className="text-center">
                <p className="text-[25px] text-blue-secondary font-bold">{title}</p>
            </div>
            {/* 다운로드 버튼 */}
            <div className="text-center">
                <div className="flex justify-center gap-4">
                    <button
                        className="w-[250px] h-[60px] border border-black/10 cursor-pointer text-[15px] flex items-center justify-center font-bold gap-[15px] bg-linear-to-t from-[#f0f0f0] to-[#ffffff]"
                        onClick={() => window.open(link, "_blank")}
                    >
                        DOWNLOAD
                        <div className="w-[13px] h-[13px] relative">
                            <Image
                                src={"/images/intro/download.png"}
                                alt="download icon"
                                fill
                            />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
