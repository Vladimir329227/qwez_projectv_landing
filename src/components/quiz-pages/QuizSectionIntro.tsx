import React, { useEffect, useState } from "react";
import { PersonalDetailsIntroProps } from "../../types/quiz";
import QuizSectionIntroMobile from "./quiz-intro/QuizSectionIntroMobile";
import QuizSectionIntroDesktop from "./quiz-intro/QuizSectionIntroDesktop";

export default function QuizSectionIntro(props: PersonalDetailsIntroProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Initial check
    checkScreenSize();

    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Render appropriate version based on screen size
  if (isMobile) {
    return <QuizSectionIntroMobile {...props} />;
  }

  return <QuizSectionIntroDesktop {...props} />;
}
