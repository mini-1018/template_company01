import { useState, useMemo } from 'react';
import { z } from 'zod';
import { contactSchema, ContactFormData } from './validation';

export interface AttachmentFile {
  id: string;
  file: File;
  name: string;
  size: number;
}

export const useContactForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('제품문의');
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [attachments, setAttachments] = useState<AttachmentFile[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [focused, setFocused] = useState<Record<string, boolean>>({});

  // 현재 폼 데이터 가져오기
  const getCurrentFormData = () => ({
    category: selectedCategory,
    title,
    content,
    name,
    contact,
    email,
    agreePrivacy,
  });

  // 실시간 유효성 검사 (에러 해소용)
  const validateField = (field: string, value: any) => {
    try {
      const formData: any = getCurrentFormData();
      formData[field] = value;
      
      contactSchema.parse(formData);
      // 유효하면 에러 제거
      setErrors(prev => ({ ...prev, [field]: '' }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = error.issues.find(e => e.path[0] === field);
        if (fieldError) {
          // 에러가 있어도 포커스 중이 아니고 touched 상태일 때만 저장
          if (!focused[field] && touched[field]) {
            setErrors(prev => ({ ...prev, [field]: fieldError.message }));
          }
        }
      }
    }
  };

  // 폼 전체 유효성 검사
  const isFormValid = useMemo(() => {
    try {
      contactSchema.parse(getCurrentFormData());
      return true;
    } catch {
      return false;
    }
  }, [selectedCategory, title, content, name, contact, email, agreePrivacy]);

  const handleFocus = (field: string) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setFocused(prev => ({ ...prev, [field]: false }));
    setTouched(prev => ({ ...prev, [field]: true }));
    
    const formData = getCurrentFormData();
    
    try {
      contactSchema.parse(formData);
      // 전체 폼이 유효하면 해당 필드 에러 제거
      setErrors(prev => ({ ...prev, [field]: '' }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        // 해당 필드의 에러만 찾아서 설정
        const fieldError = error.issues.find(e => e.path[0] === field);
        if (fieldError) {
          setErrors(prev => ({ ...prev, [field]: fieldError.message }));
        } else {
          // 해당 필드에는 에러가 없으면 제거
          setErrors(prev => ({ ...prev, [field]: '' }));
        }
      }
    }
  };

  const showError = (field: string) => {
    // 포커스 중이 아니고, touched 상태이고, 에러가 있을 때만 표시
    return !focused[field] && touched[field] && errors[field];
  };

  const resetForm = () => {
    setSelectedCategory('제품문의');
    setTitle('');
    setContent('');
    setName('');
    setContact('');
    setEmail('');
    setAgreePrivacy(false);
    setAttachments([]);
    setErrors({});
    setTouched({});
    setFocused({});
  };

  const handleSubmit = () => {
    // 모든 필드를 touched 상태로 변경
    const allFields = {
      category: true,
      title: true,
      content: true,
      name: true,
      contact: true,
      email: true,
      agreePrivacy: true,
    };
    setTouched(allFields);
    setFocused({}); // 포커스 모두 해제

    try {
      const formData = contactSchema.parse(getCurrentFormData());

      // 제출 로직
      console.log('Form Data:', formData);
      console.log('Attachments:', attachments);
      alert('문의가 성공적으로 접수되었습니다.');
      
      resetForm();
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  return {
    // State
    selectedCategory,
    agreePrivacy,
    title,
    content,
    name,
    contact,
    email,
    attachments,
    errors,
    touched,
    focused,
    isFormValid,
    
    // Setters
    setSelectedCategory,
    setAgreePrivacy,
    setTitle,
    setContent,
    setName,
    setContact,
    setEmail,
    setAttachments,
    
    // Methods
    validateField,
    handleFocus,
    handleBlur,
    showError,
    handleSubmit,
    resetForm,
  };
};