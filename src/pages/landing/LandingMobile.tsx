import React, { useState } from "react";
import { usePage } from "../../App";
import InfiniteScroller from '../../bloks/InfiniteScroller';
import ProductCarousel from '../../bloks/ProductCarousel';
import ExpertsCarousel from '../../bloks/ExpertsCarousel';
import TestimonialsCarousel from "../../bloks/TestimonialsCarousel";
import IngredientsMarquee from "../../bloks/IngredientsMarquee";

export default (props: any) => {
	const { setPage } = usePage();
	const [openFAQ, setOpenFAQ] = useState<number | null>(null);
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);
	const [showStickyHeader, setShowStickyHeader] = useState(false);
	const videoRef = React.useRef<HTMLVideoElement>(null);
	const logosRef = React.useRef<HTMLDivElement>(null);

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

	// Отслеживание скролла для показа sticky панели
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
	return (
		<div className="flex flex-col bg-white w-full overflow-x-hidden">
			{/* Фиксированная панель, появляющаяся при скролле */}
			{showStickyHeader && (
				<div className="fixed top-0 left-0 right-0 bg-white z-50 py-3 shadow-lg">
					<div className="flex justify-between items-center self-stretch mx-5">
						<div className="flex items-center gap-3">
							<div className="flex flex-col items-center">
								<span className="text-[#1F2429] text-lg font-bold">
									{"Project V"}
								</span>
							</div>
						</div>
						<div className="flex items-center shrink-0">
							<button className="flex items-start bg-[#00A8E2] py-[12px] px-4 rounded-[100000px]"
								onClick={() => setPage('quiz')}>
								<div className="flex flex-col items-center">
									<span className="text-white text-sm font-bold whitespace-nowrap">
										{"Take Quiz"}
									</span>
								</div>
							</button>
						</div>
					</div>
				</div>
			)}

			<div className="flex flex-col items-start self-stretch bg-white w-full">
				<div className="flex flex-col items-start self-stretch bg-[url('/figma/a2faa45b0644ed10.jpg')] bg-cover bg-no-repeat bg-top py-12 gap-12">
					<div className="flex flex-col items-center pb-[1px] ml-4">
						<img
							src={"/figma/11b7ebdd11d07cee.png"}
							className="w-[148px] h-[37px] object-fill"
						/>
					</div>
					<div className="flex flex-col items-start self-stretch pb-[53px] mx-4 gap-8">
						<div className="flex flex-col items-start self-stretch gap-1.5">
							<div className="flex items-center gap-1.5">
								<img
									src={"/figma/e19da173ead7db46.png"}
									className="w-[81px] h-3 object-fill"
								/>
								<span className="text-white text-lg font-bold" >
									{"4.8"}
								</span>
							</div>
							<span className="text-white text-base" >
								{"Based on 5350+ verified reviews"}
							</span>
						</div>
						<span className="text-white text-4xl font-bold" >
							{"Create Your Beautiful Life With Luxury Supplements"}
						</span>
						<div className="flex flex-col items-start self-stretch gap-4">
							<div className="flex items-center">
								<div className="flex shrink-0 items-center mr-[78px] gap-2">
									<img
										src={"/figma/70273671b42d5263.png"}
										className="w-6 h-6 object-fill"
									/>
									<span className="text-white text-base font-bold" >
										{"Organic & Natural"}
									</span>
								</div>
								<img
									src={"/figma/dc194946ab9b8317.png"}
									className="w-6 h-6 mr-2 object-fill"
								/>
								<span className="text-white text-base font-bold" >
									{"Science-Led"}
								</span>
							</div>
							<div className="flex items-center">
								<div className="flex shrink-0 items-center mr-[78px] gap-2">
									<img
										src={"/figma/e5d028055f1d07bf.png"}
										className="w-6 h-6 object-fill"
									/>
									<span className="text-white text-base font-bold" >
										{"Personalized"}
									</span>
								</div>
								<img
									src={"/figma/f2803efedc58a173.png"}
									className="w-6 h-6 mr-2 object-fill"
								/>
								<span className="text-white text-base font-bold" >
									{"20+ Years Trusted"}
								</span>
							</div>
						</div>
						<button className="flex flex-col items-start bg-[#00A8E2] text-left py-[15px] px-[79px] rounded-[1000px] border-0"
							onClick={() => setPage('quiz')}>
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
					<div className="flex flex-col self-stretch gap-2">
						<div className="flex justify-center items-center self-stretch gap-3.5">
							<img
								src={"/figma/ee1722f3a0a285a7.png"}
								className="w-[169px] h-[65px] object-contain"
							/>
							<img
								src={"/figma/cd808859be6a63d5.png"}
								className="w-[169px] h-[65px] object-contain"
							/>
						</div>
						<div className="flex justify-center items-start self-stretch gap-[1px]">
							<img
								src={"/figma/dd6b5514f8bfe087.png"}
								className="w-[169px] h-[65px] object-contain"
							/>
							<img
								src={"/figma/lofficiel_logo.png"}
								style={{ filter: "invert(1)" }}
								className="w-[140px] h-[65px] object-contain"
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col self-stretch py-24 gap-12">
					<div className="flex flex-col self-stretch mx-4 gap-6">
						<span className="text-[#1F2429] text-[40px] font-bold text-center" >
							{"What Makes Our Supplements Unique"}
						</span>
						<span className="text-[#1F2429] text-xl text-center" >
							{"Designed for those who demand more from their wellness - Project V delivers curated, science-backed blends that simplify your routine and elevate how you feel, think, and live."}
						</span>
					</div>
					<div className="flex flex-col self-stretch mx-4 gap-8">
						<img
							src={"/figma/d1fab4d74722b30a.png"}
							className="w-full h-[343px] object-contain"
						/>
						<div className="flex flex-col self-stretch gap-8">
							<div className="flex items-center self-stretch">
								<img
									src={"/figma/91554677dc8f6485.png"}
									className="w-[18px] h-10 ml-2.5 mr-[26px] object-fill"
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
							<div className="flex items-center self-stretch">
								<img
									src={"/figma/3254d005bb60d847.png"}
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
							<div className="flex items-center self-stretch gap-4">
								<img
									src={"/figma/dccfe848e545b5a4.png"}
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

				{/* Purely Natural & Organic Section */}
				<div className="flex flex-col self-stretch py-24 gap-12">
					<div className="flex flex-col self-stretch mx-4 gap-6">
						<span className="text-[#1F2429] text-[40px] font-bold text-center" >
							{"Purely Natural & Organic"}
						</span>
						<span className="text-[#1F2429] text-xl text-center" >
							{"Organic ingredients, cryogenically extracted to preserve their natural power — delivering pure, potent nourishment that supports your body's vitality, radiant skin, and lasting energy every day."}
						</span>
					</div>
					<img
						src={"/figma/products_boom.png"}
						className="w-full h-auto object-fill"
					/>
					<div className="flex flex-col self-stretch mx-4 gap-12">
						<div className="flex flex-col self-stretch gap-12">
							<div className="flex items-start self-stretch gap-6">
								<div className="flex flex-col shrink-0 items-center py-2">
									<img
										src={"/figma/c47e25cf17e5711a.png"}
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
									src={"/figma/9e1fc3569d6eed45.png"}
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
										src={"/figma/21ff190292145e44.png"}
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

				{/* Cryogenic Method Section */}
				<div className="flex flex-col self-stretch py-24 gap-12">
					<div className="flex flex-col self-stretch bg-[#F6F6F6] py-4 mx-4 gap-6 rounded-2xl">
						<div className="flex flex-col items-start self-stretch mx-4 gap-6">
							<span className="text-[#1F2429] text-[40px] font-bold w-[233px]" >
								{"Our Signature\nCryogenic Method"}
							</span>
							<span className="text-[#1F2429] text-xl" >
								{"Our cryogenic grinding process uses ultra-low temperatures and liquid nitrogen to protect delicate plant actives — keeping them intact, potent, and highly bioavailable. No oxidation, no nutrient loss."}
							</span>
						</div>
						<div className="relative w-full max-w-[90%] h-[60%] mx-auto">
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
								className="w-full h-full rounded-2xl object-cover cursor-pointer"
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
					<div className="flex flex-col self-stretch mx-4 gap-6">
						<div className="flex items-center self-stretch py-6 px-4 gap-3 rounded-2xl border-2 border-solid border-[#00A8E2]">
							<img
								src={"/figma/0ba9161254124881.png"}
								className="w-8 h-8 rounded-2xl object-fill"
							/>
							<span className="text-[#1F2429] text-base font-bold" >
								{"Maximum potency preserved"}
							</span>
						</div>
						<div className="flex items-center self-stretch py-6 px-4 gap-3 rounded-2xl border-2 border-solid border-[#00A8E2]">
							<img
								src={"/figma/a5a6ef83231c1039.png"}
								className="w-8 h-8 rounded-2xl object-fill"
							/>
							<span className="text-[#1F2429] text-base font-bold" >
								{"Zero additives, no compromise"}
							</span>
						</div>
						<div className="flex items-center self-stretch py-6 px-4 gap-3 rounded-2xl border-2 border-solid border-[#00A8E2]">
							<img
								src={"/figma/804ba4248dba24ae.png"}
								className="w-8 h-8 rounded-2xl object-fill"
							/>
							<span className="text-[#1F2429] text-base font-bold" >
								{"Oxidation resistant formula"}
							</span>
						</div>
						<div className="flex items-center self-stretch py-6 px-4 gap-3 rounded-2xl border-2 border-solid border-[#00A8E2]">
							<img
								src={"/figma/04339f2dcaa693fc.png"}
								className="w-8 h-8 rounded-2xl object-fill"
							/>
							<span className="text-[#1F2429] text-base font-bold" >
								{"Visible & tangible results"}
							</span>
						</div>
					</div>
				</div>

				{/* How It Works Section */}
				<div className="flex flex-col self-stretch px-4 gap-8">
					<div className="w-full flex items-center justify-center">
						<div className="w-full max-w-[400px] h-[480px] overflow-hidden rounded-none">
							<img
								src={"/figma/girl_mgr2.png"}
								className="w-full h-full object-contain"
								alt="How it works illustration"
							/>
						</div>
					</div>
					<div className="flex flex-col items-start self-stretch pl-8">
						<span className="text-[#1F2429] text-[40px] font-bold mb-6" >
							{"How It Works"}
						</span>
						<ol className="w-full relative border-l-2 border-[#F6F6F6] space-y-10 pl-6">
							<li className="grid grid-cols-[auto,1fr] items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-[#00A8E2] text-white flex items-center justify-center font-bold -ml-10">1</div>
								<div className="min-w-0">
									<h3 className="text-[#1F2429] text-xl font-bold mb-2 leading-tight">Discover</h3>
									<p className="text-[#1F2429] text-base leading-relaxed">Take the quiz to uncover exactly what your body needs</p>
								</div>
							</li>
							<li className="grid grid-cols-[auto,1fr] items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-[#00A8E2] text-white flex items-center justify-center font-bold -ml-10">2</div>
								<div className="min-w-0">
									<h3 className="text-[#1F2429] text-xl font-bold mb-2 leading-tight">Personalize</h3>
									<p className="text-[#1F2429] text-base leading-relaxed">Receive a personalised selection of supplements tailored to you</p>
								</div>
							</li>
							<li className="grid grid-cols-[auto,1fr] items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-[#00A8E2] text-white flex items-center justify-center font-bold -ml-10">3</div>
								<div className="min-w-0">
									<h3 className="text-[#1F2429] text-xl font-bold mb-2 leading-tight">Begin</h3>
									<p className="text-[#1F2429] text-base leading-relaxed">Receive your luxury formulations straight to your door - ready for your daily ritual</p>
								</div>
							</li>
							<li className="grid grid-cols-[auto,1fr] items-start gap-4">
								<div className="w-8 h-8 rounded-full bg-[#00A8E2] text-white flex items-center justify-center font-bold -ml-10">4</div>
								<div className="min-w-0">
									<h3 className="text-[#1F2429] text-xl font-bold mb-2 leading-tight">Elevate</h3>
									<p className="text-[#1F2429] text-base leading-relaxed">Experience the benefits of your tailored wellness journey every day</p>
								</div>
							</li>
						</ol>
						<button
							className="w-full text-[#00A8E2] py-3 px-8 rounded-full border-2 border-solid border-gray-200 text-base hover:bg-white-600 mt-8 self-start"
							onClick={() => setPage('quiz')}
						>
							Start Now
						</button>
					</div>
				</div>

				{/* Discover Our Products Section */}
				<div className="flex flex-col items-start self-stretch py-10">
					<span className="text-[#1F2429] text-[40px] font-bold w-[217px] mb-6 ml-4" >
						{"Discover Our Products"}
					</span>
					<span className="text-[#1F2429] text-xl mb-[47px] mx-4" >
						{"Our Classic Hit range provides daily care for the health of the body at the cellular level."}
					</span>
					<ProductCarousel />
				</div>

				{/* Made In France Section */}
				<div className="self-stretch" style={{ marginBottom: '40px' }}>
					<div className="flex flex-col items-start self-stretch bg-[url('/figma/laboratory(mobile).png')] bg-cover bg-center pt-[200px] pb-20 gap-6">
						<span className="text-white text-[32px] font-bold w-full ml-4" >
							{"Made In France.\nTrusted Worldwide."}
						</span>
						<span className="text-white text-lg ml-4" >
							{"Our manufacturing facility is located near the Bugatti plant in Strasbourg. Premium European manufacturing, backed by science and strict quality standards."}
						</span>
					</div>
					<div className="flex flex-col items-start self-stretch p-4 gap-6">
						<div className="flex justify-center w-full">
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
								onClick={() => setPage('quiz')}>
								<span className="text-white text-base font-bold md-6" >
									{"Take Quiz"}
								</span>
							</button>
						</div>
					</div>
				</div>
				<span className=" self-center text-center text-[#1F2429] text-[20px] font-bold mb-[px]" >
						{"Real People. Real Results."}
					</span>		
				<TestimonialsCarousel />

				{/* Fashion Week Section */}
				<div className="flex flex-col items-start self-stretch bg-[url('/figma/fashion_week(black).png')] bg-contain bg-center pt-[80%] pb-[20px] mb-24 gap-6">
					<span className="text-white text-[30px] font-bold ml-4" >
						{"As Seen At Fashion Week"}
					</span>
					<span className="text-white text-lg ml-4" >
						{"Partnering with fashion insiders to bring you beauty-backed wellness that stands out - on and off the runway."}
					</span>
				</div>

				{/* Experts Carousel */}
				<ExpertsCarousel />

				{/* App Section */}
				<div className="flex flex-col self-stretch py-24">
					<span className="text-[#1F2429] text-[40px] font-bold text-center mb-6 mx-4" >
						{"Unlock More with Our App"}
					</span>
					<span className="text-[#1F2429] text-xl text-center mx-4" >
						{"The Project V app is your gateway to rewards, VIP experiences, and extra benefits when you shop regularly."}
					</span>
					<div className="flex flex-col items-center self-stretch mx-4 gap-2">
						<div className="flex flex-col shrink-0 items-center py-[30px] px-2.5">
							<div className="flex justify-center mb-[17px]">
								<img
									src={"/figma/ee8b3ff1ba6822a8.png"}
									className="w-[25px] h-[30px] object-contain"
								/>
							</div>
							<span className="text-[#1F2429] text-xl font-bold mb-[30px] text-center" >
								{"Unlock Exclusive Perks"}
							</span>
							<div className="flex justify-center mb-4">
								<img
									src={"/figma/37938f0dba5060b8.png"}
									className="w-8 h-8 object-contain"
								/>
							</div>
							<span className="text-[#1F2429] text-xl font-bold text-center" >
								{"Join Prize Draws"}
							</span>
						</div>
						<div className="flex justify-center w-full">
							<img
								src={"/figma/phones_combined.png"}
								className="h-[325px] object-contain"
							/>
						</div>
						<div className="flex flex-1 flex-col items-center py-[30px] px-[25px]">
							<div className="flex justify-center mb-[17px]">
								<img
									src={"/figma/288b39a3d70ca508.png"}
									className="w-[23px] h-7 object-contain"
								/>
							</div>
							<span className="text-[#1F2429] text-xl font-bold text-center mb-[30px]" >
								{"Buy & Collect Packs"}
							</span>
							<div className="flex justify-center mb-4">
								<img
									src={"/figma/e2900e8c0ee89004.png"}
									className="w-8 h-8 object-contain"
								/>
							</div>
							<span className="text-[#1F2429] text-xl font-bold text-center" >
								{"Access VIP Events"}
							</span>
						</div>
					</div>
				</div>

				{/* Boutique Block */}
				<div className="flex flex-col items-start self-stretch bg-[url('/figma/new_boutique.png')] bg-cover bg-center pt-[80%] pb-[20px] gap-6">
					<span className="text-white text-[30px] font-bold ml-4" >
						{"Visit Us At Our New Boutique"}
					</span>
					<span className="text-white text-lg ml-4" >
						{"Discover our curated collection at Kärntner Ring 10 in Vienna. Immerse yourself in an exclusive shopping experience unlike any other."}
					</span>
				</div>

				<div className="flex flex-col items-start self-stretch p-4">
					<span className="text-[#1F2429] text-[40px] font-bold w-[294px] mb-6" >
						{"Frequently Asked Questions"}
					</span>
					<div className="flex flex-1 flex-col gap-4">
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
										src={openFAQ === index ? "/figma/171705bc9ae38148.png" : "/figma/beac637ba3d38921.png"}
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
				<span className="text-[#1F2429] text-xl font-bold mb-1.5 ml-4" >
					{"Follow Our Instagram"}
				</span>
				<span className="text-[#1F2429] text-xl mb-6 ml-4" >
					{"@projectv.international"}
				</span>
				<div className="flex flex-col items-center self-stretch">
					<div className="flex flex-col items-center w-full">
						<div className="flex items-center w-full">
							<img
								src={"/figma/143a6b1ae448f070.png"}
								className="w-1/2 h-[180px] object-cover object-top"
							/>
							<img
								src={"/figma/676e2e912a700476.png"}
								className="w-1/2 h-[180px] object-cover object-top"
							/>
						</div>
						<div className="flex items-center w-full">
							<img
								src={"/figma/47483c572e515bf9.png"}
								className="w-1/2 h-[180px] object-cover object-top"
							/>
							<img
								src={"/figma/yellow_orange_woman.png"}
								className="w-1/2 h-[180px] object-cover object-top"
							/>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className="flex flex-col items-start self-stretch bg-[#1F2429] py-16 w-full px-4">
					<div className="flex flex-col items-start self-stretch mb-6 w-full gap-4">
						<img
							src={"/figma/b83cda6121040e84.png"}
							className="w-[87px] h-[87px] object-fill flex-shrink-0"
						/>
						<div className="flex flex-col items-start gap-4 flex-1">
							<span className="text-white text-base" >
								{"Siebenbrunnengasse\n46/2/40, 1050\nVienna, Austria"}
							</span>
							<span className="text-white text-base font-bold" >
								{"info@projectvint.com"}
							</span>
							<span className="text-white text-base font-bold" >
								<a
									href="https://www.sessia.com/privacy_policy_en.html"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white text-base font-bold mr-[98px] underline hover:text-[#00A8E2] transition-colors"
								>
									Privacy Policy Terms & Conditions
								</a>
							</span>
						</div>
					</div>



					<div className="flex flex-col items-start justify-between self-stretch mb-6 w-full gap-4">
						<div className="flex items-center gap-6">
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
						<span className="text-white text-base" >
							{"© 2025 Project V"}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}