import { z } from 'zod';

export const contactSchema = z.object({
  category: z.string().min(1, '문의유형을 선택해주세요'),
  title: z.string().min(5, '제목은 5자 이상 입력해주세요'),
  content: z.string().min(10, '문의내용은 10자 이상 입력해주세요'),
  name: z.string().min(1, '이름을 입력해주세요'),
  contact: z.string()
    .min(1, '연락처를 입력해주세요')
    .regex(/^(?:01[0-9]-?\d{3,4}-?\d{4}|0\d{1,2}-?\d{3,4}-?\d{4})$/, '올바른 연락처 형식이 아닙니다'),
  email: z.string()
    .min(1, '이메일을 입력해주세요')
    .email('올바른 이메일 형식이 아닙니다'),
  agreePrivacy: z.boolean().refine(val => val === true, '개인정보 취급방침에 동의해주세요'),
});

export type ContactFormData = z.infer<typeof contactSchema>;