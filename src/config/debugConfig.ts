// Конфигурация дебаг режима
export const DEBUG_CONFIG = {
  // Разрешен ли дебаг режим (только в development)
  isEnabled: import.meta.env.DEV,
  
  // Разрешен ли дебаг режим через URL параметры
  allowUrlParams: import.meta.env.DEV,
  
  // Разрешен ли дебаг режим через localStorage
  allowLocalStorage: import.meta.env.DEV,
  
  // Разрешен ли дебаг режим через горячие клавиши
  allowHotkeys: import.meta.env.DEV,
};

// Проверка, можно ли использовать дебаг режим
export const canUseDebugMode = () => {
  return DEBUG_CONFIG.isEnabled;
};

// Проверка, можно ли включить дебаг режим через URL
export const canEnableDebugViaUrl = () => {
  return DEBUG_CONFIG.allowUrlParams;
};

// Проверка, можно ли включить дебаг режим через localStorage
export const canEnableDebugViaStorage = () => {
  return DEBUG_CONFIG.allowLocalStorage;
};

// Проверка, можно ли использовать горячие клавиши
export const canUseHotkeys = () => {
  return DEBUG_CONFIG.allowHotkeys;
};

// Экспорт для tree-shaking в production
export const DEBUG_EXPORTS = {
  DEBUG_CONFIG,
  canUseDebugMode,
  canEnableDebugViaUrl,
  canEnableDebugViaStorage,
  canUseHotkeys,
};
