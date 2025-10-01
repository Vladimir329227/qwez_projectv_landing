import { QuestionOption } from '../types/quiz';
import React from 'react';
import AgeCarousel from '../components/personal-details/AgeCarousel';
import { EmailForm, NameForm, DisclaimerForm } from '../components/quiz-forms';

export interface PersonalDetailsQuestion {
    key: string;
    question: string;
    subtitle?: string;
    options?: QuestionOption[];
}

export const personalDetailsQuestions: PersonalDetailsQuestion[] = [
    {
        key: "gender",
        question: "What is your gender?",
        subtitle: 'Select your gender tp help us fine-tune your glow-up essentials',
        options: [
            { value: "female", label: "Female" },
            { value: "male", label: "Male" },
        ],
    },
    {
        key: "age",
        question: "Select your age",
    },
    {
        key: "goals",
        question: "What\'s your main goal?",
        options: [
            { value: 'clearer-skin', label: 'Clearer skin' },
            { value: 'better-digestion', label: 'Better digestion' },
            { value: 'less-stress', label: 'Less stress' },
            { value: 'better-sleep', label: 'Better sleep' },
            { value: 'sharper-focus', label: 'Sharper focus' },
            { value: 'healthy-heart', label: 'Healthy heart' },
            { value: 'longevity', label: 'Longevity' },
            { value: 'detox', label: 'Detox' },
            { value: 'natural-immunity', label: 'Natural immunity' },
            { value: 'sustained-energy', label: 'Sustained energy' }
          ],
    },
    {
        key: "climate",
        question: "Climate & lifestyle setting",
        subtitle: "Select your weight in kilograms.",
        options: [
            { value: 'sunny-warm', label: 'Sunny & warm most of the year' },
            { value: 'cool-rainy', label: 'Cool or rainy climate' },
            { value: 'cold-winters', label: 'Cold winters with low sun exposure' },
            { value: 'urban-polluted', label: 'Urban & possibly polluted' },
            { value: 'rural-nature', label: 'Rural or close to nature' }
          ]
    },
    {
        key: "activity",
        question: "Have you had COVID-19?",
        options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
            { value: 'several-times', label: 'Several Times' }
        ],
    },
];

// Morning Energy block
export const morningEnergyQuestions: PersonalDetailsQuestion[] = [
    {
        key: 'morningEnergy',
        question: 'How do you feel waking up?',
        options: [
            { value: 'bright-eyed', label: 'Bright-eyed and glowing' },
            { value: 'snooze', label: 'Snooze once or twice' },
            { value: 'dragged', label: 'Dragged out of bed by life itself' },
        ],
    },
    {
        key: 'energyLevel',
        question: "How's your energy throughout the day?",
        options: [
            { value: 'energized-unstoppable', label: 'Energized and unstoppable' },
            { value: 'some-days-fab', label: 'Some days fab, some days flat' },
            { value: 'low-energy', label: 'Low energy — help!' },
        ],
    },
    {
        key: 'caffeineIntake',
        question: "What's your caffeine story?",
        options: [
            { value: 'dont-drink', label: "I don't drink coffee" },
            { value: '1-2-cups', label: '1-2 cups a day' },
            { value: 'more-4-cups', label: 'More than 4 cups' },
        ],
    },
    {
        key: 'focusLevel',
        question: 'How sharp is your focus?',
        options: [
            { value: 'laser-sharp', label: 'Laser sharp' },
            { value: 'Decent-drifty', label: 'Decent but drifty' },
            { value: 'where-am', label: 'Wait, what were we talking about? to focus' },
        ],
    },
];

