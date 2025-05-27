'use client';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Button from './button';

const ModalPromotion = dynamic(() => import('./modal-promotion'), {
  ssr: false,
});

const AddPromotionButton = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add promotion</Button>
      <ModalPromotion
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
};

export default AddPromotionButton;
