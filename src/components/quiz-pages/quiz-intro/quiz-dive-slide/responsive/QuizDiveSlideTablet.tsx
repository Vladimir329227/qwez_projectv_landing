import React from "react";
import { QuizStartPageProps } from "../../../../../types/quiz";
import { usePage } from "../../../../../App";

interface QuizDiveSlideTabletProps extends QuizStartPageProps {
  isTitleVisible: boolean;
  isSubtitleVisible: boolean;
  isButtonsVisible: boolean;
  fullText: string;
  subtitleFullText: string;
}

export default function QuizDiveSlideTablet({
  onNext,
  onPrevious,
  isTitleVisible,
  isSubtitleVisible,
  isButtonsVisible,
  fullText,
  subtitleFullText,
}: QuizDiveSlideTabletProps) {
  const { setPage } = usePage();
  return (
    <div className="flex items-start bg-white h-screen relative">
      {/* Left Content */}
      <div className="flex flex-col w-[320px] mr-8 flex-shrink-0 z-10 pl-8 h-full">
        {/* Logo - Top */}
        <div className="flex justify-start pt-8">
          <img
            src="/Logo/Black.svg"
            className="w-[250px] h-[70px] object-fill"
            alt="Logo"
          />
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-start justify-center">
          {/* Title with Animation */}
          <div
            className={`text-[#1F2429] text-5xl w-[380px] mb-20 h-24 flex items-center transition-all duration-700 ease-out ${
              isTitleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span>{fullText}</span>
          </div>

          {/* Subtitle with Animation */}
          <div
            className={`text-[#1F2429] text-xl w-[380px] mb-8 h-12 flex items-center transition-all duration-700 ease-out ${
              isSubtitleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span>{subtitleFullText}</span>
          </div>
        </div>

        {/* Info + Button - Bottom */}
        <div
          className={`flex flex-col items-start gap-4 justify-left pb-8 transition-all duration-700 ease-out ${
            isButtonsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <button
            className="flex flex-col items-center bg-[#1F2429] text-center w-full max-w-[350px] py-5 rounded-[100000px] border-0 hover:bg-gray-800 transition-colors"
            onClick={onNext}
          >
            <span className="text-white text-[20px]">Continue</span>
          </button>
        </div>
      </div>

      {/* Background Image - Tablet version */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/graphics/image.png"
          className="w-full h-full object-cover object-center"
          alt="Quiz Background"
        />
        {/* White gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/20 to-white/0"></div>
      </div>
   </div>
  );
}