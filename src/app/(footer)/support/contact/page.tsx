'use client';

import MainHeader from "@/src/shared/component/MainHeader";
import { useContactForm } from './useContactForm';
import { useFileUpload } from './useFileUpload';
import FadeUpOnView from "@/src/shared/component/FadeUpOnView";

export const CATEGORIES = [
  { id: 'product', label: '제품문의' },
  { id: 'construction', label: '견적문의' },
  { id: 'as', label: 'A/S문의' },
  { id: 'etc', label: '기타문의' },
];

export default function ContactPage() {
  const {
    selectedCategory,
    agreePrivacy,
    title,
    content,
    name,
    contact,
    email,
    attachments,
    errors,
    isFormValid,
    setSelectedCategory,
    setAgreePrivacy,
    setTitle,
    setContent,
    setName,
    setContact,
    setEmail,
    setAttachments,
    validateField,
    handleFocus,
    handleBlur,
    showError,
    handleSubmit,
  } = useContactForm();

  const {
    MAX_FILES,
    formatFileSize,
    handleFileChange,
    removeAttachment,
  } = useFileUpload(attachments, setAttachments);

  return (
    <div className="max-w-[1440px] mx-auto">
      <FadeUpOnView>
        <MainHeader text={"전국 네트워크를 통한 각 지역별 \n A/S와 문의사항을 신속 정확하게 처리해 드립니다."} />
      </FadeUpOnView>

      <div className="mb-4 flex justify-end items-center gap-2">
        <span className="text-blue-secondary text-[25px]">*</span>
        <span className="text-[25px] text-black-primary"> 필수입력사항</span>
      </div>

      <div className="border-t-2 border-t-black-primary border-b-2 border-b-black-primary">
        {/* 문의유형 */}
        <div className="grid grid-cols-10 border-b border-gray-primary">
          <div className="col-span-2 px-12 py-8 bg-gray-secondary flex items-center">
            <span className="text-[25px] font-bold text-black-primary">
              문의유형 <span className="text-blue-secondary">*</span>
            </span>
          </div>
          <div className="col-span-8 px-12 py-8">
            <div className="flex items-center gap-8">
              {CATEGORIES.map((category) => (
                <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCategory === category.label}
                    onChange={() => {
                      setSelectedCategory(category.label);
                      validateField('category', category.label);
                    }}
                    onFocus={() => handleFocus('category')}
                    onBlur={() => handleBlur('category')}
                    className="w-5 h-5 accent-blue-secondary cursor-pointer"
                  />
                  <span className="text-[25px] text-black-primary">{category.label}</span>
                </label>
              ))}
            </div>
            {showError('category') && (
              <p className="text-red-primary text-[18px] mt-2">{errors.category}</p>
            )}
          </div>
        </div>

        {/* 제목 */}
        <div className="grid grid-cols-10 border-b border-gray-primary">
          <div className="col-span-2 px-12 py-8 bg-gray-secondary flex items-center">
            <span className="text-[25px] font-bold text-black-primary">
              제목 <span className="text-blue-secondary">*</span>
            </span>
          </div>
          <div className="col-span-8 px-12 py-5">
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                validateField('title', e.target.value);
              }}
              onFocus={() => handleFocus('title')}
              onBlur={() => handleBlur('title')}
              className={`w-full h-[50px] px-4 border text-[25px] focus:outline-none focus:ring-2 ${showError('title')
                  ? 'border-red-primary focus:ring-red-primary'
                  : 'border-gray-primary focus:ring-blue-secondary'
                }`}
              placeholder="제목을 입력하세요 (최소 5자)"
            />
            {showError('title') && (
              <p className="text-red-primary text-[18px] mt-2">{errors.title}</p>
            )}
          </div>
        </div>

        {/* 문의내용 */}
        <div className="grid grid-cols-10 border-b border-gray-primary">
          <div className="col-span-2 px-12 py-8 bg-gray-secondary flex items-center pt-8">
            <span className="text-[25px] font-bold text-black-primary">
              문의내용 <span className="text-blue-secondary">*</span>
            </span>
          </div>
          <div className="col-span-8 px-12 py-5">
            <textarea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                validateField('content', e.target.value);
              }}
              onFocus={() => handleFocus('content')}
              onBlur={() => handleBlur('content')}
              className={`w-full h-[200px] px-4 py-3 border text-[25px] focus:outline-none focus:ring-2 resize-none ${showError('content')
                  ? 'border-red-primary focus:ring-red-primary'
                  : 'border-gray-primary focus:ring-blue-secondary'
                }`}
              placeholder="문의내용을 입력하세요 (최소 10자)"
            />
            {showError('content') && (
              <p className="text-red-primary text-[18px] mt-2">{errors.content}</p>
            )}
          </div>
        </div>

        {/* 이름 */}
        <div className="grid grid-cols-10 border-b border-gray-primary">
          <div className="col-span-2 px-12 py-8 bg-gray-secondary flex items-center">
            <span className="text-[25px] font-bold text-black-primary">
              이름 <span className="text-blue-secondary">*</span>
            </span>
          </div>
          <div className="col-span-8 px-12 py-5">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateField('name', e.target.value);
              }}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              className={`w-[300px] h-[50px] px-4 border text-[25px] focus:outline-none focus:ring-2 ${showError('name')
                  ? 'border-red-primary focus:ring-red-primary'
                  : 'border-gray-primary focus:ring-blue-secondary'
                }`}
              placeholder="이름"
            />
            {showError('name') && (
              <p className="text-red-primary text-[18px] mt-2">{errors.name}</p>
            )}
          </div>
        </div>

        {/* 연락처 */}
        <div className="grid grid-cols-10 border-b border-gray-primary">
          <div className="col-span-2 px-12 py-8 bg-gray-secondary flex items-center">
            <span className="text-[25px] font-bold text-black-primary">
              연락처 <span className="text-blue-secondary">*</span>
            </span>
          </div>
          <div className="col-span-8 px-12 py-5">
            <input
              type="text"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
                validateField('contact', e.target.value);
              }}
              onFocus={() => handleFocus('contact')}
              onBlur={() => handleBlur('contact')}
              className={`w-[300px] h-[50px] px-4 border text-[25px] focus:outline-none focus:ring-2 ${showError('contact')
                  ? 'border-red-primary focus:ring-red-primary'
                  : 'border-gray-primary focus:ring-blue-secondary'
                }`}
              placeholder="010-0000-0000"
            />
            {showError('contact') && (
              <p className="text-red-primary text-[18px] mt-2">{errors.contact}</p>
            )}
          </div>
        </div>

        {/* 이메일 */}
        <div className="grid grid-cols-10 border-b border-gray-primary">
          <div className="col-span-2 px-12 py-8 bg-gray-secondary flex items-center">
            <span className="text-[25px] font-bold text-black-primary">
              이메일 <span className="text-blue-secondary">*</span>
            </span>
          </div>
          <div className="col-span-8 px-12 py-5">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateField('email', e.target.value);
              }}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              className={`w-[300px] h-[50px] px-4 border text-[25px] focus:outline-none focus:ring-2 ${showError('email')
                  ? 'border-red-primary focus:ring-red-primary'
                  : 'border-gray-primary focus:ring-blue-secondary'
                }`}
              placeholder="example@email.com"
            />
            {showError('email') && (
              <p className="text-red-primary text-[18px] mt-2">{errors.email}</p>
            )}
          </div>
        </div>

        {/* 첨부파일 */}
        <div className="grid grid-cols-10 border-b border-gray-primary">
          <div className="col-span-2 px-12 py-8 bg-gray-secondary flex items-center pt-8">
            <span className="text-[25px] font-bold text-black-primary">첨부파일</span>
          </div>
          <div className="col-span-8 px-12 py-5">
            <div>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
                multiple
                disabled={attachments.length >= MAX_FILES}
              />
              <label
                htmlFor="file-upload"
                className={`inline-block px-8 py-3 text-white text-[20px] transition-colors ${attachments.length >= MAX_FILES
                    ? 'bg-gray-primary cursor-not-allowed'
                    : 'bg-black-primary cursor-pointer hover:bg-gray-700'
                  }`}
              >
                파일선택
              </label>
              <span className="ml-4 text-[18px] text-gray-600">
                (최대 {MAX_FILES}개, 개당 5MB 이하)
              </span>
            </div>

            {attachments.length > 0 && (
              <div className="mt-2 space-y-2">
                {attachments.map((attachment) => (
                  <div
                    key={attachment.id}
                    className="flex items-center justify-between bg-gray-secondary px-4 py-3 border border-gray-primary"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <svg className="w-5 h-5 text-black-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      <span className="text-[20px] text-black-primary truncate">{attachment.name}</span>
                      <span className="text-[18px] text-black-primary">({formatFileSize(attachment.size)})</span>
                    </div>
                    <button onClick={() => removeAttachment(attachment.id)} className="ml-4 p-1 hover:bg-gray-primary rounded transition-colors">
                      <svg className="w-5 h-5 text-black-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 개인정보취급방침 */}
        <div className="grid grid-cols-10">
          <div className="col-span-2 px-12 py-8 bg-gray-secondary flex items-center pt-8">
            <span className="text-[25px] font-bold text-black-primary tracking-tighter">
              개인정보취급방침 <span className="text-blue-secondary">*</span>
            </span>
          </div>
          <div className="col-span-8 px-12 py-5 flex flex-col justify-center">
            <div className="bg-gray-100 p-6 mb-4 h-[200px] overflow-y-auto">
              <div className="text-[18px] text-black-primary leading-relaxed">
                <p className="mb-4 font-semibold">개인정보 수집 및 이용 안내</p>
                <p className="mb-6">문의사항 답변을 위한 개인정보 수집 및 이용에 관한 동의</p>

                <p className="mb-3 font-medium">1. 개인정보의 수집 및 이용 목적</p>
                <ul className="mb-6 ml-4 space-y-1">
                  <li>• 고객 문의사항 접수 및 답변</li>
                  <li>• 제품 문의, 견적, A/S 등 고객 요청사항 처리</li>
                  <li>• 처리 결과 통보 및 관련 안내</li>
                </ul>

                <p className="mb-3 font-medium">2. 수집하는 개인정보 항목</p>
                <ul className="mb-6 ml-4 space-y-1">
                  <li>• 필수항목: 이름, 연락처(휴대전화번호), 이메일 주소</li>
                  <li>• 선택항목: 첨부파일(문의 관련 자료)</li>
                </ul>

                <p className="mb-3 font-medium">3. 개인정보의 보유 및 이용기간</p>
                <ul className="mb-6 ml-4 space-y-1">
                  <li>• 수집된 개인정보는 문의사항 처리 완료 후 1년간 보관됩니다.</li>
                  <li>• 단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관합니다.</li>
                  <li>• 보유기간 경과 후에는 지체 없이 파기합니다.</li>
                </ul>

                <p className="mb-3 font-medium">4. 개인정보 제공 동의 거부 권리 및 동의 거부에 따른 불이익</p>
                <ul className="mb-4 ml-4 space-y-1">
                  <li>• 귀하는 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다.</li>
                  <li>• 다만, 동의를 거부하실 경우 문의사항 접수 및 답변 서비스 이용이 제한될 수 있습니다.</li>
                </ul>
              </div>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreePrivacy}
                onChange={(e) => {
                  setAgreePrivacy(e.target.checked);
                  validateField('agreePrivacy', e.target.checked);
                }}
                onFocus={() => handleFocus('agreePrivacy')}
                onBlur={() => handleBlur('agreePrivacy')}
                className="w-5 h-5 accent-blue-secondary cursor-pointer"
              />
              <span className="text-[25px] text-black-primary">개인정보 취급방침에 동의합니다.</span>
            </label>
            {showError('agreePrivacy') && (
              <p className="text-red-primary text-[18px] mt-2">{errors.agreePrivacy}</p>
            )}
          </div>
        </div>
      </div>

      {/* 제출 버튼 */}
      <div className="mt-20 flex justify-center">
        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`px-16 py-4 text-white text-[25px] transition-colors ${isFormValid
              ? 'bg-blue-secondary cursor-pointer'
              : 'bg-gray-primary cursor-not-allowed'
            }`}
        >
          문의하기
        </button>
      </div>
    </div>
  );
}