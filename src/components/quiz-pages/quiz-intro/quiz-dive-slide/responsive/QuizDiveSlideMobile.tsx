import React from "react";
import { QuizStartPageProps } from "../../../../../types/quiz";

interface QuizDiveSlideMobileProps extends QuizStartPageProps {
	isTitleVisible: boolean;
	isSubtitleVisible: boolean;
	isButtonsVisible: boolean;
	fullText: string;
	subtitleFullText: string;
}

export default function QuizDiveSlideMobile({
	onNext,
	onPrevious,
	isTitleVisible,
	isSubtitleVisible,
	isButtonsVisible,
	fullText,
	subtitleFullText
}: QuizDiveSlideMobileProps) {
	return (
		<>
			{/* Mobile Layout */}
			<div className="md:hidden  grid-rows-1 ">
				<div className="w-full max-w-4xl relative z-10">
					<div className="grid grid-rows-[auto_1fr_auto] min-h-[100vh] justify-items-center pb-24">
					{/* Title with Animation - Above image */}
					<div className={`px-4 transition-all duration-700 ease-out relative z-20 ${isTitleVisible
								? 'opacity-100 translate-y-0'
								: 'opacity-0 translate-y-8'
						}`} style={{ paddingTop: '10vh' }}>
						<h1 className="text-4xl font-bold text-white leading-tight">
								{fullText}
						</h1>
					</div>

					{/* Mobile Background */}
					<div className="absolute inset-0 w-full h-full">
						{/* Blue background for top */}
						<div className="absolute inset-0" style={{ backgroundColor: 'rgb(15, 157, 208)' }}></div>
						
						{/* White background for bottom */}
						<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"></div>
						
						{/* Center image with masking */}
						<div className="absolute inset-0 flex items-center justify-center">
							<div 
								className="w-full h-auto"
								style={{
									maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
									WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)'
								}}
							>
								<img
									src="/graphics/image_mob.png"
									alt="Quiz Background"
									className="w-full h-auto object-contain object-center"
								/>
							</div>
						</div>
					</div>

					</div>
				</div>
			</div>

			{/* Subtitle with Animation - Above buttons */}
			<div className="md:hidden fixed bottom-20 inset-x-0 z-20">
				<p className={`px-4 text-[20px] font-bold text-gray-600 mb-6 max-w-md mx-auto transition-all duration-700 ease-out ${isSubtitleVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-8'
						}`}>
						{subtitleFullText}
					</p>
			</div>

			{/* Mobile fixed bottom actions */}
			<div className="md:hidden fixed bottom-0 inset-x-0 z-20 bg-white/95 backdrop-blur border-gray-200">
				<div className="mx-auto w-full max-w-md px-4 py-3">
					<div className={`flex gap-4 transition-all duration-700 ease-out ${isButtonsVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-4'
						}`}>
						{onPrevious && (
							<button
								onClick={onPrevious}
								className="flex-1 bg-white text-[#1F2429] border-2 border-[#1F2429] py-3 rounded-full hover:bg-gray-50 transition-colors text-lg"
							>
								Previous
							</button>
						)}
						<button
							onClick={onNext}
							className="flex-1 bg-[#1F2429] text-white py-3 rounded-full hover:bg-gray-800 transition-colors text-lg"
						>
							Continue
						</button>
					</div>
				</div>
			</div>
		</>
	);
}