import React from 'react';

interface QuizProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  onStartFresh: () => void;
  isCompleted: boolean;
  currentStep: number;
  totalSteps: number;
}

export default function QuizProgressModal({
  isOpen,
  onClose,
  onContinue,
  onStartFresh,
  isCompleted,
  currentStep,
  totalSteps
}: QuizProgressModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {isCompleted ? 'Your Results Are Ready!' : 'Continue Quiz?'}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            {isCompleted 
              ? 'You have saved results from your last quiz completion. Would you like to view them or take the quiz again?'
              : `You stopped at step ${Math.min(currentStep + 1, totalSteps)} of ${totalSteps}. Would you like to continue from where you left off or start over?`
            }
          </p>

          {/* Progress bar for incomplete quiz only */}
          {!isCompleted && currentStep < totalSteps && (
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Progress</span>
                <span>{Math.min(currentStep + 1, totalSteps)} of {totalSteps}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(((currentStep + 1) / totalSteps) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={onContinue}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {isCompleted ? 'View Results' : 'Continue'}
            </button>
            
            <button
              onClick={onStartFresh}
              className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              {isCompleted ? 'Take Quiz Again' : 'Start Over'}
            </button>
            
            <button
              onClick={onClose}
              className="w-full text-gray-500 py-2 px-4 rounded-lg font-medium hover:text-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