// Movement & Flexibility block
export const movementQuestions: PersonalDetailsQuestion[] = [
    {
        key: 'movementFrequency',
        question: 'How often do you move?',
        options: [
            { value: 'daily', label: 'Daily movement is my rhythm' },
            { value: 'few-times', label: 'A few times a week' },
            { value: 'choreography', label: 'Couch choreography only' },
        ],
    },
    {
        key: 'postureFlexibility',
        question: "What's your posture / flexibility like?",
        options: [
            { value: 'graceful-grounded', label: 'Graceful and grounded' },
            { value: 'more-yoga', label: 'Could use more yoga' },
            { value: 'slouch-city', label: 'Slouch city' },
        ],
    },
    {
        key: 'jointsMuscles',
        question: 'How do your joints/muscles feel?',
        options: [
            { value: 'flexible-fierce', label: 'Flexible and fierce' },
            { value: 'on-off', label: 'On and off' },
            { value: 'stiff-sore', label: 'Stiff and sore' },
        ],
    },
    {
        key: 'stiffnessInflammation',
        question: 'Do you experience stiffness / inflammation?',
        options: [
            { value: 'stretch-cool', label: 'I stretch and cool down' },
            { value: 'mild-soreness', label: 'Mild soreness' },
            { value: 'constant-tension', label: 'Constant tension' },
        ],
    },
];

// Nutrition & Digestion block
export const nutritionQuestions: PersonalDetailsQuestion[] = [
    {
        key: 'dietType',
        question: 'How would you describe your diet?',
        options: [
            { value: 'fresh-vibrant', label: 'Fresh and vibrant' },
            { value: 'mixed-greens-convenience', label: 'Mixed greens & convenience' },
            { value: 'mostly-beige', label: 'Mostly beige' },
        ],
    },
    {
        key: 'cravings',
        question: 'What are your cravings like?',
        options: [
            { value: 'balanced-chic', label: 'Balanced and chic' },
            { value: 'sweet-salty', label: 'Sweet/salty' },
            { value: 'sugar-spirit-animal', label: 'Sugar is my spirit animal' },
        ],
    },
    {
        key: 'plate',
        question: "What's on your plate most days?",
        options: [
            { value: 'colorful-veggie-forward', label: 'Colorful and veggie-forward' },
            { value: 'half-vibrant-bland', label: 'Half vibrant, half bland' },
            { value: 'all-beige', label: 'All beige' },
        ],
    },
    {
        key: 'antioxidant-rich',
        question: 'How often do you eat antioxidant-rich foods?',
        options: [
            { value: 'daily', label: 'Daily' },
            { value: 'a-few-times', label: 'A few times a week' },
            { value: 'rarely', label: 'Rarely' },
        ],
    },
    {
        key: 'digestion',
        question: "How's your digestion?",
        options: [
            { value: 'balanced-breezy', label: 'Balanced and breezy' },
            { value: 'unpredictable', label: 'Unpredictable' },
            { value: 'constant-bloat', label: 'Constant bloat battle' },
        ],
    },
    {
        key: 'detox',
        question: 'Do you detox?',
        options: [
            { value: 'daily', label: 'Daily' },
            { value: 'weekly', label: 'Weekly reset' },
            { value: 'only-post-indulgence', label: 'Only post-indulgence' },
        ],
    },
    {
        key: 'sugar-status',
        question: 'Blood sugar status?',
        options: [
            { value: 'balanced', label: 'Balanced' },
            { value: 'dips-spikes', label: 'Dips/spikes' },
            { value: 'constant-cravings', label: 'Constant cravings' },
        ],
    },
];

// Sleep & Stress block
export const sleepQuestions: PersonalDetailsQuestion[] = [
    {
        key: 'sleepQuality',
        question: 'How do you sleep?',
        options: [
            { value: 'like-royalty', label: 'Like royalty' },
            { value: 'light-sleeper', label: 'Light sleeper' },
            { value: 'insomnia', label: 'Insomnia is my vibe' },
        ],
    },
    {
        key: 'stressLevel',
        question: 'Do you unplug from tech/stress?',
        options: [
            { value: 'breathe-space', label: 'I make space to breathe' },
            { value: 'sometimes', label: 'Sometimes' },
            { value: 'always-on', label: 'Always on' },
        ],
    },
    {
        key: 'stressManagement',
        question: 'How do you handle stress?',
        options: [
            { value: 'zen-rituals', label: 'Zen rituals' },
            { value: 'hopping-therapy', label: 'Hopping therapy' },
            { value: 'chocolate-chaos', label: 'Chocolate & chaos' },
        ],
    },
    {
        key: 'self-care',
        question: 'Do you take care of yourself?',
        options: [
            { value: 'weekly-luxe-rituals', label: 'Weekly luxe rituals' },
            { value: 'trying-my-best', label: 'Trying my best' },
            { value: 'not-really', label: 'Not really' },
        ],
    },
    {
        key: 'skin-saying',
        question: "What's your skin saying?",
        options: [
            { value: 'glowing', label: 'Glowing' },
            { value: 'random', label: 'Random' },
            { value: 'dull', label: 'Dull' },
        ],
    },
];

