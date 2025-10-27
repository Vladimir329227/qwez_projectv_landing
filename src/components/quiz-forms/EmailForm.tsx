import React, { useState, useEffect } from "react";

interface EmailFormProps {
    onNext: (email: string) => void;
    onPrevious: () => void;
    initialValue?: string;
}

// Функция для санитизации email
function sanitizeEmail(input: string): string {
    return input
        .trim()
        .toLowerCase()
        .replace(/<[^>]*>/g, '') // Удаляем HTML теги
        .replace(/javascript:/gi, '') // Блокируем javascript: протокол
        .slice(0, 254); // Максимальная длина email адреса
}

export default function EmailForm({ onNext, onPrevious, initialValue = "" }: EmailFormProps) {
    const [email, setEmail] = useState(initialValue);
    const [isValid, setIsValid] = useState(false);
    const [isButtonsVisible, setIsButtonsVisible] = useState(false);
    const [suggestedEmail, setSuggestedEmail] = useState<string | null>(null);

    // Популярные домены и их опечатки
    const domainSuggestions: { [key: string]: string } = {
        'gnail.com': 'gmail.com',
        'gmial.com': 'gmail.com',
        'gmail.co': 'gmail.com',
        'gmail.cm': 'gmail.com',
        'gmai.com': 'gmail.com',
        'gmai.co': 'gmail.com',
        'gmai.cm': 'gmail.com',
        'gmial.co': 'gmail.com',
        'gmial.cm': 'gmail.com',
        'gnail.co': 'gmail.com',
        'gnail.cm': 'gmail.com',
        'yaho.com': 'yahoo.com',
        'yahoo.co': 'yahoo.com',
        'yahoo.cm': 'yahoo.com',
        'yaho.co': 'yahoo.com',
        'yaho.cm': 'yahoo.com',
        'hotmial.com': 'hotmail.com',
        'hotmail.co': 'hotmail.com',
        'hotmail.cm': 'hotmail.com',
        'hotmial.co': 'hotmail.com',
        'hotmial.cm': 'hotmail.com',
        'outlok.com': 'outlook.com',
        'outlook.co': 'outlook.com',
        'outlook.cm': 'outlook.com',
        'outlok.co': 'outlook.com',
        'outlok.cm': 'outlook.com'
    };

    useEffect(() => {
        // Валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(email);
        setIsValid(isValidEmail);

        // Проверка на опечатки в домене
        if (email.includes('@')) {
            const domain = email.split('@')[1]?.toLowerCase();
            if (domain && domainSuggestions[domain]) {
                const correctedEmail = email.replace(domain, domainSuggestions[domain]);
                setSuggestedEmail(correctedEmail);
            } else {
                setSuggestedEmail(null);
            }
        } else {
            setSuggestedEmail(null);
        }
    }, [email]);

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
            // Отправляем санитизированное значение
            onNext(sanitizeEmail(email));
        }
    };

    const applySuggestion = () => {
        if (suggestedEmail) {
            setEmail(suggestedEmail);
            setSuggestedEmail(null);
        }
    };

    return (
        <>
            {/* Desktop Version */}
            <div className="bg-white flex flex-col min-h-screen">
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
                            Your profile is ready ☺️
                        </h1>
                        <p className="text-[#1F2429] text-center mb-8">
                            Please enter your email so we can send it to you.
                        </p>
                        

                        <p className="font-bold text-[#1F2429] mb-3">
                            Email
                        </p>

                        <div className="w-full">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className={`w-full p-2 border-2 rounded-lg text-lg transition-colors ${
                                    email && !isValid 
                                        ? "border-red-300 bg-red-50" 
                                        : email && isValid 
                                        ? "border-green-300 bg-green-50" 
                                        : "border-gray-200 focus:border-[#00A8E2] focus:bg-blue-50"
                                }`}
                                autoFocus
                            />
                            {email && !isValid && !suggestedEmail && (
                                <p className="mt-2 text-sm text-red-500">Please enter a valid email address</p>
                            )}
                            {suggestedEmail && (
                                <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                    <p className="text-sm text-blue-800 mb-2">
                                        Did you mean <strong>{suggestedEmail}</strong> instead?
                                    </p>
                                    <button
                                        onClick={applySuggestion}
                                        className="text-sm text-blue-600 hover:text-blue-800 underline font-medium"
                                    >
                                        Yes, use this email
                                    </button>
                                </div>
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
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
}
