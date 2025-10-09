import React from "react";
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
  return (
    <div className="items-start bg-white">
      {/* Фоновое изображение на всю ширину экрана */}
      <div
        className="flex flex-col items-start w-full bg-cover bg-center bg-no-repeat pt-12 pb-[30%]"
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
      {/* Основной контент с наплывом на фоновое изображение */}
      <div className="bg-white w-full -mt-12 relative z-10 rounded-t-3xl shadow-lg overflow-hidden">
        <div className="self-stretch">
          <div className="flex flex-col items-center self-stretch py-8 px-4 lg:px-8 xl:px-12 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-6 mb-8">
              <div className="flex flex-col items-start w-full lg:w-2/3 gap-4">
                <div className="flex flex-wrap gap-3">
                  {content.ingredients.map((ing) => (
                    <div
                      key={ing.title}
                      className="flex flex-col items-center bg-white w-24 sm:w-28 py-3 px-2 gap-2 rounded-2xl border border-solid border-[#E1E9FD]"
                    >
                      <span className="text-[#1F2429] text-sm font-bold text-center">
                        {ing.title}
                      </span>
                      <div className="flex flex-col items-center">
                        <img
                          src={ing.imageSrc}
                          className="w-12 h-8 object-contain"
                        />
                      </div>
                      <span className="text-[#1F2429] text-xs font-bold text-center">
                        {ing.amount}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-[#1F2429] text-sm w-full">
                  {content.description}
                </span>
              </div>
              <div className="flex flex-col items-center w-full lg:w-1/3 py-2 gap-4">
                <div className="flex flex-col items-center">
                  <img
                    src={content.jarImageSrc}
                    className="w-32 h-32 lg:w-36 lg:h-32 object-contain"
                  />
                </div>
                <span
                  className="text-2xl lg:text-3xl font-bold text-center"
                  style={{ color: content.productNameColor || "#EA4B94" }}
                >
                  {content.productName}
                </span>
              </div>
            </div>
            <img
              src={content.promoBannerSrc}
              className="w-full max-w-2xl h-auto rounded-3xl object-cover mb-8"
            />
            <div className="flex flex-col lg:flex-row items-stretch w-full gap-4 mb-8">
              <div className="flex flex-col items-start bg-white w-full lg:w-1/2 pt-4 pb-16 gap-4 rounded-xl border border-solid border-[#E1E9FD]">
                {content.features.map((f) => (
                  <div
                    key={f.title}
                    className="flex flex-col items-start w-full px-4 gap-3"
                  >
                    <span className="text-[#1F2429] text-sm lg:text-base font-bold">
                      {f.title}
                    </span>
                    <span className="text-[#1F2429] text-xs lg:text-sm w-full">
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start bg-white w-full lg:w-1/2 p-4 gap-3 rounded-xl border border-solid border-[#E1E9FD]">
                <span className="text-[#1F2429] text-sm lg:text-base font-bold">
                  {content.capsulesBlock.title}
                </span>
                <span className="text-[#1F2429] text-xs lg:text-sm w-full">
                  {content.capsulesBlock.text}
                </span>
              </div>
            </div>
            <button
              className="flex flex-col items-center bg-[#1F2429] text-left w-full max-w-sm py-3 rounded-full border-0"
              onClick={() => alert("Pressed!")}
            >
              <span className="text-white text-sm lg:text-base">
                {`Buy ${content.productName} Now!`}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
