import React from "react";
import { QuizStartPageProps } from "../../../../types/quiz";

interface QuizStartMobileProps extends QuizStartPageProps {
	isTitleVisible: boolean;
	isSubtitleVisible: boolean;
	isButtonsVisible: boolean;
	fullText: string;
	subtitleFullText: string;
}

export default function QuizStartMobile({
	onNext,
	onPrevious,
	isTitleVisible,
	isSubtitleVisible,
	isButtonsVisible,
	fullText,
	subtitleFullText
}: QuizStartMobileProps) {
	return (
		<>
			{/* Mobile Layout */}
			<div className="md:hidden  grid-rows-1 ">
				<div className="w-full max-w-4xl relative z-10">
					<div className="grid grid-rows-[auto_1fr_auto] min-h-[100vh] justify-items-center pb-24">
					{/* Title with Animation */}
					<div className={`px-4 text-center mb-4 transition-all duration-700 ease-out ${isTitleVisible
								? 'opacity-100 translate-y-0'
								: 'opacity-0 translate-y-8'
						}`}>
						<h1 className="text-4xl font-bold text-[#1F2429] leading-tight">
								{fullText}
						</h1>
						</div>

					{/* Mobile Image */}
					<div className="w-full h-full flex items-center justify-center">
						<div className="relative w-full h-[60vh] mb-4 overflow-hidden">
							<img
								src="/figma/quiz_start2.png"
								alt="Quiz Background"
								className="absolute inset-0 w-full h-full object-cover object-center z-0"
							/>
							{/* Gradient overlays top and bottom */}
							<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
							<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
						</div>
					</div>

						{/* Subtitle with Animation */}
					<p className={`px-4 text-lg text-gray-600 mb-6 text-center max-w-md transition-all duration-700 ease-out ${isSubtitleVisible
								? 'opacity-100 translate-y-0'
								: 'opacity-0 translate-y-8'
							}`}>
							{subtitleFullText}
						</p>
					</div>
				</div>
			</div>

			{/* Mobile fixed bottom actions */}
			<div className="md:hidden fixed bottom-0 inset-x-0 z-20 bg-white/95 backdrop-blur border-gray-200">
				<div className="mx-auto w-full max-w-md px-4 py-3">
					<div className={`flex gap-4 transition-all duration-700 ease-out ${isButtonsVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-4'
						}`}>
						<button
							onClick={onPrevious}
							className="flex-1 bg-white text-[#1F2429] text-lg border-2 border-[#1F2429] py-3 rounded-full hover:bg-gray-50 transition-colors"
						>
							Previous
						</button>
						<button
							onClick={onNext}
							className="flex-1 bg-[#1F2429] text-white text-lg py-3 rounded-full hover:bg-gray-800 transition-colors"
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
