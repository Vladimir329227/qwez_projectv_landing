import React from "react";
import { QuizStartPageProps } from "../../../../types/quiz";
import { usePage } from "../../../../App";

interface QuizIntermediateDesktopProps extends QuizStartPageProps {
  isTitleVisible: boolean;
  isSubtitleVisible: boolean;
  isButtonsVisible: boolean;
  fullText: string;
  subtitleFullText: string;
}

export default function QuizIntermediateDesktop({
  onNext,
  onPrevious,
  isTitleVisible,
  isSubtitleVisible,
  isButtonsVisible,
  fullText,
  subtitleFullText,
}: QuizIntermediateDesktopProps) {
  const { setPage } = usePage();
  return (
    <div className="flex items-start bg-white h-screen relative">
      {/* Left Content */}
      <div className="flex flex-col items-start w-[492px] mr-[191px] flex-shrink-0 z-10 pl-12 h-full">
        {/* Logo */}
        <div className="flex flex-col items-start mb-[2vh] sm:mb-[3vh] lg:mb-[4vh] ml-5 mt-[4vh] sm:mt-[6vh] lg:mt-[8vh]">
          <img
            src="/Logo/Black.svg"
            className="w-[200px] sm:w-[225px] lg:w-[250px] h-[56px] sm:h-[63px] lg:h-[70px] object-fill"
            alt="Logo"
          />
        </div>

        {/* Title with Animation */}
        <div
          className={`text-[#1F2429] text-4xl sm:text-5xl lg:text-6xl w-[500px] mb-[2vh] sm:mb-[3vh] lg:mb-[4vh] ml-5 flex items-start transition-all duration-700 ease-out ${
            isTitleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span>{fullText}</span>
        </div>

        {/* Subtitle with Animation */}
        <div
          className={`text-[#1F2429] text-lg sm:text-xl w-[400px] mb-[2vh] sm:mb-[3vh] lg:mb-[4vh] ml-5 flex items-start transition-all duration-700 ease-out ${
            isSubtitleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span>{subtitleFullText}</span>
        </div>
        {/* Buttons Container */}
        <div
          className={`flex flex-col items-start pt-[1vh] sm:pt-[1.5vh] lg:pt-[2vh] pb-[1vh] sm:pb-[1.5vh] lg:pb-[2vh] 
    gap-4 transition-all duration-700 ease-out ${
      isButtonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
        >
          <button
            className="flex flex-col items-center bg-[#1F2429] text-left w-[350px] sm:w-[375px] lg:w-[400px] py-4 sm:py-5 mx-5 rounded-[100000px] border-0 hover:bg-gray-800 transition-colors"
            onClick={onNext}
          >
            <div className="flex flex-col items-start">
              <span className="text-white text-base sm:text-[18px]">Continue</span>
            </div>
          </button>
        </div>
      </div>

      {/* Right Image - Desktop version */}
      <div className="absolute right-0 top-0 w-3/4 h-full overflow-hidden">
        <img
          src="/graphics/image.png"
          className="w-full h-full object-contain object-right"
          alt="Quiz Background"
        />
        {/* White gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/20 to-white/0"></div>
      </div>
    </div>
  );
}
