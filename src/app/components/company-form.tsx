'use client';

import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import Button from '@/app/components/button';
import InputField from '@/app/components/input-field';
import LogoUploader from '@/app/components/logo-uploader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

export type CompanyFieldValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
};

const initialValues: CompanyFieldValues = {
  name: '',
  status: '',
  country: '',
  category: '',
  date: '',
  description: '',
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {
  // const { control } = useForm({ defaultValues: { date: new Date() } });

  const [date, setDate] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleCalendarToggle = () => {
    setCalendarOpen(!calendarOpen);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit({ ...values, date: date.toISOString() })}
    >
      <Form className="flex flex-col gap-10 sm:px-10 padding-28">
        <h2 className="text-2xl font-semibold">Add new company</h2>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField label="Status" placeholder="Status" name="status" />
            <InputField label="Country" placeholder="Country" name="country" />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField label="Name" placeholder="Name" name="name" />
            <InputField
              label="Category"
              placeholder="Category"
              name="category"
            />
            <div className="flex flex-col mb-5">
              <label className=" text-base text-gray-900">Joined data</label>
              <div className="relative">
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  dateFormat="yyyy-MM-dd"
                  className="w-full px-4 py-2 p-3 h-11 text-sm rounded border border-gray-300 shadow text-gray-300 padding-12  bg-white"
                  open={calendarOpen}
                  onClickOutside={() => setCalendarOpen(false)}
                />
                <FaCalendarAlt
                  className="absolute top-3 right-3 text-gray-500 z-10"
                  onClick={handleCalendarToggle}
                />
              </div>
            </div>
            <InputField
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
        <Button type="submit">Add company</Button>
      </Form>
    </Formik>
  );
}
