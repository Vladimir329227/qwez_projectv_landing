import React from "react";
import { QuizStartPageProps } from "../../../../types/quiz";

interface QuizStartTabletProps extends QuizStartPageProps {
	isTitleVisible: boolean;
	isSubtitleVisible: boolean;
	isButtonsVisible: boolean;
	fullText: string;
	subtitleFullText: string;
}

export default function QuizStartTablet({ 
	onNext, 
	onPrevious, 
	isTitleVisible, 
	isSubtitleVisible, 
	isButtonsVisible, 
	fullText, 
	subtitleFullText 
}: QuizStartTabletProps) {
	return (
		<div className="flex items-start bg-white h-screen relative">
			{/* Left Content */}
			<div className="flex flex-col w-[420px] mr-8 flex-shrink-0 z-10 pl-8 h-full overflow-hidden">
				{/* Logo - Top */}
				<div className="flex justify-start pt-8">
					<img
						src="/Logo/Black.svg"
						className="w-[250px] h-[70px] object-fill"
						alt="Logo"
					/>
				</div>
				
				{/* Center Content */}
				<div className="flex-1 flex flex-col items-start justify-center">
				{/* Title with Animation */}
				<div className={`text-[#1F2429] text-5xl w-[380px] mb-20 h-24 flex items-center transition-all duration-700 ease-out ${
						isTitleVisible 
							? 'opacity-100 translate-y-0' 
							: 'opacity-0 translate-y-8'
					}`}>
						<span>{fullText}</span>
					</div>
					
				{/* Subtitle with Animation */}
				<div className={`text-[#1F2429] text-xl w-[380px] mb-8 h-12 flex items-center transition-all duration-700 ease-out ${
						isSubtitleVisible 
							? 'opacity-100 translate-y-0' 
							: 'opacity-0 translate-y-8'
					}`}>
						<span>{subtitleFullText}</span>
					</div>
				</div>
				
				{/* Info + Button - Bottom */}
				<div className={`flex flex-col items-start gap-4 justify-left pb-8 transition-all duration-700 ease-out ${
					isButtonsVisible 
						? 'opacity-100 translate-y-0' 
						: 'opacity-0 translate-y-8'
				}`}>
					{/* Info Text (moved to bottom above the button) */}
					<div className="flex items-start w-[330px] bg-[#E5F6FC] text-left py-3 rounded-2xl border border-solid border-[#00A8E2]">
						<img
							src="/figma/info-icon.png"
							className="w-6 h-6 ml-3 mr-2 rounded-2xl object-fill"
							alt="Info"
						/>
						<span className="text-[#626669] text-base w-[340px] mr-3.5">
							We ask this to better understand your daily rhythms and how they might relate to your focus, habits, and overall well-being.
						</span>
					</div>
				<button 
					className="flex flex-col items-center bg-[#1F2429] text-center w-full max-w-[350px] py-5 rounded-[100000px] border-0 hover:bg-gray-800 transition-colors"
						onClick={onNext}
					>
					<span className="text-white text-[20px]">
							Next
						</span>
					</button>
				</div>
			</div>
			
			{/* Right Image - Tablet version - обрезана наполовину */}
			<div className="absolute right-0 top-0 w-2/3 h-full overflow-hidden border-l border-white/20">
				<img
					src="/figma/quiz_start.png"
				className="w-full h-full object-cover object-right translate-x-1/4"
					alt="Quiz Background"
				/>
				{/* White gradient overlay for smooth transition */}
				<div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/70 to-white/0"></div>
			</div>
		</div>
	);
}
