import React, { useState, useEffect } from "react";

interface DisclaimerFormProps {
    onNext: () => void;
    onPrevious: () => void;
}

export default function DisclaimerForm({ onNext, onPrevious }: DisclaimerFormProps) {
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
        <>
            {/* Desktop Version */}
            <div className="block bg-white flex flex-col min-h-screen">
                {/* Header */}
                <div className="pt-6">
                    <div className="flex justify-center">
                        <img src="/Logo/Black.svg" alt="Project V" className="w-40 h-auto py-4 pb-10" />
                    </div>
                    <div className="flex justify-center">
                        <img src="/graphics/stars.png" alt="Project V" className="w-14 h-auto py-4" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex justify-center p-3 sm:p-6 flex-1">
                    <div className="w-full max-w-2xl">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1F2429] mb-4 sm:mb-8">
                            Disclaimer
                        </h1>
                        
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 sm:p-4 mb-6 sm:mb-8">
                            <div className="flex">
                                <div className="flex-shrink-0 pt-1 sm:pt-2">
                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-2 sm:ml-3">
                                    <h3 className="text-base sm:text-lg font-medium text-yellow-800 mb-2 sm:mb-4">
                                        Stay safe!
                                    </h3>
                                    <div className="text-xs sm:text-sm text-yellow-700">
                                        <p className="mb-1 sm:mb-2">
                                            Fasting can improve your health and wellbeing. But it's important to fast safely.
                                        </p>
                                        <p className="mb-1 sm:mb-2">
                                            Before making any changes to your diet, consult your doctor to see if fasting is appropriate for you, especially if you:
                                        </p>
                                        <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 mb-1 sm:mb-2">
                                            <li>have any medical condition;</li>
                                            <li>are taking any medication; and/or</li>
                                            <li>plan to fast for longer than 18 hours.</li>
                                            <li>are over the age of 70</li>
                                        </ul>
                                        <p className="font-semibold text-xs sm:text-sm">
                                            Please note: to protect your safety if you're underweight, under 18 years old, age 80 years old or more, pregnant or breastfeeding, have type 1 diabetes or have a diagnosed eating disorder, we don't advise that you fast.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fixed Bottom Buttons */}
                <div className="fixed bottom-0 left-0 right-0 p-2 sm:p-4">
                    <div className="max-w-2xl mx-auto pb-4 sm:pb-8">
                        <div className={`flex gap-2 sm:gap-4 md:gap-8 transition-all duration-700 ease-out ${
                            isButtonsVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-8'
                        }`}>
                            <button
                                onClick={onNext}
                                className="flex-1 bg-[#1F2429] text-white py-3 sm:py-4 md:py-5 rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base"
                            >
                                I agree
                            </button>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
}
