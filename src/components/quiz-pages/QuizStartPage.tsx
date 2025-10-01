import React, { useState, useEffect } from "react";
import { QuizStartPageProps } from "../../types/quiz";

export default function QuizStartPage({ onNext, onPrevious }: QuizStartPageProps) {
	const [displayedText, setDisplayedText] = useState("");
	const [typingDone, setTypingDone] = useState(false);
	const fullText = "We know how to make that happen!";

	// Subtitle typing state
	const [subtitleDisplayed, setSubtitleDisplayed] = useState("");
	const [subtitleTypingDone, setSubtitleTypingDone] = useState(false);
	const subtitleFullText = "Life is 99 problems, but your fitness routine doesn't have to be one.";

	// Buttons animation state
	const [isButtonsVisible, setIsButtonsVisible] = useState(false);
	
	useEffect(() => {
		let index = 0;
		const timer = setInterval(() => {
			if (index < fullText.length) {
				setDisplayedText(fullText.slice(0, index + 1));
				index++;
			} else {
				setTypingDone(true);
				clearInterval(timer);
			}
		}, 50);
		
		return () => clearInterval(timer);
	}, []);

	// Start subtitle typing after title finishes
	useEffect(() => {
		if (!typingDone) return;
		let idx = 0;
		const subtitleTimer = setInterval(() => {
			if (idx < subtitleFullText.length) {
				setSubtitleDisplayed(subtitleFullText.slice(0, idx + 1));
				idx++;
			} else {
				setSubtitleTypingDone(true);
				clearInterval(subtitleTimer);
			}
		}, 30);

		return () => clearInterval(subtitleTimer);
	}, [typingDone]);

	// Start buttons animation after subtitle finishes
	useEffect(() => {
		if (!subtitleTypingDone) return;
		const buttonTimer = setTimeout(() => {
			setIsButtonsVisible(true);
		}, 500);

		return () => {
			clearTimeout(buttonTimer);
		};
	}, [subtitleTypingDone]);
	return (
		<div className="min-h-screen bg-white flex flex-col">
			{/* Main Content */}
			<div className="flex-1 flex items-center justify-center p-0 md:p-6 relative">
				{/* Desktop Background Image */}
				<div className="hidden md:block absolute inset-0 overflow-hidden">
					<img
						src="/figma/qwez_start_image.png"
						alt="Quiz Background"
						className="w-full h-full object-cover object-center"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-20"></div>
				</div>

				<div className="w-full max-w-4xl relative z-10">
					<div className="flex flex-col items-center md:items-start">
						{/* Title with Animation */}
						<div className="px-4 md:px-0 md:text-left mb-4">
							<h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-[#1F2429] leading-tight">
								{displayedText}
								{!typingDone && (<span className="animate-pulse">|</span>)}
							</h1>
						</div>

						{/* Mobile Image - Full Width */}
						<div className="md:hidden w-full mb-3">
							<img
								src="/figma/qwez_start_image.png"
								alt="Quiz Background"
								className="block w-full h-auto object-contain"
							/>
						</div>

						{/* Subtitle with Animation (starts after title typing) */}
						<p className="px-4 md:px-0 text-base md:text-xl text-gray-600 mb-4 md:mb-8 md:text-left max-w-md">
							{subtitleDisplayed}
							{typingDone && !subtitleTypingDone && (<span className="animate-pulse">|</span>)}
						</p>
					</div>
				</div>
			</div>

			{/* Fixed Bottom Buttons */}
			<div className="fixed bottom-0 left-0 right-0 bg-white border-gray-200 p-4">
				<div className="max-w-md mx-auto">
					<div className={`flex gap-4 transition-all duration-700 ease-out ${
						isButtonsVisible 
							? 'opacity-100 translate-y-0' 
							: 'opacity-0 translate-y-8'
					}`}>
						<button 
							onClick={onPrevious}
							className="flex-1 bg-white text-[#1F2429] border-2 border-[#1F2429] py-3 rounded-full hover:bg-gray-50 transition-colors"
						>
							Previous
						</button>
						<button 
							onClick={onNext}
							className="flex-1 bg-[#1F2429] text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}