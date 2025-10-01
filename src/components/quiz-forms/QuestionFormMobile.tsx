import React, { useEffect, useState } from "react";
import { QuestionFormProps } from "../../types/quiz";

// Функция для получения пути к логотипу блока (как в Desktop)
const getBlockLogo = (sectionTitle: string): string | null => {
	const logoMap: Record<string, string> = {
		'MORNING ENERGY & CLARITY': '/blok_logo/MORNING ENERGY & CLARITY.png',
		'MOVEMENT, FLEXIBILITY & BODY SUPPORT': '/blok_logo/MOVEMENT, FLEXIBILITY & BODY SUPPORT.png',
		'NUTRITION, DIGESTION & DETOX': '/blok_logo/NUTRITION, DIGESTION & DETOX.png',
		'SLEEP, STRESS & SELF-CARE': '/blok_logo/SLEEP, STRESS & SELF-CARE.png',
		'INDULGENCE & BALANCE': '/blok_logo/INDULGENCE & BALANCE.png',
		'ENVIRONMENT & POLLUTION': '/blok_logo/ENVIRONMENT & POLLUTION.png',
	};

	return logoMap[sectionTitle] || null;
};

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
    isMulti,
    selectedValues,
    onToggleSelect,
	onSelect,
	onPrevious,
	onNext,
	nextLabel = "Next",
	bottomNote,
	children,
}: QuestionFormProps) {
	const [isButtonsVisible, setIsButtonsVisible] = useState(false);

	const isNextDisabled = isMulti
		? ((selectedValues ?? []).length === 0)
		: (selectedValue === undefined || selectedValue === null);

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
					<div className="flex items-center gap-2">
						{getBlockLogo(sectionTitle) && (
							<img
								src={getBlockLogo(sectionTitle)!}
								alt={`${sectionTitle} logo`}
								className="w-6 h-6 object-contain"
							/>
						)}
						<h2 className="text-base text-[#1F2429] tracking-wide font-semibold">
							{sectionTitle}
						</h2>
					</div>
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
                        <div className={(question.toLowerCase().includes('gender') || question.toLowerCase().includes('goal')) ? "grid grid-cols-2 gap-3" : "grid gap-3"}>
                            {options.map((opt) => {
                                const isSelected = isMulti
                                    ? (selectedValues ?? []).includes(opt.value)
                                    : selectedValue === opt.value;
                                const handleClick = () => {
                                    if (isMulti) {
                                        onToggleSelect && onToggleSelect(opt.value);
                                    } else {
                                        onSelect && onSelect(opt.value);
                                    }
                                };
                                return (
                                    <button
                                        key={String(opt.value)}
                                        onClick={handleClick}
                                        className={`w-full p-4 border-2 rounded-lg text-left text-base transition-colors ${
                                            isSelected ? "border-[#00A8E2] bg-blue-50" : "border-gray-200 hover:border-[#00A8E2] hover:bg-blue-50"
                                        }`}
                                    >
                                        {opt.label}
                                    </button>
                                );
                            })}
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
							onClick={() => { if (isNextDisabled) return; onNext(); }}
							disabled={isNextDisabled}
							className={`flex-1 py-3 rounded-full transition-colors text-base ${isNextDisabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-[#1F2429] text-white hover:bg-gray-800'}`}
						>
							{nextLabel}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}