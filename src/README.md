# Структура проекта

## Реорганизация кода

Проект был реорганизован для лучшей структуры и разделения ответственности:

### 📁 Структура папок

```
src/
├── components/
│   ├── personal-details/          # Компоненты для персональных данных
│   │   ├── StartQuizBlok.tsx
│   │   └── index.ts
│   ├── quiz-forms/                # Общие компоненты форм опроса
│   │   ├── QuestionForm.tsx       # Адаптивный компонент формы
│   │   ├── QuestionFormDesktop.tsx
│   │   ├── QuestionFormMobile.tsx
│   │   └── index.ts
│   └── quiz-pages/                # Страницы опроса
│       ├── QuizPage.tsx           # Главная страница с логикой
│       ├── QuizStartPage.tsx      # Стартовая страница
│       └── index.ts
├── config/                        # Конфигурационные файлы
│   ├── quizConfig.ts              # Конфигурация опроса
│   └── index.ts
├── types/                         # TypeScript типы
│   ├── quiz.ts                    # Типы для опроса
│   └── index.ts
└── pages/                         # Остальные страницы
    └── landing/
```

### 🔧 Основные изменения

1. **Вынесен конфиг файл** - `quizConfig.ts` содержит всю логику конфигурации опроса
2. **Разделены компоненты по папкам**:
   - `personal-details/` - компоненты для персональных данных
   - `quiz-forms/` - общие формы вопросов
   - `quiz-pages/` - страницы опроса
3. **Созданы типы** - все TypeScript типы вынесены в отдельную папку
4. **Добавлены индексные файлы** - для удобного импорта

### 📦 Импорты

Теперь можно импортировать компоненты более удобно:

```typescript
// Импорт компонентов
import { StartQuizBlok } from './components/personal-details';
import { QuestionForm } from './components/quiz-forms';
import { QuizPage } from './components/quiz-pages';

// Импорт конфигурации
import { personalDetailsQuestions, createQuizSteps } from './config';

// Импорт типов
import { QuestionOption, QuestionFormProps } from './types';
```

### 🎯 Преимущества новой структуры

- **Лучшая организация** - каждый компонент в своей папке
- **Переиспользование** - общие компоненты форм вынесены отдельно
- **Масштабируемость** - легко добавлять новые компоненты
- **Типизация** - все типы в одном месте
- **Конфигурация** - логика опроса отделена от компонентов