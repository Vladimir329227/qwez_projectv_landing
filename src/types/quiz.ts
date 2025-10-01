export interface QuestionOption {
    value: string | number;
    label: string;
}

export interface PersonalDetailsIntroProps {
    onBegin: () => void;
    // Optional presentation props for intro screen
    backgroundImageUrl?: string;
    titleLines?: string[]; // e.g., ["PERSONAL", "DETAILS"]
    bodyLines?: string[];  // manual line breaks preserved per item
    buttonLabel?: string;
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
}