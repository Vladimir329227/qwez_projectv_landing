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
			<div className="md:hidden flex-1 flex items-center justify-center p-0 pb-24 relative">
				<div className="w-full max-w-4xl relative z-10">
					<div className="flex flex-col items-center">
						{/* Title with Animation */}
						<div className={`px-4 text-center mb-4 transition-all duration-700 ease-out ${
							isTitleVisible 
								? 'opacity-100 translate-y-0' 
								: 'opacity-0 translate-y-8'
						}`}>
							<h1 className="text-3xl font-bold text-[#1F2429] leading-tight">
								{fullText}
							</h1>
						</div>

						{/* Mobile Image - Full Width */}
						<div className="w-full mb-3">
							<img
								src="/figma/qwez_start_image.png"
								alt="Quiz Background"
								className="block w-full h-auto object-contain"
							/>
						</div>

						{/* Subtitle with Animation */}
						<p className={`px-4 text-base text-gray-600 mb-4 text-center max-w-md transition-all duration-700 ease-out ${
							isSubtitleVisible 
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
					<div className={`flex gap-4 transition-all duration-700 ease-out ${
						isButtonsVisible 
							? 'opacity-100 translate-y-0' 
							: 'opacity-0 translate-y-4'
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
		</>
	);
}
