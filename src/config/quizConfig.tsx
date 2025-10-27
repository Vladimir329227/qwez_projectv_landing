import { QuestionOption } from '../types/quiz';
import React from 'react';
import AgeCarousel from '../bloks/AgeCarousel';
import TimeCarousel from '../components/TimeCarousel';
import { EmailForm, NameForm } from '../components/quiz-forms';
import QuizResult from '../components/quiz-pages/quiz-results/QuizResult';
import QuizDiveSlidePage from '../components/quiz-pages/quiz-intro/quiz-dive-slide/QuizDiveSlidePage';


export interface PersonalDetailsQuestion {
    key: string;
    question: string;
    subtitle?: string;
    options?: QuestionOption[];
    notification?: string;
    separateOption?: string; // Значение опции, которая должна отображаться отдельно
    isMultiSelect?: boolean; // Позволяет выбирать несколько опций
    columnLayout?: 'single' | 'double'; // Управляет количеством столбцов на десктопе
    columnLayoutMobile?: 'single' | 'double'; // Управляет количеством столбцов на мобильных устройствах
    condition?: (answers: Record<string, any>) => boolean; // Условие для показа вопроса
}

export const personalDetailsQuestions: PersonalDetailsQuestion[] = [
    {
        key: "gender",
        question: "Select your gender?",
        notification: 'We ask these questions only to personalize your results and ensure your supplements truly fit your needs.',
        columnLayout: 'double', // Используем два столбца
        options: [
            { value: "female", label: "Female", column: 1 },
            { value: "male", label: "Male", column: 2 },
        ],
    },
    {
        key: "age",
        question: "Select your age",
        notification: 'We ask these questions only to personalize your results and ensure your supplements truly fit your needs.',

    },
    {
        key: "goals",
        question: "What\'s your main goal?",
        isMultiSelect: true, // Позволяет выбирать несколько опций
        columnLayout: 'double', // Используем два столбца
        options: [
            { value: 'clearer-skin', label: 'Clearer skin', column: 1 },
            { value: 'better-digestion', label: 'Better digestion', column: 1 },
            { value: 'less-stress', label: 'Less stress', column: 1 },
            { value: 'better-sleep', label: 'Better sleep', column: 1 },
            { value: 'sharper-focus', label: 'Sharper focus', column: 1 },
            { value: 'healthy-heart', label: 'Healthy heart', column: 2 },
            { value: 'longevity', label: 'Longevity', column: 2 },
            { value: 'detox', label: 'Detox', column: 2 },
            { value: 'natural-immunity', label: 'Natural immunity', column: 2 },
            { value: 'sustained-energy', label: 'Sustained energy', column: 2 }
          ],
    },
    {
        key: "lifestyle",
        question: "How would you best describe your daily lifestyle?",
        options: [
            { value: 'sedentary', label: 'Desk-based — long hours of sitting, limited movement' },
            { value: 'balanced', label: 'Balanced — some sitting, some light movement throughout the day' },
            { value: 'active', label: 'Active — physically demanding or movement-oriented work' },
            { value: 'highly-active', label: 'Highly dynamic — regular training, sport, or high-intensity activity' },
          ]
    },
    {
        key: "climate",
        question: "What climate best reflects your everyday environment?",
        options: [
            { value: 'cold', label: 'Cold' },
            { value: 'warm-sunny', label: 'Warm and sunny' },
            { value: 'hot-humid', label: 'Hot and humid' },
            { value: 'variable', label: 'Variable' },
          ]
    },
    {
        key: "location",
        question: "Which setting most closely describes where you live?",
        options: [
            { value: 'urban', label: 'Urban' },
            { value: 'suburban', label: 'Suburban' },
            { value: 'rural', label: 'Rural or countryside' },
            { value: 'coastal-mountainous', label: 'Coastal or mountainous' },
          ]
    },
    {
        key: "relationship",
        question: "Which of these best describes you currently?",
        options: [
            { value: 'single', label: 'Single' },
            { value: 'in-relationship', label: 'In a relationship' },
            { value: 'married-partnered', label: 'Married/Partnered' },
            { value: 'prefer-not-to-say', label: 'Prefer not to say' },
          ]
    },
    {
        key: "hormonal-status",
        question: "Which stage of your hormonal journey are you in right now?",
        options: [
            { value: 'monthly-periods', label: 'I get monthly periods' },
            { value: 'perimenopause-menopause', label: 'Perimenopause / menopause stage' },
            { value: 'pregnant', label: 'Pregnant' },
            { value: 'postpartum', label: 'Postpartum - recently gave birth' },
            { value: 'other', label: 'Other' },
          ],
        condition: (answers) => answers.gender === 'female'
    },
    {
        key: "health-conditions",
        question: "Do you have any ongoing health conditions?",
        subtitle: "Choose as many as are relevant",
        columnLayout: 'double', // Используем два столбца на десктопе
        columnLayoutMobile: 'single', // Используем один столбец на мобильных устройствах
        isMultiSelect: true, // Позволяет выбирать несколько опций
        separateOption: "other", // Опция "Other" будет отображаться отдельно только на десктопе (два столбца)
        options: [
            { value: 'no', label: 'No', column: 1 },
            { value: 'high-blood-pressure', label: 'High blood pressure', column: 1 },
            { value: 'diabetes', label: 'Diabetes', column: 1 },
            { value: 'autoimmune', label: 'Autoimmune condition', column: 1 },
            { value: 'digestive-disorder', label: 'Digestive disorder', column: 2 },
            { value: 'heart-cardiovascular', label: 'Heart or cardiovascular issues', column: 2 },
            { value: 'other', label: 'Other', column: 2 },
          ]
    },    
    {
        key: "have_covid-19",
        question: "Have you had COVID-19?",
        notification: 'We ask this to better understand possible long-term effects on your energy, mood, and overall health.',
        options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
            { value: 'several-times', label: 'Several Times' }
        ],
    },
    {
        key: "long-covid",
        question: "Have you experienced ongoing symptoms following COVID-19 (Long Covid)?",
        notification: 'We ask this to better understand possible long-term effects on your energy, mood, and overall health.',  
        options: [
            { value: 'no', label: 'No' },
            { value: 'currently-experiencing', label: 'Yes — currently experiencing' },
            { value: 'symptoms-improved', label: 'Yes — but symptoms have improved' },
          ],
        condition: (answers) => answers['have_covid-19'] !== 'no'
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
        notification: 'We ask this to better understand your daily rhythms and how they might relate to your focus, habits, and overall well-being.',
        options: [
            { value: 'energized-unstoppable', label: 'Energized and unstoppable' },
            { value: 'some-days-fab', label: 'Some days fab, some days flat' },
            { value: 'low-energy', label: 'Low energy — help!' },
        ],
    },
    {
        key: 'caffeineIntake',
        question: "What's your caffeine story?",
        notification: 'Caffeine can boost focus — or mess with sleep. Knowing your habits helps us guide you better.',
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
            { value: 'decent-drifty', label: 'Decent but drifty' },
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
        notification: 'Your posture and flexibility can affect how you move, breathe, and even how your body manages stress.',
        options: [
            { value: 'graceful-grounded', label: 'Graceful and grounded' },
            { value: 'more-yoga', label: 'Could use more yoga' },
            { value: 'slouch-city', label: 'Slouch city' },
        ],
    },
    {
        key: 'jointsMuscles',
        question: 'How do your joints usually feel?',
        notification: 'Mobility depends on recovery, inflammation, and nutrient uptake. Backed by 25+ years of research, Project V supports joint and muscle resilience with pharmaceutical precision.',
        options: [
            { value: 'flexible-strong', label: 'Flexible and strong' },
            { value: 'occasionally-stiff-achy', label: 'Occasionally stiff or achy' },
            { value: 'stiff-sore', label: 'Stiff and sore' },
        ],
    },
    {
        key: 'musclesFeel',
        question: 'How do your muscles usually feel?',
        notification: 'Mobility depends on recovery, inflammation, and nutrient uptake. Backed by 25+ years of research, Project V supports joint and muscle resilience with pharmaceutical precision.',
        options: [
            { value: 'energised-ready', label: 'Energised and ready' },
            { value: 'sometimes-tight-fatigued', label: 'Sometimes tight or fatigued' },
            { value: 'often-sore-weak', label: 'Often sore or weak' },
        ],
    },
    {
        key: 'stiffnessInflammation',
        question: 'Do you experience stiffness or inflammation?',
        notification: 'Your posture and flexibility can affect how you move, breathe, and even how your body manages stress.',
        options: [
            { value: 'no-stiffness', label: 'No' },
            { value: 'mild-soreness', label: 'Mild soreness' },
            { value: 'constant-tension', label: 'Constant tension' },
        ],
    },
    {
        key: "workouts",
        question: "What type of workouts do you do?",
        subtitle: "Choose as many as you'd like",
        separateOption: "not-any", // Опция "Not any" будет отображаться отдельно
        isMultiSelect: true, // Позволяет выбирать несколько опций
        columnLayout: 'double', // Используем два столбца на десктопе
        columnLayoutMobile: 'double', // Используем два столбца на мобильных устройствах
        options: [
            { value: 'running', label: 'Running', column: 1 },
            { value: 'walking', label: 'Walking', column: 1 },
            { value: 'cycling', label: 'Cycling', column: 1 },
            { value: 'weights', label: 'Weights', column: 1 },
            { value: 'yoga', label: 'Yoga', column: 2 },
            { value: 'pilates', label: 'Pilates', column: 2 },
            { value: 'sport-training', label: 'Sport training', column: 2 },
            { value: 'dance', label: 'Dance', column: 2 },
            { value: 'not-any', label: 'Not any' },
        ],
    },
    
    {
        key: "fitnessGoal",
        question: "What is your main fitness goal?",
        notification: 'Did you know? Adequate magnesium and B-vitamins improve energy metabolism, giving your workouts a natural boost.',
        columnLayout: 'double', // Используем один столбец на десктопе
        columnLayoutMobile: 'single', // Используем один столбец на мобильных устройствах
        options: [
            { value: 'build-strength', label: 'Build strength & tone muscles' },
            { value: 'increase-flexibility', label: 'Increase flexibility & mobility' },
            { value: 'lose-weight', label: 'Lose weight' },
            { value: 'maintain-balance', label: 'Maintain overall wellness & balance' },
            { value: 'just-keeping-up', label: 'Just trying to keep up with life' },
        ],
    },  
];

