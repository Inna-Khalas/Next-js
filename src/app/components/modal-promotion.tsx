'use client';

import React from 'react';
import Modal, { ModalProps } from './modal';
import FormPromotion, { PromotionFormProps } from './form-promotion';

export interface PromotionFormModalProps extends ModalProps {
  onSubmit: PromotionFormProps['onSubmit'];
}

const ModalPromotion = ({ onSubmit, ...props }: PromotionFormModalProps) => {
  return (
    <Modal {...props}>
      <FormPromotion onSubmit={onSubmit} />
    </Modal>
  );
};

export default ModalPromotion;
