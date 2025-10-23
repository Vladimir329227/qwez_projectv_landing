export interface QuestionOption {
    value: string | number;
    label: string;
    column?: 1 | 2; // Указывает в какой столбец поместить опцию (1 или 2)
}

export interface PersonalDetailsIntroProps {
    onBegin: () => void;
    onPrevious?: () => void;
    // Optional presentation props for intro screen
    backgroundImageUrl?: string;
    desktopWomanImageUrl?: string;
    desktopBackgroundImageUrl?: string;
    titleLines?: string[]; // e.g., ["PERSONAL", "DETAILS"]
    bodyLines?: string[];  // manual line breaks preserved per item
    buttonLabel?: string;
    nextSegment?: string; // Name of the next segment to display "Up next..."
}

export interface QuizStartPageProps {
    onNext: () => void;
    onPrevious: () => void;
}

export interface QuestionFormProps {
    sectionTitle: string;
    questionIndex: number;
    totalQuestions: number;
    question: string;
    subtitle?: string;
    options?: QuestionOption[];
    selectedValue?: string | number | null;
    // When multi-select is enabled, use selectedValues and onToggleSelect
    isMulti?: boolean;
    selectedValues?: Array<string | number>;
    onToggleSelect?: (value: string | number) => void;
    onSelect?: (value: string | number) => void;
    onPrevious: () => void;
    onNext: () => void;
    nextLabel?: string;
    bottomNote?: React.ReactNode;
    children?: React.ReactNode; // custom input like age carousel
    notification?: string;
    separateOption?: string; // Значение опции, которая должна отображаться отдельно
    columnLayout?: 'single' | 'double'; // Управляет количеством столбцов на десктопе
    columnLayoutMobile?: 'single' | 'double'; // Управляет количеством столбцов на мобильных устройствах
}