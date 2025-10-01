import React, { useEffect, useState } from "react";
import QuizStartPage from "./QuizStartPage";
import StartQuizBlok from "./StartQuizBlok";
import QuestionForm from "../quiz-forms/QuestionForm";
import { createQuizSteps } from "../../config/quizConfig";
import { usePage } from "../../App";

export default function QuizPage() {
    const { setPage } = usePage();
    const [currentStep, setCurrentStep] = useState<number>(-1);
    const [answers, setAnswers] = useState<Record<string, any>>(() => {
        // Clear any existing answers when starting fresh
        localStorage.removeItem("quiz.answers");
        return {};
    });

    useEffect(() => {
        localStorage.setItem("quiz.answers", JSON.stringify(answers));
    }, [answers]);

    // Build steps: Intro + 5 questions + Complete
    const quizSteps = createQuizSteps(
        answers,
        setAnswers,
        setCurrentStep,
        currentStep,
        StartQuizBlok,
        QuestionForm,
        () => setPage('landing')
    );

    // Show original start page first, then go to personal details intro
    if (currentStep === -1) {
        return (
            <QuizStartPage
                onNext={() => setCurrentStep(0)}
                onPrevious={() => setPage('landing')}
            />
        );
    }

	const currentStepData = quizSteps[currentStep];

	return (
		<div className="min-h-screen bg-white flex flex-col">

			{/* Main Content */}
			<div className="flex-1 flex justify-center">
				<div className="w-full max-w-2xl">
					<div className="text-center">
						{currentStepData.subtitle && (
							<p className="text-xl text-gray-600">
								{currentStepData.subtitle}
							</p>
						)}
					</div>
					
					<div className="justify-center">
						{currentStepData.content}
					</div>
				</div>
			</div>
		</div>
	);
}