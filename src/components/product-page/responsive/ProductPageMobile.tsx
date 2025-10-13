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
        className="flex flex-col items-start w-full bg-cover bg-center bg-no-repeat pt-12 pb-[75%]"
        style={{ backgroundImage: `url(${content.heroBackgroundSrc})` }}
      >
        <div className="flex flex-col items-end self-stretch">
          <button
            className="flex flex-col items-start bg-[#1F2429] text-left p-[3px] mr-5 rounded-[40px] border border-solid border-white"
            onClick={() => navigateToResults()}
          >
            <img
              src={content.closeIconSrc}
              className="w-[23px] h-[23px] rounded-[40px] object-fill"
            />
          </button>
        </div>
      </div>
      <div className="bg-white w-full -mt-12 relative z-10 rounded-t-3xl shadow-lg overflow-hidden">
        <div className="self-stretch">
          <div className="flex flex-col items-center self-stretch pt-5 pb-[63px] px-5 gap-2 max-w-md mx-auto">
            <div className="flex flex-col items-start py-[7px] mb-6 gap-[19px]">
              <div className="flex flex-col items-start mx-[3px]">
                <img
                  src={content.jarImageSrc}
                  className="w-[133px] h-[126px] object-fill"
                />
              </div>
              <span
                className="text-[28px] font-bold mx-7"
                style={{ color: content.productNameColor || "#EA4B94" }}
              >
                {content.productName}
              </span>
            </div>
            <div className="flex flex-col self-stretch mb-6 gap-3">
              <div
                className="grid w-full gap-3 items-stretch"
                style={{
                  gridTemplateColumns: `repeat(${content.ingredients.length}, minmax(0, 1fr))`,
                }}
              >
                {content.ingredients.map((ing) => (
                  <div
                    key={ing.title}
                    className="flex flex-col h-full bg-white py-3 px-3 gap-2 rounded-2xl border border-solid border-[#E1E9FD]"
                  >
                    <span className="text-[#1F2429] font-bold text-center whitespace-nowrap text-[clamp(12px,3.5vw,15px)]">
                      {ing.title}
                    </span>
                    <div className="flex justify-center items-center">
                      <img
                        src={ing.imageSrc}
                        className="object-contain w-[clamp(36px,12vw,56px)] h-[clamp(24px,8vw,40px)]"
                      />
                    </div>
                    <span className="text-[#1F2429] font-bold text-center whitespace-nowrap text-[clamp(10px,3vw,12px)]">
                      {ing.amount}
                    </span>
                  </div>
                ))}
              </div>
              <span className="text-[#1F2429] text-xs">
                {content.description}
              </span>
            </div>
            <div className="flex flex-col items-start self-stretch bg-white py-4 mb-6 gap-4 rounded-xl border border-solid border-[#E1E9FD]">
              {content.features.map((f, idx) => (
                <div
                  key={f.title + idx}
                  className="flex flex-col items-start ml-4 gap-1.5"
                >
                  <span className="text-[#1F2429] text-[15px] font-bold w-full whitespace-nowrap overflow-hidden text-ellipsis">
                    {f.title}
                  </span>
                  <span className="text-[#1F2429] text-sm w-[305px]">
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative self-stretch mb-[25px]">
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
                className="w-full h-[203px] rounded-3xl object-cover cursor-pointer"
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
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5V19L19 12L8 5Z" fill="#00A8E2" />
                  </svg>
                </button>
              )}
              {isVideoPlaying && (
                <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-0.5 rounded-full text-[10px]">
                  Tap video to pause
                </div>
              )}
            </div>
            <div className="flex flex-col items-start self-stretch bg-white py-[15px] mb-6 gap-1.5 rounded-xl border border-solid border-[#E1E9FD]">
              <span className="text-[#1F2429] text-[15px] font-bold ml-4 w-[calc(100%-2rem)] whitespace-nowrap overflow-hidden text-ellipsis">
                {content.capsulesBlock.title}
              </span>
              <span className="text-[#1F2429] text-sm mx-4">
                {content.capsulesBlock.text}
              </span>
            </div>
            <button
              className="flex flex-col items-center self-stretch bg-[#1F2429] text-left py-3.5 rounded-[100000px] border-0"
              onClick={() => alert("Pressed!")}
            >
              <span className="text-white text-[15px]">
                {`Buy ${content.productName} Now!`}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
