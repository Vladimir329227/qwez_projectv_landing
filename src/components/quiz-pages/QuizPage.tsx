import React, { useEffect, useState } from "react";
import QuizSectionIntro from "./QuizSectionIntro";
import QuizDiveSlidePage from "./quiz-intro/quiz-dive-slide/QuizDiveSlidePage";
import QuestionForm from "../quiz-forms/QuestionForm";
import { createQuizSteps } from "../../config/quizConfig";
import { usePage } from "../../App";
import DebugNavigation from "../debug/DebugNavigation";
import DebugToggle from "../debug/DebugToggle";
import { canUseDebugMode, canEnableDebugViaUrl, canEnableDebugViaStorage } from "../../config/debugConfig";

interface QuizPageProps {
  startFresh?: boolean;
}

export default function QuizPage({ startFresh = false }: QuizPageProps) {
  const { setPage } = usePage();
  const [currentStep, setCurrentStep] = useState<number>(() => {
    // If starting fresh, clear localStorage and start from step 0
    if (startFresh) {
      localStorage.removeItem("quiz.currentStep");
      localStorage.removeItem("quiz.answers");
      return 0;
    }
    
    // Try to restore current step from localStorage
    try {
      const savedStep = localStorage.getItem("quiz.currentStep");
      if (savedStep) {
        const step = parseInt(savedStep, 10);
        if (!isNaN(step) && step >= 0) {
          return step;
        }
      }
    } catch (error) {
      console.warn('Failed to parse saved quiz step:', error);
    }
    return 0;
  });
  const [answers, setAnswers] = useState<Record<string, any>>(() => {
    // If starting fresh, return empty answers
    if (startFresh) {
      return {};
    }
    
    // Try to restore answers from localStorage first
    try {
      const savedAnswers = localStorage.getItem("quiz.answers");
      if (savedAnswers) {
        const parsed = JSON.parse(savedAnswers);
        // Only clear answers if we're starting a completely fresh quiz
        // (no saved answers and not coming from results)
        const currentPage = document.cookie.split('; ').find(row => row.startsWith('page='))?.split('=')[1];
        if (currentPage === 'results' || Object.keys(parsed).length > 0) {
          return parsed;
        }
      }
    } catch (error) {
      console.warn('Failed to parse saved quiz answers:', error);
    }
    
    // Clear localStorage only if we're starting a completely fresh quiz
    localStorage.removeItem("quiz.answers");
    return {};
  });
  const [isDebugVisible, setIsDebugVisible] = useState(() => {
    // Проверяем, разрешен ли дебаг режим
    if (!canUseDebugMode()) {
      return false;
    }
    
    // Check URL parameters for debug mode
    const urlParams = new URLSearchParams(window.location.search);
    const debugParam = urlParams.get('debug');
    
    // Check localStorage for debug preference
    const debugFromStorage = localStorage.getItem('debug-mode');
    
    return (canEnableDebugViaUrl() && debugParam === 'true') || 
           (canEnableDebugViaStorage() && debugFromStorage === 'true');
  });

  useEffect(() => {
    localStorage.setItem("quiz.answers", JSON.stringify(answers));
  }, [answers]);

  useEffect(() => {
    localStorage.setItem("quiz.currentStep", currentStep.toString());
  }, [currentStep]);

  // Save debug mode preference
  const toggleDebugMode = () => {
    const newDebugState = !isDebugVisible;
    setIsDebugVisible(newDebugState);
    localStorage.setItem('debug-mode', newDebugState.toString());
  };

  // If cookie set to results, jump there immediately
  useEffect(() => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; page=`);
    if (parts.length === 2) {
      const pageValue = parts.pop()?.split(";").shift();
      if (pageValue === "results") {
        setPage("results");
      }
    }
  }, [setPage]);

  // Build steps: Intro + 5 questions + Complete
  const quizSteps = createQuizSteps(
    answers,
    setAnswers,
    setCurrentStep,
    currentStep,
    QuizSectionIntro,
    QuestionForm,
    () => setPage("landing")
  );


  const currentStepData = quizSteps[currentStep];

  // Check if this is the final step (QuizResult)
  const isFinalStep = currentStep === quizSteps.length - 1;

  // For the final step, render QuizResult directly without wrapper
  if (isFinalStep) {
    return currentStepData.content;
  }

  // Check if this is an intro step (QuizSectionIntro or QuizDiveSlidePage)
  const isIntroStep = React.isValidElement(currentStepData.content) && 
    (currentStepData.content.type === QuizSectionIntro || 
     currentStepData.content.type === QuizDiveSlidePage);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Debug Navigation */}
      <DebugNavigation
        currentStep={currentStep}
        totalSteps={quizSteps.length}
        onStepChange={setCurrentStep}
        isVisible={isDebugVisible}
        onToggle={toggleDebugMode}
      />
      
      {/* Debug Toggle Button */}
      <DebugToggle
        isVisible={isDebugVisible}
        onToggle={toggleDebugMode}
      />
      
      {/* Main Content */}
      <div className={`flex-1 flex ${isIntroStep ? '' : 'justify-center'}`}>
        <div className={`w-full ${isIntroStep ? '' : 'max-w-2xl'}`}>
          {!isIntroStep && (
            <div className="text-center">
              {currentStepData.subtitle && (
                <p className="text-xl text-gray-600">
                  {currentStepData.subtitle}
                </p>
              )}
            </div>
          )}

          <div className={isIntroStep ? '' : 'justify-center'}>{currentStepData.content}</div>
        </div>
      </div>
    </div>
  );
}
