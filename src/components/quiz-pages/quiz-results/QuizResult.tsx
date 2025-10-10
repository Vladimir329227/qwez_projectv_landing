import React, { useEffect, useState } from "react";
import QuizResultDesktop from "./responsive/QuizResultDesktop";
import QuizResultTablet from "./responsive/QuizResultTablet";
import QuizResultMobile from "./responsive/QuizResultMobile";
import { useRecommendations } from "../../../hooks/useRecommendations";

export default function QuizResult({ answers = {} as Record<string, any> }) {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "mobile"
  );

  const { recommendations, isLoading, error, hasRecommendations } = useRecommendations(answers);

  useEffect(() => {
    const computeDevice = () => {
      if (typeof window === "undefined") return "mobile" as const;
      if (window.matchMedia("(min-width: 1280px)").matches)
        return "desktop" as const; // xl
      if (window.matchMedia("(min-width: 768px)").matches)
        return "tablet" as const; // md
      return "mobile" as const;
    };

    setDevice(computeDevice());
    const onResize = () => setDevice(computeDevice());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center bg-white m-0 p-0 w-full h-full min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1F2429] mx-auto mb-4"></div>
          <p className="text-[#1F2429] text-lg">Analyzing your responses...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center bg-white m-0 p-0 w-full h-full min-h-screen">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">Error generating recommendations</p>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!hasRecommendations) {
    return (
      <div className="flex flex-col items-center justify-center bg-white m-0 p-0 w-full h-full min-h-screen">
        <div className="text-center">
          <p className="text-[#1F2429] text-lg">No recommendations available</p>
          <p className="text-gray-600">Please complete the quiz to get personalized recommendations</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white m-0 p-0 w-full h-full">
      {device === "mobile" && <QuizResultMobile answers={answers} recommendations={recommendations} />}
      {device === "tablet" && <QuizResultTablet answers={answers} recommendations={recommendations} />}
      {device === "desktop" && <QuizResultDesktop answers={answers} recommendations={recommendations} />}
    </div>
  );
}
