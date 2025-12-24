'use client';

import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
}

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children,
  maxWidth = '5xl'
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className={`bg-gradient-to-br from-[#0F3A3E] to-[#1C474A] rounded-3xl max-w-${maxWidth} w-full max-h-[85vh] shadow-2xl border border-white/20 flex flex-col overflow-hidden modal-scrollbar`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed */}
        <div className="bg-gradient-to-r from-[#0A1F21] to-[#0F3A3E] border-b border-white/20 px-8 py-6 flex items-center justify-between flex-shrink-0">
          <h2 className="font-['Cairo'] text-2xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-red-500 hover:text-white rounded-full transition-all duration-300 cursor-pointer text-white"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="p-8 overflow-y-auto modal-scrollbar flex-1">
          {children}
        </div>
      </div>

      <style jsx>{`
        .modal-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .modal-scrollbar::-webkit-scrollbar-track {
          background: rgba(10, 31, 33, 0.3);
          border-radius: 10px;
        }

        .modal-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #D4C5B9, #F7F6F4);
          border-radius: 10px;
        }

        .modal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #E5D9CF, #FFFFFF);
        }
      `}</style>
    </div>
  );
}
