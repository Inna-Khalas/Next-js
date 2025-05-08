'use client';

import { Field, FieldAttributes } from 'formik';
import React from 'react';

export interface InputFieldProps
  extends FieldAttributes<any>,
    React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

const InputField = ({ label, id, ...props }: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id || props.name}
          className="mb-2 text-base text-gray-900"
        >
          {label}
        </label>
      )}
      <Field
        id={id || props.name}
        className="h-11 text-sm text-gray-500 padding-12 rounded border bg-white border-gray-300 shadow"
        {...props}
      />
    </div>
  );
};

export default InputField;
