import React, { useEffect, useState } from "react";
import QuizResultDesktop from "./responsive/QuizResultDesktop";
import QuizResultTablet from "./responsive/QuizResultTablet";
import QuizResultMobile from "./responsive/QuizResultMobile";

export default function QuizResult({ answers = {} as Record<string, any> }) {
	const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("mobile");

	useEffect(() => {
		const computeDevice = () => {
			if (typeof window === "undefined") return "mobile" as const;
			if (window.matchMedia("(min-width: 1280px)").matches) return "desktop" as const; // xl
			if (window.matchMedia("(min-width: 768px)").matches) return "tablet" as const; // md
			return "mobile" as const;
		};

		setDevice(computeDevice());
		const onResize = () => setDevice(computeDevice());
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	return (
		<div className="flex flex-col bg-white">
			{device === "mobile" && <QuizResultMobile answers={answers} />}
			{device === "tablet" && <QuizResultTablet  answers={answers} />}
			{device === "desktop" && <QuizResultDesktop answers={answers} />}
		</div>
	);
}


