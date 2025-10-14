import React, { useEffect, useState } from "react";
import { PersonalDetailsIntroProps } from "../../../types/quiz";

export default function QuizSectionIntroDesktop({
  onBegin,
  backgroundImageUrl,
  desktopWomanImageUrl,
  desktopBackgroundImageUrl,
  titleLines,
  bodyLines,
  buttonLabel,
}: PersonalDetailsIntroProps) {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
  const [isWomanImageVisible, setIsWomanImageVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    // Анимация фонового изображения - задержка 300ms
    const backgroundTimer = setTimeout(() => {
      setIsBackgroundVisible(true);
    }, 300);

    // Анимация изображения женщины - задержка 600ms (после фона)
    const womanImageTimer = setTimeout(() => {
      setIsWomanImageVisible(true);
    }, 600);

    // Анимация кнопки - задержка 1000ms
    const buttonTimer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 1000);

    return () => {
      clearTimeout(backgroundTimer);
      clearTimeout(womanImageTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  // Defaults ensure backward compatibility and allow fixed manual line breaks
  const effectiveWomanImage = desktopWomanImageUrl ?? "/PNG_models/0e01f32164645243d5b2427a89508c99e60d2531.png";
  const effectiveBackgroundImage = desktopBackgroundImageUrl ?? "/PNG_models/background/Copy of A background.png";
  const effectiveTitleLines = titleLines ?? ["PERSONAL", "DETAILS"];
  const effectiveBodyLines = bodyLines ?? [
    "Let's start with a few quick",
    "details – to tailor your",
    "wellness wardrobe",
    "perfectly.",
  ];
  const effectiveButtonLabel = buttonLabel ?? "Begin Survey";

  return (
    <div className="bg-white flex flex-col relative overflow-hidden min-h-screen">
      <div
    className={`fixed inset-y-0 right-0 z-10 pointer-events-none transition-all duration-1000 ease-out ${
      isBackgroundVisible
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-full"
    }`}
    style={{
      backgroundImage: `url('${effectiveBackgroundImage}')`,
      backgroundSize: "cover", // Заполняет всю область, обрезая лишнее
      backgroundPosition: "right center", // Показывает правую часть
      backgroundRepeat: "no-repeat",
      width: "35%", // Четко 35% ширины
      height: "100%",
    }}
  />

<div
  className={`fixed z-20 h-full pointer-events-none bg-no-repeat transition-all duration-1000 ease-out ${
    isWomanImageVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-full"
  }`}
  style={{
    backgroundImage: `url('${effectiveWomanImage}')`,
    backgroundSize: "contain",
    backgroundPosition: "center center", // Центрируем изображение
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "95%",
    maxHeight: "1600px",
    top: "50%",
    left: "65%", // Позиционируем так, чтобы центр был на 65% от левого края
    transform: "translate(-50%, -50%)", // Центрируем элемент относительно точки left: 65%
  }}
/>

      {/* Content - absolute positioning to override QuizPage centering */}
      <div className="absolute inset-0 z-30 flex">
        {/* Left half content */}
        <div className="w-1/2 flex flex-col pl-16">
          {/* Text content */}
          <div className="flex-1 pt-10">
            <div className="text-left">
              {effectiveTitleLines.map((line, index) => (
                <h1
                  key={`title-${index}`}
                  className={`text-6xl text-[#1F2429] ${
                    index === 0 ? "pt-10" : ""
                  }`}
                >
                  {line}
                </h1>
              ))}
              <div className="pb-6"></div>
              {effectiveBodyLines.map((line, index) => (
                <div
                  key={`body-${index}`}
                  className="w-full text-[20px] text-left"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Button section */}
          <div className="pb-32 pt-4">
            <div className="flex flex-col">
              <img
                src="/Logo/Black.svg"
                alt="Project V"
                className="w-[40%] h-[40%] pb-4"
              />
              <button
                onClick={onBegin}
                className={`mt-3 bg-[#1F2429] text-white px-6 py-3 rounded-full hover:bg-black/80 transition-all duration-700 ease-out w-full max-w-[400px] ${
                  isButtonVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {effectiveButtonLabel}
              </button>
            </div>
          </div>
        </div>
        
        {/* Right half - empty space for images */}
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}
