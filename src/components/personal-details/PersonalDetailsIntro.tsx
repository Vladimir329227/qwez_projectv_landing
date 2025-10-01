import React, { useEffect, useState } from "react";
import { PersonalDetailsIntroProps } from "../../types/quiz";

export default function PersonalDetailsIntro({ onBegin }: PersonalDetailsIntroProps) {
	const [isImageVisible, setIsImageVisible] = useState(false);
	const [isButtonVisible, setIsButtonVisible] = useState(false);

	useEffect(() => {
		// Анимация изображения женщины - задержка 300ms
		const imageTimer = setTimeout(() => {
			setIsImageVisible(true);
		}, 300);

		// Анимация кнопки - задержка 800ms
		const buttonTimer = setTimeout(() => {
			setIsButtonVisible(true);
		}, 800);

		return () => {
			clearTimeout(imageTimer);
			clearTimeout(buttonTimer);
		};
	}, []);

	return (
		<div className="bg-white flex flex-col relative overflow-hidden min-h-screen">
			{/* Right image */}
			<div
				className={`absolute inset-y-0 right-0 w-1/2 pointer-events-none bg-no-repeat transition-all duration-1000 ease-out ${
					isImageVisible 
						? 'opacity-100 translate-x-0' 
						: 'opacity-0 translate-x-full'
				}`}
				style={{ 
					backgroundImage: "url('/women/yellow_woman.png')", 
					backgroundSize: "auto 100%",
					backgroundPosition: "right top"
				}}
			/>

			{/* Content */}
			<div className="flex flex-col h-screen relative z-10">
				{/* Text content */}
				<div className="flex justify-center p-6 flex-1">
					<div className="w-full max-w-3xl">
						<div className="text-left max-w-xl">
							<h1 className=" text-4xl md:text-6xl text-[#1F2429] pt-10">PERSONAL</h1> 
							<h1 className=" text-4xl md:text-6xl text-[#1F2429] pb-6">DETAILS</h1>
							<div className="w-full text-left">
								Let's start with a few quick							
							</div>
							<div className="w-full text-left">
								details – to tailor your 							
							</div>
							<div className="w-full text-left">
								wellness wardrobe 							
							</div>
							<div className="w-full text-left">
								perfectly.							
							</div>
						</div>
					</div>
				</div>
				
				{/* Button section - bottom on mobile, inline on desktop */}
				<div className="p-6 md:p-0 md:px-6">
					<div className="flex justify-center">
						<div className="w-full max-w-3xl">
							<div className="flex items-start gap-4">
								<div className="flex flex-col w-full ">
									<img src="/Logo/Black.svg" alt="Project V" className="w-[40%] h-[40%] pb-4" />
									<div className="items-center md:pb-8">
										<button
											onClick={onBegin}
											className={`mt-3 bg-[#1F2429] text-white px-6 py-3 rounded-full hover:bg-black/80 transition-all duration-700 ease-out w-full ${
												isButtonVisible 
													? 'opacity-100 translate-y-0' 
													: 'opacity-0 translate-y-8'
											}`}
										>
											Begin Survey
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}