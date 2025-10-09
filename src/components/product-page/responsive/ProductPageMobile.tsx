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
    <div className="flex flex-col bg-white">
      <div className="self-stretch bg-white h-[1908px] rounded-[32px] border border-solid border-[#B93E8F]">
        <div className="self-stretch mb-[1px]">
          <div
            className="self-stretch bg-cover bg-center pt-[50px] pb-[313px]"
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
          <div className="flex flex-col items-center self-stretch bg-white pt-5 pb-[63px] px-5 rounded-3xl">
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
              <div className="flex items-start self-stretch">
                {content.ingredients.map((ing) => (
                  <div
                    key={ing.title}
                    className="flex flex-1 flex-col items-start bg-white py-4 mr-3 gap-3 rounded-2xl border border-solid border-[#E1E9FD]"
                  >
                    <span className="text-[#1F2429] text-[15px] font-bold mx-[13px]">
                      {ing.title}
                    </span>
                    <div className="flex flex-col self-stretch mx-6">
                      <img
                        src={ing.imageSrc}
                        className="self-stretch h-10 object-fill"
                      />
                    </div>
                    <span className="text-[#1F2429] text-xs font-bold mx-[39px]">
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
                  <span className="text-[#1F2429] text-[15px] font-bold mr-[233px]">
                    {f.title}
                  </span>
                  <span className="text-[#1F2429] text-sm w-[305px]">
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
            <img
              src={content.promoBannerSrc}
              className="self-stretch h-[203px] mb-[25px] rounded-3xl object-fill"
            />
            <div className="flex flex-col items-start self-stretch bg-white py-[15px] mb-6 gap-1.5 rounded-xl border border-solid border-[#E1E9FD]">
              <span className="text-[#1F2429] text-[15px] font-bold ml-4 mr-[266px]">
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
