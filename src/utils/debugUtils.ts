import { canUseDebugMode, canEnableDebugViaUrl, canEnableDebugViaStorage } from '../config/debugConfig';

// Утилита для полного отключения дебаг режима
export const disableDebugMode = () => {
  // Проверяем, разрешен ли дебаг режим
  if (!canUseDebugMode()) {
    return;
  }
  
  // Удаляем все дебаг настройки из localStorage
  localStorage.removeItem('debug-mode');
  
  // Очищаем URL от debug параметра
  const url = new URL(window.location.href);
  url.searchParams.delete('debug');
  
  // Обновляем URL без перезагрузки страницы
  window.history.replaceState({}, '', url.toString());
  
  // Перезагружаем страницу для применения изменений
  window.location.reload();
};

// Проверка, включен ли дебаг режим
export const isDebugModeEnabled = () => {
  // Проверяем, разрешен ли дебаг режим
  if (!canUseDebugMode()) {
    return false;
  }
  
  const urlParams = new URLSearchParams(window.location.search);
  const debugParam = urlParams.get('debug');
  const debugFromStorage = localStorage.getItem('debug-mode');
  
  return (canEnableDebugViaUrl() && debugParam === 'true') || 
         (canEnableDebugViaStorage() && debugFromStorage === 'true');
};

// Включение дебаг режима
export const enableDebugMode = () => {
  // Проверяем, разрешен ли дебаг режим
  if (!canUseDebugMode()) {
    return;
  }
  
  localStorage.setItem('debug-mode', 'true');
  window.location.reload();
};

// Переключение дебаг режима
export const toggleDebugMode = () => {
  // Проверяем, разрешен ли дебаг режим
  if (!canUseDebugMode()) {
    return;
  }
  
  if (isDebugModeEnabled()) {
    disableDebugMode();
  } else {
    enableDebugMode();
  }
};