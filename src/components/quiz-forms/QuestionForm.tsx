import React from "react";
import QuestionFormMobile from "./QuestionFormMobile";
import QuestionFormDesktop from "./QuestionFormDesktop";
import { QuestionFormProps } from "../../types/quiz";

export type QuestionOption = {
	value: string | number;
	label: string;
};

export default function QuestionForm({
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
    const sharedProps = {
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
        nextLabel,
        bottomNote,
        children,
    };

    return (
        <>
            <div className="block md:hidden">
                <QuestionFormMobile {...sharedProps} />
            </div>
            <div className="hidden md:block">
                <QuestionFormDesktop {...sharedProps} />
            </div>
        </>
    );
}