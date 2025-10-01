import React from "react";
import ProjectVDesktopV1deck from "./landing/ProjectVDesktopV1deck";
import ProjectVDesktopV1 from "./landing/ProjectVDesktopV1";
import ProjectVMobileV1mobail from "./landing/ProjectVMobileV1mobail";

export default function ResponsiveProjectV() {
	return (
		<div className="flex flex-col bg-white">
			{/* Mobile */}
			<div className="block md:hidden">
				<ProjectVMobileV1mobail />
			</div>
			{/* Tablet / Medium */}
			<div className="hidden md:block lg:hidden">
				<ProjectVDesktopV1 />
			</div>
			{/* Desktop / Large */}
			<div className="hidden lg:block">
				<ProjectVDesktopV1deck />
			</div>
		</div>
	);
}