// Nutrition & Digestion block
export const nutritionQuestions: PersonalDetailsQuestion[] = [
    {
        key: 'dietType',
        question: 'How would you describe your diet?',
        options: [
            { value: 'balanced-colorful', label: 'Balanced & colorful — lots of veggies, fruit, and variety' },
            { value: 'mostly-healthy', label: 'Mostly healthy, but with some quick or packaged meals' },
            { value: 'carbs-comfort', label: 'Carbs & comfort — more bread, pasta, or meat than greens' },
        ],
    },
    {
        key: 'dietaryRestrictions',
        question: 'Do you have any dietary restrictions?',
        options: [
            { value: 'none', label: 'None' },
            { value: 'vegetarian', label: 'Vegetarian' },
            { value: 'pescatarian', label: 'Pescatarian' },
            { value: 'vegan', label: 'Vegan' },

        ],
    },
    {
        key: 'allergiesIntolerances',
        question: 'Do you have any allergies or intolerances?',
        options: [
            { value: 'none', label: 'None' },
            { value: 'lactose-dairy', label: 'Lactose or dairy' },
            { value: 'nuts-seeds', label: 'Nuts or seeds' },
            { value: 'soy', label: 'Soy' },
            { value: 'other', label: 'Other' },

        ],
    },
    {
        key: 'cravings',
        question: 'What are your cravings like?',
        notification: 'Knowing what and when you crave helps us understand possible nutrient needs or emotional triggers.',
        options: [
            { value: 'balanced-in-control', label: 'Balanced and in control' },
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
        key: 'fruitVegetables',
        question: 'How often do you eat fruit and vegetables?',
        notification: 'Berries, citrus, and leafy greens are rich in antioxidants that help protect your cells and support vitality.',
        options: [
            { value: 'everyday', label: 'Everyday' },
            { value: 'a-few-times-a-week', label: 'A few times a week' },
            { value: 'rarely', label: 'Rarely' },
        ],
    },
    {
        key: 'stomachFeel',
        question: "How does your stomach usually feel after meals?",
        options: [
            { value: 'balanced-breezy', label: 'Balanced and breezy' },
            { value: 'unpredictable', label: 'Unpredictable' },
            { value: 'constant-bloat', label: 'Constant bloat battle' },
        ],
    },
    {
        key: 'detox',
        question: 'Do you detox?',
        notification: 'A detox can include eating lighter, nutrient-rich foods, drinking plenty of water, or taking supplements to help your body naturally flush out waste and feel refreshed.',
        options: [
            { value: 'daily', label: 'Daily' },
            { value: 'weekly', label: 'Weekly reset' },
            { value: 'only-post-indulgence', label: 'Only post-indulgence' },
        ],
    },
    {
        key: 'sugar-status',
        question: 'Blood sugar status?',
        notification: 'No need for a diagnosis — just a sense of how steady or up-and-down your energy feels throughout the day.',
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
        key: 'sleepTime',
        question: 'When do you usually go to bed?',
    },
    {
        key: 'wakeUpTime',
        question: 'When do you usually wake up?',
    },
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
        key: 'selfCare',
        question: 'Do you take care of yourself?',
        notification: 'This isn’t about perfection — just a check-in on how much space you’re giving to rest, care, and balance.',
        options: [
            { value: 'weekly-luxe-rituals', label: 'Weekly luxe rituals' },
            { value: 'trying-my-best', label: 'Trying my best' },
            { value: 'not-really', label: 'Not really' },
        ],
    },
    {
        key: 'selfDescription',
        question: 'How would you best describe yourself?',
        options: [
            { value: 'night-owl', label: 'Night owl' },
            { value: 'early-bird', label: 'Early bird' },
            { value: 'somewhere-in-the-middle', label: 'Somewhere in the middle' },
        ],
    },
    {
        key: 'skinType',
        question: "What’s your skin type?",
        options: [
            { value: 'glowing', label: 'Glowing' },
            { value: 'oily', label: 'Oily' },
            { value: 'dull-dry', label: 'Dull & dry' },
            { value: 'combination', label: 'Combination' },
        ],
    },
];

