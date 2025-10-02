import React from "react";
import ProductPageDesc from "./ProductPageDesc";
import ProductPageMed from "./ProductPageMed";
import ProductPageMobail from "./ProductPageMobail";

export default function ProductPage({ 
	answers = {} as Record<string, any>, 
	productName = 'Antiox' 
}) {
	return (
		<div className="flex flex-col bg-white">
			{/* Mobile */}
			<div className="block md:hidden">
				<ProductPageMobail answers={answers} productName={productName} />
			</div>
			{/* Tablet / Medium */}
			<div className="hidden md:block lg:hidden">
				<ProductPageMed answers={answers} productName={productName} />
			</div>
			{/* Desktop / Large */}
			<div className="hidden lg:block">
				<ProductPageDesc answers={answers} productName={productName} />
			</div>
		</div>
	);
}


