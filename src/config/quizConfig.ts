import { QuestionOption } from '../types/quiz';

export interface PersonalDetailsQuestion {
    key: string;
    question: string;
    subtitle?: string;
    options?: QuestionOption[];
    custom?: React.ReactNode;
}

export const personalDetailsQuestions: PersonalDetailsQuestion[] = [
    {
        key: "gender",
        question: "What is your gender?",
        options: [
            { value: "female", label: "Female" },
            { value: "male", label: "Male" },
        ],
    },
    {
        key: "age",
        question: "Select your age",
        custom: null,
    },
    {
        key: "height",
        question: "What is your height?",
        subtitle: "Select your height in centimeters.",
        custom: null,
    },
    {
        key: "weight",
        question: "What is your weight?",
        subtitle: "Select your weight in kilograms.",
        custom: null,
    },
    {
        key: "activity",
        question: "How active is your lifestyle?",
        options: [
            { value: "low", label: "Low" },
            { value: "moderate", label: "Moderate" },
            { value: "high", label: "High" },
        ],
    },
];

export interface QuizStep {
    title: string;
    subtitle?: string;
    content: React.ReactNode;
}

export const createQuizSteps = (
    answers: Record<string, any>,
    setAnswers: (answers: Record<string, any>) => void,
    setCurrentStep: (step: number) => void,
    currentStep: number,
    PersonalDetailsIntro: React.ComponentType<{ onBegin: () => void }>,
    QuestionForm: React.ComponentType<any>
): QuizStep[] => {
    return [
        {
            title: "",
            content: (
                <PersonalDetailsIntro onBegin={() => setCurrentStep(1)} />
            )
        },
        ...personalDetailsQuestions.map((q, idx) => {
            const total = personalDetailsQuestions.length;
            const questionIndex = idx; // 0..4
            const key = q.key;
            const value = answers[key] ?? null;

            const renderCustom = () => {
                if (q.key === "age") {
                    return (
                        <div className="flex justify-center">
                            <input
                                type="range"
                                min={16}
                                max={90}
                                value={typeof value === "number" ? value : 16}
                                onChange={(e) => setAnswers({ ...answers, [key]: Number(e.target.value) })}
                                className="w-full"
                            />
                            <div className="ml-4 w-16 text-center font-semibold">{value ?? 16}</div>
                        </div>
                    );
                }
                if (q.key === "height") {
                    return (
                        <div className="flex items-center gap-4">
                            <input
                                type="number"
                                min={120}
                                max={220}
                                value={typeof value === "number" ? value : ""}
                                onChange={(e) => setAnswers({ ...answers, [key]: Number(e.target.value) })}
                                className="border border-gray-300 rounded px-3 py-2 w-32"
                                placeholder="Enter height"
                            />
                            <span className="text-gray-500">cm</span>
                        </div>
                    );
                }
                if (q.key === "weight") {
                    return (
                        <div className="flex items-center gap-4">
                            <input
                                type="number"
                                min={40}
                                max={200}
                                value={typeof value === "number" ? value : ""}
                                onChange={(e) => setAnswers({ ...answers, [key]: Number(e.target.value) })}
                                className="border border-gray-300 rounded px-3 py-2 w-32"
                                placeholder="Enter weight"
                            />
                            <span className="text-gray-500">kg</span>
                        </div>
                    );
                }
                return null;
            };

            return {
                title: "PERSONAL DETAILS",
                content: (
                    <QuestionForm
                        sectionTitle="PERSONAL DETAILS"
                        questionIndex={questionIndex}
                        totalQuestions={total}
                        question={q.question}
                        subtitle={q.subtitle}
                        options={q.options}
                        selectedValue={value}
                        onSelect={(v: any) => setAnswers({ ...answers, [key]: v })}
                        onPrevious={() => setCurrentStep(Math.max(0, currentStep - 1))}
                        onNext={() => setCurrentStep(currentStep + 1)}
                        nextLabel={idx === total - 1 ? "Next" : "Next"}
                        bottomNote={null}
                    >
                        {(!q.options || q.options.length === 0) && renderCustom()}
                    </QuestionForm>
                )
            };
        }),
        {
            title: "Quiz Complete!",
            subtitle: "Your personalized recommendations are ready",
            content: (
                <div className="flex flex-col items-center gap-8">
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-[#1F2429] mb-4">
                            Thank you for completing the quiz!
                        </h2>
                        <p className="text-lg text-gray-600 max-w-md mb-6">
                            Based on your answers, we've prepared a personalized selection of Project V supplements just for you.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <h3 className="font-bold text-[#1F2429] mb-2">Your Profile:</h3>
                            <p className="text-sm text-gray-600">Gender: {answers.gender}</p>
                            <p className="text-sm text-gray-600">Age: {answers.age}</p>
                            <p className="text-sm text-gray-600">Height: {answers.height} cm</p>
                            <p className="text-sm text-gray-600">Weight: {answers.weight} kg</p>
                            <p className="text-sm text-gray-600">Activity: {answers.activity}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => {
                                setCurrentStep(0);
                                setAnswers({});
                            }}
                            className="bg-gray-500 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-600 transition-colors"
                        >
                            Retake Quiz
                        </button>
                        <button 
                            onClick={() => window.location.href = '/landing'}
                            className="bg-[#00A8E2] text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-colors"
                        >
                            View Recommendations
                        </button>
                    </div>
                </div>
            )
        }
    ];
};