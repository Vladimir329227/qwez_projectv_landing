import React, { useState } from "react";
import { usePage } from "../../App";
import ProductCarousel from "../../bloks/ProductCarousel";
import InfiniteScroller from "../../bloks/InfiniteScroller";
import ExpertsCarousel from "../../bloks/ExpertsCarousel";
import TestimonialsCarousel from "../../bloks/TestimonialsCarousel";
export default () => {
	const { setPage } = usePage();
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);
	const videoRef = React.useRef<HTMLVideoElement>(null);
	const reviews = [
		{
			logo: "/figma/feea408cc3f29c3b.png",
			text: "Sensational! Within 2 months, I got rid of these so-called \"warts\" on my hands that I had been fighting for 3 years! Project V's products are an investment in a long and healthy life!",
			name: "Martha",
			badgeIcon: "/figma/134c20f110cf0754.png",
			badgeText: "Verified Buyer",
		},
		{
			logo: "/figma/5a0939dcbe4fc1d7.png",
			text: "Product A helped me get rid of the onset of osteoarthritis. I take 6 capsules a day - 2 in the morning, 2 at noon and 2 in the evening. I also take P and N. You get to feel great. Nobody can tell me that it doesn't work. I RECOMMEND IT!",
			name: "Camilla",
			badgeIcon: "/figma/3f73070e378af6c0.png",
			badgeText: "Verified Buyer",
		},
		{
			logo: "/figma/01d4078010005bf7.png",
			text: "I got rid of small kidney stones. I also got rid of torsion in my legs and crusts. Now I have forgotten all about that pain. I will recommend these products to everyone.",
			name: "Martha",
			badgeIcon: "/figma/0b8090b4263ac852.png",
			badgeText: "Verified Buyer",
		},
	];
	const [reviewIndex, setReviewIndex] = useState(0);
	const [openFAQ, setOpenFAQ] = useState<number | null>(null);
	
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
	
	const prevReview = () => setReviewIndex((i) => (i - 1 + reviews.length) % reviews.length);
	const nextReview = () => setReviewIndex((i) => (i + 1) % reviews.length);
	
	const toggleFAQ = (index: number) => {
		setOpenFAQ(openFAQ === index ? null : index);
	};
	return (
		<div className="flex flex-col bg-white w-full max-w-full overflow-x-hidden">
			<div className="flex flex-col items-start self-stretch bg-white min-h-screen w-full">
				<div className="flex flex-col items-start self-stretch bg-[url('/figma/e6c250bfc01d12d8.png')] bg-cover bg-center pt-12 pb-[177px]">
					<div className="flex flex-col items-center p-[1px] mb-24 ml-24">
						<img
							src={"/figma/94b86f1bce187b0c.png"} 
							className="w-[187px] h-12 object-fill"
						/>
					</div>
					<div className="flex flex-col items-start ml-24 gap-8">
						<div className="flex items-center">
							<img
								src={"/figma/0d248eedc7b320e0.png"} 
								className="w-[81px] h-3 mr-1.5 object-fill"
							/>
							<span className="text-white text-lg font-bold mr-2.5" >
								{"4.8"}
							</span>
							<span className="text-white text-base" >
								{"Based on\u00A05350+\u00A0verified reviews"}
							</span>
						</div>
						<span className="text-white text-[56px] font-bold w-[532px]" >
							{"Create Your Beautiful Life With Luxury Supplements"}
						</span>
						<div className="flex flex-col items-start gap-4">
							<div className="flex items-center">
								<div className="flex shrink-0 items-center mr-4 gap-2">
									<img
										src={"/figma/994ff476709a16e9.png"} 
										className="w-6 h-6 object-fill"
									/>
									<span className="text-white text-base font-bold" >
										{"Organic & Natural"}
									</span>
								</div>
								<img
									src={"/figma/8a274a253b81162c.png"} 
									className="w-6 h-6 mr-2 object-fill"
								/>
								<span className="text-white text-base font-bold" >
									{"Science-Led"}
								</span>
							</div>
							<div className="flex items-center">
								<div className="flex shrink-0 items-center mr-4 gap-2">
									<img
										src={"/figma/6287be058f4ecb36.png"} 
										className="w-6 h-6 object-fill"
									/>
									<span className="text-white text-base font-bold" >
										{"Personalized"}
									</span>
								</div>
								<img
									src={"/figma/c0dc471189a7f2e4.png"} 
									className="w-6 h-6 mr-2 object-fill"
								/>
								<span className="text-white text-base font-bold" >
									{"20+ Years Trusted"}
								</span>
							</div>
						</div>
						<div className="flex gap-4">
							<button className="flex flex-col items-start bg-[#00A8E2] text-left py-[15px] px-[79px] rounded-[1000px] border-0"
								onClick={()=>setPage('quiz')}>
								<span className="text-white text-base font-bold" >
									{"Take Quiz"}
								</span>
							</button>
							<button className="flex flex-col items-start bg-[#FF6B35] text-left py-[15px] px-[79px] rounded-[1000px] border-0"
								onClick={()=>setPage('test')}>
								<span className="text-white text-base font-bold" >
									{"Test Engine"}
								</span>
							</button>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center self-stretch bg-[#1F2429] py-4 w-full overflow-x-auto">
					<div className="flex items-center gap-8 min-w-max">
						<span className="text-white text-[25px] font-bold" >
							{"Featured In"}
						</span>
						<img
							src={"/figma/de9daadbe258fcd5.png"} 
							className="w-[169px] h-[65px] object-fill"
						/>
						<img
							src={"/figma/5074e669b6d5859b.png"} 
							className="w-[185px] h-[65px] object-fill"
						/>
						<img
							src={"/figma/a97a902e66280595.png"} 
							className="w-[171px] h-[65px] object-fill"
						/>
						<img
							src={"/figma/2e8a96dc2da6e94c.png"} 
							className="w-[171px] h-[65px] object-fill"
						/>
					</div>
				</div>
				<div className="flex flex-col self-stretch py-24 mb-[33px]">
					<span className="text-[#1F2429] text-[40px] font-bold text-center mb-6 mx-[396px]" >
						{"What Makes Our Supplements Unique"}
					</span>
					<span className="text-[#1F2429] text-xl text-center mb-12 mx-[337px]" >
						{"Designed for those who demand more from their wellness - Project V delivers curated, science-backed blends that simplify your routine and elevate how you feel, think, and live."}
					</span>
					<div className="flex flex-col lg:flex-row items-center self-stretch mx-4 sm:mx-8 lg:mx-24 gap-8 lg:gap-16">
						{/* Основное изображение */}
						<div className="w-full lg:w-1/2 flex justify-center">
							<img
							src={"/figma/ad2a0e03b0aa1177.png"} 
							className="w-full max-w-[500px] lg:max-w-none object-contain"
							alt="Main product"
							/>
						</div>

						{/* Блок с иконками и текстом */}
						<div className="flex flex-col w-full lg:w-1/2 gap-8 lg:gap-16">
							{/* Первая группа: иконка + текст */}
							<div className="flex items-start gap-4 lg:gap-6 w-full">
								<div className="flex-shrink-0 flex items-center justify-center">
									<img
									src={"/figma/8db6b31549aa4a3d.png"} 
									className="w-[18px] h-10 object-contain"
									alt="Cryogenic Technology icon"
									/>
								</div>
								<div className="flex flex-col items-start w-full max-w-full">
									<h3 className="text-[#1F2429] text-xl lg:text-2xl font-bold mb-2 leading-tight">
									Cryogenic Technology
									</h3>
									<p className="text-[#1F2429] text-base lg:text-lg leading-relaxed">
									Maximum preservation of active ingredients
									</p>
								</div>
							</div>

							{/* Вторая группа: иконка + текст */}
							<div className="flex items-start gap-4 lg:gap-6 w-full">
								<div className="flex-shrink-0 flex items-center justify-center">
									<img
									src={"/figma/93e9f044d64676e6.png"} 
									className="w-[27px] h-[39px] object-contain"
									alt="Science-Driven Research icon"
									/>
								</div>
								<div className="flex flex-col items-start w-full max-w-full">
									<h3 className="text-[#1F2429] text-xl lg:text-2xl font-bold mb-2 leading-tight">
									Science-Driven Research
									</h3>
									<p className="text-[#1F2429] text-base lg:text-lg leading-relaxed">
									Developed with expert nutritionists and neuroscientists
									</p>
								</div>
							</div>

							{/* Третья группа: иконка + текст */}
							<div className="flex items-start gap-4 lg:gap-6 w-full">
								<div className="flex-shrink-0 flex items-center justify-center">
									<img
									src={"/figma/f48ae9570f9cd666.png"} 
									className="w-10 h-10 object-contain"
									alt="Organic & Transparent icon"
									/>
								</div>
								<div className="flex flex-col items-start w-full max-w-full">
									<h3 className="text-[#1F2429] text-xl lg:text-2xl font-bold mb-2 leading-tight">
									Organic & Transparent
									</h3>
									<p className="text-[#1F2429] text-base lg:text-lg leading-relaxed">
									Certified organic, no fillers, 100% ingredient clarity
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<InfiniteScroller />
				<div className="flex flex-col self-stretch py-24 mb-[1px]">
					<span className="text-[#1F2429] text-[40px] font-bold text-center mb-6 mx-[337px]" >
						{"Purely Natural & Organic"}
					</span>
					<span className="text-[#1F2429] text-xl text-center mb-12 mx-[337px]" >
						{"Organic ingredients, cryogenically extracted to preserve their natural power — delivering pure, potent nourishment that supports your body’s vitality, radiant skin, and lasting energy every day."}
					</span>
					<div className="flex items-center self-stretch mx-6 lg:mx-24 gap-6 lg:gap-12 flex-col lg:flex-row">
  <div className="flex flex-1 flex-col items-start gap-8 lg:gap-12 w-full max-w-full">
    {/* Первый блок */}
    <div className="flex items-start gap-4 lg:gap-6 w-full">
      <div className="flex-shrink-0 flex items-center justify-center">
        <img
          src={"/figma/5c4cbae6f4d2c6aa.png"} 
          className="w-12 h-10 lg:w-[72px] lg:h-[59px] object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2 lg:gap-2.5 min-w-0">
        <span className="text-[#1F2429] text-xl lg:text-2xl font-bold leading-tight">
          Grape Seed Extract
        </span>
        <span className="text-[#1F2429] text-base lg:text-lg leading-relaxed">
          Rich in antioxidants and proanthocyanidins, it supports heart health and helps protect cells from daily toxins and stress that can accelerate ageing.
        </span>
      </div>
    </div>

    {/* Второй блок */}
    <div className="flex items-start gap-4 lg:gap-6 w-full">
      <div className="flex-shrink-0 flex items-center justify-center">
        <img
          src={"/figma/2481f55913454a40.png"} 
          className="w-12 h-9 lg:w-[71px] lg:h-[54px] object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2 lg:gap-2.5 min-w-0">
        <span className="text-[#1F2429] text-xl lg:text-2xl font-bold leading-tight">
          Wheat Lipid Extract
        </span>
        <span className="text-[#1F2429] text-base lg:text-lg leading-relaxed">
          Contains essential fatty acids and ceramides that deeply nourish skin, improve barrier function, and enhance moisture retention.
        </span>
      </div>
    </div>

    {/* Третий блок */}
    <div className="flex items-start gap-4 lg:gap-6 w-full">
      <div className="flex-shrink-0 flex items-center justify-center">
        <img
          src={"/figma/42c9ab3ced15be74.png"} 
          className="w-12 h-8 lg:w-[72px] lg:h-10 object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2 lg:gap-2.5 min-w-0">
        <span className="text-[#1F2429] text-xl lg:text-2xl font-bold leading-tight">
          Lavender Extract
        </span>
        <span className="text-[#1F2429] text-base lg:text-lg leading-relaxed">
          Known for its calming and anti-inflammatory properties, it helps reduce stress and supports restful sleep quality.
        </span>
      </div>
    </div>

    {/* Кнопка */}
    <button 
      className="w-full sm:w-auto bg-[#1F2429] text-white py-3 px-8 lg:py-[15px] lg:px-[79px] rounded-full border-0 text-base font-bold hover:bg-gray-800 transition-colors self-start"
      onClick={() => setPage('quiz')}
    >
      Take Quiz
    </button>
  </div>

  {/* Изображение */}
  <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
  <img
  src={"/figma/1972b03e029398d7.png"} 
  className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:w-[581px] lg:h-[581px] object-contain"
  alt="Product illustration"
/>
  </div>
</div>
				</div>
				<img
					src={"/figma/5816bd1970893e9d.png"}
					className="w-full h-auto object-cover object-top"
				/>
				<div className="flex flex-col self-stretch py-24 gap-12">
					<div className="flex items-center self-stretch bg-[#F6F6F6] py-[70px] px-[72px] mx-24 gap-3 rounded-2xl">
						<div className="flex flex-1 flex-col items-start gap-6">
							<span className="text-[#1F2429] text-[40px] font-bold w-[310px]" >
								{"Our Signature\nCryogenic Method"}
							</span>
							<span className="text-[#1F2429] text-xl" >
								{"Our cryogenic grinding process uses ultra-low temperatures and liquid nitrogen to protect delicate plant actives — keeping them intact, potent, and highly bioavailable. No oxidation, no nutrient loss."}
							</span>
						</div>
						<div className="relative w-[569px] h-[293px]">
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
								src={"/vidio/2..mp4"}
								className="w-[569px] h-[293px] rounded-2xl object-cover cursor-pointer"
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
									className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-lg hover:scale-110 transition-all duration-300"
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8 5V19L19 12L8 5Z"
											fill="#00A8E2"
										/>
									</svg>
								</button>
							)}
							{isVideoPlaying && (
								<div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
									Click on the video to pause
								</div>
							)}
						</div>
					</div>
					<div className="flex flex-col items-center  gap-6">
						<div className="flex items-stretch gap-6 w-full max-w-[600px]">
							<button className="flex flex-1 items-center justify-center p-6 rounded-2xl border-2 border-solid border-[#00A8E2] hover:scale-105 transition-transform duration-300 text-center h-[140px] min-w-[280px]">
								<img
									src={"/figma/d76263ab341760a7.png"}
									className="w-8 h-8 mr-3 rounded-2xl object-fill flex-shrink-0"
								/>
								<span className="text-[#1F2429] text-base font-bold text-center leading-tight overflow-hidden">
									{"Maximum potency preserved"}
								</span>
							</button>
							<button className="flex flex-1 items-center justify-center p-6 rounded-2xl border-2 border-solid border-[#00A8E2] hover:scale-105 transition-transform duration-300 text-center h-[140px] min-w-[280px]"
								onClick={() => alert("Pressed!")}>
								<img
									src={"/figma/075b42d52c992dfd.png"}
									className="w-8 h-8 mr-3 rounded-2xl object-fill flex-shrink-0"
								/>
								<span className="text-[#1F2429] text-base font-bold text-center leading-tight overflow-hidden">
									{"Zero additives, no compromise"}
								</span>
							</button>
						</div>
						<div className="flex items-stretch gap-6 w-full max-w-[600px]">
							<button className="flex flex-1 items-center justify-center p-6 rounded-2xl border-2 border-solid border-[#00A8E2] hover:scale-105 transition-transform duration-300 text-center h-[140px] min-w-[280px]">
								<img
									src={"/figma/e62b432c6a4d396d.png"}
									className="w-8 h-8 mr-3 rounded-2xl object-fill flex-shrink-0"
								/>
								<span className="text-[#1F2429] text-base font-bold text-center leading-tight overflow-hidden">
									{"Oxidation resistant formula"}
								</span>
							</button>
							<button className="flex flex-1 items-center justify-center p-6 rounded-2xl border-2 border-solid border-[#00A8E2] hover:scale-105 transition-transform duration-300 text-center h-[140px] min-w-[280px]">
								<img
									src={"/figma/280fa4d4b0e06585.png"}
									className="w-8 h-8 mr-3 rounded-2xl object-fill flex-shrink-0"
								/>
								<span className="text-[#1F2429] text-base font-bold text-center leading-tight overflow-hidden">
									{"Visible & tangible results"}
								</span>
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row items-center self-stretch mb-12 lg:mb-24 mx-4 sm:mx-8 lg:mx-16 xl:mx-[181px] gap-8 lg:gap-16">
					{/* Изображение */}
					<div className="w-full lg:w-1/2 flex justify-center">
						<img
						src={"/figma/bafdd2e3ed2907ca.png"} 
						className="w-full max-w-[400px] lg:max-w-[523px] h-auto lg:h-[833px] object-contain"
						alt="How it works illustration"
						/>
					</div>

					{/* Текстовый блок */}
					<div className="flex flex-1 flex-col items-start w-full max-w-full">
						<h2 className="text-[#1F2429] text-3xl lg:text-[40px] font-bold mb-6 lg:mb-8 leading-tight">
						How It Works
						</h2>
						
						<div className="flex items-start pl-4 lg:pl-[19px] mb-6 lg:mb-[31px] gap-6 lg:gap-[51px] w-full">
							{/* Вертикальная линия с цифрами */}
							<div className="flex flex-col shrink-0 items-center relative mt-5">
								<div className="flex flex-col items-center relative">
									<div className="bg-[#F6F6F6] w-0.5 h-[280px] lg:h-[336px]">
									</div>
									<span className="text-white text-lg lg:text-[22px] absolute top-[75px] lg:top-[95px] left-[-16px] lg:left-[-19px]" >
										2
									</span>
									<span className="text-white text-lg lg:text-[22px] absolute bottom-[65px] lg:bottom-[85px] left-[-16px] lg:left-[-19px]" >
										3
									</span>
									<span className="text-white text-lg lg:text-[22px] absolute bottom-[-25px] lg:bottom-[-30px] left-[-16px] lg:left-[-19px]" >
										4
									</span>
								</div>
								<span className="text-white text-lg lg:text-[22px] absolute top-[-15px] lg:top-[-20px] left-[-16px] lg:left-[-19px]" >
								1
								</span>
							</div>

							{/* Текст шагов */}
							<div className="flex flex-col items-start w-full max-w-full">
								<div className="mb-6 lg:mb-8 w-full">
									<h3 className="text-[#1F2429] text-xl lg:text-2xl font-bold mb-2 lg:mb-2.5 leading-tight">
										Discover
									</h3>
									<p className="text-[#1F2429] text-base lg:text-lg leading-relaxed">
										Take the quiz to uncover exactly what your body needs
									</p>
								</div>

								<div className="mb-6 lg:mb-8 w-full">
									<h3 className="text-[#1F2429] text-xl lg:text-2xl font-bold mb-2 lg:mb-2.5 leading-tight">
										Personalize
									</h3>
									<p className="text-[#1F2429] text-base lg:text-lg leading-relaxed">
										Receive a personalised selection of supplements tailored to you
									</p>
								</div>

								<div className="mb-6 lg:mb-8 w-full">
									<h3 className="text-[#1F2429] text-xl lg:text-2xl font-bold mb-2 lg:mb-2.5 leading-tight">
										Begin
									</h3>
									<p className="text-[#1F2429] text-base lg:text-lg leading-relaxed">
										Receive your luxury formulations straight to your door - ready for your daily ritual
									</p>
								</div>

								<div className="w-full">
									<h3 className="text-[#1F2429] text-xl lg:text-2xl font-bold mb-2 lg:mb-2.5 leading-tight">
										Elevate
									</h3>
									<p className="text-[#1F2429] text-base lg:text-lg leading-relaxed">
										Take the quiz to uncover exactly what your body needs
									</p>
								</div>
							</div>
						</div>

						{/* Кнопка */}
					<button 
					className="w-full sm:w-auto bg-[#1F2429] text-white py-3 px-8 lg:py-[15px] lg:px-[79px] rounded-full border-0 text-base font-bold hover:bg-gray-800 transition-colors"
					onClick={() => setPage('quiz')}
					>
						Take Quiz
						</button>
					</div>
				</div>
				<span className="text-[#1F2429] text-[40px] font-bold mb-6 ml-24" >
					{"Discover Our Products"}
				</span>
				<span className="text-[#1F2429] text-xl ml-24" >
					{"Our Classic Hit range provides daily care for the health of the body at the cellular level."}
				</span>
				<ProductCarousel/>
				<div className="self-stretch">
					<div className="flex flex-col items-start self-stretch bg-[url('/figma/3efb4492240092ed.png')] bg-cover bg-center pt-[366px] pb-20 gap-6">
						<span className="text-white text-[40px] font-bold w-[328px] ml-24" >
							{"Made In France.\nTrusted Worldwide."}
						</span>
						<span className="text-white text-xl w-[485px] ml-24" >
							{"Our manufacturing facility is located near the Bugatti plant in Strasbourg. Premium European manufacturing, backed by science and strict quality standards."}
						</span>
					</div>
					<div className="flex items-center self-stretch p-24 gap-10">
						<div className="flex justify-center w-[550px]">
							<img
								src={"/figma/8d83bebdc0acffe3.png"} 
								className="h-[434px] object-contain"
							/>
						</div>
						<div className="flex flex-1 flex-col items-start">
							<span className="text-[#00A8E2] text-xl font-bold mb-[37px]" >
								{"TRENDING"}
							</span>
							<span className="text-[#1F2429] text-[40px] font-bold mb-4" >
								{"V Hit – Best Seller Set"}
							</span>
							<span className="text-[#1F2429] text-xl mb-[37px]" >
								{"A stylish, vibrant, and incredibly advantageous set which includes 2 boxes of 27 Classic Hit products. These are the same Classic Hit hits — A, P, S, CH, M, D, SV, MGR, G."}
							</span>
							<div className="flex items-center mb-3 gap-2">
								<img
									src={"/figma/9baa6eb62c0c0772.png"} 
									className="w-6 h-6 object-fill"
								/>
								<span className="text-[#00A8E2] text-base font-bold" >
									{"Daily care for the health of the body at the cellular level"}
								</span>
							</div>
							<div className="flex items-center mb-3 gap-2">
								<img
									src={"/figma/137844a9ab68ebd1.png"} 
									className="w-6 h-6 object-fill"
								/>
								<span className="text-[#00A8E2] text-base font-bold" >
									{"Disease prevention and rapid cell recovery"}
								</span>
							</div>
							<div className="flex items-center mb-9 gap-2">
								<img
									src={"/figma/c0a52747ce6fde1a.png"} 
									className="w-6 h-6 object-fill"
								/>
								<span className="text-[#00A8E2] text-base font-bold" >
									{"Wide range of comprehensive coverage across the body"}
								</span>
							</div>
						<button className="flex flex-col items-start bg-[#1F2429] text-left py-[15px] px-[79px] rounded-[100000px] border-0"
							onClick={()=>setPage('quiz')}>
								<span className="text-white text-base font-bold" >
									{"Take Quiz"}
								</span>
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center self-stretch p-24 mb-[1px]">
					<span className="text-[#1F2429] text-[40px] font-bold mb-[47px]" >
						{"Real People. Real Results."}
					</span>
					<TestimonialsCarousel />
				</div>
				<div className="flex flex-col items-start self-stretch bg-[url('/figma/67a3cb8fe608ec15.png')] bg-cover bg-center pt-[442px] pb-[79px] mb-24 gap-6">
					<span className="text-white text-[40px] font-bold ml-24" >
						{"As Seen At Fashion Week"}
					</span>
					<span className="text-white text-xl w-[610px] ml-24" >
						{"Partnering with fashion insiders to bring you beauty-backed wellness that stands out - on and off the runway."}
					</span>
				</div>
				<ExpertsCarousel />
				<div className="flex flex-col self-stretch py-24">
					<span className="text-[#1F2429] text-[40px] font-bold text-center mb-6 mx-[415px]" >
						{"Unlock More with Our App"}
					</span>
					<span className="text-[#1F2429] text-xl text-center mb-[47px] mx-[415px]" >
						{"The Project V app is your gateway to rewards, VIP experiences, and extra benefits when you shop regularly."}
					</span>
					<div className="flex flex-col lg:flex-row items-center justify-center self-stretch mx-4 sm:mx-8 lg:mx-16 xl:mx-[222px] gap-8 lg:gap-12">
						{/* Левый блок */}
						<div className="flex flex-col items-center w-full lg:w-auto py-8 lg:py-[101px] px-4 lg:px-2.5 order-2 lg:order-1">
							<img
							src={"/figma/ee8b3ff1ba6822a8.png"} 
							className="w-[25px] h-[30px] mb-4 lg:mb-[17px] object-contain"
							alt="Unlock Exclusive Perks icon"
							/>
							<span className="text-[#1F2429] text-lg lg:text-xl font-bold mb-8 lg:mb-[150px] text-center">
							Unlock Exclusive Perks
							</span>
							<img
							src={"/figma/37938f0ba5060b8.png"} 
							className="w-8 h-8 mb-4 object-contain"
							alt="Join Prize Draws icon"
							/>
							<span className="text-[#1F2429] text-lg lg:text-xl font-bold text-center">
							Join Prize Draws
							</span>
						</div>

						{/* Центральное изображение */}
						<div className="flex justify-center w-full lg:w-auto order-1 lg:order-2">
							<img
							src={"/figma/9d98b22bd710ccb0.png"} 
							className="w-full max-w-[300px] sm:max-w-[400px] lg:w-[440px] lg:h-[496px] object-contain"
							alt="Main product"
							/>
						</div>

						{/* Правый блок */}
						<div className="flex flex-col items-center w-full lg:w-auto py-8 lg:py-[101px] px-4 lg:px-[25px] order-3">
							<img
							src={"/figma/288b39a3d70ca508.png"} 
							className="w-[23px] h-7 mb-4 lg:mb-[17px] object-contain"
							alt="Buy & Collect Packs icon"
							/>
							<span className="text-[#1F2429] text-lg lg:text-xl font-bold text-center mb-8 lg:mb-[150px]">
							Buy & Collect Packs
							</span>
							<img
							src={"/figma/e2900e8c0ee89004.png"} 
							className="w-8 h-8 mb-4 object-contain"
							alt="Access VIP Events icon"
							/>
							<span className="text-[#1F2429] text-lg lg:text-xl font-bold text-center">
							Access VIP Events
							</span>
						</div>
					</div>
				</div>
				<span className="text-[#1F2429] text-xl font-bold mb-1.5 ml-24" >
					{"Follow Our Instagram"}
				</span>
				<span className="text-[#1F2429] text-xl mb-6 ml-24" >
					{"@projectv.international"}
				</span>
				<div className="flex flex-col items-start self-stretch">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
						<img
							src={"/figma/73d452b089408908.png"} 
							className="w-full h-[360px] object-cover"
						/>
						<img
							src={"/figma/6134f6cf57b4290b.png"} 
							className="w-full h-[360px] object-cover"
						/>
						<img
							src={"/figma/4bc3f966fe7f4523.png"} 
							className="w-full h-[360px] object-cover"
						/>
						<img
							src={"/figma/11dd909319c2ad2e.png"} 
							className="w-full h-[360px] object-cover"
						/>
					</div>
					<div className="flex items-start self-stretch p-24">
						<span className="text-[#1F2429] text-[40px] font-bold w-[294px] mr-[98px]" >
							{"Frequently Asked Questions"}
						</span>
						<div className="flex flex-1 flex-col gap-4">
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
				</div>
				<div className="flex flex-col items-start self-stretch bg-[#1F2429] py-16 w-full px-4 sm:px-6 lg:px-24">
					<div className="flex flex-col lg:flex-row items-start lg:items-center self-stretch mb-6 w-full gap-4">
						<img
							src={"/figma/b83cda6121040e84.png"} 
							className="w-[87px] h-[87px] object-fill flex-shrink-0"
						/>
						<div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 flex-1 justify-end">
							<span className="text-white text-base" >
								{"Siebenbrunnengasse\n46/2/40, 1050\nVienna, Austria"}
							</span>
							<span className="text-white text-base font-bold" >
								{"info@projectvint.com"}
							</span>
							<span className="text-white text-base font-bold" >
								{"Privacy Policy Terms & Conditions"}
							</span>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between self-stretch mb-6 w-full gap-4">
						<div className="flex items-center gap-6">
							<img
								src={"/figma/9fc19f9778f0a6a4.png"} 
								className="w-10 h-10 object-fill"
							/>
							<img
								src={"/figma/8e6dd44eb9eb84dc.png"} 
								className="w-10 h-10 object-fill"
							/>
							<img
								src={"/figma/bbcc4d81cec4dbc5.png"} 
								className="w-10 h-10 object-fill"
							/>
							<img
								src={"/figma/42530d79f7854fbc.png"} 
								className="w-10 h-10 object-fill"
							/>
						</div>
						<span className="text-white text-base" >
							{"© 2025 Project V"}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}