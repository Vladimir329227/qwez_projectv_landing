import React from "react";
export default ({ answers = {}, productName = 'Antiox' }: { answers?: Record<string, any>, productName?: string }) => {
	return (
		<div className="items-start bg-white">
			<div className="bg-white w-[834px]">
				<div className="self-stretch">
					<div className="flex flex-col items-start self-stretch bg-[url('/product-page-images/product-image-15.png')] bg-cover bg-center pt-[50px] pb-[313px]">
						<button className="flex flex-col items-start bg-[#1F2429] text-left py-[3px] ml-[351px] rounded-[40px] border border-solid border-white"
							onClick={()=>alert("Pressed!")}>
												<img
													src="/product-page-images/product-image-16.png" 
													className="w-[23px] h-[23px] mx-[3px] rounded-[40px] object-fill"
												/>
						</button>
					</div>
					<div className="flex flex-col items-start self-stretch bg-white pt-8 pb-[63px] rounded-3xl">
						<div className="flex items-center mb-8 ml-[50px]">
							<div className="flex flex-col items-start w-[383px] mr-[108px] gap-3">
								<div className="flex items-start">
									<div className="flex flex-col items-center bg-white w-28 py-4 mr-3 gap-3 rounded-2xl border border-solid border-[#E1E9FD]">
										<span className="text-[#1F2429] text-[15px] font-bold" >
											{"Grape Seeds"}
										</span>
										<div className="flex flex-col items-center self-stretch mx-6">
																<img
																	src="/product-page-images/product-image-18.png" 
																	className="w-[62px] h-10 object-fill"
																/>
										</div>
										<span className="text-[#1F2429] text-xs font-bold text-center" >
											{"80 mg"}
										</span>
									</div>
									<div className="flex flex-col items-center bg-white w-28 py-4 mr-[13px] gap-[5px] rounded-2xl border border-solid border-[#E1E9FD]">
										<span className="text-[#1F2429] text-[15px] font-bold" >
											{"Vitamin C"}
										</span>
										<div className="flex flex-col items-center self-stretch mx-[30px]">
																<img
																	src="/product-page-images/product-image-19.png" 
																	className="w-[54px] h-[54px] object-fill"
																/>
										</div>
										<span className="text-[#1F2429] text-xs font-bold text-center" >
											{"65 mg"}
										</span>
									</div>
									<div className="flex flex-col items-center bg-white w-28 py-4 gap-[11px] rounded-2xl border border-solid border-[#E1E9FD]">
										<span className="text-[#1F2429] text-[15px] font-bold" >
											{"Zinc"}
										</span>
										<div className="flex flex-col items-center self-stretch mx-9">
																<img
																	src="/product-page-images/product-image-20.png" 
																	className="w-[42px] h-[42px] object-fill"
																/>
										</div>
										<span className="text-[#1F2429] text-xs font-bold text-center" >
											{"15 mg"}
										</span>
									</div>
								</div>
								<span className="text-[#1F2429] text-xs w-[383px]" >
									{"A is antioxidant power in its most elegant form—with grape seed extract, vitamin C, E, zinc, and ginkgo biloba—working together to protect cells from damage, support collagen, and brighten the skin from within.Not just for beauty. For structure.For women who hold the world—and want to hold onto their glow."}
								</span>
							</div>
							<div className="flex flex-col w-[140px] py-[7px] gap-[19px]">
								<div className="flex flex-col items-center self-stretch mx-[3px]">
														<img
															src="/product-page-images/product-image-17.png" 
															className="w-[133px] h-[126px] object-fill"
														/>
								</div>
								<span className="text-[#EA4B94] text-[28px] font-bold text-center" >
									{productName}
								</span>
							</div>
						</div>
										<img
											src="/product-page-images/product-image-21.png" 
											className="w-[734px] h-[413px] mb-[33px] mx-[50px] rounded-3xl object-fill"
										/>
						<div className="flex items-start self-stretch mb-8 mx-[43px] gap-6">
							<div className="flex flex-col items-start bg-white w-[362px] pt-[15px] pb-[72px] rounded-xl border border-solid border-[#E1E9FD]">
								<span className="text-[#1F2429] text-[15px] font-bold mb-1.5 ml-4" >
									{"Fast action"}
								</span>
								<span className="text-[#1F2429] text-sm w-[305px] mb-4 ml-4" >
									{"The usage of highly active extracts with improved bioavailability."}
								</span>
								<span className="text-[#1F2429] text-[15px] font-bold mb-1.5 ml-4" >
									{"Efficiency"}
								</span>
								<span className="text-[#1F2429] text-sm w-80 mb-4 mx-4" >
									{"The complex includes well-known and well-studied components that have undergone prolonged clinical studies."}
								</span>
								<span className="text-[#1F2429] text-[15px] font-bold mb-1.5 ml-4" >
									{"Plant-derived capsule"}
								</span>
								<span className="text-[#1F2429] text-sm ml-4" >
									{"Suitable for vegetarians, does not contain paraffins."}
								</span>
							</div>
							<div className="flex flex-col items-start bg-white w-[362px] py-[15px] gap-1.5 rounded-xl border border-solid border-[#E1E9FD]">
								<span className="text-[#1F2429] text-[15px] font-bold ml-4" >
									{"30 capsules"}
								</span>
								<span className="text-[#1F2429] text-sm w-[329px] mx-4" >
									{"An antioxidant formula that protects against infections, toxins and premature aging.• Reduces the risk of developing chronic diseases• Slows down the aging process• Promotes cell regeneration• Supports immunity• Prevents the development of oxidative processesEach capsule of A contains 80 mg of grape seed extract and, when taken daily, helps reduce the risk of cardiovascular disease, cleanse blood vessels and neutralize oxidative processes."}
								</span>
							</div>
						</div>
						<button className="flex flex-col items-center bg-[#1F2429] text-left w-[362px] py-3.5 mx-[236px] rounded-[100000px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px]" >
								{`Buy ${productName} Now!`}
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}