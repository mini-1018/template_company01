import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-black-primary mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다.</p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}