import React from "react";
import LandingDesktop from "./landing/LandingDesktop";
import LandingTablet from "./landing/LandingTablet";
import LandingMobile from "./landing/LandingMobile";

export default function ResponsiveProjectV() {
	return (
		<div className="flex flex-col bg-white">
			{/* Mobile */}
			<div className="block md:hidden">
				<LandingMobile />
			</div>
			{/* Tablet / Medium */}
			<div className="hidden md:block lg:hidden">
				<LandingTablet />
			</div>
			{/* Desktop / Large */}
			<div className="hidden lg:block">
				<LandingDesktop />
			</div>
		</div>
	);
}


