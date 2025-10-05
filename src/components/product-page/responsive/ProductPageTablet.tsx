import React from "react";
import { navigateToResults } from "../../../App";
import { getProductContent } from "../ProductContent";
export default ({ answers = {}, productName = 'Antiox', productKey }: { answers?: Record<string, any>, productName?: string, productKey?: string }) => {
	const content = getProductContent(productKey);
	return (
		<div className="items-start bg-white">
			<div className="bg-white w-[834px]">
				<div className="self-stretch">
					<div className="flex flex-col items-start self-stretch bg-cover bg-center pt-[50px] pb-[313px]" style={{ backgroundImage: `url(${content.heroBackgroundSrc})` }}>
						<button className="flex flex-col items-start bg-[#1F2429] text-left py-[3px] ml-[351px] rounded-[40px] border border-solid border-white"
							onClick={() => navigateToResults()}>
							<img
								src={content.closeIconSrc}
								className="w-[23px] h-[23px] mx-[3px] rounded-[40px] object-fill"
							/>
						</button>
					</div>
					<div className="flex flex-col items-start self-stretch bg-white pt-8 pb-[63px] rounded-3xl">
						<div className="flex items-center mb-8 ml-[50px]">
							<div className="flex flex-col items-start w-[383px] mr-[108px] gap-3">
								<div className="flex items-start">
									{content.ingredients.map((ing) => (
										<div key={ing.title} className="flex flex-col items-center bg-white w-28 py-4 mr-3 gap-3 rounded-2xl border border-solid border-[#E1E9FD]">
											<span className="text-[#1F2429] text-[15px] font-bold" >
												{ing.title}
											</span>
											<div className="flex flex-col items-center self-stretch mx-6">
												<img
													src={ing.imageSrc}
													className="w-[62px] h-10 object-fill"
												/>
											</div>
											<span className="text-[#1F2429] text-xs font-bold text-center" >
												{ing.amount}
											</span>
										</div>
									))}
								</div>
								<span className="text-[#1F2429] text-xs w-[383px]" >
									{content.description}
								</span>
							</div>
							<div className="flex flex-col w-[140px] py-[7px] gap-[19px]">
								<div className="flex flex-col items-center self-stretch mx-[3px]">
							<img
								src={content.jarImageSrc}
										className="w-[133px] h-[126px] object-fill"
									/>
								</div>
								<span className="text-[28px] font-bold text-center" style={{ color: content.productNameColor || '#EA4B94' }} >
									{content.productName}
								</span>
							</div>
						</div>
						<img
							src={content.promoBannerSrc}
							className="w-[734px] h-[413px] mb-[33px] mx-[50px] rounded-3xl object-fill"
						/>
						<div className="flex items-start self-stretch mb-8 mx-[43px] gap-6">
							<div className="flex flex-col items-start bg-white w-[362px] pt-[15px] pb-[72px] rounded-xl border border-solid border-[#E1E9FD]">
								{content.features.map((f) => (
									<>
										<span className="text-[#1F2429] text-[15px] font-bold mb-1.5 ml-4" >
											{f.title}
										</span>
										<span className="text-[#1F2429] text-sm w-[305px] mb-4 ml-4" >
											{f.text}
										</span>
									</>
								))}
							</div>
							<div className="flex flex-col items-start bg-white w-[362px] py-[15px] gap-1.5 rounded-xl border border-solid border-[#E1E9FD]">
								<span className="text-[#1F2429] text-[15px] font-bold ml-4" >
									{content.capsulesBlock.title}
								</span>
								<span className="text-[#1F2429] text-sm w-[329px] mx-4" >
									{content.capsulesBlock.text}
								</span>
							</div>
						</div>
						<button className="flex flex-col items-center bg-[#1F2429] text-left w-[362px] py-3.5 mx-[236px] rounded-[100000px] border-0"
							onClick={() => alert("Pressed!")}>
							<span className="text-white text-[15px]" >
								{`Buy ${content.productName} Now!`}
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}