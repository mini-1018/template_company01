import { useState } from 'react';
import { AttachmentFile } from './useContactForm';

export const useFileUpload = (
  attachments: AttachmentFile[],
  setAttachments: React.Dispatch<React.SetStateAction<AttachmentFile[]>>
) => {
  const MAX_FILES = 5;
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const newAttachments: AttachmentFile[] = [];
    const fileErrors: string[] = [];

    if (attachments.length >= MAX_FILES) {
      alert(`최대 ${MAX_FILES}개의 파일만 첨부할 수 있습니다.`);
      return;
    }

    files.forEach((file) => {
      if (attachments.length + newAttachments.length >= MAX_FILES) {
        fileErrors.push(`최대 ${MAX_FILES}개까지만 업로드 가능합니다.`);
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        fileErrors.push(`${file.name}: 파일 크기가 5MB를 초과합니다.`);
        return;
      }

      if (attachments.some(att => att.name === file.name)) {
        fileErrors.push(`${file.name}: 이미 추가된 파일입니다.`);
        return;
      }

      newAttachments.push({
        id: Date.now().toString() + Math.random(),
        file: file,
        name: file.name,
        size: file.size,
      });
    });

    if (fileErrors.length > 0) {
      alert(fileErrors.join('\n'));
    }

    setAttachments([...attachments, ...newAttachments]);
    e.target.value = '';
  };

  const removeAttachment = (id: string) => {
    setAttachments(attachments.filter(att => att.id !== id));
  };

  return {
    MAX_FILES,
    MAX_FILE_SIZE,
    formatFileSize,
    handleFileChange,
    removeAttachment,
  };
};