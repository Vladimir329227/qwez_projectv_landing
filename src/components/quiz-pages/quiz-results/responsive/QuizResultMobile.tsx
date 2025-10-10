import React, { useState } from "react";
import { navigateToProduct } from "../../../../App";
import { RecommendationResult } from "../recommendationEngine";
import { 
  getProductImage, 
  getProductIngredients, 
  getProductDescription, 
  getWellnessProfile, 
  getWellnessDescription, 
  getExpectedOutcomes,
  getProductImage2,
  getQuizDuration
} from "../../../../utils/recommendationHelpers";

interface QuizResultMobileProps {
  answers: Record<string, any>;
  recommendations: RecommendationResult;
}

export default function QuizResultMobile({ answers, recommendations }: QuizResultMobileProps) {
  const [input1, onChangeInput1] = useState("");
  const [input2, onChangeInput2] = useState("");
  const [input3, onChangeInput3] = useState("");
  const [input4, onChangeInput4] = useState("");
  const [input5, onChangeInput5] = useState("");
  const [input6, onChangeInput6] = useState("");
  const [input7, onChangeInput7] = useState("");

  const faqData = [
		{
			question: "What makes Project V different from regular supplements?",
			answer: "Our products are made in France using organic, plant-based ingredients and cryogenic technology for better absorption and real results—no fillers, no fluff. We use ultra-low temperature processing to preserve the natural potency of active ingredients, ensuring maximum bioavailability and effectiveness."
		},
		{
			question: "Are your supplements suitable for my age and lifestyle?",
			answer: "Yes! Our supplements are designed for adults of all ages and lifestyles. We offer personalized recommendations through our quiz system that takes into account your age, lifestyle, health goals, and dietary preferences. Whether you're a busy professional, athlete, or focused on healthy aging, we have formulations tailored to your specific needs."
		},
		{
			question: "How long does it take to see results?",
			answer: "Most customers begin to notice improvements within 2-4 weeks of consistent use. However, optimal results typically appear after 8-12 weeks as your body builds up nutrient stores and cellular function improves. Individual results may vary based on your starting point, lifestyle, and adherence to the recommended dosage."
		},
		{
			question: "Are the ingredients natural and safe?",
			answer: "Absolutely! All our ingredients are 100% natural, organic-certified, and rigorously tested for purity and safety. We use no artificial fillers, preservatives, or synthetic additives. Every ingredient is sourced from trusted suppliers and undergoes third-party testing to ensure the highest quality and safety standards."
		},
		{
			question: "Who creates your formulas?",
			answer: "Our formulas are developed by a team of expert nutritionists, neuroscientists, and medical professionals with decades of experience in functional medicine. Each formulation is backed by scientific research and clinical studies, ensuring that every product delivers measurable health benefits and supports your long-term wellness goals."
		}
	];
	
	const [openFAQ, setOpenFAQ] = useState<number | null>(null);
	
	const toggleFAQ = (index: number) => {
		setOpenFAQ(openFAQ === index ? null : index);
	};

  return (
    <div className="flex flex-col bg-white mx-auto overflow-x-hidden w-full max-w-[100vw]">
      <div className="self-stretch bg-white max-w-full rounded-[32px]">
        <div className="flex flex-col self-stretch w-full max-w-full relative">
          <div className="flex flex-col w-full max-w-full self-stretch relative">
            <div className="flex flex-col items-start bg-white pt-5 w-full max-w-full pb-[42px] rounded-3xl">
              <div className="flex justify-between items-center self-stretch mb-6 mx-5">
                <div className="flex shrink-0 items-center bg-[#E1E9FD] py-1.5 px-3.5 gap-[11px] rounded-[100000px]">
                  <div className="flex flex-col shrink-0 items-start">
                    <svg 
                      className="w-4 h-4 text-[#006283]" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                  </div>
                    <span className="text-[#1F2429] text-[15px]">{getQuizDuration(answers)}</span>
                </div>
                <button className="flex shrink-0 items-start bg-[#1F2429] py-[15px] px-5 gap-2.5 rounded-[100000px]"
                onClick={() => window.location.href = `tbank://transfer/card?number=2200 1234 5678 9012&amount=1000`}>
                  <div className="flex flex-col shrink-0 items-start">
                    <span className="text-white text-[15px]">
                      {"Get My Plan"}
                    </span>
                  </div>
                  <div className="flex flex-col shrink-0 items-start bg-white py-1 px-1.5 rounded-[10px]">
                    <span className="text-[#1F2429] text-xs">{"20% Off"}</span>
                  </div>
                </button>
              </div>
              <div className="bg-[#E1E9FD] w-[90%] h-[1px] mb-6 mx-5"></div>
              <span className="text-[#1F2429] text-2xl text-center w-[332px] mb-6 mx-[35px]">
                {`Hey ${answers.name || 'there'}, here is your wellness profile revealed:`}
              </span>
              <div
                className="flex flex-col bg-[#FCFDFF] py-6 mb-10 mx-5 gap-4 w-[90%] rounded-2xl border border-solid border-[#E1E9FD]"
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
                    {getWellnessProfile(recommendations)}
                  </span>
                </div>
                <div className="flex flex-col items-center self-stretch">
                  <span className="text-[#1F2429] text-base text-center w-[258px]">
                    {getWellnessDescription(recommendations)}
                  </span>
                </div>
              </div>
              <div className="bg-[#E1E9FD] w-[90%] h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col w-full max-w-full pb-6 gap-4">
                <span className="text-[#1F2429] mb-10 mx-5 items-start text-[15px]">
                  {`Your Recommended Supplements for ${recommendations.key_benefits.slice(0, 2).join(' & ')}`}
                </span>
                <div className="flex flex-col w-full items-center gap-2">
                  {recommendations.recommended_products.map((product, index) => (
                    <div
                      key={product.product_id}
                      className="flex items-center bg-white w-[90%] py-4 px-[20px] rounded-xl"
                      style={{
                        boxShadow: "0px 12px 35px #3E5BB926",
                      }}
                    >
                      <div className="flex flex-col shrink-0 items-start mr-[18px]">
                        <img
                          src={getProductImage2(product.product_id)}
                          className="w-[76px] h-[72px] object-fill"
                        />
                      </div>
                      <div className="flex flex-col shrink-0 w-[63%] items-start gap-3">
                        <div className="flex flex-col items-start gap-1.5">
                          <span className="text-[#1F2429] text-base font-bold">
                            {product.product_name}
                          </span>
                          <div className="flex items-center pl-[1px] gap-1.5">
                            <div className="flex flex-col shrink-0 items-start">
                              <span className="text-[#1F2429] text-[15px] font-bold">
                                {"🌿"}
                              </span>
                            </div>
                            <span className="text-[#1F2429] text-xs">
                              {getProductIngredients(product.product_id)}
                            </span>
                          </div>
                        </div>
                        <span className="text-[#626669] text-xs ">
                          {getProductDescription(product)}
                        </span>
                      </div>
                      <button
                        aria-label="View product"
                        onClick={() => navigateToProduct(product.product_id)}
                        className="flex items-center bg-[#1F2429] hover:bg-[#0f1215] transition-colors duration-200 rounded-[120000000px] p-2"
                      >
                        <img
                          src="/quiz-result-images/icon_arrow_up.png" 
                          className="ml-auto w-2 h-2 object-contain"
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#E1E9FD]  w-[90%] h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col items-start gap-4 pb-6">
                <span className="text-[#1F2429] w-full mb-2 mx-5 text-[15px] font-bold mr-[229px]">
                  {"Expected Outcomes"}
                </span>
                <div className="flex flex-col items-start w-[100%] gap-2">
                  {getExpectedOutcomes(recommendations).map((outcome, index) => (
                    <div key={index} className="flex items-center w-[90%] mx-5 bg-[#F0F6F7] p-4 gap-3 rounded-xl">
                      <div className="flex flex-col shrink-0 items-start">
                        <img
                          src="/quiz-result-images/icon_blue_symbols.png"
                          className="w-6 h-6 object-fill"
                        />
                      </div>
                      <div className="text-[#1F2429] bg-transparent text-sm w-[142px] py-0.5 border-0">
                        {outcome}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#E1E9FD]  w-[90%]  h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col items-start mb-10 mx-5 gap-4">
                <img
                  src="/quiz-result-images/icon_blue_symbols.png"
                  className="w-8 h-8 mr-[330px] object-fill"
                />
                <div className="flex flex-col items-start gap-2">
                  <span className="text-[#1F2429] text-[15px] w-full font-bold mr-[214px]">
                    {"Nutrients Extraction"}
                  </span>
                  <span className="text-[#1F2429] w-full text-2xl mr-[156px]">
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
              <div className="bg-[#E1E9FD]  w-[90%] h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col items-start mb-10 mx-5 gap-10">
                <div className="flex items-start bg-[#1F2429] py-[15px] w-[100%] justify-between px-5 rounded-[100000px]">
                  <div className="flex flex-col shrink-0 items-center">
                    <span className="text-white text-[15px]">
                      {"Get Full Package Now"}
                    </span>
                  </div>
                  <div className="flex flex-col shrink-0 items-start bg-white py-1 px-1.5 rounded-[10px]">
                    <span className="text-[#1F2429] text-xs">{"20% Off"}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
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
              <div className="bg-[#E1E9FD] w-[90%] h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col items-start mb-10 mx-5 gap-4">
                <span className="text-[#1F2429] w-full text-[15px] font-bold mr-[282px]">
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
              <div className="bg-[#E1E9FD] w-[90%] h-[1px] mx-5"></div>
              <div className="flex flex-col w-[100%] pt-6 pb-6 items-center gap-2">
                <div className="flex items-center w-[90%] bg-[#F0F6F7] py-4 px-5 gap-[19px] rounded-xl">
                  <div className="flex flex-col shrink-0 items-start">
                    <span className="text-[#00A8E2] text-xl">{"2"}</span>
                  </div>
                  <input
                    placeholder={"Millions of clients"}
                    value={input4}
                    onChange={(event) => onChangeInput4(event.target.value)}
                    className="text-[#1F2429] bg-transparent w-full text-sm py-0.5 border-0"
                  />
                </div>
                <div className="flex items-center w-[90%]  bg-[#F0F6F7] py-4 px-3.5 gap-3.5 rounded-xl">
                  <div className="flex flex-col shrink-0 items-start">
                    <span className="text-[#00A8E2] text-xl">{"19"}</span>
                  </div>
                  <input
                    placeholder={"Countries where we're present"}
                    value={input5}
                    onChange={(event) => onChangeInput5(event.target.value)}
                    className="text-[#1F2429] bg-transparent w-full text-sm py-0.5 border-0"
                  />
                </div>
                <div className="flex items-center w-[90%]  bg-[#F0F6F7] py-4 px-3.5 gap-[13px] rounded-xl">
                  <div className="flex flex-col shrink-0 items-start">
                    <span className="text-[#00A8E2] text-xl">{"48"}</span>
                  </div>
                  <input
                    placeholder={"Unique projects"}
                    value={input6}
                    onChange={(event) => onChangeInput6(event.target.value)}
                    className="text-[#1F2429] bg-transparent w-full text-sm py-0.5 border-0"
                  />
                </div>
              </div>
              {/* Бегущая лента с карточками */}
					<div className="flex animate-scroll pb-6">
						{/* Первый набор карточек */}
						<div className="flex flex-none gap-4 pr-4">
						<div className="flex justify-between items-center bg-white w-[300px] py-4 rounded-2xl border border-solid border-[#E1E9FD]">
							<div className="flex flex-col items-start w-[75px] ml-4 gap-2">
							<img
								src="/quiz-result-images/lady1.png"
								className="w-[60px] h-[60px] ml-[15px] object-fill"
							/>
							<span className="text-[#1F2429] text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis" >
								{"Mia Robinson"}
							</span>
							</div>
							<span className="text-[#1F2429] pl-2 text-sm flex-1 mr-[18px]" >
							{"Sleep quality improved and I wake up less groggy"}
							</span>
						</div>
						<div className="flex justify-between items-center bg-white w-[300px] py-4 rounded-2xl border border-solid border-[#E1E9FD]">
							<div className="flex flex-col items-start w-[75px] ml-4 gap-2">
							<img
								src="/quiz-result-images/lady2.png"
								className="w-[60px] h-[60px] ml-[15px] object-fill"
							/>
							<span className="text-[#1F2429] text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis" >
								{"Sarah Smith"}
							</span>
							</div>
							<span className="text-[#1F2429] pl-2 text-sm flex-1 mr-[18px]" >
							{"These supplements have helped me feel more balanced and energized throughout the day"}
							</span>
						</div>
						<div className="flex justify-between items-center bg-white w-[300px] py-4 rounded-2xl border border-solid border-[#E1E9FD]">
							<div className="flex flex-col items-start w-[75px] ml-4 gap-2">
							<img
								src="/quiz-result-images/lady3.png"
								className="w-[60px] h-[60px] ml-[15px] object-fill"
							/>
							<span className="text-[#1F2429] text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis" >
								{"Isabella Rossi"}
							</span>
							</div>
							<span className="text-[#1F2429] pl-2 text-sm flex-1 mr-[21px]" >
							{"Sleep tracker shows longer deep sleep windows."}
							</span>
						</div>
						</div>
						
						{/* Дублированный набор для бесшовной анимации */}
						<div className="flex flex-none gap-4 pr-4">
						<div className="flex justify-between items-center bg-white w-[300px] py-4 rounded-2xl border border-solid border-[#E1E9FD]">
							<div className="flex flex-col items-start w-[75px] ml-4 gap-2">
							<img
								src="/quiz-result-images/lady1.png"
								className="w-[60px] h-[60px] ml-[15px] object-fill"
							/>
							<span className="text-[#1F2429] text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis" >
								{"Mia Robinson"}
							</span>
							</div>
							<span className="text-[#1F2429] text-sm pl-2 flex-1 mr-[18px]" >
							{"Sleep quality improved and I wake up less groggy"}
							</span>
						</div>
						<div className="flex justify-between items-center bg-white w-[300px] py-4 rounded-2xl border border-solid border-[#E1E9FD]">
							<div className="flex flex-col items-start w-[75px] ml-4 gap-2">
							<img
								src="/quiz-result-images/lady2.png"
								className="w-[60px] h-[60px] ml-[15px] object-fill"
							/>
							<span className="text-[#1F2429] text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis" >
								{"Sarah Smith"}
							</span>
							</div>
							<span className="text-[#1F2429] pl-2 text-sm flex-1 mr-[18px]" >
							{"These supplements have helped me feel more balanced and energized throughout the day"}
							</span>
						</div>
						<div className="flex justify-between items-center bg-white w-[300px] py-4 rounded-2xl border border-solid border-[#E1E9FD]">
							<div className="flex flex-col items-start w-[75px] ml-4 gap-2">
							<img
								src="/quiz-result-images/lady3.png"
								className="w-[60px] h-[60px] ml-[15px] object-fill"
							/>
							<span className="text-[#1F2429] text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis" >
								{"Isabella Rossi"}
							</span>
							</div>
							<span className="text-[#1F2429] pl-2 text-sm flex-1 mr-[21px]" >
							{"Sleep tracker shows longer deep sleep windows."}
							</span>
						</div>
						</div>
					</div>
              <div className="bg-[#E1E9FD] w-[90%] h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col items-start mb-10 mx-5 gap-3">
                <div className="flex flex-col items-center self-stretch">
                  <span className="text-[#1F2429] text-[32px]">{"FAQ"}</span>
                </div>
                <div className="flex flex-1 flex-col w-[100%] gap-4">
                  {faqData.map((faq, index) => (
                    <button 
                      key={index}
                      className={`flex flex-col self-stretch bg-[#FCFDFF] py-4 gap-3 rounded-2xl border border-solid border-[#E1E9FD] transition-all duration-300 ${
                        openFAQ === index ? 'shadow-lg' : ''
                      }`}
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="flex items-start self-stretch mx-4">
                        <span className="flex-1 text-[#1F2429] text-lg font-bold text-left">
                          {faq.question}
                        </span>
                        <img
                          src={openFAQ === index ? "/figma/171705bc9ae38148.png" : "/figma/beac637ba3d38921.png"} 
                          className={`w-6 h-6 object-fill transition-transform duration-300 ${
                            openFAQ === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      {openFAQ === index && (
                        <div className="text-[#1F2429] text-base mx-4 text-left animate-fadeIn">
                          {faq.answer}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center self-stretch justify-center w-[100%]">
                <button className="flex items-start bg-[#1F2429] py-[15px] w-[90%] justify-between px-5 rounded-[100000px]">
                  <div className="flex flex-col shrink-0 items-center">
                    <span className="text-white text-[15px]">
                      {"Get Full Package Now"}
                    </span>
                  </div>
                  <div className="flex flex-col shrink-0 items-start bg-white py-1 px-1.5 rounded-[10px]">
                    <span className="text-[#1F2429] text-xs">{"20% Off"}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
