import { ReactNode } from 'react';
import xIcon from '../../assets/icons/x.svg';

export interface ModalProps {
  open: boolean;
  onClose: VoidFunction;
  children: ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  return (
    <div
      onClick={onClose}
      className={`
          fixed inset-0 flex justify-center items-center transition-colors z-[9999]
          ${open ? 'visible bg-black/20' : 'invisible'}
        `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
            bg-white rounded-xl shadow p-6 transition-all
            ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}
          `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <img alt="close" src={xIcon} />
        </button>
        {children}
      </div>
    </div>
  );
}
export default Modal;
