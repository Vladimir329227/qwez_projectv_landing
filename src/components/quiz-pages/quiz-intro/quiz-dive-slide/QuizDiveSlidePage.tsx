import React, { useState, useEffect } from "react";
import { QuizStartPageProps } from "../../../../types/quiz";
import QuizDiveSlideDesktop from "./responsive/QuizDiveSlideDesktop";
import QuizDiveSlideTablet from "./responsive/QuizDiveSlideTablet";
import QuizDiveSlideMobile from "./responsive/QuizDiveSlideMobile";

export default function QuizDiveSlidePage({ onNext, onPrevious }: QuizStartPageProps) {
	// Animation states
	const [isTitleVisible, setIsTitleVisible] = useState(false);
	const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
	const [isButtonsVisible, setIsButtonsVisible] = useState(false);

	// Responsive device detection aligned with Tailwind breakpoints
	// mobile: <768px, tablet: >=768px && <1280px, desktop: >=1280px
	const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("mobile");

	useEffect(() => {
		const computeDevice = () => {
			if (typeof window === "undefined") return "mobile" as const;
			if (window.matchMedia("(min-width: 1280px)").matches) return "desktop" as const;
			if (window.matchMedia("(min-width: 768px)").matches) return "tablet" as const;
			return "mobile" as const;
		};

		// set on mount
		setDevice(computeDevice());

		// listen to resize
		const handleResize = () => setDevice(computeDevice());
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	
	const fullText = "Your personalized journey begins here";
	const subtitleFullText = "We're ready to dive deeper — refining a supplement plan as unique as your lifestyle.";
	
	useEffect(() => {
		// Title appears first
		const titleTimer = setTimeout(() => {
			setIsTitleVisible(true);
		}, 300);

		// Subtitle appears after title
		const subtitleTimer = setTimeout(() => {
			setIsSubtitleVisible(true);
		}, 800);

		// Buttons appear after subtitle
		const buttonTimer = setTimeout(() => {
			setIsButtonsVisible(true);
		}, 1300);

		return () => {
			clearTimeout(titleTimer);
			clearTimeout(subtitleTimer);
			clearTimeout(buttonTimer);
		};
	}, []);

	return (
		<div className="min-h-screen bg-white flex flex-col">
			{device === "desktop" && (
				<QuizDiveSlideDesktop
					onNext={onNext}
					onPrevious={onPrevious}
					isTitleVisible={isTitleVisible}
					isSubtitleVisible={isSubtitleVisible}
					isButtonsVisible={isButtonsVisible}
					fullText={fullText}
					subtitleFullText={subtitleFullText}
				/>
			)}
			{device === "tablet" && (
				<QuizDiveSlideTablet
					onNext={onNext}
					onPrevious={onPrevious}
					isTitleVisible={isTitleVisible}
					isSubtitleVisible={isSubtitleVisible}
					isButtonsVisible={isButtonsVisible}
					fullText={fullText}
					subtitleFullText={subtitleFullText}
				/>
			)}
			{device === "mobile" && (
				<QuizDiveSlideMobile
					onNext={onNext}
					onPrevious={onPrevious}
					isTitleVisible={isTitleVisible}
					isSubtitleVisible={isSubtitleVisible}
					isButtonsVisible={isButtonsVisible}
					fullText={fullText}
					subtitleFullText={subtitleFullText}
				/>
			)}
		</div>
	);
}