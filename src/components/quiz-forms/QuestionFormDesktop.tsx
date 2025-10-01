import React, { useEffect, useState } from "react";
import { QuestionFormProps } from "../../types/quiz";

export type QuestionOption = {
	value: string | number;
	label: string;
};

export default function QuestionFormDesktop({
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
			<div className="px-6 pt-6">
				<div className="flex items-center justify-between">
					<h2 className="text-lg text-[#1F2429] tracking-wide font-semibold">
						{sectionTitle}
					</h2>
					<div className="text-sm text-gray-500">{questionIndex + 1}/{totalQuestions}</div>
				</div>
				<div className="mt-3 flex items-center gap-2" aria-hidden>
					{Array.from({ length: totalQuestions }).map((_, idx) => (
						<div key={idx} className={`h-2 w-10 rounded ${idx <= questionIndex ? "bg-[#1F2429]" : "bg-gray-300"}`}></div>
					))}
				</div>
			</div>

			{/* Content */}
			<div className="flex justify-center p-6 flex-1">
				<div className="w-full max-w-2xl">
					<h1 className="text-4xl font-bold text-[#1F2429] mb-3">
						{question}
					</h1>
					{subtitle && (
						<p className="text-[#1F2429] mb-6">{subtitle}</p>
					)}

					{options && options.length > 0 ? (
						<div className={question.toLowerCase().includes('gender') ? "grid grid-cols-2 gap-3" : "grid gap-3"}>
							{options.map((opt) => (
								<button
									key={String(opt.value)}
									onClick={() => onSelect && onSelect(opt.value)}
									className={`w-full p-6 border-2 rounded-lg text-left text-lg transition-colors ${
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
						<div className="mt-6 text-sm text-gray-500">{bottomNote}</div>
					)}
				</div>
			</div>

			{/* Fixed Bottom Buttons */}
			<div className="fixed bottom-0 left-0 right-0 bg-white border-gray-200 p-4">
				<div className="max-w-2xl mx-auto pb-8">
					<div className={`flex gap-4 transition-all duration-700 ease-out ${
						isButtonsVisible 
							? 'opacity-100 translate-y-0' 
							: 'opacity-0 translate-y-8'
					}`}>
						<button
							onClick={onPrevious}
							className="flex-1 text-[#1F2429] border-2 border-[#1F2429] py-5 rounded-full hover:bg-gray-50 transition-colors"
						>
							Previous
						</button>
						<button
							onClick={onNext}
							className="flex-1 bg-[#1F2429] py-5 text-white rounded-full hover:bg-gray-800 transition-colors"
						>
							{nextLabel}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}