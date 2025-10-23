import React, { useState } from "react";
import { navigateToProduct, navigateToLanding } from "../../../../App";
import { RecommendationResult } from "../recommendationEngine";
import { 
  getProductImage, 
  getProductIngredients, 
  getProductDescription, 
  getWellnessProfile, 
  getWellnessDescription, 
  getExpectedOutcomes,
  getProductImage2,
  getQuizDuration,
  getOutcomeIcon
} from "../../../../utils/recommendationHelpers";
import TestimonialsCarousel from "../../../../bloks/TestimonialsCarousel";

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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const headerRef = React.useRef<HTMLDivElement>(null);

  // Запуск анимации фейерверка при загрузке компонента
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowFireworks(true);
    }, 300); // Небольшая задержка для плавного появления
    
    return () => clearTimeout(timer);
  }, []);

  // Отслеживание скролла для показа sticky панели
  React.useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const shouldShow = headerRect.top < 0;
        setShowStickyHeader(shouldShow);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Фиксированная панель, появляющаяся при скролле */}
      {showStickyHeader && (
        <div className="fixed top-0 left-0 right-0 bg-white z-50 py-3 shadow-lg">
          <div className="flex justify-between items-center self-stretch mx-5">
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <span className="text-[#1F2429] text-lg font-bold">
                  {"Final Results"}
                </span>
              </div>
              <button className="flex flex-col items-center bg-[#626669] text-left w-[83px] py-1.5 rounded-[40px] border-0">
                <span className="text-white text-sm font-bold">
                  {`${recommendations.effectiveness_score} points`}
                </span>
              </button>
            </div>
            <div className="flex items-center shrink-0">
              <button className="flex items-start bg-[#1F2429] py-[12px] px-3 rounded-[100000px]">
                <div className="flex flex-col items-center">
                  <span className="text-white text-sm whitespace-nowrap">
                    {"Email my profile"}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Голубой топ бар с фейерверком */}
      <div className="relative w-full h-[150px] bg-gradient-to-b from-[#00A8E2] to-[#006283] overflow-hidden">
        <img
          src="/quiz-result-images/background_confetti.png"
          className={`absolute inset-0 w-full h-full object-cover ${
            showFireworks ? 'fireworks-animation' : 'opacity-0'
          }`}
          alt="Celebration confetti"
        />
        {/* Дополнительные анимированные частицы */}
        <div className={`absolute inset-0 ${showFireworks ? 'fireworks-particles' : 'opacity-0'}`}>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-green-300 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-300 rounded-full"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-5">
          <div className={`text-center transition-all duration-1000 ${
            showFireworks ? 'fireworks-burst' : 'opacity-0 scale-0'
          }`}>
            <h1 className="text-white text-2xl font-bold mb-2">
              🎉 Congratulations! 🎉
            </h1>
            <p className="text-white/90 text-sm">
              Your personalized wellness profile is ready
            </p>
          </div>
        </div>
      </div>
      
      <div className="self-stretch bg-white max-w-full rounded-t-[32px] -mt-8 relative z-20 shadow-lg">
        <div className="flex flex-col self-stretch w-full max-w-full relative">
          <div className="flex flex-col w-full max-w-full self-stretch relative">
            <div className="flex flex-col items-start bg-white pt-5 w-full max-w-full pb-[42px] rounded-t-[32px]">
              <div className="flex justify-between items-center self-stretch mb-6 mx-5" ref={headerRef}>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <span className="text-[#1F2429] text-lg font-bold">
                      {"Final Results"}
                    </span>
                  </div>
                  <button className="flex flex-col items-center bg-[#626669] text-left w-[83px] py-1.5 rounded-[40px] border-0">
                    <span className="text-white text-sm font-bold">
                      {`${recommendations.effectiveness_score} points`}
                    </span>
                  </button>
                </div>
                
                <div className="flex items-center shrink-0">
                  <button className="flex items-start bg-[#1F2429] py-[12px] px-3 rounded-[100000px]">
                    <div className="flex flex-col items-center">
                      <span className="text-white text-sm whitespace-nowrap">
                        {"Email my profile"}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="bg-[#E1E9FD] w-[90%] h-[1px] mb-6 mx-5"></div>
              <div className="flex flex-col items-center w-[100%]">
                <span className="text-[#1F2429] text-2xl text-center w-[90%] max-w-full mb-6">
                  {`Hey ${answers.name || 'there'}, here is your wellness profile revealed:`}
                </span>
              </div>
              <div
                className="flex flex-col bg-[#FCFDFF] py-6 mb-10 mx-5 gap-4 w-[90%] rounded-2xl border border-solid border-[#E1E9FD]"
                style={{
                  boxShadow: "0px 12px 35px #3E5BB926",
                }}
              >
                <div className="flex flex-col items-center self-stretch">
                  <img
                    src="/quiz-result-images/logo_blue_wreath.png"
                    className="w-[124px] h-[70px] max-[360px]:w-[96px] max-[360px]:h-[54px] rounded-2xl object-fill"
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
                          className="w-[96px] h-[72px] max-[360px]:w-[80px] max-[360px]:h-[60px] object-fill"
                        />
                      </div>
                      <div className="flex flex-col shrink-0 w-[50%] items-start gap-3">
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
                        className="ml-auto flex items-center bg-[#1F2429] hover:bg-[#0f1215] transition-colors duration-200 rounded-[120000000px] p-2"
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
              <div className="flex flex-col items-center w-[100%] pb-6 gap-4">
                <span className="text-[#1F2429] mb-2 mx-5 text-[15px] font-bold self-start">
                  {"Expected Outcomes"}
                </span>
                 <div className="flex flex-col items-center w-[90%] gap-2">
                   {getExpectedOutcomes(recommendations).map((outcome, index) => (
                     <div key={index} className="flex items-center w-[100%] bg-[#F0F6F7] p-4 gap-3 rounded-xl">
                       <div className="flex flex-col shrink-0 items-start">
                         <div 
                           className="w-6 h-6"
                           dangerouslySetInnerHTML={{ __html: getOutcomeIcon(outcome.icon) }}
                         />
                       </div>
                       <div className="text-[#1F2429] bg-transparent text-sm w-[70%] py-0.5 border-0">
                         {outcome.text}
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
              <div className="bg-[#E1E9FD]  w-[90%]  h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col items-start mb-10 mx-5 gap-4">
                <img
                  src="/quiz-result-images/crio.png"
                  className="w-8 h-8 object-fill"
                />
                <div className="flex flex-col items-start gap-2">
                  <span className="text-[#1F2429] text-[15px] w-full font-bold self-start">
                    {"Nutrients Extraction"}
                  </span>
                  <span className="text-[#1F2429] w-full text-2xl self-start">
                    {"Cryogenic Method"}
                  </span>
                  <span className="text-[#1F2429] text-sm w-[100%]">
                    {
                      "We use cryogenic extraction to preserve the full strength and purity of every ingredient.\nNo heat damage\nMaximum nutrient retention\nEnhanced bioavailability\nCleaner, purer extracts\nBetter absorption. Better results."
                    }
                  </span>
                </div>
                <div className="w-[100%]">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
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
                      src={'/vidio/2..mp4'}
                      className="absolute inset-0 h-full w-full object-cover cursor-pointer"
                      loop
                      muted
                      playsInline
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
                      <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-0.5 rounded-full text-xs">
                        Tap video to pause
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-[#E1E9FD]  w-[90%] h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col w-[100%] mb-10 items-center gap-6">
                <div className="flex flex-col items-start w-[90%] gap-4">
                  <span className="text-[#1F2429] text-sm">
                    {"We'll email you your full wellness results — plus let you know when our brand-new online shop opens so you can order your personalized supplements."}
                  </span>
                  <button className="flex items-start bg-[#1F2429] py-[15px] px-4 rounded-[100000px]">
                    <div className="flex flex-col items-center">
                      <span className="text-white text-[15px]">
                        {"Email my profile"}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Закомментированная секция с методами оплаты - можно вернуть при необходимости
              <div className="flex flex-col w-[100%] mb-10 items-center gap-10">
                <div className="flex items-start bg-[#1F2429] py-[15px] w-[90%] justify-between px-5 rounded-[100000px]">
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
                      className="w-auto h-auto max-[360px]:w-[40px] object-fill"
                    />
                  </button>
                  <button
                    className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-[13px] rounded-md border border-solid border-[#E1E9FD]"
                    onClick={() => alert("Pressed!")}
                  >
                    <img
                      src="/quiz-result-images/logo_mastercard.png"
                      className="w-[45px] h-[27px] max-[360px]:w-[38px] max-[360px]:h-[22px] object-fill"
                    />
                  </button>
                  <button
                    className="flex flex-col shrink-0 items-start bg-white text-left py-[15px] px-2.5 rounded-md border border-solid border-[#E1E9FD]"
                    onClick={() => alert("Pressed!")}
                  >
                    <img
                      src="/quiz-result-images/logo_gpay.png"
                      className="w-[49px] h-5 max-[360px]:w-[42px] max-[360px]:h-[18px] object-fill"
                    />
                  </button>
                  <button
                    className="flex flex-col shrink-0 items-start bg-white text-left py-[15px] px-2.5 rounded-md border border-solid border-[#E1E9FD]"
                    onClick={() => alert("Pressed!")}
                  >
                    <img
                      src="/quiz-result-images/logo_applepay.png"
                      className="w-auto h-auto max-[360px]:w-[40px] object-fill"
                    />
                  </button>
                </div>
              </div>
              */}
              <div className="bg-[#E1E9FD] w-[90%] h-[1px] mb-10 mx-5"></div>
              <div className="flex flex-col items-start mb-10 mx-5 gap-4">
                <span className="text-[#1F2429] w-full text-[15px] font-bold self-start">
                  {"Our Mission"}
                </span>
                <span className="text-[#1F2429] text-2xl w-[100%] mr-10">
                  {"Taking care of people's beauty and health"}
                </span>
                <span className="text-[#1F2429] text-sm w-[100%]">
                  {
                    "Project V creates innovative products helping millions of people strengthen their health and improve their quality of life on a daily basis. By using the healing powers of nature, new research and technologies, we aim to give everyone the chance to be healthy and happy."
                  }
                </span>
                <button
                  className="flex flex-col items-start bg-transparent text-left py-3 px-[23px] rounded-[100000px] border border-solid border-[#1F2429]"
                  onClick={() => {
                    document.cookie = 'page=landing; path=/; max-age=31536000';
                    window.open(window.location.origin, '_blank');
                  }}
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
              {/* Карусель отзывов */}
					<div className="w-full max-w-full overflow-hidden pb-6">
						<div className="w-full max-w-full [&>div]:max-w-full [&>div]:mx-0 [&>div]:px-4 [&>div]:py-4">
							<TestimonialsCarousel />
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
