'use client';

import React, { useRef, useState } from 'react';
// import Image from 'next/image';
import { FiUploadCloud } from 'react-icons/fi';

export interface LogoUploaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  placeholder?: string;
  variant?: 'circle' | 'square';
}

const LogoUploader = ({
  label,
  placeholder = 'Upload photo',
  id,
  variant = 'square',
  ...props
}: LogoUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const isCircle = variant === 'circle';

  return (
    <div className="flex flex-col gap-2">
      {label && <p className="text-base text-gray-900">{label}</p>}

      <div
        onClick={handleClick}
        className={`flex flex-col items-center justify-center cursor-pointer overflow-hidden border border-dashed border-slate-900
          ${isCircle ? 'w-40 h-40 rounded-full' : 'w-full h-48 rounded-xl'}
          bg-white hover:bg-gray-50 transition`}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Uploaded"
            className={`object-cover ${
              isCircle ? 'w-40 h-40 rounded-full' : 'w-full h-48 rounded-xl'
            }`}
          />
        ) : (
          <div className="flex flex-col items-center text-gray-500">
            <FiUploadCloud className="text-3xl mb-2" />
            <p className="text-sm text-center px-2">{placeholder}</p>
          </div>
        )}

        <input
          {...props}
          ref={fileInputRef}
          id={id}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default LogoUploader;