// Indulgence & Balance block
export const indulgenceQuestions: PersonalDetailsQuestion[] = [
    {
        key: 'alcohol',
        question: 'How often do you drink alcohol?',
        notification: 'From social drinks to occasional sips — we’re interested in your usual patterns.',
        options: [
            { value: 'rarely', label: 'Rarely' },
            { value: 'weekends', label: 'Weekends' },
            { value: 'daily', label: 'Daily' },
        ],
    },
    {
        key: 'smoking',
        question: 'Do you smoke or use tobacco products?',
        options: [
            { value: 'never', label: 'Never' },
            { value: 'occasionally', label: 'Occasionally' },
            { value: "let-s-not-talk-about-it", label: "Let's not talk about it" },
        ],
    },
    {
        key: 'sugarIntake',
        question: 'How often do you enjoy sugary foods or drinks?',
        options: [
            { value: 'almost-never', label: 'Almost never' },
            { value: 'a-few-sweet-moments', label: 'A few sweet moments each week' },
            { value: 'cant-resist', label: 'Can’t resist daily indulgence' },
        ],
    },
];

// Environment & Pollution block
export const environmentQuestions: PersonalDetailsQuestion[] = [
    {
        key: 'freshAir',
        question: 'How often do you get outside and breathe fresh air?',
        options: [
            { value: 'daily', label: 'Daily' },
            { value: 'mostly-weekends', label: 'Mostly on weekends' },
            { value: 'hardly-ever', label: 'Hardly—concrete jungle life' },
        ],
    },
    {
        key: 'sunlightExposure',
        question: 'How much sunlight do you get on a typical week?',
        notification: 'Sunlight helps your body make vitamin D, supporting bones, immunity, and mood.',
        options: [
            { value: 'plenty', label: 'Plenty—out and about daily' },
            { value: 'a-few-times-a-week', label: 'A few times a week' },
            { value: 'rarely-mostly-indoors', label: 'Rarely—mostly indoors' },
        ],
    },
    {
        key: 'natureEscapes',
        question: 'How often do you escape into nature??',
        notification: 'Do you get chances to step away from the noise and into the green?',
        options: [
            { value: 'monthly', label: 'Monthly' },
            { value: 'sometimes', label: 'Sometimes' },
            { value: 'what-s-that', label: 'What’s that?' },
        ],
    },
    {
        key: 'techDisconnect',
        question: 'Do you disconnect from tech?',
        options: [
            { value: 'half-scrolling', label: 'Half-scrolling' },
            { value: 'always-online', label: 'Always online' },
            { value: 'off-grid-goddess', label: 'Off-grid goddess' },
        ],
    },
    {
        key: 'coldFluFrequency',
        question: 'How often do you catch colds or flu?',
        notification: 'Understanding how often you get ill helps us tailor your supplements to support long-term immunity and resilience.',
        options: [
            { value: 'monthly', label: 'Rarely, my immune system’s strong' },
            { value: 'sometimes', label: 'Occasionally, a few times a year' },
            { value: "what-s-that", label: "Often, I get sick frequently" },
        ],
    },
    {
        key: 'disconnect-from-tech',
        question: 'Have you tried nutraceuticals before?',
        notification: 'Nutraceuticals are supplements made from natural ingredients designed to support your health and wellbeing.',
        options: [
            { value: 'new-but-curious', label: 'New but curious' },
            { value: 'ive-tried-a-few', label: 'I’ve tried a few' },
            { value: 'im-a-nutraceutical-veteran', label: 'I’m a nutraceutical veteran' },
        ],
    },
];

