import React, { useState } from "react";
import { usePage } from "../../App";
import InfiniteScroller from '../../bloks/InfiniteScroller';
import ProductCarousel from "../../bloks/ProductCarousel";
import ExpertsCarousel from "../../bloks/ExpertsCarousel";
import IngredientsMarquee from "../../bloks/IngredientsMarquee";
import TestimonialsCarousel from "../../bloks/TestimonialsCarousel";
import { getTotalQuizSteps } from "../../config/quizConfig";
export default (props: any) => {
	const { setPage, showQuizProgressModalWithData } = usePage();
	const [openFAQ, setOpenFAQ] = useState<number | null>(null);
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);
	const [showStickyHeader, setShowStickyHeader] = useState(false);

	const handleTakeQuiz = () => {
		const savedAnswers = localStorage.getItem('quiz.answers');
		const savedStep = localStorage.getItem('quiz.currentStep');
		
		if (savedAnswers) {
			try {
				const answers = JSON.parse(savedAnswers);
				const currentStep = parseInt(savedStep || '0', 10);
				const totalSteps = getTotalQuizSteps();
				
				// Quiz is completed if:
				// 1. quizEndTime exists, OR
				// 2. currentStep is at the last step (quiz completed but step not saved properly)
				const isCompleted = !!answers.quizEndTime || currentStep >= totalSteps - 1;
				
				// Show modal with progress information
				showQuizProgressModalWithData({
					isCompleted,
					currentStep: isCompleted ? 0 : Math.min(currentStep, totalSteps - 1), // If completed, don't show step info
					totalSteps: totalSteps // Use actual total steps
				});
			} catch (error) {
				console.warn('Failed to parse saved quiz data:', error);
				// If parsing fails, start fresh
				setPage('quiz');
			}
		} else {
			// No saved progress, start fresh
			setPage('quiz');
		}
	};
	const videoRef = React.useRef<HTMLVideoElement>(null);
	const logosRef = React.useRef<HTMLDivElement>(null);

	// Отслеживание скролла для показа sticky панели (как на mobile/desktop)
	React.useEffect(() => {
		const handleScroll = () => {
			if (logosRef.current) {
				const logosRect = logosRef.current.getBoundingClientRect();
				const shouldShow = logosRect.bottom < 0;
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

	const toggleFAQ = (index: number) => {
		setOpenFAQ(openFAQ === index ? null : index);
	};
	return (
		<div className="flex flex-col bg-white w-full max-w-full overflow-x-hidden">
			{/* Фиксированная панель, появляющаяся при скролле */}
			{showStickyHeader && (
				<div className="fixed top-0 left-0 right-0 bg-white z-50 py-4 shadow-lg">
					<div className="flex justify-between items-center self-stretch mx-[50px]">
						<div className="flex items-center gap-6">
							<div className="flex flex-col items-center">
								<span className="text-[#1F2429] text-2xl font-bold">
									{"Project V"}
								</span>
							</div>
						</div>
						<div className="flex items-center gap-6 pr-4">
							<button className="flex items-start bg-[#00A8E2] py-[15px] px-8 rounded-[100000px] shrink-0"
								onClick={handleTakeQuiz}>
								<div className="flex flex-col items-center">
									<span className="text-white text-base font-bold whitespace-nowrap">
										{"Take Quiz"}
									</span>
								</div>
							</button>
						</div>
					</div>
				</div>
			)}

			<div className="flex flex-col items-start self-stretch bg-white w-full">
				<div className="flex flex-col items-start self-stretch bg-[url('/figma/main_woman.png')] bg-cover bg-center py-12">
					<div className="flex flex-col items-center pb-[1px] mb-24 ml-24">
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f712b188-06a5-4e83-a515-9fbd9128f837"}
							className="w-[148px] h-[37px] object-fill"
						/>
					</div>
					<div className="flex flex-col items-start self-stretch mx-24 gap-8">
						<div className="flex items-center">
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be319cdc-ab8e-4785-87a1-3ee8f1dd8cf0"}
								className="w-[81px] h-3 mr-1.5 object-fill"
							/>
							<span className="text-white text-lg font-bold mr-2.5" >
								{"4.8"}
							</span>
							<span className="text-white text-base" >
								{"Based on 5350+ verified reviews"}
							</span>
						</div>
						<span className="text-white text-[40px] font-bold w-[435px]" >
							{"Create Your Beautiful Life With Luxury Supplements"}
						</span>
						<div className="flex flex-col items-start self-stretch gap-4">
							<div className="flex items-center">
								<div className="flex shrink-0 items-center mr-[117px] gap-2">
									<img
										src={"/figma/94e953f50deca03e.png"}
										className="w-6 h-6 object-fill"
									/>
									<span className="text-white text-base font-bold" >
										{"Organic & Natural"}
									</span>
								</div>
								<img
									src={"/figma/afab011836e01f66.png"}
									className="w-6 h-6 mr-2 object-fill"
								/>
								<span className="text-white text-base font-bold" >
									{"Science-Led"}
								</span>
							</div>
							<div className="flex items-center">
								<div className="flex shrink-0 items-center mr-[117px] gap-2">
									<img
										src={"/figma/f86f706981f646e0.png"}
										className="w-6 h-6 object-fill"
									/>
									<span className="text-white text-base font-bold" >
										{"Personalized"}
									</span>
								</div>
								<img
									src={"/figma/5cad830aff5053ef.png"}
									className="w-6 h-6 mr-2 object-fill"
								/>
								<span className="text-white text-base font-bold" >
									{"20+ Years Trusted"}
								</span>
							</div>
						</div>
						<button className="flex flex-col items-start bg-[#00A8E2] text-left py-[15px] px-[79px] rounded-[1000px] border-0"
							onClick={handleTakeQuiz}>
							<span className="text-white text-base font-bold" >
								{"Take Quiz"}
							</span>
						</button>
					</div>
				</div>
				<div ref={logosRef} className="flex flex-col items-center self-stretch bg-[#1F2429] p-4 gap-4">
					<span className="text-white text-[25px] font-bold" >
						{"Featured In"}
					</span>
					<div className="flex justify-center items-start self-stretch px-2 gap-2">
						<img
							src={"/figma/678fd5b8c8e8f404.png"}
							className="w-[169px] h-[65px] object-contain"
						/>
						<img
							src={"/figma/743c33dfee8e2205.png"}
							className="w-[185px] h-[65px] object-contain"
						/>
						<img
							src={"/figma/fbcd16954bbbcbce.png"}
							className="w-[171px] h-[65px] object-contain"
						/>
						<img
							src={"/figma/lofficiel_logo.png"}
							style={{ filter: "invert(1)" }}
							className="w-[171px] h-[65px] object-contain"
						/>
					</div>
				</div>
				<div className="flex flex-col self-stretch py-24 gap-12">
					<div className="flex flex-col items-start self-stretch mx-24 gap-6">
						<span className="text-[#1F2429] text-[40px] font-bold text-center w-[575px]" >
							{"What Makes Our Supplements Unique"}
						</span>
						<span className="text-[#1F2429] text-xl text-center w-[561px]" >
							{"Designed for those who demand more from their wellness - Project V delivers curated, science-backed blends that simplify your routine and elevate how you feel, think, and live."}
						</span>
					</div>
					<div className="flex flex-col self-stretch mx-24 gap-[33px]">
						<img
							src={"/figma/c19897654eb13305.png"}
							className="w-full h-[581px] object-contain"
						/>
						<div className="flex flex-col self-stretch gap-16">
							<div className="flex items-center self-stretch px-2.5 mx-8 gap-[27px]">
								<img
									src={"/figma/5f669498c510aa1b.png"}
									className="w-[18px] h-10 object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-2">
									<span className="text-[#1F2429] text-2xl font-bold" >
										{"Cryogenic Technology"}
									</span>
									<span className="text-[#1F2429] text-lg" >
										{"Maximum preservation of active ingredients"}
									</span>
								</div>
							</div>
							<div className="flex items-center self-stretch mx-8">
								<img
									src={"/figma/33549dcc64e2e91f.png"}
									className="w-[27px] h-[39px] ml-1.5 mr-[22px] object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-2">
									<span className="text-[#1F2429] text-2xl font-bold" >
										{"Science-Driven Research"}
									</span>
									<span className="text-[#1F2429] text-lg" >
										{"Developed with expert nutritionists and neuroscientists"}
									</span>
								</div>
							</div>
							<div className="flex items-center self-stretch mx-8 gap-4">
								<img
									src={"/figma/e4c8e83e804460b0.png"}
									className="w-10 h-10 object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-2">
									<span className="text-[#1F2429] text-2xl font-bold" >
										{"Organic & Transparent"}
									</span>
									<span className="text-[#1F2429] text-lg" >
										{"Certified organic, no fillers, 100% ingredient clarity"}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<InfiniteScroller />
				<div className="flex flex-col self-stretch py-24 gap-12">
					<div className="flex flex-col items-center self-stretch mx-24 gap-6">
						<span className="text-[#1F2429] text-[40px] font-bold text-center" >
							{"Purely Natural & Organic"}
						</span>
						<span className="text-[#1F2429] text-xl text-center w-[564px]" >
							{"Organic ingredients, cryogenically extracted to preserve their natural power — delivering pure, potent nourishment that supports your body’s vitality, radiant skin, and lasting energy every day."}
						</span>
					</div>
					<img
						src={"/figma/products_boom.png"}
						className="w-full h-auto object-fill"
					/>
					<div className="flex flex-col self-stretch mx-24 gap-12">
						<div className="flex flex-col items-start self-stretch gap-12">
							<div className="flex items-start self-stretch gap-6">
								<div className="flex flex-col shrink-0 items-center py-2">
									<img
										src={"/figma/ecd9be8b7225319a.png"}
										className="w-[72px] h-[59px] object-fill"
									/>
								</div>
								<div className="flex flex-1 flex-col items-start gap-2.5">
									<span className="text-[#1F2429] text-2xl font-bold" >
										{"Grape Seed Extract"}
									</span>
									<span className="text-[#1F2429] text-lg" >
										{"Rich in antioxidants and proanthocyanidins, it supports heart health and helps protect cells from daily toxins and stress that can accelerate ageing."}
									</span>
								</div>
							</div>
							<div className="flex items-start self-stretch">
								<img
									src={"/figma/15e359dfd295e7d6.png"}
									className="w-[71px] h-[54px] my-[9px] ml-[1px] mr-[25px] object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-2.5">
									<span className="text-[#1F2429] text-2xl font-bold" >
										{"Wheat Lipid Extract"}
									</span>
									<span className="text-[#1F2429] text-lg" >
										{"Contains essential fatty acids and ceramides that deeply nourish skin, improve barrier function, and enhance moisture retention."}
									</span>
								</div>
							</div>
							<div className="flex items-start self-stretch gap-6">
								<div className="flex flex-col shrink-0 items-center py-4">
									<img
										src={"/figma/19761e27acf3df1b.png"}
										className="w-[72px] h-10 object-fill"
									/>
								</div>
								<div className="flex flex-1 flex-col items-start gap-2.5">
									<span className="text-[#1F2429] text-2xl font-bold" >
										{"Lavender Extract"}
									</span>
									<span className="text-[#1F2429] text-lg" >
										{"Known for its calming and anti-inflammatory properties, it helps reduce stress and supports restful sleep quality."}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<IngredientsMarquee />
				<div className="flex flex-col self-stretch py-24 gap-12">
					<div className="flex flex-col self-stretch bg-[#F6F6F6] py-[70px] mx-24 gap-10 rounded-2xl">
						<div className="flex flex-col items-start self-stretch ml-[72px] mr-[9px] gap-6">
							<span className="text-[#1F2429] text-[40px] font-bold w-[310px]" >
								{"Our Signature\nCryogenic Method"}
							</span>
							<span className="text-[#1F2429] text-xl" >
								{"Our cryogenic grinding process uses ultra-low temperatures and liquid nitrogen to protect delicate plant actives — keeping them intact, potent, and highly bioavailable. No oxidation, no nutrient loss."}
							</span>
						</div>
						<div className="relative self-stretch mx-[72px]">
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
								className="w-full h-[223px] rounded-2xl object-cover cursor-pointer"
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
					<div className="flex flex-col self-stretch mx-24 gap-6">
						<div className="flex items-center self-stretch py-6 px-4 gap-3 rounded-2xl border-2 border-solid border-[#00A8E2]">
							<img
								src={"/figma/3b03a5fc60fa457a.png"}
								className="w-8 h-8 rounded-2xl object-fill"
							/>
							<span className="text-[#1F2429] text-xl font-bold" >
								{"Maximum potency preserved"}
							</span>
						</div>
						<div className="flex items-center self-stretch py-6 px-4 gap-3 rounded-2xl border-2 border-solid border-[#00A8E2]">
							<img
								src={"/figma/5c9d7abe67806357.png"}
								className="w-8 h-8 rounded-2xl object-fill"
							/>
							<span className="text-[#1F2429] text-xl font-bold" >
								{"Zero additives, no compromise"}
							</span>
						</div>
						<div className="flex items-center self-stretch py-6 px-4 gap-3 rounded-2xl border-2 border-solid border-[#00A8E2]">
							<img
								src={"/figma/757cb68bfea10298.png"}
								className="w-8 h-8 rounded-2xl object-fill"
							/>
							<span className="text-[#1F2429] text-xl font-bold" >
								{"Oxidation resistant formula"}
							</span>
						</div>
						<div className="flex items-center self-stretch py-6 px-4 gap-3 rounded-2xl border-2 border-solid border-[#00A8E2]">
							<img
								src={"/figma/5238d67a15e0a22e.png"}
								className="w-8 h-8 rounded-2xl object-fill"
							/>
							<span className="text-[#1F2429] text-xl font-bold" >
								{"Visible & tangible results"}
							</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col self-stretch px-24 mb-24 gap-8">
					<div className="w-full flex items-center justify-center">
						<div className="w-full max-w-[600px] h-[600px] overflow-hidden rounded-none">
							<img
								src={"/figma/girl_mgr2.png"}
								className="w-full h-full object-contain"
								alt="How it works illustration"
							/>
						</div>
					</div>
					<div className="flex flex-col items-start self-stretch mx-[42px]">
						<span className="text-[#1F2429] text-[40px] font-bold mb-6" >
							{"How It Works"}
						</span>
						<ol className="w-full relative border-l-2 border-[#F6F6F6] space-y-12 pl-7">
							<li className="grid grid-cols-[auto,1fr] items-start gap-4">
								<div className="w-10 h-10 rounded-full bg-[#00A8E2] text-white flex items-center justify-center font-bold -ml-12">1</div>
								<div className="min-w-0">
									<h3 className="text-[#1F2429] text-2xl font-bold mb-2 leading-tight">Discover</h3>
									<p className="text-[#1F2429] text-lg leading-relaxed">Take the quiz to uncover exactly what your body needs</p>
								</div>
							</li>
							<li className="grid grid-cols-[auto,1fr] items-start gap-4">
								<div className="w-10 h-10 rounded-full bg-[#00A8E2] text-white flex items-center justify-center font-bold -ml-12">2</div>
								<div className="min-w-0">
									<h3 className="text-[#1F2429] text-2xl font-bold mb-2 leading-tight">Personalize</h3>
									<p className="text-[#1F2429] text-lg leading-relaxed">Receive a personalised selection of supplements tailored to you</p>
								</div>
							</li>
							<li className="grid grid-cols-[auto,1fr] items-start gap-4">
								<div className="w-10 h-10 rounded-full bg-[#00A8E2] text-white flex items-center justify-center font-bold -ml-12">3</div>
								<div className="min-w-0">
									<h3 className="text-[#1F2429] text-2xl font-bold mb-2 leading-tight">Begin</h3>
									<p className="text-[#1F2429] text-lg leading-relaxed">Receive your luxury formulations straight to your door - ready for your daily ritual</p>
								</div>
							</li>
							<li className="grid grid-cols-[auto,1fr] items-start gap-4">
								<div className="w-10 h-10 rounded-full bg-[#00A8E2] text-white flex items-center justify-center font-bold -ml-12">4</div>
								<div className="min-w-0">
									<h3 className="text-[#1F2429] text-2xl font-bold mb-2 leading-tight">Elevate</h3>
									<p className="text-[#1F2429] text-lg leading-relaxed">Experience the benefits of your tailored wellness journey every day</p>
								</div>
							</li>
						</ol>
						<button
							className="w-auto text-[#00A8E2] py-3 px-8 rounded-full border-2 border-solid border-gray-200 text-base hover:bg-white-600 mt-8 self-start"
							onClick={handleTakeQuiz}
						>
							Start Now
						</button>
					</div>
				</div>
				<span className="text-[#1F2429] text-[40px] font-bold mb-6 ml-24" >
					{"Discover Our Products"}
				</span>
				<span className="text-[#1F2429] text-xl mb-[47px] mx-24" >
					{"Our Classic Hit range provides daily care for the health of the body at the cellular level."}
				</span>
				<ProductCarousel />
				<div className="self-stretch">
					<div className="flex flex-col items-start self-stretch bg-[url('/figma/laboratory.png')] bg-cover bg-right pt-[366px] pb-20 gap-6">
						<span className="text-white text-[40px] font-bold w-[328px] ml-24" >
							{"Made In France.\nTrusted Worldwide."}
						</span>
						<span className="text-white text-xl mx-24" >
							{"Our manufacturing facility is located near the Bugatti plant in Strasbourg. Premium European manufacturing, backed by science and strict quality standards."}
						</span>
					</div>
					<div className="flex flex-col items-start self-stretch py-24">
						<img
							src={"/figma/64a3569f4c26fbb0.png"}
							className="w-[550px] h-[434px] mb-10 ml-24 object-fill"
						/>
						<span className="text-[#00A8E2] text-xl font-bold mb-[37px] ml-24" >
							{"TRENDING"}
						</span>
						<span className="text-[#1F2429] text-[40px] font-bold mb-4 ml-24" >
							{"V Hit – Best Seller Set"}
						</span>
						<span className="text-[#1F2429] text-xl mb-[37px] ml-24 mr-[77px]" >
							{"A stylish, vibrant, and incredibly advantageous set which includes 2 boxes of 27 Classic Hit products. These are the same Classic Hit hits — A, P, S, CH, M, D, SV, MGR, G."}
						</span>
						<div className="flex items-center mb-3 ml-24 gap-2">
							<img
								src={"/figma/766b04c549374e30.png"}
								className="w-6 h-6 object-fill"
							/>
							<span className="text-[#00A8E2] text-base font-bold" >
								{"Daily care for the health of the body at the cellular level"}
							</span>
						</div>
						<div className="flex items-center mb-3 ml-24 gap-2">
							<img
								src={"/figma/03b4056e901e0542.png"}
								className="w-6 h-6 object-fill"
							/>
							<span className="text-[#00A8E2] text-base font-bold" >
								{"Disease prevention and rapid cell recovery"}
							</span>
						</div>
						<div className="flex items-center mb-9 ml-24 gap-2">
							<img
								src={"/figma/a6d3ab9f9b3aa04f.png"}
								className="w-6 h-6 object-fill"
							/>
							<span className="text-[#00A8E2] text-base font-bold" >
								{"Wide range of comprehensive coverage across the body"}
							</span>
						</div>
						<button className="flex flex-col items-start bg-[#1F2429] text-left py-[15px] px-[79px] ml-24 rounded-[100000px] border-0"
							onClick={handleTakeQuiz}>
							<span className="text-white text-base font-bold" >
								{"Take Quiz"}
							</span>
						</button>
					</div>
				</div>
				<span className=" self-center text-center text-[#1F2429] text-[30px] font-bold mb-[20px]" >
					{"Real People. Real Results."}
				</span>
				<TestimonialsCarousel />

				<div className="flex flex-col items-start self-stretch bg-[url('/figma/fashion_week_desktop(black).png')] bg-cover bg-center pt-[442px] pb-[79px] mb-24 gap-6">
					<span className="text-white text-[40px] font-bold ml-12" >
						{"As Seen At Fashion Week"}
					</span>
					<span className="text-white text-xl ml-12 mr-[30%]" >
						{"Partnering with fashion insiders to bring you beauty-backed wellness that stands out - on and off the runway."}
					</span>
				</div>
				<ExpertsCarousel />
				<div className="flex flex-col self-stretch py-24">
					<span className="text-[#1F2429] text-[40px] font-bold text-center mb-6 mx-24" >
						{"Unlock More with Our App"}
					</span>
					<span className="text-[#1F2429] text-xl text-center mb-[47px] mx-24" >
						{"The Project V app is your gateway to rewards, VIP experiences, and extra benefits when you shop regularly."}
					</span>
					<div className="flex flex-col items-center self-stretch mb-4">
						<img
							src={"/figma/560179536f5737f3.png"}
							className="w-[25px] h-[30px] mt-[1px] mx-[3px] object-fill"
						/>
					</div>
					<div className="flex flex-col items-center self-stretch mb-8">
						<span className="text-[#1F2429] text-xl font-bold" >
							{"Unlock Exclusive Perks"}
						</span>
					</div>
					<div className="flex flex-col items-center self-stretch mb-4">
						<img
							src={"/figma/15d97e76849f2e4c.png"}
							className="w-8 h-8 object-fill"
						/>
					</div>
					<div className="flex flex-col items-center self-stretch mb-8">
						<span className="text-[#1F2429] text-xl font-bold" >
							{"Join Prize Draws"}
						</span>
					</div>
					<img
						src={"/figma/phones_combined.png"}
						className="self-stretch h-[496px] mb-[31px] mx-[164px] object-contain"
					/>
					<div className="flex flex-col items-center self-stretch mb-4">
						<img
							src={"/figma/186372fbdd01da60.png"}
							className="w-[23px] h-7 my-[1px] mx-1 object-fill"
						/>
					</div>
					<div className="flex flex-col items-center self-stretch mb-8">
						<span className="text-[#1F2429] text-xl font-bold" >
							{"Buy & Collect Packs"}
						</span>
					</div>
					<div className="flex flex-col items-center self-stretch mb-4">
						<img
							src={"/figma/c50986d9da265769.png"}
							className="w-8 h-8 object-fill"
						/>
					</div>
					<div className="flex flex-col items-center self-stretch">
						<span className="text-[#1F2429] text-xl font-bold" >
							{"Access VIP Events"}
						</span>
					</div>
				</div>
				{/* Boutique Block */}
				<div className="flex flex-col items-start self-stretch bg-[url('/figma/new_boutique.png')] bg-cover bg-center pt-[442px] pb-[79px] gap-6">
					<span className="text-white text-[40px] font-bold ml-12" >
						{"Visit Us At Our New Boutique"}
					</span>
					<span className="text-white text-xl ml-12 mr-[30%]" >
						{"Discover our curated collection at Kärntner Ring 10 in Vienna. Immerse yourself in an exclusive shopping experience unlike any other."}
					</span>
				</div>
				<div className="flex flex-col items-start self-stretch p-24 gap-[31px]">
					<span className="text-[#1F2429] text-[40px] font-bold w-[80%]" >
						{"Frequently Asked Questions"}
					</span>
					<div className="flex flex-col self-stretch gap-4">
						{faqData.map((faq, index) => (
							<button
								key={index}
								className={`flex flex-col self-stretch bg-[#FCFDFF] py-4 gap-3 rounded-2xl border border-solid border-[#E1E9FD] transition-all duration-300 ${openFAQ === index ? 'shadow-lg' : ''
									}`}
								onClick={() => toggleFAQ(index)}
							>
								<div className="flex items-start self-stretch mx-4">
									<span className="flex-1 text-[#1F2429] text-lg font-bold text-left">
										{faq.question}
									</span>
									<img
										src={openFAQ === index ? "/figma/db76ec4308574fad.png" : "/figma/34c5e5563c063901.png"}
										className={`w-6 h-6 object-fill transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''
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

				{/* Instagram Section */}
				<span className="text-[#1F2429] text-xl font-bold mb-4 ml-24" >
					{"Follow Our Instagram"}
				</span>
				<span className="text-[#1F2429] text-xl mb-6 ml-24" >
					{"@projectv.international"}
				</span>
				<div className="flex flex-col items-center self-stretch">
					<div className="flex flex-col items-center w-full">
						<div className="flex items-center w-full">
							<img
								src={"/figma/143a6b1ae448f070.png"}
								className="w-1/2 h-[360px] object-cover object-top"
							/>
							<img
								src={"/figma/676e2e912a700476.png"}
								className="w-1/2 h-[360px] object-cover object-top"
							/>
						</div>
						<div className="flex items-center w-full">
							<img
								src={"/figma/47483c572e515bf9.png"}
								className="w-1/2 h-[360px] object-cover object-top"
							/>
							<img
								src={"/figma/yellow_orange_woman.png"}
								className="w-1/2 h-[360px] object-cover object-top"
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-start self-stretch bg-[#1F2429] py-16">
					<div className="flex items-start self-stretch mb-[3px] mx-24">
						<img
							src={"/figma/b9639cfa00443c94.png"}
							className="w-[87px] h-[87px] object-fill"
						/>
						<div className="flex-1 self-stretch">
						</div>
						<span className="text-white text-base w-[148px] mr-[26px]" >
							{"Siebenbrunnengasse\n46/2/40, 1050\nVienna, Austria"}
						</span>
						<span className="text-white text-base font-bold" >
							{"info@projectvint.com"}
						</span>
					</div>
					<div className="flex flex-col items-end self-stretch mb-6">
						<a
							href="https://www.sessia.com/privacy_policy_en.html"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white text-base font-bold mr-[98px] underline hover:text-[#00A8E2] transition-colors"
						>
							Privacy Policy Terms & Conditions
						</a>
					</div>
					<div className="flex flex-col items-end self-stretch mb-6">
						<div className="flex items-start mr-24 gap-6">
							<a
								href="https://www.facebook.com/projectv.global/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={"/figma/logo_facebook.png"}
									className="w-10 h-10 object-fill hover:opacity-80 transition-opacity cursor-pointer"
								/>
							</a>
							<a
								href="https://www.instagram.com/projectv.international/?hl=en"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={"/figma/logo_instagram.png"}
									className="w-10 h-10 object-fill hover:opacity-80 transition-opacity cursor-pointer"
								/>
							</a>
						</div>
					</div>
					<span className="text-white text-base ml-[231px]" >
						{"© 2025 Project V"}
					</span>
				</div>
			</div>
		</div>
	)
}