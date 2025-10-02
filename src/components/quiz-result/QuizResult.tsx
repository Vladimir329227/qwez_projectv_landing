import React from "react";
import QuizResultDesc from "./QuizResultDesc";
import QuizResultMed from "./QuizResultMed";
import QuizResultMobail from "./QuizResultMobail";

export default function QuizResult({ answers = {} as Record<string, any> }) {
	return (
		<div className="flex flex-col bg-white">
			{/* Mobile */}
			<div className="block md:hidden">
				<QuizResultMobail answers={answers} />
			</div>
			{/* Tablet / Medium */}
			<div className="hidden md:block lg:hidden">
				<QuizResultMed answers={answers} />
			</div>
			{/* Desktop / Large */}
			<div className="hidden lg:block">
				<QuizResultDesc answers={answers} />
			</div>
		</div>
	);
}


