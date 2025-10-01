export interface QuestionOption {
    value: string | number;
    label: string;
}

export interface PersonalDetailsIntroProps {
    onBegin: () => void;
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
    onSelect?: (value: string | number) => void;
    onPrevious: () => void;
    onNext: () => void;
    nextLabel?: string;
    bottomNote?: React.ReactNode;
    children?: React.ReactNode; // custom input like age carousel
}