import React, { useState } from "react";
import { navigateToProduct } from "../../../../App";
export default (props: any) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	const [input5, onChangeInput5] = useState('');
	const [input6, onChangeInput6] = useState('');

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
		<div className="items-start bg-white mx-auto">
			<div className="flex flex-col items-center bg-white">
				<div className="flex justify-between items-center self-stretch mt-[50px] mb-8 px-8">
					<div className="flex items-center gap-6">
						<div className="flex flex-col items-center ml-[1px]">
							<span className="text-[#1F2429] text-base font-bold" >
								{"Final Results"}
							</span>
						</div>
						<button className="flex flex-col items-center bg-[#626669] text-left w-[83px] py-1.5 rounded-[40px] border-0"
							onClick={() => alert("Pressed!")}>
							<span className="text-white text-sm font-bold" >
								{"94 points"}
							</span>
						</button>
					</div>
					<div className="flex items-center gap-6">
						<div className="flex items-center bg-[#E1E9FD]  py-1.5 rounded-[100000px]">
							<div className="flex flex-col items-center w-4 ml-3.5 mr-[11px]">
								<svg 
									className="w-4 h-4 text-[#006283]" 
									fill="currentColor" 
									viewBox="0 0 24 24"
								>
									<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
									<path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
								</svg>
							</div>
							<span className="text-[#1F2429] text-[15px] font-bold mr-[11px]" >
								{"09:55"}
							</span>
						</div>
						<div className="flex items-start bg-[#1F2429] py-[15px] rounded-[100000px]">
							<div className="flex flex-col items-center ml-5 mr-2.5">
								<span className="text-white text-[15px]" >
									{"Get My Plan"}
								</span>
							</div>
							<div className="flex flex-col items-center bg-white w-[55px] py-1 mr-4 rounded-[10px]">
								<span className="text-[#1F2429] text-xs" >
									{"20% Off"}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="self-stretch bg-[#E1E9FD] h-[1px] mb-8 px-8">
				</div>
				<div className="flex flex-col items-center self-stretch mb-8 px-8 gap-6">
					<span className="text-[#1F2429] text-2xl" >
						{"Hey Anna, here is your wellness profile revealed:"}
					</span>
					<button className="flex flex-col items-center self-stretch bg-[#FCFDFF] text-left py-6 px-[201px] gap-4 rounded-2xl border border-solid border-[#E1E9FD]"
						style={{
							boxShadow: "0px 12px 35px #3E5BB926"
						}}
						onClick={() => alert("Pressed!")}>
						<img
							src="/quiz-result-images/logo_blue_wreath.png"
							className="w-[124px] h-[70px] rounded-2xl object-fill"
						/>
						<span className="text-[#00A8E2] text-[32px]" >
							{"The Icon"}
						</span>
						<span className="text-[#1F2429] text-base" >
							{"You are the embodiment of wellness elegance."}
						</span>
					</button>
				</div>
				<div className="self-stretch bg-[#E1E9FD] h-[1px] mb-8 mx-[50px]">
				</div>
				<div className="flex flex-col items-start self-stretch mb-8 mx-[50px] gap-6">
					<span className="text-[#1F2429] text-xl w-[331px]" >
						{"Your Recommended Supplements forBetter Sleep & Anti-stress"}
					</span>
					<div className="flex items-start self-stretch gap-4">
						<div className="bg-white w-[33%] py-4 rounded-xl"
							style={{
								boxShadow: "0px 12px 35px #3E5BB926"
							}}>
							<div className="flex flex-col items-start self-stretch py-1 mx-4 gap-5">
								<div className="flex flex-col items-start ml-0.5">
									<img
										src="/quiz-result-images/jar_red_ch.png"
										className="w-[76px] h-[72px] object-fill"
									/>
								</div>
								<div className="flex flex-col self-stretch gap-3">
									<div className="flex flex-col items-start self-stretch gap-1.5">
										<span className="text-[#1F2429] text-base font-bold" >
											{"CH – Chromevital"}
										</span>
										<div className="flex items-center ml-[1px] gap-1.5">
											<span className="text-[#1F2429] text-[15px] font-bold" >
												{"🌿"}
											</span>
											<span className="text-[#1F2429] text-[15px]" >
												{"Guarana, Spirulina"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-center self-stretch">
										<span className="text-[#626669] text-[15px] w-[198px]" >
											{"Gives you focused alertness—without spikes or crashes and enhances stamina and recovery."}
										</span>
									</div>
								</div>
							</div>
                            <div className="flex flex-col items-end self-stretch">
                                <div className="flex flex-col items-start mr-4">
                                    <button
                                        aria-label="View product"
                                        onClick={() => navigateToProduct('CHROMEVITAL')}
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
						<div className="flex flex-col bg-white w-[33%] py-4 gap-5 rounded-xl"
							style={{
								boxShadow: "0px 12px 35px #3E5BB926"
							}}>
							<div className="flex flex-col items-start self-stretch py-1 mx-4 gap-5">
								<div className="flex flex-col items-start ml-0.5">
									<img
										src="/quiz-result-images/jar_pink_a.png"
										className="w-[76px] h-[72px] object-fill"
									/>
								</div>
								<div className="flex flex-col self-stretch gap-3">
									<div className="flex flex-col items-start self-stretch gap-1.5">
										<span className="text-[#1F2429] text-base font-bold" >
											{"A – Antiox"}
										</span>
										<div className="flex items-center ml-[1px] gap-1.5">
											<span className="text-[#1F2429] text-[15px] font-bold" >
												{"🌿"}
											</span>
											<span className="text-[#1F2429] text-[15px]" >
												{"Grape Seed, C, E, Zinc"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-center self-stretch">
										<span className="text-[#626669] text-[15px]" >
											{"Protects cells from damage, supports collagen, and brightens the skin from within."}
										</span>
									</div>
								</div>
							</div>
                            <div className="flex flex-col items-end self-stretch">
                                <div className="flex flex-col items-start mr-4">
                                    <button
                                        aria-label="View product"
                                        onClick={() => navigateToProduct('Antiox')}
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
						<div className="flex flex-col bg-white w-[33%] py-4 gap-10 rounded-xl"
							style={{
								boxShadow: "0px 12px 35px #3E5BB926"
							}}>
							<div className="flex flex-col items-start self-stretch py-1 mx-4 gap-5">
								<div className="flex flex-col items-start ml-0.5">
									<img
										src="/quiz-result-images/jar_purple_p.png"
										className="w-[76px] h-[72px] object-fill"
									/>
								</div>
								<div className="flex flex-col items-start self-stretch gap-3">
									<div className="flex flex-col items-start self-stretch gap-1.5">
										<span className="text-[#1F2429] text-base font-bold" >
											{"P – Power of Mind"}
										</span>
										<div className="flex items-center self-stretch mx-[1px] gap-1.5">
											<span className="text-[#1F2429] text-[15px] font-bold" >
												{"🌿"}
											</span>
											<span className="text-[#1F2429] text-[15px]" >
												{"Lavender, Melissa, Valerian"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start">
										<span className="text-[#626669] text-[15px] w-[152px]" >
											{"Soothes stress without sedating."}
										</span>
									</div>
								</div>
							</div>
                            <div className="flex flex-col items-end self-stretch">
                                <div className="flex flex-col items-start mr-4">
                                    <button
                                        aria-label="View product"
                                        onClick={() => navigateToProduct('POWER_OF_MIND')}
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
					</div>
				</div>
				<div className="self-stretch bg-[#E1E9FD] h-[1px] mb-8 mx-[50px]">
				</div>
				<div className="flex flex-col items-start self-stretch mb-8 mx-[50px] gap-6">
					<span className="text-[#1F2429] text-xl" >
						{"Expected Outcomes"}
					</span>
					<div className="flex items-start self-stretch gap-2.5">
						<div className="flex items-center bg-[#F0F6F7] w-[238px] py-4 rounded-xl">
							<div className="flex flex-col items-center w-6 ml-4 mr-3">
								<img
									src="/quiz-result-images/icon_blue_symbols.png"
									className="w-6 h-6 object-fill"
								/>
							</div>
							<input
								placeholder={"Increased energy focus"}
								value={input1}
								onChange={(event) => onChangeInput1(event.target.value)}
								className="flex-1 self-stretch text-[#1F2429] bg-transparent text-sm py-0.5 border-0"
							/>
						</div>
						<div className="flex items-center bg-[#F0F6F7] w-[238px] py-4 rounded-xl">
							<div className="flex flex-col items-center w-6 ml-4 mr-3">
								<img
									src="/quiz-result-images/icon_blue_symbols.png"
									className="w-6 h-6 object-fill"
								/>
							</div>
							<input
								placeholder={"Reduced inflammation"}
								value={input2}
								onChange={(event) => onChangeInput2(event.target.value)}
								className="flex-1 self-stretch text-[#1F2429] bg-transparent text-sm py-0.5 border-0"
							/>
						</div>
						<div className="flex items-center bg-[#F0F6F7] w-[238px] py-4 rounded-xl">
							<div className="flex flex-col items-center w-6 ml-4 mr-3">
								<img
									src="/quiz-result-images/icon_blue_symbols.png"
									className="w-6 h-6 object-fill"
								/>
							</div>
							<input
								placeholder={"Improved sleep quality"}
								value={input3}
								onChange={(event) => onChangeInput3(event.target.value)}
								className="flex-1 self-stretch text-[#1F2429] bg-transparent text-sm py-0.5 border-0"
							/>
						</div>
					</div>
				</div>
				<div className="self-stretch bg-[#E1E9FD] h-[1px] mb-8 mx-[50px]">
				</div>
				<div className="flex items-start self-stretch mb-8 mx-[50px] gap-4">
					<div className="flex flex-col items-start w-[278px] gap-4">
						<img
							src="/quiz-result-images/icon_blue_symbols.png"
							className="w-8 h-8 object-fill"
						/>
						<div className="flex flex-col items-start self-stretch gap-2">
							<span className="text-[#1F2429] text-[15px] font-bold" >
								{"Nutrients Extraction"}
							</span>
							<span className="text-[#1F2429] text-2xl" >
								{"Cryogenic Method"}
							</span>
							<span className="text-[#1F2429] text-sm w-[270px]" >
								{"We use cryogenic extraction to preserve the full strength and purity of every ingredient.\nNo heat damage\nMaximum nutrient retention\nEnhanced bioavailability\nCleaner, purer extracts\nBetter absorption. Better results."}
							</span>
						</div>
					</div>
					<img
						src="/quiz-result-images/photo_woman_laptop.png"
						className="w-[440px] h-64 object-fill"
					/>
				</div>
				<div className="self-stretch bg-[#E1E9FD] h-[1px] mb-8 mx-[50px]">
				</div>
				<div className="flex flex-col items-start mb-8 mx-[236px] gap-10">
					<div className="flex items-start bg-[#1F2429] w-[362px] py-[15px] rounded-[100000px]">
						<div className="flex flex-1 flex-col items-start ml-5 mr-3">
							<span className="text-white text-[15px]" >
								{"Get Full Package Now"}
							</span>
						</div>
						<div className="flex flex-col items-center bg-white w-[55px] py-1 mr-4 rounded-[10px]">
							<span className="text-[#1F2429] text-xs" >
								{"20% Off"}
							</span>
						</div>
					</div>
					<div className="flex items-start mx-[17px] gap-4">
						<button className="flex flex-col items-center bg-white text-left w-[70px] py-[15px] rounded-md border border-solid border-[#E1E9FD]"
							onClick={() => alert("Pressed!")}>
							<img
								src="/quiz-result-images/logo_visa.png"
								className="w-auto h-auto object-fill"
							/>
						</button>
						<button className="flex flex-col items-center bg-white text-left w-[70px] py-2.5 rounded-md border border-solid border-[#E1E9FD]"
							onClick={() => alert("Pressed!")}>
							<img
								src="/quiz-result-images/logo_mastercard.png"
								className="w-[45px] h-[27px] object-fill"
							/>
						</button>
						<button className="flex flex-col items-center bg-white text-left w-[70px] py-[15px] rounded-md border border-solid border-[#E1E9FD]"
							onClick={() => alert("Pressed!")}>
							<img
								src="/quiz-result-images/logo_gpay.png"
								className="w-[49px] h-5 object-fill"
							/>
						</button>
						<button className="flex flex-col items-center bg-white text-left w-[70px] py-[15px] rounded-md border border-solid border-[#E1E9FD]"
							onClick={() => alert("Pressed!")}>
							<img
								src="/quiz-result-images/logo_applepay.png"
								className="w-auto h-auto object-fill"
							/>
						</button>
					</div>
				</div>
				<div className="self-stretch bg-[#E1E9FD] h-[1px] mb-8 mx-[50px]">
				</div>
				<div className="flex flex-col items-start self-stretch mb-8 mx-[50px] gap-4">
					<span className="text-[#1F2429] text-[15px] font-bold" >
						{"Our Mission"}
					</span>
					<span className="text-[#1F2429] text-2xl" >
						{"Taking care of people's beauty and health"}
					</span>
					<span className="text-[#1F2429] text-sm w-[732px]" >
						{"Project V creates innovative products helping millions of people strengthen their health and improve their quality of life on a daily basis. By using the healing powers of nature, new research and technologies, we aim to give everyone the chance to be healthy and happy."}
					</span>
					<button className="flex flex-col items-start bg-transparent text-left py-3 px-[23px] rounded-[100000px] border border-solid border-[#1F2429]"
						onClick={() => alert("Pressed!")}>
						<span className="text-[#1F2429] text-xs font-bold" >
							{"Learn More"}
						</span>
					</button>
				</div>
				<div className="self-stretch bg-[#E1E9FD] h-[1px] mb-8 mx-[50px]">
				</div>
				<div className="flex items-start self-stretch mb-8 mx-[50px] gap-2.5">
					<div className="flex items-center bg-[#F0F6F7] w-[220px] py-4 rounded-xl">
						<div className="flex flex-col items-center w-[9px] ml-5 mr-[19px]">
							<span className="text-[#00A8E2] text-xl" >
								{"2"}
							</span>
						</div>
						<input
							placeholder={"Millions of clients "}
							value={input4}
							onChange={(event) => onChangeInput4(event.target.value)}
							className="flex-1 self-stretch text-[#1F2429] bg-transparent text-sm py-0.5 border-0"
						/>
					</div>
					<div className="flex items-center bg-[#F0F6F7] w-[274px] py-4 rounded-xl">
						<div className="flex flex-col items-center w-[19px] mx-3.5">
							<span className="text-[#00A8E2] text-xl" >
								{"19"}
							</span>
						</div>
						<input
							placeholder={"Countries where we're present"}
							value={input5}
							onChange={(event) => onChangeInput5(event.target.value)}
							className="flex-1 self-stretch text-[#1F2429] bg-transparent text-sm py-0.5 border-0"
						/>
					</div>
					<div className="flex items-center bg-[#F0F6F7] w-[220px] py-4 rounded-xl">
						<div className="flex flex-col items-center w-5 ml-3.5 mr-[13px]">
							<span className="text-[#00A8E2] text-xl" >
								{"48"}
							</span>
						</div>
						<input
							placeholder={"Unique projects"}
							value={input6}
							onChange={(event) => onChangeInput6(event.target.value)}
							className="flex-1 self-stretch text-[#1F2429] bg-transparent text-sm py-0.5 border-0"
						/>
					</div>
				</div>
				<div className="self-stretch bg-[#E1E9FD] h-[1px] mb-8 mx-[50px]">
				</div>
				<div className="flex flex-wrap justify-center items-center self-stretch mb-8 gap-2">
					<div className="flex justify-between items-center bg-white w-[45%] py-4 rounded-2xl border border-solid border-[#E1E9FD]">
						<div className="flex flex-col items-start w-[75px] ml-4 gap-2">
							<img
								src="/quiz-result-images/lady1.png"
								className="w-[60px] h-[60px] ml-[15px] object-fill"
							/>
							<span className="text-[#1F2429] text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis" >
								{"Mia Robinson"}
							</span>
						</div>
						<span className="text-[#1F2429] text-sm w-[227px] mr-[18px]" >
							{"Sleep quality improved and I wake up less groggy"}
						</span>
					</div>
					<div className="flex justify-between items-center bg-white w-[45%] py-4 rounded-2xl border border-solid border-[#E1E9FD]">
						<div className="flex flex-col items-start w-[75px] ml-4 gap-2">
							<img
								src="/quiz-result-images/lady2.png"
								className="w-[60px] h-[60px] ml-[15px] object-fill"
							/>
							<span className="text-[#1F2429] text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis" >
								{"Sarah Smith"}
							</span>
						</div>
						<span className="text-[#1F2429] text-sm w-[227px] mr-[18px]" >
							{"These supplements have helped me feel more balanced and energized throughout the day"}
						</span>
					</div>
					<div className="flex justify-between items-center bg-white w-[372px] py-4 rounded-2xl border border-solid border-[#E1E9FD]">
						<div className="flex flex-col items-start w-[75px] ml-4 gap-2">
							<img
								src="/quiz-result-images/lady3.png"
								className="w-[60px] h-[60px] ml-[15px] object-fill"
							/>
							<span className="text-[#1F2429] text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis" >
								{"Isabella Rossi"}
							</span>
						</div>
						<span className="text-[#1F2429] text-sm w-[227px] mr-[21px]" >
							{"Sleep tracker shows longer deep sleep windows."}
						</span>
					</div>
				</div>
				<div className="flex flex-col w-[90%] items-center pb-6 gap-3">
					<span className="text-[#1F2429] text-[32px]" >
						{"FAQ"}
					</span>
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
				<div className="flex items-start bg-[#1F2429] w-[362px] py-[15px] mb-[50px] mx-[236px] rounded-[100000px]">
					<div className="flex flex-1 flex-col items-start ml-5 mr-3">
						<span className="text-white text-[15px]" >
							{"Get Full Package Now"}
						</span>
					</div>
					<div className="flex flex-col items-center bg-white w-[55px] py-1 mr-4 rounded-[10px]">
						<span className="text-[#1F2429] text-xs" >
							{"20% Off"}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}