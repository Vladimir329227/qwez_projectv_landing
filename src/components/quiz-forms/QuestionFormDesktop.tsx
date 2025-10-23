import React, { useEffect, useState } from "react";
import { QuestionFormProps } from "../../types/quiz";

// Функция для получения пути к логотипу блока
const getBlockLogo = (sectionTitle: string): string | null => {
	const logoMap: Record<string, string> = {
		'Morning Energy': '/blok_logo/morning_energy_&_clarity.png',
		'Movement & Flexibility': '/blok_logo/movement_flexibility_&_body_support.png',
		'Nutrition, Digestion': '/blok_logo/nutrition_digestion_&_detox.png',
		'Sleep, Stress': '/blok_logo/sleep_stress_&_self-care.png',
		'Indulgence, Balance': '/blok_logo/indulgence_&_balance.png',
		'Environment, Pollution': '/blok_logo/environment_&_pollution.png',
		'Personal details': '/blok_logo/personal_details.png',
	};
	return logoMap[sectionTitle] || null;
};

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
    isMulti,
    selectedValues,
    onToggleSelect,
	onSelect,
	onPrevious,
	onNext,
	nextLabel = "Next",
	bottomNote,
	children,
	notification,
	separateOption,
	columnLayout,
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
			<div className="pt-6">
				<div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
					<div className="flex items-center justify-between">
						<div className="flex items-center pl-14">
							<img src="/Logo/Black.svg" alt="Project V" className="w-[80%] h-[80%] pb-4" />
						</div>
						<div className="flex items-center gap-2 pr-10">
							{getBlockLogo(sectionTitle) && (
								<img 
									src={getBlockLogo(sectionTitle)!} 
									alt={`${sectionTitle} logo`} 
									className="w-5 h-5 object-contain"
								/>
							)}
							<p className="text-[#1F2429] tracking-wide font-semibold">
								{sectionTitle}
							</p>
							<div className="text-base text-white rounded-full px-4 py-1 bg-gray-500">{questionIndex + 1}/{totalQuestions}</div>
						</div>
					</div>
				</div>
				<div className="mt-3 flex items-center gap-2 justify-center" aria-hidden>
					{Array.from({ length: totalQuestions }).map((_, idx) => (
						<div key={idx} className={`h-1 w-10 rounded ${idx === questionIndex ? "bg-[#00A8E2]" : "bg-gray-300"}`}></div>
					))}
				</div>
			</div>

			{/* Content */}
			<div className="flex justify-center p-4 pt-6 flex-1 pb-20">
				<div className="w-full max-w-6xl">
					<h1 className="text-3xl font-semibold text-center text-[#1F2429] mb-3">
						{question}
					</h1>
					{subtitle && (
						<p className="text-[#1F2429] text-center ">{subtitle}</p>
					)}
					<div className="pb-4"></div>
                    {options && options.length > 0 ? (
                        <>
                            {columnLayout === 'double' ? (
                                <div className="grid grid-cols-2 gap-2 max-w-5xl mx-auto">
                                    {options.filter(opt => !separateOption || opt.value !== separateOption).map((opt) => {
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
                                                className={`quiz-option-button w-full p-3 border-2 rounded-lg text-center text-base transition-colors min-h-[60px] flex items-center justify-center ${
                                                    isSelected ? "border-[#00A8E2] bg-blue-50 text-[#00A8E2]" : "border-gray-200 hover:border-[#00A8E2] hover:bg-blue-50"
                                                }`}
                                            >
                                                {opt.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className={(columnLayout === undefined && (question.toLowerCase().includes('gender') || question.toLowerCase().includes('goal') || question.toLowerCase().includes('workout'))) ? "grid grid-cols-2 gap-2 max-w-5xl mx-auto" : "grid gap-3"}>
                                    {options.filter(opt => !separateOption || opt.value !== separateOption).map((opt) => {
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
                                        const isTwoColumns = columnLayout === undefined && (question.toLowerCase().includes('gender') || question.toLowerCase().includes('goal') || question.toLowerCase().includes('workout'));
                                        return (
                                            <button
                                                key={String(opt.value)}
                                                onClick={handleClick}
                                                className={`quiz-option-button w-full p-3 border-2 rounded-lg text-center text-base transition-colors ${isTwoColumns ? 'min-h-[60px] flex items-center justify-center' : ''} ${
                                                    isSelected ? "border-[#00A8E2] bg-blue-50 text-[#00A8E2]" : "border-gray-200 hover:border-[#00A8E2] hover:bg-blue-50"
                                                }`}
                                            >
                                                {opt.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                            {separateOption && (columnLayout === 'double' || (columnLayout === undefined && (question.toLowerCase().includes('gender') || question.toLowerCase().includes('goal') || question.toLowerCase().includes('workout')))) && options.find(opt => opt.value === separateOption) && (
                                <div className="flex justify-center mt-4">
                                    <div className="max-w-md w-full">
                                        {(() => {
                                            const separateOptionData = options.find(opt => opt.value === separateOption)!;
                                            const isSelected = isMulti
                                                ? (selectedValues ?? []).includes(separateOptionData.value)
                                                : selectedValue === separateOptionData.value;
                                            const handleClick = () => {
                                                if (isMulti) {
                                                    onToggleSelect && onToggleSelect(separateOptionData.value);
                                                } else {
                                                    onSelect && onSelect(separateOptionData.value);
                                                }
                                            };
                                            return (
                                                <button
                                                    onClick={handleClick}
                                                    className={`quiz-option-button w-full p-3 border-2 rounded-lg text-center text-base transition-colors min-h-[60px] flex items-center justify-center ${
                                                        isSelected ? "border-[#00A8E2] bg-blue-50 text-[#00A8E2]" : "border-gray-200 hover:border-[#00A8E2] hover:bg-blue-50"
                                                    }`}
                                                >
                                                    {separateOptionData.label}
                                                </button>
                                            );
                                        })()}
                                    </div>
                                </div>
                            )}
                        </>
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
					{/* Notification */}
					{notification && (
						<div className={`mb-6 transition-all duration-700 ease-out ${
							isButtonsVisible 
								? 'opacity-100 translate-y-0' 
								: 'opacity-0 translate-y-8'
						}`}>
							<div className="flex items-start gap-3 p-4 bg-[#E5F6FC] border border-[#00A8E2] rounded-2xl">
								<div className="text-[#00A8E2] text-xl font-bold flex-shrink-0 mt-0.5">
									<img src="/figma/info-icon.png" alt="Info" className="w-6 h-6" />
								</div>
								<p className="text-[#626669] text-sm font-medium leading-5 flex-1 min-w-0">{notification}</p>
							</div>
						</div>
					)}
					
					<div className={`flex gap-8 transition-all duration-700 ease-out ${
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
							onClick={() => { if (isNextDisabled) return; onNext(); }}
							disabled={isNextDisabled}
							className={`flex-1 py-5 rounded-full transition-colors ${isNextDisabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-[#1F2429] text-white hover:bg-gray-800'}`}
						>
							{nextLabel}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}