export interface QuizStep {
    title: string;
    subtitle?: string;
    content: React.ReactNode;
}

// Function to calculate total quiz steps
export const getTotalQuizSteps = (answers: Record<string, any> = {}): number => {
    let totalSteps = 1; // Initial intro step
    
    // Helper to count filtered questions
    const countFiltered = (questions: PersonalDetailsQuestion[]) => {
        return questions.filter(q => !q.condition || q.condition(answers)).length;
    };
    
    // Personal Details: First 3 questions
    const firstPart = personalDetailsQuestions.slice(0, 3);
    totalSteps += countFiltered(firstPart);
    
    // Add intermediate page
    totalSteps += 1;
    
    // Remaining personal details questions
    const remainingPart = personalDetailsQuestions.slice(3);
    totalSteps += countFiltered(remainingPart);
    
    // Morning Energy: 1 intro + questions
    totalSteps += 1 + countFiltered(morningEnergyQuestions);
    
    // Movement: 1 intro + questions  
    totalSteps += 1 + countFiltered(movementQuestions);
    
    // Nutrition: 1 intro + questions
    totalSteps += 1 + countFiltered(nutritionQuestions);
    
    // Sleep & Stress: 1 intro + questions
    totalSteps += 1 + countFiltered(sleepQuestions);
    
    // Indulgence: 1 intro + questions
    totalSteps += 1 + countFiltered(indulgenceQuestions);
    
    // Environment: 1 intro + questions
    totalSteps += 1 + countFiltered(environmentQuestions);
    
    // Email form + Name form + Results = 3 steps
    totalSteps += 3;
    
    return totalSteps;
};

