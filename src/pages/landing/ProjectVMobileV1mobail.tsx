import React, { useState } from "react";
import { usePage } from "../../App";
import InfiniteScroller from '../../bloks/InfiniteScroller';
import ProductCarousel from '../../bloks/ProductCarousel';
import ExpertsCarousel from '../../bloks/ExpertsCarousel';
import TestimonialsCarousel from "../../bloks/TestimonialsCarousel";

export default (props: any) => {
	const { setPage } = usePage();
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
	
	const toggleFAQ = (index: number) => {
		setOpenFAQ(openFAQ === index ? null : index);
	};
	return (
		<div className="flex flex-col bg-white w-full overflow-x-hidden">
			<div className="flex flex-col items-start self-stretch bg-white w-full">
				<div className="flex flex-col items-start self-stretch bg-[url('/figma/a2faa45b0644ed10.png')] bg-cover bg-no-repeat bg-top py-12 gap-12">
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
							onClick={()=>setPage('quiz')}>
							<span className="text-white text-base font-bold" >
								{"Take Quiz"}
							</span>
						</button>
					</div>
				</div>
				<div className="flex flex-col items-center self-stretch bg-[#1F2429] p-4 gap-4">
					<span className="text-white text-[25px] font-bold" >
						{"Featured In"}
					</span>
					<div className="flex flex-col self-stretch gap-2">
						<div className="flex justify-center items-center self-stretch gap-3.5">
							<img
								src={"/figma/ee1722f3a0a285a7.png"} 
								className="w-[169px] h-[65px] object-fill"
							/>
							<img
								src={"/figma/cd808859be6a63d5.png"} 
								className="w-40 h-14 object-fill"
							/>
						</div>
						<div className="flex justify-center items-start self-stretch gap-[1px]">
							<img
								src={"/figma/dd6b5514f8bfe087.png"} 
								className="w-[171px] h-[65px] object-fill"
							/>
							<img
								src={"/figma/db52587b23f6402f.png"} 
								className="w-[171px] h-[65px] object-fill"
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
						<button className="flex flex-col items-center self-stretch bg-[#1F2429] text-left py-[15px] rounded-[100000px] border-0"
							onClick={()=>setPage('quiz')}>
								<span className="text-white text-base font-bold mx-1" >
									{"Take Quiz"}
								</span>
							</button>
						</div>
						<img
							src={"/figma/d82f013669b03529.png"} 
							className="w-full h-[345px] object-contain"
						/>
					</div>
				</div>
				<div className="flex justify-center items-center self-stretch bg-gray-100 h-[390px] overflow-hidden">
					<img
						src={"/figma/f436f53528c61b77.png"} 
						className="w-full h-full object-cover object-center"
					/>
				</div>

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
							<img
								src={"/figma/250b8f6ff327cfd4.png"}
								className="w-full h-full rounded-2xl object-fill"
							/>
							<img
								src={"/figma/image_run.png"}
								className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
								style={{ width: '10%', height: '20%' }}
							/>
						</div>
					</div>
					<div className="flex flex-col self-stretch mx-4 gap-6">
						<div className="flex items-center self-stretch py-6 px-4 gap-3 rounded-2xl border-2 border-solid border-[#00A8E2] hover:scale-105 transition-transform duration-300">
							<img
								src={"/figma/0ba9161254124881.png"} 
								className="w-8 h-8 rounded-2xl object-fill"
							/>
							<span className="text-[#1F2429] text-base font-bold" >
								{"Maximum potency preserved"}
							</span>
						</div>
						<div className="flex items-center self-stretch py-6 px-4 gap-3 rounded-2xl border-2 border-solid border-[#00A8E2] hover:scale-105 transition-transform duration-300">
							<img
								src={"/figma/a5a6ef83231c1039.png"} 
								className="w-8 h-8 rounded-2xl object-fill"
							/>
							<span className="text-[#1F2429] text-base font-bold" >
								{"Zero additives, no compromise"}
							</span>
						</div>
						<div className="flex items-center self-stretch py-6 px-4 gap-3 rounded-2xl border-2 border-solid border-[#00A8E2] hover:scale-105 transition-transform duration-300">
							<img
								src={"/figma/804ba4248dba24ae.png"} 
								className="w-8 h-8 rounded-2xl object-fill"
							/>
							<span className="text-[#1F2429] text-base font-bold" >
								{"Oxidation resistant formula"}
							</span>
						</div>
						<div className="flex items-center self-stretch py-6 px-4 gap-3 rounded-2xl border-2 border-solid border-[#00A8E2] hover:scale-105 transition-transform duration-300">
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
				<div className="flex flex-col self-stretch px-4 gap-[63px]">
					<img
						src={"/figma/7fbc7390574f293e.png"} 
						className="w-full h-[546px] object-contain"
					/>
					<div className="flex flex-col items-start self-stretch">
						<span className="text-[#1F2429] text-[40px] font-bold mb-8" >
							{"How It Works"}
						</span>
						<div className="flex items-start pl-[19px] mb-[15px] gap-[51px]">
							<div className="flex flex-col shrink-0 items-center relative mt-[21px]" style={{ height: '480px' }}>
								<div className="flex flex-col items-center relative">
									<div className="bg-[#F6F6F6] w-0.5 h-[480px]">
									</div>
									<span className="text-white text-[22px] absolute top-[94px] left-[-19px]" >
										{"2"}
									</span>
									<span className="text-white text-[22px] absolute bottom-[86px] left-[-19px]" >
										{"3"}
									</span>
									<span className="text-white text-[22px] absolute bottom-[-31px] left-[-19px]" >
										{"4"}
									</span>
								</div>
								<span className="text-white text-[22px] absolute top-[-21px] left-[-19px]" >
									{"1"}
								</span>
							</div>
							<div className="flex flex-col shrink-0 items-start">
								<span className="text-[#1F2429] text-2xl font-bold mb-2.5" >
									{"Discover"}
								</span>
								<span className="text-[#1F2429] text-lg w-[254px] mb-8" >
									{"Take the quiz to uncover exactly what your body needs"}
								</span>
								<span className="text-[#1F2429] text-2xl font-bold mb-2.5" >
									{"Personalize"}
								</span>
								<span className="text-[#1F2429] text-lg w-[258px] mb-8" >
									{"Receive a personalised selection of supplements tailored to you"}
								</span>
								<span className="text-[#1F2429] text-2xl font-bold mb-2.5" >
									{"Begin"}
								</span>
								<span className="text-[#1F2429] text-lg w-[259px] mb-8" >
									{"Receive your luxury formulations straight to your door - ready for your daily ritual"}
								</span>
								<span className="text-[#1F2429] text-2xl font-bold" >
									{"Elevate"}
								</span>
								<span className="text-[#1F2429] text-lg w-[254px]" >
									{"Take the quiz to uncover exactly what your body needs"}
								</span>
							</div>
						</div>
						<button className="flex flex-col items-center self-stretch bg-[#1F2429] text-left py-[15px] rounded-[100000px] border-0"
							onClick={()=>setPage('quiz')}>
							<span className="text-white text-base font-bold" >
								{"Take Quiz"}
							</span>
						</button>
					</div>
				</div>

				{/* Discover Our Products Section */}
				<div className="flex flex-col items-start self-stretch py-24">
					<span className="text-[#1F2429] text-[40px] font-bold w-[217px] mb-6 ml-4" >
						{"Discover Our Products"}
					</span>
					<span className="text-[#1F2429] text-xl mb-[47px] mx-4" >
						{"Our Classic Hit range provides daily care for the health of the body at the cellular level."}
					</span>
					<ProductCarousel />
				</div>

				{/* Made In France Section */}
				<div className="self-stretch" style={{     marginBottom: '40px' }}>
					<div className="flex flex-col items-start self-stretch bg-[url('/figma/3efb4492240092ed.png')] bg-cover bg-center pt-[200px] pb-20 gap-6">
						<span className="text-white text-[32px] font-bold w-full ml-4" >
							{"Made In France.\nTrusted Worldwide."}
						</span>
						<span className="text-white text-lg w-full ml-4" >
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
							onClick={()=>setPage('quiz')}>
								<span className="text-white text-base font-bold md-6" >
									{"Take Quiz"}
								</span>
							</button>
						</div>
					</div>
				</div>
				<TestimonialsCarousel />

				{/* Fashion Week Section */}
				<div className="flex flex-col items-start self-stretch bg-[url('/figma/67a3cb8fe608ec15.png')] bg-cover bg-center pt-[200px] pb-[79px] mb-24 gap-6">
					<span className="text-white text-[32px] font-bold ml-4" >
						{"As Seen At Fashion Week"}
					</span>
					<span className="text-white text-lg w-full ml-4" >
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
								src={"/figma/9d98b22bd710ccb0.png"} 
								className="h-[496px] object-contain"
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

				{/* Instagram Section */}
				<span className="text-[#1F2429] text-xl font-bold mb-1.5 ml-4" >
					{"Follow Our Instagram"}
				</span>
				<span className="text-[#1F2429] text-xl mb-6 ml-4" >
					{"@projectv.international"}
				</span>
				<div className="flex flex-col items-center self-stretch">
					<div className="flex flex-col items-center justify-center">
						<div className="flex items-center justify-center">
							<img
								src={"/figma/143a6b1ae448f070.png"} 
								className="w-[180px] h-[180px] object-fill"
							/>
							<img
								src={"/figma/676e2e912a700476.png"} 
								className="w-[180px] h-[180px] object-fill"
							/>
						</div>
						<div className="flex items-center justify-center">
							<img
								src={"/figma/47483c572e515bf9.png"} 
								className="w-[180px] h-[180px] object-fill"
							/>
							<img
								src={"/figma/75fd9ba5ba13a263.png"} 
								className="w-[180px] h-[180px] object-fill"
							/>
						</div>
					</div>
					<div className="flex flex-col items-start self-stretch p-4">
						<span className="text-[#1F2429] text-[40px] font-bold w-[294px] mb-6" >
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
								{"Privacy Policy Terms & Conditions"}
							</span>
						</div>
					</div>



					<div className="flex flex-col items-start justify-between self-stretch mb-6 w-full gap-4">
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