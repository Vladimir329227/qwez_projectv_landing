import React from 'react';
import { disableDebugMode } from '../../utils/debugUtils';
import { canUseDebugMode } from '../../config/debugConfig';

interface DebugToggleProps {
  isVisible: boolean;
  onToggle: () => void;
}

const DebugToggle: React.FC<DebugToggleProps> = ({ isVisible, onToggle }) => {
  // Скрываем дебаг режим если он не разрешен
  if (!canUseDebugMode()) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {/* Main toggle button */}
      <button
        onClick={onToggle}
        className={`w-12 h-12 rounded-full shadow-lg transition-all duration-200 ${
          isVisible 
            ? 'bg-red-600 hover:bg-red-700' 
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white flex items-center justify-center text-lg font-bold`}
        title={isVisible ? 'Hide Debug Panel' : 'Show Debug Panel (Ctrl+D)'}
      >
        {isVisible ? '✕' : '🐛'}
      </button>
      
      {/* Disable debug mode button */}
      {isVisible && (
        <button
          onClick={disableDebugMode}
          className="w-12 h-12 rounded-full bg-red-800 hover:bg-red-900 shadow-lg transition-all duration-200 text-white flex items-center justify-center text-xs font-bold"
          title="Completely disable debug mode"
        >
          🚫
        </button>
      )}
    </div>
  );
};

export default DebugToggle;
