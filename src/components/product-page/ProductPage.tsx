import React from "react";
import ProductPageDesktop from "./responsive/ProductPageDesktop";
import ProductPageTablet from "./responsive/ProductPageTablet";
import ProductPageMobile from "./responsive/ProductPageMobile";

export default function ProductPage({ 
	answers = {} as Record<string, any>, 
	productName,
	productKey,
}: { answers?: Record<string, any>, productName?: string, productKey?: string }) {
	return (
		<div className="flex flex-col bg-white">
			{/* Mobile */}
			<div className="block md:hidden">
				<ProductPageMobile answers={answers} productName={productName} productKey={productKey} />
			</div>
			{/* Tablet / Medium */}
			<div className="hidden md:block lg:hidden">
				<ProductPageTablet answers={answers} productName={productName} productKey={productKey} />
			</div>
			{/* Desktop / Large */}
			<div className="hidden lg:block">
				<ProductPageDesktop answers={answers} productName={productName} productKey={productKey} />
			</div>
		</div>
	);
}


