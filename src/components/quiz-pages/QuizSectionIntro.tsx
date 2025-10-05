import React, { useEffect, useState } from "react";
import { PersonalDetailsIntroProps } from "../../types/quiz";

export default function QuizSectionIntro({ onBegin, backgroundImageUrl, titleLines, bodyLines, buttonLabel }: PersonalDetailsIntroProps) {
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

	// Defaults ensure backward compatibility and allow fixed manual line breaks
	const effectiveBackground = backgroundImageUrl ?? "/women/yellow_woman.png";
	const effectiveTitleLines = titleLines ?? ["PERSONAL", "DETAILS"];
	const effectiveBodyLines = bodyLines ?? [
		"Let's start with a few quick",
		"details – to tailor your",
		"wellness wardrobe",
		"perfectly.",
	];
	const effectiveButtonLabel = buttonLabel ?? "Begin Survey";

	return (
		<div className="bg-white flex flex-col relative overflow-hidden min-h-screen">
			{/* Right image */}
			<div
				className={`absolute inset-y-0 right-0 w-[60%] z-100 pointer-events-none bg-no-repeat transition-all duration-1000 ease-out ${
					isImageVisible 
						? 'opacity-100 translate-x-0' 
						: 'opacity-0 translate-x-full'
				}`}
				style={{ 
					backgroundImage: `url('${effectiveBackground}')`, 
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
							{effectiveTitleLines.map((line, index) => (
								<h1 key={`title-${index}`} className={` text-4xl md:text-6xl text-[#1F2429] ${index === 0 ? 'pt-10' : ''}`}>
									{line}
								</h1>
							))}
							<div className="pb-6"></div>
							{effectiveBodyLines.map((line, index) => (
								<div key={`body-${index}`} className="w-full text-[14px] text-left">
									{line}
								</div>
							))}
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
											{effectiveButtonLabel}
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



