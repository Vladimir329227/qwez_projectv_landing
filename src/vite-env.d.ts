/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEBUG_ENABLED: string
  // добавьте другие переменные окружения здесь
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
