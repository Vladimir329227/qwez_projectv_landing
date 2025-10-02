import React from "react";
export default ({ answers = {}, productName = 'Antiox' }: { answers?: Record<string, any>, productName?: string }) => {
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-white h-[1908px] rounded-[32px] border border-solid border-[#B93E8F]">
				<div className="self-stretch mb-[1px]">
					<div className="self-stretch bg-[url('/product-page-images/product-image-1.png')] bg-cover bg-center pt-[50px] pb-[313px]">
						<div className="flex flex-col items-end self-stretch">
							<button className="flex flex-col items-start bg-[#1F2429] text-left p-[3px] mr-5 rounded-[40px] border border-solid border-white"
								onClick={()=>alert("Pressed!")}>
										<img
											src="/product-page-images/product-image-2.png" 
											className="w-[23px] h-[23px] rounded-[40px] object-fill"
										/>
							</button>
						</div>
					</div>
					<div className="flex flex-col items-center self-stretch bg-white pt-5 pb-[63px] px-5 rounded-3xl">
						<div className="flex flex-col items-start py-[7px] mb-6 gap-[19px]">
							<div className="flex flex-col items-start mx-[3px]">
										<img
											src="/product-page-images/product-image-3.png" 
											className="w-[133px] h-[126px] object-fill"
										/>
							</div>
							<span className="text-[#EA4B94] text-[28px] font-bold mx-7" >
								{productName}
							</span>
						</div>
						<div className="flex flex-col self-stretch mb-6 gap-3">
							<div className="flex items-start self-stretch">
								<div className="flex flex-1 flex-col items-start bg-white py-4 mr-3 gap-3 rounded-2xl border border-solid border-[#E1E9FD]">
									<span className="text-[#1F2429] text-[15px] font-bold mx-[13px]" >
										{"Grape Seeds"}
									</span>
									<div className="flex flex-col self-stretch mx-6">
												<img
													src="/product-page-images/product-image-4.png" 
													className="self-stretch h-10 object-fill"
												/>
									</div>
									<span className="text-[#1F2429] text-xs font-bold mx-[39px]" >
										{"80 mg"}
									</span>
								</div>
								<div className="flex flex-1 flex-col items-start bg-white py-4 mr-[13px] gap-[5px] rounded-2xl border border-solid border-[#E1E9FD]">
									<span className="text-[#1F2429] text-[15px] font-bold mx-6" >
										{"Vitamin C"}
									</span>
									<div className="flex flex-col self-stretch mx-[30px]">
												<img
													src="/product-page-images/product-image-5.png" 
													className="self-stretch h-[54px] object-fill"
												/>
									</div>
									<span className="text-[#1F2429] text-xs font-bold mx-10" >
										{"65 mg"}
									</span>
								</div>
								<div className="flex flex-1 flex-col items-start bg-white py-4 gap-[11px] rounded-2xl border border-solid border-[#E1E9FD]">
									<span className="text-[#1F2429] text-[15px] font-bold mx-[41px]" >
										{"Zinc"}
									</span>
									<div className="flex flex-col self-stretch mx-9">
												<img
													src="/product-page-images/product-image-6.png" 
													className="self-stretch h-[42px] object-fill"
												/>
									</div>
									<span className="text-[#1F2429] text-xs font-bold mx-10" >
										{"15 mg"}
									</span>
								</div>
							</div>
							<span className="text-[#1F2429] text-xs" >
								{"A is antioxidant power in its most elegant form—with grape seed extract, vitamin C, E, zinc, and ginkgo biloba—working together to protect cells from damage, support collagen, and brighten the skin from within.Not just for beauty. For structure.For women who hold the world—and want to hold onto their glow."}
							</span>
						</div>
						<div className="flex flex-col items-start self-stretch bg-white py-4 mb-6 gap-4 rounded-xl border border-solid border-[#E1E9FD]">
							<div className="flex flex-col items-start ml-4 gap-1.5">
								<span className="text-[#1F2429] text-[15px] font-bold mr-[233px]" >
									{"Fast action"}
								</span>
								<span className="text-[#1F2429] text-sm w-[305px]" >
									{"The usage of highly active extracts with improved bioavailability."}
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch mx-4 gap-1.5">
								<span className="text-[#1F2429] text-[15px] font-bold mr-[255px]" >
									{"Efficiency"}
								</span>
								<span className="text-[#1F2429] text-sm" >
									{"The complex includes well-known and well-studied components that have undergone prolonged clinical studies."}
								</span>
							</div>
							<div className="flex flex-col items-start ml-4 gap-1.5">
								<span className="text-[#1F2429] text-[15px] font-bold mr-[171px]" >
									{"Plant-derived capsule"}
								</span>
								<span className="text-[#1F2429] text-sm" >
									{"Suitable for vegetarians, does not contain paraffins."}
								</span>
							</div>
						</div>
										<img
											src="/product-page-images/product-image-7.png" 
											className="self-stretch h-[203px] mb-[25px] rounded-3xl object-fill"
										/>
						<div className="flex flex-col items-start self-stretch bg-white py-[15px] mb-6 gap-1.5 rounded-xl border border-solid border-[#E1E9FD]">
							<span className="text-[#1F2429] text-[15px] font-bold ml-4 mr-[266px]" >
								{"30 capsules"}
							</span>
							<span className="text-[#1F2429] text-sm mx-4" >
								{"An antioxidant formula that protects against infections, toxins and premature aging.• Reduces the risk of developing chronic diseases• Slows down the aging process• Promotes cell regeneration• Supports immunity• Prevents the development of oxidative processesEach capsule of A contains 80 mg of grape seed extract and, when taken daily, helps reduce the risk of cardiovascular disease, cleanse blood vessels and neutralize oxidative processes."}
							</span>
						</div>
						<button className="flex flex-col items-center self-stretch bg-[#1F2429] text-left py-3.5 rounded-[100000px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-[15px]" >
								{`Buy ${productName} Now!`}
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}