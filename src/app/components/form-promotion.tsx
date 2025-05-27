'use client';

import { Form, Formik } from 'formik';
import React from 'react';
import InputField from './input-field';
import LogoUploader from './logo-uploader';
import Button from './button';

export type PromotionFieldValues = {
  title: string;
  description: string;
  discount: string;
};

const initialValues: PromotionFieldValues = {
  title: '',
  description: '',
  discount: '',
};

export interface PromotionFormProps {
  onSubmit: (values: PromotionFieldValues) => void | Promise<void>;
}

const FormPromotion = ({ onSubmit }: PromotionFormProps) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-lg w-[364px] padding-28">
        <h2 className="text-2xl font-semibold">Add promotion</h2>
        <InputField label="Title" placeholder="Title" name="title" />
        <InputField
          label="Description"
          placeholder="Description"
          name="description"
        />
        <InputField
          label="Discount amount"
          placeholder="-40%"
          name="discount"
        />
        <LogoUploader
          label="Image"
          placeholder="Upload photo"
          variant="square"
        />
        <Button
          type="submit"
          className="bg-gray-900 text-white py-3 rounded-lg text-center text-base font-semibold hover:bg-gray-800 transition-colors"
        >
          Add promotion
        </Button>
      </Form>
    </Formik>
  );
};

export default FormPromotion;