// Function to calculate current progress based on answers
export const calculateProgressFromAnswers = (answers: Record<string, any> = {}): number => {
    // Helper to check if an answer is valid
    const hasValidAnswer = (key: string): boolean => {
        if (!(key in answers)) return false;
        const value = answers[key];
        if (value === null || value === undefined || value === '') return false;
        if (Array.isArray(value)) return value.length > 0;
        if (typeof value === 'object') return Object.keys(value).length > 0;
        return true;
    };
    
    // Helper to count questions with answers in a section
    const countAnswered = (questions: PersonalDetailsQuestion[]): number => {
        return questions.filter(q => q.condition ? q.condition(answers) && hasValidAnswer(q.key) : hasValidAnswer(q.key)).length;
    };
    
    let step = 0; // Start at intro step
    
    // After intro, first part of personal details (gender, age, goals)
    const firstPart = personalDetailsQuestions.slice(0, 3);
    step += countAnswered(firstPart);
    
    // If all first part questions are answered, add intermediate page
    if (countAnswered(firstPart) === firstPart.filter(q => !q.condition || q.condition(answers)).length) {
        step += 1; // Intermediate page
    }
    
    // Remaining personal details
    const remainingPart = personalDetailsQuestions.slice(3);
    step += countAnswered(remainingPart);
    
    // Check if we've progressed past personal details (all answered)
    const allPersonalDetailsAnswered = countAnswered(personalDetailsQuestions) === 
        personalDetailsQuestions.filter(q => !q.condition || q.condition(answers)).length;
    
    if (allPersonalDetailsAnswered) {
        // Morning Energy intro
        step += 1;
        step += countAnswered(morningEnergyQuestions);
        
        // Check if we've progressed past morning energy
        const allMorningEnergyAnswered = countAnswered(morningEnergyQuestions) === 
            morningEnergyQuestions.filter(q => !q.condition || q.condition(answers)).length;
        
        if (allMorningEnergyAnswered) {
            // Movement intro
            step += 1;
            step += countAnswered(movementQuestions);
            
            // Check if we've progressed past movement
            const allMovementAnswered = countAnswered(movementQuestions) === 
                movementQuestions.filter(q => !q.condition || q.condition(answers)).length;
            
            if (allMovementAnswered) {
                // Nutrition intro
                step += 1;
                step += countAnswered(nutritionQuestions);
                
                // Check if we've progressed past nutrition
                const allNutritionAnswered = countAnswered(nutritionQuestions) === 
                    nutritionQuestions.filter(q => !q.condition || q.condition(answers)).length;
                
                if (allNutritionAnswered) {
                    // Sleep & Stress intro
                    step += 1;
                    step += countAnswered(sleepQuestions);
                    
                    // Check if we've progressed past sleep & stress
                    const allSleepAnswered = countAnswered(sleepQuestions) === 
                        sleepQuestions.filter(q => !q.condition || q.condition(answers)).length;
                    
                    if (allSleepAnswered) {
                        // Indulgence intro
                        step += 1;
                        step += countAnswered(indulgenceQuestions);
                        
                        // Check if we've progressed past indulgence
                        const allIndulgenceAnswered = countAnswered(indulgenceQuestions) === 
                            indulgenceQuestions.filter(q => !q.condition || q.condition(answers)).length;
                        
                        if (allIndulgenceAnswered) {
                            // Environment intro
                            step += 1;
                            step += countAnswered(environmentQuestions);
                            
                            // Check if we've progressed past environment
                            const allEnvironmentAnswered = countAnswered(environmentQuestions) === 
                                environmentQuestions.filter(q => !q.condition || q.condition(answers)).length;
                            
                            if (allEnvironmentAnswered) {
                                // Email step
                                if (hasValidAnswer('email')) {
                                    step += 1;
                                    // Name step
                                    if (hasValidAnswer('name')) {
                                        step += 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    return step;
};

export const createQuizSteps = (
    answers: Record<string, any>,
    setAnswers: (answers: Record<string, any>) => void,
    setCurrentStep: (step: number) => void,
    currentStep: number,
    QuizSectionIntro: React.ComponentType<{ onBegin: () => void; onPrevious?: () => void; backgroundImageUrl?: string; desktopWomanImageUrl?: string; desktopBackgroundImageUrl?: string; titleLines?: string[]; bodyLines?: string[]; buttonLabel?: string; nextSegment?: string }>,
    QuestionForm: React.ComponentType<any>,
    goToLanding: () => void
): QuizStep[] => {
    const steps: QuizStep[] = [
        {
            title: "",
            content: (
                <QuizSectionIntro 
                    onBegin={() => setCurrentStep(1)}
                    onPrevious={() => goToLanding()}
                    backgroundImageUrl={'/women/yellow_woman.png'}
                    desktopWomanImageUrl={'/PNG_models/M.png'}
                    desktopBackgroundImageUrl={'/PNG_models/background/Copy of M background.png'}
                    titleLines={["EVERY GLOW", "HAS A", "BACKSTORY"]}
                    bodyLines={[
                        "Your energy, mood, and skin",
                        "all carry clues about what",
                        "your body truly needs.",
                        " ㅤ",
                        "Most people guess — but",
                        "we're about to tailor science",
                        " to you."
                    ]}
                    buttonLabel={'Begin Survey'}
                    nextSegment={'Personal Details'}
                />
            )
        },
    ];

    // Helper to push a block of questions using QuestionForm
    const pushQuestionBlock = (sectionTitle: string, questions: PersonalDetailsQuestion[]) => {
        const filteredQuestions = questions.filter(q => !q.condition || q.condition(answers));
        steps.push(
            ...filteredQuestions.map((q, idx) => {
                const total = filteredQuestions.length;
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
                    if (q.key === "sleepTime") {
                        return (
                            <div className="flex justify-center">
                                <div className="w-full max-w-2xl">
                                    <TimeCarousel
                                        min={18}
                                        max={3}
                                        value={typeof value === "number" ? value : 22}
                                        onChange={(v: number) => setAnswers({ ...answers, [key]: v })}
                                        label="Time"
                                    />
                                </div>
                            </div>
                        );
                    }
                    if (q.key === "wakeUpTime") {
                        return (
                            <div className="flex justify-center">
                                <div className="w-full max-w-2xl">
                                    <TimeCarousel
                                        min={5}
                                        max={12}
                                        value={typeof value === "number" ? value : 7}
                                        onChange={(v: number) => setAnswers({ ...answers, [key]: v })}
                                        label="Time"
                                    />
                                </div>
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
                            totalQuestions={total}
                            question={q.question}
                            subtitle={q.subtitle}
                            options={q.options}
                            isMulti={q.isMultiSelect || q.key === "goals" || q.key === "health-conditions"}
                            selectedValue={q.isMultiSelect || q.key === "goals" || q.key === "health-conditions" ? undefined : (q.key === "age" ? (value ?? 37) : (value ?? null))}
                            selectedValues={q.isMultiSelect || q.key === "goals" || q.key === "health-conditions" ? (Array.isArray(value) ? value : []) : undefined}
                            onToggleSelect={q.isMultiSelect || q.key === "goals" || q.key === "health-conditions" ? ((v: any) => {
                                const prev: any[] = Array.isArray(answers[key]) ? answers[key] : [];
                                const exists = prev.includes(v);
                                const next = exists ? prev.filter((it) => it !== v) : [...prev, v];
                                setAnswers({ ...answers, [key]: next });
                            }) : undefined}
                            onSelect={q.isMultiSelect || q.key === "goals" || q.key === "health-conditions" ? undefined : ((v: any) => setAnswers({ ...answers, [key]: v }))}
                            onPrevious={() => setCurrentStep(Math.max(0, currentStep - 1))}
                            onNext={() => setCurrentStep(currentStep + 1)}
                            nextLabel={idx === questions.length - 1 ? "Next" : "Next"}
                            bottomNote={null}
                            notification={q.notification}
                            separateOption={q.separateOption}
                            columnLayout={q.columnLayout}
                            columnLayoutMobile={q.columnLayoutMobile}
                    >
                            {(!q.options || q.options.length === 0) && renderCustom()}
                    </QuestionForm>
                )
            };
            })
        );
    };

    // Personal Details block
    // Record quiz start time if not already set
    if (!answers.quizStartTime) {
        setAnswers({ ...answers, quizStartTime: new Date().toISOString() });
    }
    
    // Add first part of personal details (gender, age, goals)
    const firstPartQuestions = personalDetailsQuestions.slice(0, 3); // gender, age, goals
    pushQuestionBlock('Personal details', firstPartQuestions);
    
    // Add intermediate page after goals question
    steps.push({
        title: '',
        content: (
            <QuizDiveSlidePage
                onNext={() => setCurrentStep(currentStep + 1)}
                onPrevious={() => setCurrentStep(currentStep - 1)}
            />
        )
    });
    
    // Add remaining personal details questions (climate, activity)
    const remainingQuestions = personalDetailsQuestions.slice(3); // climate, activity
    pushQuestionBlock('Personal details', remainingQuestions);

    // Morning Energy Intro
    steps.push({
        title: '',
        content: (
            <QuizSectionIntro
                onBegin={() => setCurrentStep(currentStep + 1)}
                onPrevious={() => setCurrentStep(currentStep - 1)}
                backgroundImageUrl={'/women/orange_woman.jpg'}
                desktopWomanImageUrl={'/PNG_models/G.png'}
                desktopBackgroundImageUrl={'/PNG_models/background/Copy of G background.png'}
                titleLines={["WE SEE YOU"]}
                bodyLines={[
                    'Struggling with focus? Low',
                    'energy? Sleep that\'s never',
                    'enough?',
                    'ㅤ',
                    'You\'re not alone — 3 in 4',
                    'women feel the same, even',
                    'with a "healthy" lifestyle.',
                ]}
                buttonLabel={'Next'}
                nextSegment={'Morning Energy & Clarity'}
            />
        )
    });
    pushQuestionBlock('Morning Energy', morningEnergyQuestions);

    // Movement Intro
    steps.push({
        title: '',
        content: (
            <QuizSectionIntro
                onBegin={() => setCurrentStep(currentStep + 1)}
                onPrevious={() => setCurrentStep(currentStep - 1)}
                backgroundImageUrl={'/women/yellow-orange_woman.png'}
                desktopWomanImageUrl={'/PNG_models/N.png'}
                desktopBackgroundImageUrl={'/PNG_models/background/Copy of N background.png'}
                titleLines={["LUXURY", "MEETS", "NEURO-", "NUTRITION"]}
                bodyLines={[
                    'Formulas crafted with',
                    'leading European scientists.',
                    'ㅤ',
                    'We use cryogenic grinding to',
                    'lock in maximum nutrient',
                    'power — no preservatives, no',
                    'shortcuts, just results.',
                ]}
                buttonLabel={'Next'}
                nextSegment={'Movement & Flexibility'}
            />
        )
    });
    pushQuestionBlock('Movement & Flexibility', movementQuestions);

    // Nutrition Intro
    steps.push({
        title: '',
        content: (
            <QuizSectionIntro
                onBegin={() => setCurrentStep(currentStep + 1)}
                onPrevious={() => setCurrentStep(currentStep - 1)}
                backgroundImageUrl={'/women/green_woman.png'}
                desktopWomanImageUrl={'/PNG_models/D.png'}
                desktopBackgroundImageUrl={'/PNG_models/background/Copy of D background.png'}
                titleLines={["WHY", "SYMPTOMS", "HIDE THE", "REAL CAUSE"]}
                bodyLines={[
                    'Your brain and body are in constant conversation — but stress, pollution, and nutrient gaps disrupt this link.',
                    'ㅤ',
                    'Neuro-nutrition restores it, supporting:',
                    'ㅤ',
                    '• Neurogenesis (birth of new neurons)',
                    '• Neuroplasticity (adaptability of the brain)',
                    '• Angiogenesis (healthy blood vessel growth)',
                ]}
                buttonLabel={'Next'}
                nextSegment={'Nutrition, Digestion & Detox'}
            />
        )
    });
    pushQuestionBlock('Nutrition, Digestion', nutritionQuestions);

    // Sleep & Stress Intro
    steps.push({
        title: '',
        content: (
            <QuizSectionIntro
                onBegin={() => setCurrentStep(currentStep + 1)}
                onPrevious={() => setCurrentStep(currentStep - 1)}
                backgroundImageUrl={'/women/purple_woman.png'}
                desktopWomanImageUrl={'/PNG_models/P.png'}
                desktopBackgroundImageUrl={'/PNG_models/background/Copy of P background.png'}
                titleLines={["WHERE YOU", "COULD BE IN", "90 DAYS"]}
                    bodyLines={[
                    "• Steady energy from morning to night",
                    "• Clearer skin & brighter eyes",
                    "• Deep, restful sleep",
                    "• Balanced appetite & light digestion",
                ]}
                buttonLabel={'Next'}
                nextSegment={'Sleep, Stress & Self-Care'}
            />
        )
    });
    pushQuestionBlock('Sleep, Stress', sleepQuestions);

    // Indulgence Intro
    steps.push({
        title: '',
        content: (
            <QuizSectionIntro
                onBegin={() => setCurrentStep(currentStep + 1)}
                onPrevious={() => setCurrentStep(currentStep - 1)}
                backgroundImageUrl={'/women/red_woman.png'}
                desktopWomanImageUrl={'/PNG_models/S.png'}
                desktopBackgroundImageUrl={'/PNG_models/background/Copy of SV background.png'}
                titleLines={["SCIENCE WITH", "A SOUL"]}
                bodyLines={[
                    "<em>\"The brain and body are inseparable — nourish one and you transform the other.\"</em>",
                    "ㅤ",
                    "<strong>— Dr. Yann Rougier,</strong>",
                    "Neurobiologist, Founder of the IN2A Institute of Neuronutrition",
                    "ㅤ",
                    "Every Project V formula is developed with world-leading experts in neurobiology, nutrition, and integrative medicine.",
                ]}
                buttonLabel={'Next'}
                nextSegment={'Indulgence & Balance'}
            />
        )
    });
    pushQuestionBlock('Indulgence, Balance', indulgenceQuestions);

    // Environment Intro
    steps.push({
        title: '',
        content: (
            <QuizSectionIntro
                onBegin={() => setCurrentStep(currentStep + 1)}
                onPrevious={() => setCurrentStep(currentStep - 1)}
                backgroundImageUrl={'/women/pink_woman.jpg'}
                desktopWomanImageUrl={'/PNG_models/A.png'}
                desktopBackgroundImageUrl={'/PNG_models/background/Copy of A background.png'}
                titleLines={["YOUR", "WELLNESS", "WARDROBE", "AWAITS"]}
                bodyLines={[
                    'Like a stylist curates your look,',
                    'we select formulas to support your',
                    'energy, skin, mood, and immunity',
                    '— based on your answers.',
                ]}
                buttonLabel={'Next'}
                nextSegment={'Contact Information'}
            />
        )
    });
    pushQuestionBlock('Environment, Pollution', environmentQuestions);

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
                    // Add quiz completion time to stop the timer
                    const updatedAnswers = {
                        ...answers,
                        name,
                        quizEndTime: new Date().toISOString()
                    };
                    setAnswers(updatedAnswers);
                    try {
                        localStorage.setItem('quiz.answers', JSON.stringify(updatedAnswers));
                    } catch {}
                    
                    setCurrentStep(currentStep + 1);
                }}
                onPrevious={() => setCurrentStep(currentStep - 1)}
                initialValue={answers.name || ''}
            />
        )
    });

    // Final step - QuizResult
    steps.push(
        {
            title: "",
            content: (
                <QuizResult answers={answers} />
            )
        }
    );

    return steps;
};
