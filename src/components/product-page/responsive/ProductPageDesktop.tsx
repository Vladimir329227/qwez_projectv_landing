import React from "react";
import { navigateToResults } from "../../../App";
import { getProductContent } from "../ProductContent";
export default ({ answers = {}, productName = 'Antiox', productKey }: { answers?: Record<string, any>, productName?: string, productKey?: string }) => {
	const content = getProductContent(productKey);
	return (
		<div className="items-start bg-white">
			<div className="bg-white w-full max-w-[1200px] mx-auto px-6">
				<div className="self-stretch">
					<div className="flex flex-col items-start self-stretch bg-cover bg-center pt-[50px] pb-[434px]" style={{ backgroundImage: `url(${content.heroBackgroundSrc})` }}>
						<button className="flex flex-col items-start bg-[#1F2429] text-left py-[3px] ml-8 rounded-[40px] border border-solid border-white"
							onClick={() => navigateToResults()}>
							<img
								src={content.closeIconSrc}
								className="w-[23px] h-[23px] mx-[3px] rounded-[40px] object-fill"
							/>
						</button>
					</div>
					<div className="flex flex-col items-center self-stretch bg-white py-16 px-[50px] gap-16 rounded-[32px]">
						<div className="flex justify-between items-center self-stretch">
							<div className="flex flex-col items-start w-[689px] gap-6">
								<div className="flex items-stretch self-stretch gap-4">
									{content.ingredients.map((ing) => (
										<div key={ing.title} className="flex flex-col items-center bg-white w-[219px] py-4 px-6 gap-3 rounded-2xl border border-solid border-[#E1E9FD] h-full justify-between">
											<span className="text-[#1F2429] text-2xl" >
												{ing.title}
											</span>
											<div className="flex flex-col items-center h-[60px]">
												<img
													src={ing.imageSrc}
													className="h-full w-auto object-contain"
												/>
											</div>
											<span className="text-[#1F2429] text-xl" >
												{ing.amount}
											</span>
										</div>
									))}
								</div>
								<span className="text-[#1F2429] text-lg w-full whitespace-normal break-words" >
									{content.description}
								</span>
							</div>
								<div className="flex flex-col items-center w-[362px] min-w-[300px] pt-3 px-[62px] gap-6">
								<div className="flex flex-col items-center self-stretch shrink-0">
									<img
										src={content.jarImageSrc}
										className="w-[300px] h-[225px] object-contain shrink-0"
									/>
								</div>
								<span className="text-[28px] font-bold" style={{ color: content.productNameColor || '#EA4B94' }} >
									{content.productName}
								</span>
							</div>
						</div>
						<img
							src={content.promoBannerSrc}
							className="w-full max-w-[1000px] h-auto rounded-[32px] object-cover"
						/>
						<div className="flex items-stretch self-stretch gap-6 justify-center">
							<div className="flex flex-col items-start bg-white flex-1 min-w-0 pt-4 pb-24 gap-4 rounded-xl border border-solid border-[#E1E9FD]">
								{content.features.map((f) => (
									<div key={f.title} className="flex flex-col items-start w-full px-4 gap-6">
										<span className="text-[#1F2429] text-2xl" >
											{f.title}
										</span>
										<span className="text-[#1F2429] text-lg w-full whitespace-normal break-words" >
											{f.text}
										</span>
									</div>
								))}
							</div>
							<div className="flex flex-col items-start bg-white flex-1 min-w-0 p-4 gap-6 rounded-xl border border-solid border-[#E1E9FD]">
								<span className="text-[#1F2429] text-2xl" >
									{content.capsulesBlock.title}
								</span>
								<span className="text-[#1F2429] text-lg w-full whitespace-normal break-words" >
									{content.capsulesBlock.text}
								</span>
							</div>
						</div>
						<button className="flex flex-col items-center bg-[#1F2429] text-left w-[362px] py-[15px] rounded-[100000px] border-0"
							onClick={() => alert("Pressed!")}>
							<div className="flex flex-col items-start">
								<span className="text-white text-[15px]" >
									{`Buy ${content.productName} Now!`}
								</span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}