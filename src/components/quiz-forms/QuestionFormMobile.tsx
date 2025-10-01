import React, { useEffect, useState } from "react";
import { QuestionFormProps } from "../../types/quiz";

export type QuestionOption = {
	value: string | number;
	label: string;
};

export default function QuestionFormMobile({
	sectionTitle,
	questionIndex,
	totalQuestions,
	question,
	subtitle,
	options,
	selectedValue,
	onSelect,
	onPrevious,
	onNext,
	nextLabel = "Next",
	bottomNote,
	children,
}: QuestionFormProps) {
	const [isButtonsVisible, setIsButtonsVisible] = useState(false);

	useEffect(() => {
		// Анимация кнопок - задержка 500ms
		const buttonTimer = setTimeout(() => {
			setIsButtonsVisible(true);
		}, 500);

		return () => {
			clearTimeout(buttonTimer);
		};
	}, []);

	return (
		<div className="bg-white flex flex-col min-h-screen">
			{/* Header */}
			<div className="px-4 pt-4 pb-2">
				<div className="flex items-center justify-between pb-4 pt-4">
					<h2 className="text-base text-[#1F2429] tracking-wide font-semibold">
						{sectionTitle}
					</h2>
					<div className="text-base text-white rounded-full px-4 py-1 bg-gray-500">{questionIndex + 1}/{totalQuestions}</div>
				</div>
				<div className="mt-2 flex items-center gap-3" aria-hidden>
					{Array.from({ length: totalQuestions }).map((_, idx) => (
						<div key={idx} className={`h-0.5 flex-1 rounded ${idx === questionIndex ? "bg-[#1F2429]" : "bg-gray-300"}`}></div>
					))}
				</div>
			</div>

			{/* Content */}
			<div className="flex justify-center p-4 flex-1">
				<div className="w-full max-w-xl">
					<h1 className="text-2xl font-bold text-[#1F2429] mb-2">
						{question}
					</h1>
					{subtitle && (
						<p className="text-[#1F2429] mb-5">{subtitle}</p>
					)}

					<div className="pb-4"></div>

					{options && options.length > 0 ? (
						<div className={question.toLowerCase().includes('gender') ? "grid grid-cols-2 gap-3" : "grid gap-3"}>
							{options.map((opt) => (
								<button
									key={String(opt.value)}
									onClick={() => onSelect && onSelect(opt.value)}
									className={`w-full p-4 border-2 rounded-lg text-left text-base transition-colors ${
										selectedValue === opt.value ? "border-[#00A8E2] bg-blue-50" : "border-gray-200 hover:border-[#00A8E2] hover:bg-blue-50"
									}`}
								>
									{opt.label}
								</button>
							))}
						</div>
					) : (
						children
					)}

					{bottomNote && (
						<div className="mt-5 text-sm text-gray-500">{bottomNote}</div>
					)}
				</div>
			</div>

			{/* Fixed Bottom Buttons */}
			<div className="fixed bottom-0 left-0 right-0 bg-white border-gray-200 p-4">
				<div className="max-w-xl mx-auto">
					<div className={`flex gap-3 transition-all duration-700 ease-out ${
						isButtonsVisible 
							? 'opacity-100 translate-y-0' 
							: 'opacity-0 translate-y-8'
					}`}>
						<button
							onClick={onPrevious}
							className="flex-1 bg-white text-[#1F2429] border-2 border-[#1F2429] py-3 rounded-full hover:bg-gray-50 transition-colors text-base"
						>
							Previous
						</button>
						<button
							onClick={onNext}
							className="flex-1 bg-[#1F2429] text-white py-3 rounded-full hover:bg-gray-800 transition-colors text-base"
						>
							{nextLabel}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}