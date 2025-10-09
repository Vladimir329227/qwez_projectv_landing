import React, { useState } from "react";
import { navigateToProduct } from "../../../../App";

export default (props: any) => {
  const [input1, onChangeInput1] = useState("");
  const [input2, onChangeInput2] = useState("");
  const [input3, onChangeInput3] = useState("");
  const [input4, onChangeInput4] = useState("");
  const [input5, onChangeInput5] = useState("");
  const [input6, onChangeInput6] = useState("");
  const [input7, onChangeInput7] = useState("");
  return (
    <div className="flex flex-col bg-white mx-auto">
      <div className="self-stretch bg-white h-[3639px] rounded-[32px]">
        <div className="flex flex-col self-stretch relative pt-[95px]">
          <div className="flex flex-col items-start self-stretch relative">
            <div className="flex flex-col items-start bg-white pt-5 pb-[42px] rounded-3xl">
              <div className="flex items-center mb-6 mx-5">
                <div className="flex shrink-0 items-center bg-[#E1E9FD] py-1.5 px-3.5 mr-[93px] gap-[11px] rounded-[100000px]">
                  <div className="flex flex-col shrink-0 items-start">
                    <span className="text-[#006283] text-base font-bold">
                      {"timer"}
                    </span>
                  </div>
                  <span className="text-[#1F2429] text-[15px]">{"09:55"}</span>
                </div>
                <div className="flex shrink-0 items-start bg-[#1F2429] py-[15px] px-5 gap-2.5 rounded-[100000px]">
                  <div className="flex flex-col shrink-0 items-start">
                    <span className="text-white text-[15px]">
                      {"Get My Plan"}
                    </span>
                  </div>
                  <div className="flex flex-col shrink-0 items-start bg-white py-1 px-1.5 rounded-[10px]">
                    <span className="text-[#1F2429] text-xs">{"20% Off"}</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#E1E9FD] w-[362px] h-[1px] mb-6 mx-5"></div>
              <span className="text-[#1F2429] text-2xl text-center w-[332px] mb-6 mx-[35px]">
                {"Hey Anna, here is your wellness profile revealed:"}
              </span>
              <div
                className="flex flex-col bg-[#FCFDFF] py-6 mb-10 mx-5 gap-4 rounded-2xl border border-solid border-[#E1E9FD]"
                style={{
                  boxShadow: "0px 12px 35px #3E5BB926",
                }}
              >
                <div className="flex flex-col items-center self-stretch">
                  <img
                    src="/quiz-result-images/logo_blue_wreath.png"
                    className="w-[124px] h-[70px] rounded-2xl object-fill"
                  />
                </div>
                <div className="flex flex-col items-center self-stretch">
                  <span className="text-[#00A8E2] text-[32px]">
                    {"The Icon"}
                  </span>
                </div>
                <div className="flex flex-col items-center self-stretch">
                  <span className="text-[#1F2429] text-base text-center w-[258px]">
                    {"You are the embodiment of wellness elegance."}
                  </span>
                </div>
              </div>
              <div className="bg-[#E1E9FD] w-[362px] h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col items-start mb-10 mx-5 gap-4">
                <span className="text-[#1F2429] text-[15px] w-[248px] mr-[114px]">
                  {"Your Recommended Supplements forBetter Sleep & Anti-stress"}
                </span>
                <div className="flex flex-col items-start gap-2">
                  <div
                    className="flex items-center bg-white py-4 px-[18px] rounded-xl"
                    style={{
                      boxShadow: "0px 12px 35px #3E5BB926",
                    }}
                  >
                    <div className="flex flex-col shrink-0 items-start mr-[18px]">
                      <img
                        src="/quiz-result-images/jar_red_ch.png"
                        className="w-[76px] h-[72px] object-fill"
                      />
                    </div>
                    <div className="flex flex-col shrink-0 items-start mr-4 gap-3">
                      <div className="flex flex-col items-start gap-1.5">
                        <span className="text-[#1F2429] text-base font-bold mr-[69px]">
                          {"CH – Chromevital"}
                        </span>
                        <div className="flex items-center pl-[1px] gap-1.5">
                          <div className="flex flex-col shrink-0 items-start">
                            <span className="text-[#1F2429] text-[9px] font-bold">
                              {"🌿"}
                            </span>
                          </div>
                          <span className="text-[#1F2429] text-xs">
                            {"Guarana, Spirulina"}
                          </span>
                        </div>
                      </div>
                      <span className="text-[#626669] text-xs w-[170px] mr-6">
                        {
                          "Gives you focused alertness—without spikes or crashes and enhances stamina and recovery."
                        }
                      </span>
                    </div>
                    <button
                      aria-label="View product"
                      onClick={() => navigateToProduct("CHROMEVITAL")}
                      className="flex items-center bg-[#1F2429] hover:bg-[#0f1215] transition-colors duration-200 rounded-[12px] py-2 pl-4 pr-3 w-[88px]"
                    >
                      <img
                        src="/quiz-result-images/icon_arrow_up.png"
                        className="ml-auto w-2 h-2 object-contain"
                      />
                    </button>
                  </div>
                  <div
                    className="flex items-center bg-white py-4 px-[18px] rounded-xl"
                    style={{
                      boxShadow: "0px 12px 35px #3E5BB926",
                    }}
                  >
                    <div className="flex flex-col shrink-0 items-start mr-[18px]">
                      <img
                        src="/quiz-result-images/jar_pink_a.png"
                        className="w-[76px] h-[72px] object-fill"
                      />
                    </div>
                    <div className="flex flex-col shrink-0 items-start mr-4 gap-3">
                      <div className="flex flex-col items-start gap-1.5">
                        <span className="text-[#1F2429] text-base font-bold mr-[120px]">
                          {"A – Antiox"}
                        </span>
                        <div className="flex items-center pl-[1px] gap-1.5">
                          <div className="flex flex-col shrink-0 items-start">
                            <span className="text-[#1F2429] text-[9px] font-bold">
                              {"🌿"}
                            </span>
                          </div>
                          <span className="text-[#1F2429] text-xs">
                            {"Grape Seed, C, E, Zinc"}
                          </span>
                        </div>
                      </div>
                      <span className="text-[#626669] text-xs w-[173px] mr-[21px]">
                        {
                          "Protects cells from damage, supports collagen, and brightens the skin from within."
                        }
                      </span>
                    </div>
                    <button
                      aria-label="View product"
                      onClick={() => navigateToProduct("Antiox")}
                      className="flex items-center bg-[#1F2429] hover:bg-[#0f1215] transition-colors duration-200 rounded-[12px] py-2 pl-4 pr-3 w-[88px]"
                    >
                      <img
                        src="/quiz-result-images/icon_arrow_up.png"
                        className="ml-auto w-2 h-2 object-contain"
                      />
                    </button>
                  </div>
                  <div
                    className="flex items-center bg-white py-[19px] px-[18px] rounded-xl"
                    style={{
                      boxShadow: "0px 12px 35px #3E5BB926",
                    }}
                  >
                    <div className="flex flex-col shrink-0 items-start mr-[18px]">
                      <img
                        src="/quiz-result-images/jar_purple_p.png"
                        className="w-[76px] h-[72px] object-fill"
                      />
                    </div>
                    <div className="flex flex-col shrink-0 items-start mr-4 gap-3">
                      <div className="flex flex-col items-start gap-1.5">
                        <span className="text-[#1F2429] text-base font-bold mr-16">
                          {"P – Power of Mind"}
                        </span>
                        <div className="flex items-center pl-[1px] gap-1.5">
                          <div className="flex flex-col shrink-0 items-start">
                            <span className="text-[#1F2429] text-[9px] font-bold">
                              {"🌿"}
                            </span>
                          </div>
                          <span className="text-[#1F2429] text-xs">
                            {"Lavender, Melissa, Valerian"}
                          </span>
                        </div>
                      </div>
                      <span className="text-[#626669] text-xs mr-[21px]">
                        {"Soothes stress without sedating."}
                      </span>
                    </div>
                    <button
                      aria-label="View product"
                      onClick={() => navigateToProduct("POWER_OF_MIND")}
                      className="flex items-center bg-[#1F2429] hover:bg-[#0f1215] transition-colors duration-200 rounded-[12px] py-2 pl-4 pr-3 w-[88px]"
                    >
                      <img
                        src="/quiz-result-images/icon_arrow_up.png"
                        className="ml-auto w-2 h-2 object-contain"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#E1E9FD] w-[362px] h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col items-start mb-10 mx-5 gap-4">
                <span className="text-[#1F2429] text-[15px] font-bold mr-[229px]">
                  {"Expected Outcomes"}
                </span>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center bg-[#F0F6F7] p-4 gap-3 rounded-xl">
                    <div className="flex flex-col shrink-0 items-start">
                      <img
                        src="/quiz-result-images/icon_blue_symbols.png"
                        className="w-6 h-6 object-fill"
                      />
                    </div>
                    <input
                      placeholder={"Increased energy focus"}
                      value={input1}
                      onChange={(event) => onChangeInput1(event.target.value)}
                      className="text-[#1F2429] bg-transparent text-sm w-[142px] py-0.5 border-0"
                    />
                  </div>
                  <div className="flex items-center bg-[#F0F6F7] p-4 gap-3 rounded-xl">
                    <div className="flex flex-col shrink-0 items-start">
                      <img
                        src="/quiz-result-images/icon_blue_symbols.png"
                        className="w-6 h-6 object-fill"
                      />
                    </div>
                    <input
                      placeholder={"Reduced inflammation"}
                      value={input2}
                      onChange={(event) => onChangeInput2(event.target.value)}
                      className="text-[#1F2429] bg-transparent text-sm w-[138px] py-0.5 border-0"
                    />
                  </div>
                  <div className="flex items-center bg-[#F0F6F7] p-4 gap-3 rounded-xl">
                    <div className="flex flex-col shrink-0 items-start">
                      <img
                        src="/quiz-result-images/icon_blue_symbols.png"
                        className="w-6 h-6 object-fill"
                      />
                    </div>
                    <input
                      placeholder={"Improved sleep quality"}
                      value={input3}
                      onChange={(event) => onChangeInput3(event.target.value)}
                      className="text-[#1F2429] bg-transparent text-sm w-[138px] py-0.5 border-0"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#E1E9FD] w-[362px] h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col items-start mb-10 mx-5 gap-4">
                <img
                  src="/quiz-result-images/icon_blue_symbols.png"
                  className="w-8 h-8 mr-[330px] object-fill"
                />
                <div className="flex flex-col items-start gap-2">
                  <span className="text-[#1F2429] text-[15px] font-bold mr-[214px]">
                    {"Nutrients Extraction"}
                  </span>
                  <span className="text-[#1F2429] text-2xl mr-[156px]">
                    {"Cryogenic Method"}
                  </span>
                  <span className="text-[#1F2429] text-sm w-[347px]">
                    {
                      "We use cryogenic extraction to preserve the full strength and purity of every ingredient.\nNo heat damage\nMaximum nutrient retention\nEnhanced bioavailability\nCleaner, purer extracts\nBetter absorption. Better results."
                    }
                  </span>
                </div>
                <img
                  src="/quiz-result-images/photo_woman_laptop.png"
                  className="w-[362px] h-[211px] object-fill"
                />
              </div>
              <div className="bg-[#E1E9FD] w-[362px] h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col items-start mb-10 mx-5 gap-10">
                <div className="flex items-start bg-[#1F2429] py-[15px] px-5 rounded-[100000px]">
                  <div className="flex flex-col shrink-0 items-start mr-[126px]">
                    <span className="text-white text-[15px]">
                      {"Get Full Package Now"}
                    </span>
                  </div>
                  <div className="flex flex-col shrink-0 items-start bg-white py-1 px-1.5 rounded-[10px]">
                    <span className="text-[#1F2429] text-xs">{"20% Off"}</span>
                  </div>
                </div>
                <div className="flex items-start mx-[17px] gap-4">
                  <button
                    className="flex flex-col shrink-0 items-start bg-white text-left py-[15px] px-2.5 rounded-md border border-solid border-[#E1E9FD]"
                    onClick={() => alert("Pressed!")}
                  >
                    <img
                      src="/quiz-result-images/logo_visa.png"
                      className="w-auto h-auto object-fill"
                    />
                  </button>
                  <button
                    className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-[13px] rounded-md border border-solid border-[#E1E9FD]"
                    onClick={() => alert("Pressed!")}
                  >
                    <img
                      src="/quiz-result-images/logo_mastercard.png"
                      className="w-[45px] h-[27px] object-fill"
                    />
                  </button>
                  <button
                    className="flex flex-col shrink-0 items-start bg-white text-left py-[15px] px-2.5 rounded-md border border-solid border-[#E1E9FD]"
                    onClick={() => alert("Pressed!")}
                  >
                    <img
                      src="/quiz-result-images/logo_gpay.png"
                      className="w-[49px] h-5 object-fill"
                    />
                  </button>
                  <button
                    className="flex flex-col shrink-0 items-start bg-white text-left py-[15px] px-2.5 rounded-md border border-solid border-[#E1E9FD]"
                    onClick={() => alert("Pressed!")}
                  >
                    <img
                      src="/quiz-result-images/logo_applepay.png"
                      className="w-auto h-auto object-fill"
                    />
                  </button>
                </div>
              </div>
              <div className="bg-[#E1E9FD] w-[362px] h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col items-start mb-10 mx-5 gap-4">
                <span className="text-[#1F2429] text-[15px] font-bold mr-[282px]">
                  {"Our Mission"}
                </span>
                <span className="text-[#1F2429] text-2xl w-[321px] mr-10">
                  {"Taking care of people's beauty and health"}
                </span>
                <span className="text-[#1F2429] text-sm w-[361px]">
                  {
                    "Project V creates innovative products helping millions of people strengthen their health and improve their quality of life on a daily basis. By using the healing powers of nature, new research and technologies, we aim to give everyone the chance to be healthy and happy."
                  }
                </span>
                <button
                  className="flex flex-col items-start bg-transparent text-left py-3 px-[23px] rounded-[100000px] border border-solid border-[#1F2429]"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#1F2429] text-xs font-bold">
                    {"Learn More"}
                  </span>
                </button>
              </div>
              <div className="bg-[#E1E9FD] w-full h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col items-start mb-10 mx-5 gap-2">
                <div className="flex items-center bg-[#F0F6F7] py-4 px-5 gap-[19px] rounded-xl">
                  <div className="flex flex-col shrink-0 items-start">
                    <span className="text-[#00A8E2] text-xl">{"2"}</span>
                  </div>
                  <input
                    placeholder={"Millions of clients "}
                    value={input4}
                    onChange={(event) => onChangeInput4(event.target.value)}
                    className="text-[#1F2429] bg-transparent text-sm w-[107px] py-0.5 border-0"
                  />
                </div>
                <div className="flex items-center bg-[#F0F6F7] py-4 px-3.5 gap-3.5 rounded-xl">
                  <div className="flex flex-col shrink-0 items-start">
                    <span className="text-[#00A8E2] text-xl">{"19"}</span>
                  </div>
                  <input
                    placeholder={"Countries where we're present"}
                    value={input5}
                    onChange={(event) => onChangeInput5(event.target.value)}
                    className="text-[#1F2429] bg-transparent text-sm w-[185px] py-0.5 border-0"
                  />
                </div>
                <div className="flex items-center bg-[#F0F6F7] py-4 px-3.5 gap-[13px] rounded-xl">
                  <div className="flex flex-col shrink-0 items-start">
                    <span className="text-[#00A8E2] text-xl">{"48"}</span>
                  </div>
                  <input
                    placeholder={"Unique projects"}
                    value={input6}
                    onChange={(event) => onChangeInput6(event.target.value)}
                    className="text-[#1F2429] bg-transparent text-sm w-[95px] py-0.5 border-0"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-10">
                <div className="flex items-center bg-white p-3 gap-[18px] rounded-2xl border border-solid border-[#E1E9FD]">
                  <div className="flex flex-col shrink-0 items-start gap-2">
                    <img
                      src="/quiz-result-images/lady1.png"
                      className="w-[60px] h-[60px] mx-[15px] object-fill"
                    />
                    <span className="text-[#1F2429] text-xs mx-[13px] whitespace-nowrap overflow-hidden text-ellipsis">
                      {"Mia Robinson"}
                    </span>
                  </div>
                  <span className="text-[#1F2429] text-xs w-[170px]">
                    {"Sleep quality improved and I wake up less groggy"}
                  </span>
                </div>
                <div className="flex items-center bg-white p-3 gap-[18px] rounded-2xl border border-solid border-[#E1E9FD]">
                  <div className="flex flex-col shrink-0 items-start gap-2">
                    <img
                      src="/quiz-result-images/lady2.png"
                      className="w-[60px] h-[60px] mx-[15px] object-fill"
                    />
                    <span className="text-[#1F2429] text-xs mx-[13px] whitespace-nowrap overflow-hidden text-ellipsis">
                      {"Sarah Smith"}
                    </span>
                  </div>
                  <span className="text-[#1F2429] text-xs w-[170px]">
                    {
                      "These supplements have helped me feel more balanced and energized throughout the day"
                    }
                  </span>
                </div>
                <div className="flex items-center bg-white p-3 gap-[18px] rounded-2xl border border-solid border-[#E1E9FD]">
                  <div className="flex flex-col shrink-0 items-start gap-2">
                    <img
                      src="/quiz-result-images/lady3.png"
                      className="w-[60px] h-[60px] mx-[15px] object-fill"
                    />
                    <span className="text-[#1F2429] text-xs mx-[13px] whitespace-nowrap overflow-hidden text-ellipsis">
                      {"Isabella Rossi"}
                    </span>
                  </div>
                  <span className="text-[#1F2429] text-xs w-[170px]">
                    {"Sleep tracker shows longer deep sleep windows."}
                  </span>
                </div>
              </div>
              <div className="bg-[#E1E9FD] w-[362px] h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col items-start mb-10 mx-5 gap-3">
                <div className="flex flex-col items-center self-stretch">
                  <span className="text-[#1F2429] text-[32px]">{"FAQ"}</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <div className="flex flex-col items-start bg-[#FCFDFF] p-4 gap-[13px] rounded-2xl border border-solid border-[#E1E9FD]">
                    <div className="flex items-center gap-[61px]">
                      <span className="text-[#1F2429] text-[15px] font-bold w-[245px]">
                        {
                          "What makes Project V different from regular supplements?"
                        }
                      </span>
                      <img
                        src="/quiz-result-images/image-18.png"
                        className="w-6 h-6 object-fill"
                      />
                    </div>
                    <span className="text-[#1F2429] text-sm w-[328px]">
                      {
                        "Our products are made in France using organic, plant-based ingredients and cryogenic technology for better absorption and real results—no fillers, no fluff."
                      }
                    </span>
                  </div>
                  <button
                    className="flex items-center bg-[#FCFDFF] text-left p-4 gap-[26px] rounded-2xl border border-solid border-[#E1E9FD]"
                    onClick={() => alert("Pressed!")}
                  >
                    <span className="text-[#1F2429] text-[15px] font-bold w-[280px]">
                      {
                        "Are your supplements suitable for my age and lifestyle?"
                      }
                    </span>
                    <img
                      src="/quiz-result-images/image-19.png"
                      className="w-6 h-6 object-fill"
                    />
                  </button>
                  <button
                    className="flex items-center bg-[#FCFDFF] text-left p-4 gap-[60px] rounded-2xl border border-solid border-[#E1E9FD]"
                    onClick={() => alert("Pressed!")}
                  >
                    <span className="text-[#1F2429] text-[15px] font-bold">
                      {"How long does it take to see results?"}
                    </span>
                    <img
                      src="/quiz-result-images/image-20.png"
                      className="w-6 h-6 object-fill"
                    />
                  </button>
                  <button
                    className="flex items-center bg-[#FCFDFF] text-left p-4 gap-[59px] rounded-2xl border border-solid border-[#E1E9FD]"
                    onClick={() => alert("Pressed!")}
                  >
                    <span className="text-[#1F2429] text-[15px] font-bold">
                      {"Are the ingredients natural and safe?"}
                    </span>
                    <img
                      src="/quiz-result-images/image-21.png"
                      className="w-6 h-6 object-fill"
                    />
                  </button>
                  <button
                    className="flex items-center bg-[#FCFDFF] text-left p-4 rounded-2xl border border-solid border-[#E1E9FD]"
                    onClick={() => alert("Pressed!")}
                  >
                    <span className="text-[#1F2429] text-[15px] font-bold mr-[118px]">
                      {"Who creates your formulas?"}
                    </span>
                    <img
                      src="/quiz-result-images/image-22.png"
                      className="w-6 h-6 object-fill"
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-start bg-[#1F2429] py-[15px] px-5 mx-5 rounded-[100000px]">
                <div className="flex flex-col shrink-0 items-start mr-[126px]">
                  <span className="text-white text-[15px]">
                    {"Get Full Package Now"}
                  </span>
                </div>
                <div className="flex flex-col shrink-0 items-start bg-white py-1 px-1.5 rounded-[10px]">
                  <span className="text-[#1F2429] text-xs">{"20% Off"}</span>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/quiz-result-images/background_confetti.png"
            className="self-stretch h-[445px] absolute top-0 right-0 left-0 rounded-[32px] object-fill"
          />
        </div>
      </div>
    </div>
  );
};
