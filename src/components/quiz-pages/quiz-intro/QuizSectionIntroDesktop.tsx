import React, { useEffect, useState, useMemo } from "react";
import { PersonalDetailsIntroProps } from "../../../types/quiz";

export default function QuizSectionIntroDesktop({
  onBegin,
  onPrevious,
  backgroundImageUrl,
  desktopWomanImageUrl,
  desktopBackgroundImageUrl,
  titleLines,
  bodyLines,
  buttonLabel,
  nextSegment,
}: PersonalDetailsIntroProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    // Сбрасываем состояние при монтировании
    setIsAnimating(false);
    setIsButtonVisible(false);

    // Запускаем анимацию с небольшой задержкой для плавности
    const animationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);

    // Анимация кнопки - задержка 1000ms
    const buttonTimer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 1000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  // Мемоизируем вычисления для оптимизации производительности
  const effectiveWomanImage = useMemo(() =>
    desktopWomanImageUrl ?? "/PNG_models/0e01f32164645243d5b2427a89508c99e60d2531.png",
    [desktopWomanImageUrl]
  );

  const effectiveBackgroundImage = useMemo(() =>
    desktopBackgroundImageUrl ?? "/PNG_models/background/Copy of A background.png",
    [desktopBackgroundImageUrl]
  );

  const effectiveTitleLines = useMemo(() =>
    titleLines ?? ["PERSONAL", "DETAILS"],
    [titleLines]
  );

  const effectiveBodyLines = useMemo(() =>
    bodyLines ?? [
      "Let's start with a few quick",
      "details – to tailor your",
      "wellness wardrobe",
      "perfectly.",
    ],
    [bodyLines]
  );

  const effectiveButtonLabel = useMemo(() =>
    buttonLabel ?? "Begin Survey",
    [buttonLabel]
  );

  return (
    <div className="bg-white flex flex-col relative overflow-hidden min-h-screen">
      <div
        className="fixed inset-y-0 z-10 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          backgroundImage: `url('${effectiveBackgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          width: "35%",
          height: "100%",
          right: isAnimating ? "0%" : "-35%",
          opacity: isAnimating ? 1 : 0,
          willChange: "right, opacity", // GPU ускорение
          transform: "translateZ(0)", // Принудительное использование GPU
        }}
      />

      <div
        className="fixed z-20 h-full pointer-events-none bg-no-repeat transition-all duration-1000 ease-out"
        style={{
          backgroundImage: `url('${effectiveWomanImage}')`,
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          width: "50%",
          height: "95%",
          maxHeight: "1600px",
          top: "50%",
          left: isAnimating ? "65%" : "100%",
          transform: "translate(-50%, -50%) translateZ(0)", // Центрируем + GPU ускорение
          opacity: isAnimating ? 1 : 0,
          willChange: "left, opacity", // GPU ускорение
        }}
      />

      {/* Content - absolute positioning to override QuizPage centering */}
      <div className="absolute inset-0 z-30 flex">
        {/* Left half content */}
        <div className="w-1/2 flex flex-col pl-16">
          {/* Text content */}
          <div className="flex-1 pt-6">
            <div className="text-left">
              {effectiveTitleLines.map((line, index) => (
                <h1
                  key={`title-${index}`}
                  className={`text-5xl text-[#1F2429] ${index === 0 ? "pt-6" : ""
                    }`}
                >
                  {line}
                </h1>
              ))}
              <div className="pb-4"></div>
              {effectiveBodyLines.map((line, index) => (
                <div
                  key={`body-${index}`}
                  className="w-full text-[18px] text-left"
                  dangerouslySetInnerHTML={{ __html: line || '' }}
                />
              ))}
            </div>
          </div>

          {/* Button section */}
          <div className="pb-8 pt-2">
            <div className="flex flex-col">
              <img
                src="/Logo/Black.svg"
                alt="Project V"
                className="w-[30%] h-[30%] pb-2"
              />
              
              {/* Next segment text below logo */}
              {nextSegment && (
                <div className="text-left text-gray-600 text-base font-medium mb-2">
                  Up next... {nextSegment}
                </div>
              )}
              <div className="flex flex-col gap-2 mt-2">
                <button
                  onClick={onBegin}
                  className="bg-[#1F2429] text-white px-6 py-5 rounded-full hover:bg-gray-800 transition-all duration-700 ease-out w-full max-w-[400px]"
                  style={{
                    opacity: isButtonVisible ? 1 : 0,
                    transform: isButtonVisible ? "translateY(0)" : "translateY(32px)",
                    willChange: "opacity, transform",
                  }}
                >
                  {effectiveButtonLabel}
                </button>
                {onPrevious && (
                  <button
                    onClick={onPrevious}
                    className="bg-white text-[#1F2429] border-2 border-[#1F2429] px-6 py-5 rounded-full hover:bg-gray-50 transition-all duration-700 ease-out w-full max-w-[400px]"
                    style={{
                      opacity: isButtonVisible ? 1 : 0,
                      transform: isButtonVisible ? "translateY(0)" : "translateY(32px)",
                      willChange: "opacity, transform",
                    }}
                  >
                    Previous
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right half - empty space for images */}
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}
