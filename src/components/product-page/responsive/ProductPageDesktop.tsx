import React, { useRef, useState } from "react";
import { navigateToResults } from "../../../App";
import { getProductContent } from "../ProductContent";
export default ({
  answers = {},
  productName = "Antiox",
  productKey,
}: {
  answers?: Record<string, any>;
  productName?: string;
  productKey?: string;
}) => {
  const content = getProductContent(productKey);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="items-start bg-white">
      <div
        className="flex flex-col items-start w-full bg-cover bg-center bg-no-repeat pt-12 pb-[25%]"
        style={{ backgroundImage: `url(${content.heroBackgroundSrc})` }}
      >
        <button
          className="flex flex-col items-start bg-[#1F2429] text-left py-1 ml-8 lg:ml-16 xl:ml-24 rounded-full border border-solid border-white"
          onClick={() => navigateToResults()}
        >
          <img
            src={content.closeIconSrc}
            className="w-6 h-6 mx-1 rounded-full object-fill"
          />
        </button>
      </div>
      <div className="bg-white w-full -mt-12 relative z-10 rounded-t-3xl shadow-lg overflow-hidden">
        <div className="self-stretch">
          <div className="flex flex-col items-center self-stretch py-16 px-4 lg:px-8 xl:px-12 gap-16 max-w-7xl mx-auto">
            <div className="flex justify-between items-center self-stretch">
              <div className="flex flex-col items-start w-full lg:w-2/3 gap-6">
                <div
                  className="grid w-full gap-4 items-stretch"
                  style={{
                    gridTemplateColumns: `repeat(${content.ingredients.length}, minmax(0, 1fr))`,
                  }}
                >
                  {content.ingredients.map((ing, index) => (
                    <div
                      key={ing.title}
                      className="flex flex-col h-full bg-white py-4 px-6 gap-3 rounded-2xl border border-solid border-[#E1E9FD]"
                    >
                      <div className="flex-1 flex flex-col justify-between items-center">
                        <div className="h-[60px] flex items-center justify-center">
                          <span className="text-[#1F2429] text-xl lg:text-2xl text-center leading-tight">
                            {ing.title}
                          </span>
                        </div>
                        <div className="flex flex-col items-center flex-1 py-4">
                          <img
                            src={ing.imageSrc}
                            className="w-16 h-10 object-contain"
                          />
                        </div>
                        <span className="text-[#1F2429] text-lg lg:text-xl text-center">
                          {ing.amount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <span className="text-[#1F2429] text-base lg:text-lg w-full">
                  {content.description}
                </span>
              </div>
              <div className="flex flex-col items-center w-full lg:w-1/3 pt-3 px-8 lg:px-12 gap-6">
                <div className="flex flex-col items-center self-stretch">
                  <img
                    src={content.jarImageSrc}
                    className="w-48 h-48 lg:w-60 lg:h-56 object-contain object-center"
                  />
                </div>
                <span
                  className="text-2xl lg:text-3xl font-bold text-center"
                  style={{ color: content.productNameColor || "#808080" }}
                >
                  {content.productName}
                </span>
              </div>
            </div>
            <div className="relative w-full max-w-3xl">
              <video
                ref={videoRef}
                onEnded={() => setIsVideoPlaying(false)}
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                onClick={() => {
                  if (videoRef.current && isVideoPlaying) {
                    videoRef.current.pause();
                  }
                }}
                src={"/vidio/PROJECT V NEUTRACEUTICALS - ENGLISH.mp4"}
                className="w-full h-auto rounded-3xl object-cover cursor-pointer"
                loop
                muted
                playsInline
                controls={false}
              />
              {!isVideoPlaying && (
                <button
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.play();
                    }
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5V19L19 12L8 5Z" fill="#00A8E2" />
                  </svg>
                </button>
              )}
              {isVideoPlaying && (
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  Click on the video to pause
                </div>
              )}
            </div>
            <div className="flex items-stretch self-stretch gap-6">
              <div className="flex flex-col items-start bg-white w-full lg:w-1/2 pt-4 pb-24 gap-4 rounded-xl border border-solid border-[#E1E9FD]">
                {content.features.map((f, index) => (
                  <div
                    key={f.title}
                    className="flex flex-col items-start w-full px-4 gap-6"
                  >
                    <span className="text-[#1F2429] text-xl lg:text-2xl">
                      {f.title}
                    </span>
                    <span className="text-[#1F2429] text-base lg:text-lg">
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start bg-white w-full lg:w-1/2 p-4 gap-6 rounded-xl border border-solid border-[#E1E9FD]">
                <span className="text-[#1F2429] text-xl lg:text-2xl">
                  {content.capsulesBlock.title}
                </span>
                <span className="text-[#1F2429] text-base lg:text-lg w-full">
                  {content.capsulesBlock.text}
                </span>
              </div>
            </div>
            <button
              className="flex flex-col items-center bg-[#1F2429] text-left w-full max-w-sm py-4 rounded-full border-0"
              onClick={() => alert("Pressed!")}
            >
              <div className="flex flex-col items-start">
                <span className="text-white text-sm lg:text-base">
                  {`Buy ${content.productName} Now!`}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
