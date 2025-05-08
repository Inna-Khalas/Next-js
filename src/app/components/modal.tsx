import React, { Fragment } from 'react';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';

export interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export default function Modal({ show, children, onClose }: ModalProps) {
  return (
    <Transition show={show}>
      <Dialog
        as="div"
        onClose={onClose}
        className="fixed inset-0 z-50 flex items-center"
      >
        <div className="fixed inset-0 flex items-center justify-center">
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 transition-opacity bg-opacity-75" />
          </TransitionChild>

          <DialogPanel className="relative w-full max-w-3xl transform overflow-hidden rounded-2xl bg-gray-100 shadow-xl  transition-all p-6 sm:p-10">
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
}
