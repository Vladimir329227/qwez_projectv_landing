import React, { useState, useEffect } from "react";

interface NameFormProps {
    onNext: (name: string) => void;
    onPrevious: () => void;
    initialValue?: string;
}

export default function NameForm({ onNext, onPrevious, initialValue = "" }: NameFormProps) {
    const [name, setName] = useState(initialValue);
    const [isValid, setIsValid] = useState(false);
    const [isButtonsVisible, setIsButtonsVisible] = useState(false);

    useEffect(() => {
        // Валидация имени - минимум 2 символа
        setIsValid(name.trim().length >= 2);
    }, [name]);

    useEffect(() => {
        // Анимация кнопок - задержка 500ms
        const buttonTimer = setTimeout(() => {
            setIsButtonsVisible(true);
        }, 500);

        return () => {
            clearTimeout(buttonTimer);
        };
    }, []);

    const handleNext = () => {
        if (isValid) {
            onNext(name.trim());
        }
    };

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
                <div className="flex justify-center p-6 flex-1">
                    <div className="w-full max-w-2xl">
                        <h1 className="text-2xl font-bold text-center text-[#1F2429] mb-3">
                            How should we call you?
                        </h1>
                        <p className="text-[#1F2429] text-center mb-8">
                            Tell us your name — we’d love to greet you properly!
                        </p>
                        

                        <p className="font-bold text-[#1F2429] mb-3">
                            Name
                        </p>

                        <div className="w-full">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your first name"
                                className={`w-full p-2 border-2 rounded-lg text-lg transition-colors ${
                                    name && !isValid 
                                        ? "border-red-300 bg-red-50" 
                                        : name && isValid 
                                        ? "border-green-300 bg-green-50" 
                                        : "border-gray-200 focus:border-[#00A8E2] focus:bg-blue-50"
                                }`}
                                autoFocus
                            />
                            {name && !isValid && (
                                <p className="mt-2 text-sm text-red-500">Please enter at least 2 characters</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Fixed Bottom Buttons */}
                <div className="fixed bottom-0 left-0 right-0 bg-white border-gray-200 p-4">
                    <div className="max-w-2xl mx-auto pb-8">
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
                                onClick={handleNext}
                                disabled={!isValid}
                                className={`flex-1 py-5 rounded-full transition-colors ${
                                    !isValid 
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                        : 'bg-[#1F2429] text-white hover:bg-gray-800'
                                }`}
                            >
                                Complete
                            </button>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
}
