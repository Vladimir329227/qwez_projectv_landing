import React, { useState, useEffect } from 'react';
import { disableDebugMode } from '../../utils/debugUtils';
import { canUseDebugMode } from '../../config/debugConfig';

interface DebugNavigationProps {
  currentStep: number;
  totalSteps: number;
  onStepChange: (step: number) => void;
  isVisible: boolean;
  onToggle: () => void;
}

const DebugNavigation: React.FC<DebugNavigationProps> = ({
  currentStep,
  totalSteps,
  onStepChange,
  isVisible,
  onToggle
}) => {
  const [isMinimized, setIsMinimized] = useState(false);

  // Скрываем дебаг режим если он не разрешен
  if (!canUseDebugMode()) {
    return null;
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only work when debug panel is visible
      if (!isVisible) return;
      
      // Ctrl/Cmd + D to toggle debug panel
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        onToggle();
        return;
      }
      
      // Arrow keys for navigation
      if (e.key === 'ArrowLeft' && currentStep > 0) {
        e.preventDefault();
        onStepChange(currentStep - 1);
      } else if (e.key === 'ArrowRight' && currentStep < totalSteps - 1) {
        e.preventDefault();
        onStepChange(currentStep + 1);
      }
      
      // Number keys for direct navigation (1-9)
      const stepNumber = parseInt(e.key);
      if (!isNaN(stepNumber) && stepNumber >= 1 && stepNumber <= 9) {
        const targetStep = stepNumber - 1;
        if (targetStep < totalSteps) {
          e.preventDefault();
          onStepChange(targetStep);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentStep, totalSteps, onStepChange, isVisible, onToggle]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-black bg-opacity-90 text-white rounded-lg p-4 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold">Debug Navigation</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-xs px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded"
          >
            {isMinimized ? '▼' : '▲'}
          </button>
          <button
            onClick={onToggle}
            className="text-xs px-2 py-1 bg-red-600 hover:bg-red-500 rounded"
          >
            ✕
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="space-y-3">
          {/* Current step info */}
          <div className="text-xs">
            <div>Step: {currentStep + 1} / {totalSteps}</div>
            <div className="text-gray-300">
              Progress: {Math.round(((currentStep + 1) / totalSteps) * 100)}%
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => onStepChange(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed rounded text-xs"
            >
              ← Prev
            </button>
            <button
              onClick={() => onStepChange(Math.min(totalSteps - 1, currentStep + 1))}
              disabled={currentStep === totalSteps - 1}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed rounded text-xs"
            >
              Next →
            </button>
          </div>

          {/* Quick jump buttons */}
          <div className="space-y-2">
            <div className="text-xs text-gray-300">Quick Jump:</div>
            <div className="grid grid-cols-3 gap-1">
              {Array.from({ length: Math.min(9, totalSteps) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => onStepChange(i)}
                  className={`px-2 py-1 text-xs rounded ${
                    currentStep === i
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Special navigation */}
          <div className="space-y-1">
            <div className="text-xs text-gray-300">Special:</div>
            <div className="flex gap-1">
              <button
                onClick={() => onStepChange(0)}
                className="px-2 py-1 bg-purple-600 hover:bg-purple-500 rounded text-xs"
              >
                Start
              </button>
              <button
                onClick={() => onStepChange(Math.floor(totalSteps / 2))}
                className="px-2 py-1 bg-purple-600 hover:bg-purple-500 rounded text-xs"
              >
                Middle
              </button>
              <button
                onClick={() => onStepChange(totalSteps - 1)}
                className="px-2 py-1 bg-purple-600 hover:bg-purple-500 rounded text-xs"
              >
                End
              </button>
            </div>
          </div>

          {/* Disable debug mode */}
          <div className="space-y-1">
            <div className="text-xs text-gray-300">Disable:</div>
            <button
              onClick={disableDebugMode}
              className="w-full px-2 py-1 bg-red-600 hover:bg-red-500 rounded text-xs"
            >
              Disable Debug Mode
            </button>
          </div>

          {/* Keyboard shortcuts info */}
          <div className="text-xs text-gray-400 border-t pt-2">
            <div>Shortcuts:</div>
            <div>← → Arrow keys</div>
            <div>1-9 Number keys</div>
            <div>Ctrl+D Toggle</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DebugNavigation;
