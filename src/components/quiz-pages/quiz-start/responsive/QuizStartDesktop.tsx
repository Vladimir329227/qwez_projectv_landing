import React from "react";
import { QuizStartPageProps } from "../../../../types/quiz";
import { usePage } from "../../../../App";

interface QuizStartDesktopProps extends QuizStartPageProps {
  isTitleVisible: boolean;
  isSubtitleVisible: boolean;
  isButtonsVisible: boolean;
  fullText: string;
  subtitleFullText: string;
}

export default function QuizStartDesktop({
  onNext,
  onPrevious,
  isTitleVisible,
  isSubtitleVisible,
  isButtonsVisible,
  fullText,
  subtitleFullText,
}: QuizStartDesktopProps) {
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
              <span className="text-white text-base sm:text-[18px]">Next</span>
            </div>
          </button>

          <button
            className="flex flex-col items-center bg-white text-left w-[350px] sm:w-[375px] lg:w-[400px] py-4 sm:py-5 mx-5 rounded-[100000px] border-[3px] hover:bg-white transition-colors"
            onClick={() => setPage("landing")}
          >
            <div className="flex flex-col items-start">
              <span className="bg-white text-[#1F2429]  border-[#1F2429] text-base sm:text-[18px]">
              Previous
              </span>
            </div>
          </button>
        </div>

        {/* Info Text */}
        <div className="flex items-start bg-[#E5F6FC] text-left py-[1.5vh] sm:py-[2vh] ml-5 rounded-2xl border border-solid border-[#00A8E2] mb-[2vh] sm:mb-[3vh] lg:mb-[4vh] w-[400px] mt-auto">
          <img
            src="/figma/info-icon.png"
            className="w-6 h-6 sm:w-7 sm:h-7 ml-3 mr-2 rounded-2xl object-fill flex-shrink-0"
            alt="Info"
          />
          <span className="text-[#626669] text-sm sm:text-base w-full mr-3.5">
            We ask this to better understand your daily rhythms and how they
            might relate to your focus, habits, and overall well-being.
          </span>
        </div>
      </div>

      {/* Right Image - Desktop version */}
      <div className="absolute right-0 top-0 w-3/4 h-full overflow-hidden">
        <img
          src="/figma/quiz_start2.png"
          className="w-full h-full object-cover object-right translate-x-1/5"
          alt="Quiz Background"
        />
        {/* White gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/20 to-white/0"></div>
      </div>
    </div>
  );
}
