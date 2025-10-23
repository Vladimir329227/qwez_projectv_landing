import React, { useEffect, useState } from "react";
import { PersonalDetailsIntroProps } from "../../../types/quiz";

export default function QuizSectionIntroMobile({
  onBegin,
  onPrevious,
  backgroundImageUrl,
  titleLines,
  bodyLines,
  buttonLabel,
  nextSegment,
}: PersonalDetailsIntroProps) {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    // Анимация изображения женщины - задержка 300ms
    const imageTimer = setTimeout(() => {
      setIsImageVisible(true);
    }, 300);

    // Анимация кнопки - задержка 800ms
    const buttonTimer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 800);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  // Defaults ensure backward compatibility and allow fixed manual line breaks
  const effectiveBackground = backgroundImageUrl ?? "/women/yellow_woman.png";
  const effectiveTitleLines = titleLines ?? ["PERSONAL", "DETAILS"];
  const effectiveBodyLines = bodyLines ?? [
    "Let's start with a few quick",
    "details – to tailor your",
    "wellness wardrobe",
    "perfectly.",
  ];
  const effectiveButtonLabel = buttonLabel ?? "Begin Survey";

  return (
    <div className="bg-white flex h-screen overflow-hidden relative">
      {/* Left column - Content */}
      <div className="flex flex-col w-[60%] relative z-10">
        {/* Text content */}
        <div className="flex justify-center p-6 flex-1">
          <div className="w-full max-w-xl">
            <div className="text-left max-w-xl">
              {effectiveTitleLines.map((line, index) => (
                <h1
                  key={`title-${index}`}
                  className={`text-4xl text-[#1F2429] font-bold ${index === 0 ? "pt-10" : ""
                    }`}
                >
                  {line}
                </h1>
              ))}
              <div className="pb-6"></div>
              {effectiveBodyLines.map((line, index) => (
                <div
                  key={`body-${index}`}
                  className="w-full text-[15px] text-left"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* (moved) button/logo now rendered as overlay */}
        <div className="p-6 pb-14" />
      </div>

      {/* Background image layer (absolute, right-aligned, shows under left text) */}
      <div
        className={`absolute inset-0 bg-no-repeat transition-all duration-1000 ease-out z-0 pointer-events-none ${isImageVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
          }`}
        style={{
          backgroundImage: `url('${effectiveBackground}')`,
          backgroundSize: "auto 100%",
          backgroundPosition: "right center",
        }}
      />

      {/* Overlay layer: left-aligned logo above button at the bottom (do not push layout) */}
      <div className="absolute inset-0 z-[200] pointer-events-none">
        {/* Full-width blurred backdrop behind the bottom area */}
        <div className="absolute left-0 right-0 bottom-0 h-[95px] bg-white/20 backdrop-blur-md shadow-md" />
        <div className="absolute bottom-6 left-0 right-0 px-6">
          {/* Next segment text above logo */}
          {nextSegment && (
            <div className={`transition-all duration-700 ease-out ${isImageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}>
              <div className="text-left text-[#1F2429] text-lg font-medium mb-4">
                Up next...<br />
                {nextSegment}
              </div>
            </div>
          )}
          
          {/* Logo above the button, aligned to left */}
          <div className={`transition-all duration-700 ease-out ${isImageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}>
            <img
              src="/Logo/Black.svg"
              alt="Project V"
              className="w-[50%] max-w-[320px] h-auto pb-4"
            />
          </div>
          {/* Buttons */}
          <div className="relative">
            <div className="flex gap-3">
              {onPrevious && (
                <button
                  onClick={onPrevious}
                  className={`relative z-10 pointer-events-auto bg-white text-[#1F2429] border-2 border-[#1F2429] px-4 py-4 rounded-full hover:bg-gray-50 transition-all duration-700 ease-out flex-1 ${isButtonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                  Previous
                </button>
              )}
              <button
                onClick={onBegin}
                className={`relative z-10 pointer-events-auto bg-[#1F2429] text-white px-6 py-4 rounded-full hover:bg-gray-800 transition-all duration-700 ease-out flex-1 ${isButtonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                {effectiveButtonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
