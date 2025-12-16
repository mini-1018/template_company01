'use client';

import { useState } from 'react';

export default function Manuals() {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState(''); // 입력 중인 검색어
  const [actualSearchTerm, setActualSearchTerm] = useState(''); // 실제 검색에 사용되는 검색어

  // 샘플 데이터
  const posts = [
    { id: 29, category: '친환경', title: '재활용품 무인회수기 사용설명서', date: '2025-12-11' },
    { id: 28, category: '헬스케어', title: '신장 체중 자동 측정기 (GL-150R) 사용설명서', date: '2025-12-11' },
    { id: 27, category: '농축산', title: '포도 조합 선별기 사용설명서', date: '2025-12-11' },
    { id: 26, category: '친환경', title: '재활용품 무인회수기 사용설명서', date: '2025-12-11' },
    { id: 25, category: '헬스케어', title: '신장 체중 자동 측정기 (GL-150R) 사용설명서', date: '2025-12-11' },
    { id: 24, category: '농축산', title: '포도 조합 선별기 사용설명서', date: '2025-12-11' },
    { id: 23, category: '친환경', title: '재활용품 무인회수기 사용설명서', date: '2025-12-11' },
    { id: 22, category: '헬스케어', title: '신장 체중 자동 측정기 (GL-150R) 사용설명서', date: '2025-12-11' },
    { id: 21, category: '농축산', title: '포도 조합 선별기 사용설명서', date: '2025-12-11' },
    { id: 20, category: '친환경', title: '재활용품 무인회수기 사용설명서', date: '2025-12-11' },
  ];

  // 필터링된 게시물 - actualSearchTerm 사용
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = category === '전체' || post.category === category;
    const matchesSearch = post.title.toLowerCase().includes(actualSearchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / 10) || 1;

  // 현재 페이지의 게시물만 표시
  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // 검색 실행 함수
  const executeSearch = () => {
    setActualSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  // 엔터키 핸들러
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeSearch();
    }
  };

  // 카테고리 변경 핸들러
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setCurrentPage(1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-[35px] h-[35px] flex items-center justify-center text-[20px] transition-colors ${
            currentPage === i
              ? 'bg-blue-secondary text-white'
              : 'text-black-primary hover:bg-gray-secondary'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* 검색 영역 */}
      <div className="mb-6 flex justify-end items-center gap-2">
        <select
          value={category}
          onChange={handleCategoryChange}
          className="px-4 py-2 border border-gray-primary text-[25px] focus:outline-none focus:ring-2 focus:ring-blue-secondary"
        >
          <option>전체</option>
          <option>친환경</option>
          <option>헬스케어</option>
          <option>농축산</option>
          <option>산업용</option>
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="제목 검색"
          className="px-4 py-2 h-[50px] border border-gray-primary text-[25px] focus:outline-none focus:ring-2 focus:ring-blue-secondary"
        />
        <button 
          onClick={executeSearch}
          className="w-[50px] h-[50px] bg-black-primary text-white transition-colors cursor-pointer flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {/* 테이블 */}
      <div className="overflow-hidden border-b-2 border-b-black-primary border-t-2 border-t-black-primary">
        {/* 테이블 헤더 */}
        <div className="grid grid-cols-12 border-b-2 border-b-gray-primary h-[100px] bg-gray-secondary">
          <div className="col-span-1 px-6 py-4 text-center text-[25px] font-bold text-black-primary flex items-center justify-center">
            번호
          </div>
          <div className="col-span-2 px-6 py-4 text-center text-[25px] font-bold text-black-primary flex items-center justify-center">
            분류
          </div>
          <div className="col-span-6 px-6 py-4 text-center text-[25px] font-bold text-black-primary flex items-center justify-center">
            제목
          </div>
          <div className="col-span-3 px-6 py-4 text-center text-[25px] font-bold text-black-primary flex items-center justify-center">
            등록일
          </div>
        </div>

        {/* 테이블 바디 */}
        {currentPosts.length > 0 ? (
          currentPosts.map((post, index) => (
            <div
              key={post.id}
              className={`grid grid-cols-12 border-b border-gray-primary hover:bg-gray-secondary transition-colors cursor-pointer ${
                index === currentPosts.length - 1 ? 'border-b-0' : ''
              }`}
            >
              <div className="col-span-1 px-6 py-4 text-center text-[25px] text-black-primary">
                {post.id}
              </div>
              <div className="col-span-2 px-6 py-4 text-center text-[25px] text-black-primary">
                {post.category}
              </div>
              <div className="col-span-6 px-6 py-4 text-[25px] text-black-primary">
                {post.title}
              </div>
              <div className="col-span-3 px-6 py-4 text-center text-[25px] text-black-primary">
                {post.date}
              </div>
            </div>
          ))
        ) : (
          <div className="py-12 text-center text-[25px] text-gray-400">
            검색 결과가 없습니다.
          </div>
        )}
      </div>

      {/* 페이지네이션 */}
      {filteredPosts.length > 0 && (
        <div className="mt-6 flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center text-black-primary hover:bg-gray-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {renderPageNumbers()}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center text-black-primary hover:bg-gray-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}