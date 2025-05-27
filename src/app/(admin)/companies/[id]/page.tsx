import Header from '@/app/components/header';
import React from 'react';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  return (
    <>
      <Header> Company ({params.id})</Header>
    </>
  );
}
