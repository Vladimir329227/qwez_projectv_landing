import React, { useEffect } from "react";
import ProductPage from "./ProductPage";

interface ProductModalProps {
  answers?: Record<string, any>;
  productName?: string;
  productKey?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({
  answers = {} as Record<string, any>,
  productName,
  productKey,
  isOpen,
  onClose,
}: ProductModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full h-full max-w-7xl max-h-[95vh] mx-2 sm:mx-4 my-2 sm:my-4 bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-[#1F2429] hover:bg-[#0f1215] text-white rounded-full p-1.5 sm:p-2 shadow-lg transition-colors duration-200"
          aria-label="Close modal"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-5 sm:h-5"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        {/* Product Page Content */}
        <div className="h-full overflow-y-auto">
          <ProductPage
            answers={answers}
            productName={productName}
            productKey={productKey}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}