// Indulgence & Balance block
export const indulgenceQuestions: PersonalDetailsQuestion[] = [
    {
        key: 'alcohol',
        question: 'How often do you drink alcohol?',
        options: [
            { value: 'rarely', label: 'Rarely' },
            { value: 'weekends', label: 'Weekends' },
            { value: 'daily', label: 'Daily' },
        ],
    },
    {
        key: 'smoking',
        question: 'Any habits like smoking/excess caffeine?',
        options: [
            { value: 'none', label: 'None' },
            { value: 'a-few', label: 'A few' },
            { value: "let-s-not-talk-about-it", label: "Let's not talk about it" },
        ],
    },
    {
        key: 'sugar-drinks',
        question: 'Sugary drinks?',
        options: [
            { value: 'almost-never', label: 'Almost never' },
            { value: 'sometimes', label: 'Sometimes' },
            { value: 'daily-dose-of-bubble-tea', label: 'Daily dose of bubble tea' },
        ],
    },
];

// Environment & Pollution block
export const environmentQuestions: PersonalDetailsQuestion[] = [
    {
        key: 'environment',
        question: 'How often do you go outside?',
        options: [
            { value: 'daily', label: 'Daily' },
            { value: 'weekends', label: 'Weekends' },
            { value: 'concrete-jungle', label: 'Concrete jungle life' },
        ],
    },
    {
        key: 'fresh-air',
        question: 'Fresh air breaks?',
        options: [
            { value: 'yes', label: 'Yes' },
            { value: 'sometimes', label: 'Sometimes' },
            { value: 'rarely', label: 'Rarely' },
        ],
    },
    {
        key: 'sunlight-exposure',
        question: 'Sunlight exposure?',
        options: [
            { value: '20+ minutes', label: '20+ minutes' },
            { value: 'some-days', label: 'Some days' },
            { value: 'barely-any', label: 'barely any' },
        ],
    },
    {
        key: 'pollution-exposure',
        question: 'Pollution exposure?',
        options: [
            { value: 'i-detox-regularly', label: 'I detox regularly' },
            { value: 'try', label: 'Try' },
            { value: 'i-breathe-it-in', label: 'I breathe it in' },
        ],
    },
    {
        key: 'nature-escapes',
        question: 'Nature escapes?',
        options: [
            { value: 'monthly', label: 'Monthly' },
            { value: 'sometimes', label: 'Sometimes' },
            { value: "what-s-that", label: "What’s that?" },
        ],
    },
    {
        key: 'disconnect-from-tech',
        question: 'Do you disconnect from tech?',
        options: [
            { value: 'half-scrolling', label: 'Half-scrolling' },
            { value: 'always-online', label: 'Always online' },
            { value: 'off-grid-goddess', label: 'Off-grid goddess' },
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
    StartQuizBlok: React.ComponentType<{ onBegin: () => void; backgroundImageUrl?: string; titleLines?: string[]; bodyLines?: string[]; buttonLabel?: string }>,
    QuestionForm: React.ComponentType<any>,
    goToLanding: () => void
): QuizStep[] => {
    const steps: QuizStep[] = [
        {
            title: "",
            content: (
                <StartQuizBlok 
                    onBegin={() => setCurrentStep(1)}
                    backgroundImageUrl={'/women/yellow_woman.png'}
                    titleLines={["PERSONAL", "DETAILS"]}
                    bodyLines={[
                        "Let's start with a few quick",
                        "details – to tailor your",
                        "wellness wardrobe",
                        "perfectly.",
                    ]}
                    buttonLabel={'Begin Survey'}
                />
            )
        },
    ];

    // Helper to push a block of questions using QuestionForm
    const pushQuestionBlock = (sectionTitle: string, questions: PersonalDetailsQuestion[]) => {
        steps.push(
            ...questions.map((q, idx) => {
                const total = questions.length;
                const questionIndex = idx;
            const key = q.key;
            const value = answers[key] ?? null;

            const renderCustom = () => {
                if (q.key === "age") {
                    return (
                        <div className="flex justify-center">
                            <div className="w-full max-w-2xl">
                                <AgeCarousel
                                    min={16}
                                    max={90}
                                    value={typeof value === "number" ? value : 37}
                                    onChange={(v: number) => setAnswers({ ...answers, [key]: v })}
                                />
                            </div>
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
                    title: sectionTitle,
                content: (
                    <QuestionForm
                            sectionTitle={sectionTitle}
                            questionIndex={questionIndex}
                            totalQuestions={questions.length}
                            question={q.question}
                            subtitle={q.subtitle}
                            options={q.options}
                            isMulti={q.key === "goals"}
                            selectedValue={q.key === "goals" ? undefined : (q.key === "age" ? (value ?? 37) : value)}
                            selectedValues={q.key === "goals" ? (Array.isArray(value) ? value : []) : undefined}
                            onToggleSelect={q.key === "goals" ? ((v: any) => {
                                const prev: any[] = Array.isArray(answers[key]) ? answers[key] : [];
                                const exists = prev.includes(v);
                                const next = exists ? prev.filter((it) => it !== v) : [...prev, v];
                                setAnswers({ ...answers, [key]: next });
                            }) : undefined}
                            onSelect={q.key === "goals" ? undefined : ((v: any) => setAnswers({ ...answers, [key]: v }))}
                            onPrevious={() => setCurrentStep(Math.max(0, currentStep - 1))}
                            onNext={() => setCurrentStep(currentStep + 1)}
                            nextLabel={idx === questions.length - 1 ? "Next" : "Next"}
                            bottomNote={null}
                    >
                            {(!q.options || q.options.length === 0) && renderCustom()}
                    </QuestionForm>
                )
            };
            })
        );
    };

    // Personal Details block
    pushQuestionBlock('PERSONAL DETAILS', personalDetailsQuestions);

    // Morning Energy Intro
    steps.push({
        title: '',
        content: (
            <StartQuizBlok
                onBegin={() => setCurrentStep(currentStep + 1)}
                backgroundImageUrl={'/women/orange_woman.jpg'}
                titleLines={["MORNING", "ENERGY", "& CLARITY"]}
                bodyLines={[
                    'Rise and shine – or hit',
                    'snooze for the fifth time?',
                    'This section checks in on',
                    'how energized, focused, and',
                    'clear-headed you feel as you',
                    'step into your day. Your glow-',
                    'up starts here.',
                ]}
                buttonLabel={'Next'}
            />
        )
    });
    pushQuestionBlock('MORNING ENERGY & CLARITY', morningEnergyQuestions);

    // Movement Intro
    steps.push({
        title: '',
        content: (
            <StartQuizBlok
                onBegin={() => setCurrentStep(currentStep + 1)}
                backgroundImageUrl={'/women/yellow-orange_woman.png'}
                titleLines={["MOVEMENT,","FLEXIBILITY", "& BODY", "SUPPORT"]}
                bodyLines={[
                    'From runway walks to',
                    'recovery yoga – how',
                    'your body moves tells',
                    'us a lot about your vitality.',
                    'Let\'s see how flexible,',
                    'fluid, and fierce you feel',
                    'in your everyday flow.',
                ]}
                buttonLabel={'Next'}
            />
        )
    });
    pushQuestionBlock('MOVEMENT, FLEXIBILITY & BODY SUPPORT', movementQuestions);

    // Nutrition Intro
    steps.push({
        title: '',
        content: (
            <StartQuizBlok
                onBegin={() => setCurrentStep(currentStep + 1)}
                backgroundImageUrl={'/women/green_woman.png'}
                titleLines={["NUTRITION,", "DIGESTION &", "DETOX"]}
                bodyLines={[
                    'You are what you eat – and',
                    'how you digest it. Here we',
                    'explore how balanced,',
                    'colorful, and detox-friendly',
                    'your meals really are.',
                ]}
                buttonLabel={'Next'}
            />
        )
    });
    pushQuestionBlock('NUTRITION, DIGESTION & DETOX', nutritionQuestions);

    // Sleep & Stress Intro
    steps.push({
        title: '',
        content: (
            <StartQuizBlok
                onBegin={() => setCurrentStep(currentStep + 1)}
                backgroundImageUrl={'/women/purple_woman.png'}
                titleLines={["SLEEP, STRESS", "& SELF-CARE"]}
                bodyLines={[
                    "Is your beauty sleep working",
                    "overtime or are you running",
                    "on empty? Let's take a look at",
                    "your inner calm and outer",
                    "glow.",
                ]}
                buttonLabel={'Next'}
            />
        )
    });
    pushQuestionBlock('SLEEP, STRESS & SELF-CARE', sleepQuestions);

    // Indulgence Intro
    steps.push({
        title: '',
        content: (
            <StartQuizBlok
                onBegin={() => setCurrentStep(currentStep + 1)}
                backgroundImageUrl={'/women/red_woman.png'}
                titleLines={["INDULGENCE &", "BALANCE"]}
                bodyLines={[
                    "Wellness isn't about",
                    "perfection – it's about",
                    "balance. Let's look at your",
                    "relationship with indulgence",
                    "and moderation.",
                ]}
                buttonLabel={'Next'}
            />
        )
    });
    pushQuestionBlock('INDULGENCE & BALANCE', indulgenceQuestions);

    // Environment Intro
    steps.push({
        title: '',
        content: (
            <StartQuizBlok
                onBegin={() => setCurrentStep(currentStep + 1)}
                backgroundImageUrl={'/women/pink_woman.jpg'}
                titleLines={["ENVIRONMENT", "& POLLUTION"]}
                bodyLines={[
                    'Where you live shapes how',
                    'you glow. This section looks',
                    'at your exposure to the',
                    'elements – and how well',
                    'your body keeps its glow',
                    'despite the world around it.',
                ]}
                buttonLabel={'Next'}
            />
        )
    });
    pushQuestionBlock('ENVIRONMENT & POLLUTION', environmentQuestions);

    // Email form step
    steps.push({
        title: '',
        content: (
            <EmailForm
                onNext={(email) => {
                    setAnswers({ ...answers, email });
                    setCurrentStep(currentStep + 1);
                }}
                onPrevious={() => setCurrentStep(currentStep - 1)}
                initialValue={answers.email || ''}
            />
        )
    });

    // Name form step
    steps.push({
        title: '',
        content: (
            <NameForm
                onNext={(name) => {
                    setAnswers({ ...answers, name });
                    setCurrentStep(currentStep + 1);
                }}
                onPrevious={() => setCurrentStep(currentStep - 1)}
                initialValue={answers.name || ''}
            />
        )
    });

    // Disclaimer step
    steps.push({
        title: '',
        content: (
            <DisclaimerForm
                onNext={() => setCurrentStep(currentStep + 1)}
                onPrevious={() => setCurrentStep(currentStep - 1)}
            />
        )
    });

    // Final step (existing)
    steps.push(
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
                            {answers.name && <p className="text-sm text-gray-600">Name: {answers.name}</p>}
                            {answers.email && <p className="text-sm text-gray-600">Email: {answers.email}</p>}
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
                            onClick={goToLanding}
                            className="bg-[#00A8E2] text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-colors"
                        >
                            View Recommendations
                        </button>
                    </div>
                </div>
            )
        }
    );

    return steps;
};
