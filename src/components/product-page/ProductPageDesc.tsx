import React from "react";
export default ({ answers = {}, productName = 'Antiox' }: { answers?: Record<string, any>, productName?: string }) => {
	return (
		<div className="items-start bg-white">
			<div className="bg-white w-[1440px]">
				<div className="self-stretch">
					<div className="flex flex-col items-start self-stretch bg-[url('/product-page-images/product-image-8.png')] bg-cover bg-center pt-[50px] pb-[434px]">
						<button className="flex flex-col items-start bg-[#1F2429] text-left py-[3px] ml-[351px] rounded-[40px] border border-solid border-white"
							onClick={()=>alert("Pressed!")}>
												<img
													src="/product-page-images/product-image-9.png" 
													className="w-[23px] h-[23px] mx-[3px] rounded-[40px] object-fill"
												/>
						</button>
					</div>
					<div className="flex flex-col items-center self-stretch bg-white py-16 px-[50px] gap-16 rounded-[32px]">
						<div className="flex justify-between items-center self-stretch">
							<div className="flex flex-col items-start w-[689px] gap-6">
								<div className="flex items-start self-stretch gap-4">
									<div className="flex flex-col items-center bg-white w-[219px] py-4 px-[41px] gap-3 rounded-2xl border border-solid border-[#E1E9FD]">
										<span className="text-[#1F2429] text-2xl" >
											{"Grape Seeds"}
										</span>
										<div className="flex flex-col items-start">
															<img
																src="/product-page-images/product-image-10.png" 
																className="w-[62px] h-10 object-fill"
															/>
										</div>
										<span className="text-[#1F2429] text-xl" >
											{"80 mg"}
										</span>
									</div>
									<div className="flex flex-col items-center bg-white w-[219px] py-4 px-[57px] gap-[5px] rounded-2xl border border-solid border-[#E1E9FD]">
										<span className="text-[#1F2429] text-2xl" >
											{"Vitamin C"}
										</span>
										<div className="flex flex-col items-start">
															<img
																src="/product-page-images/product-image-11.png" 
																className="w-[54px] h-[54px] object-fill"
															/>
										</div>
										<span className="text-[#1F2429] text-xl" >
											{"65 mg"}
										</span>
									</div>
									<div className="flex flex-col items-center bg-white w-[219px] py-4 px-[82px] gap-[11px] rounded-2xl border border-solid border-[#E1E9FD]">
										<span className="text-[#1F2429] text-2xl" >
											{"Zinc"}
										</span>
										<div className="flex flex-col items-start">
															<img
																src="/product-page-images/product-image-12.png" 
																className="w-[42px] h-[42px] object-fill"
															/>
										</div>
										<span className="text-[#1F2429] text-xl" >
											{"15 mg"}
										</span>
									</div>
								</div>
								<span className="text-[#1F2429] text-lg w-[676px]" >
									{"A is antioxidant power in its most elegant form—with grape seed extract, vitamin C, E, zinc, and ginkgo biloba—working together to protect cells from damage, support collagen, and brighten the skin from within.Not just for beauty. For structure.For women who hold the world—and want to hold onto their glow."}
								</span>
							</div>
							<div className="flex flex-col items-center w-[362px] pt-3 px-[62px] gap-6">
								<div className="flex flex-col items-center self-stretch">
														<img
															src="/product-page-images/product-image-13.png" 
															className="w-[237px] h-[225px] object-fill"
														/>
								</div>
								<span className="text-[#EA4B94] text-[28px] font-bold" >
									{productName}
								</span>
							</div>
						</div>
										<img
											src="/product-page-images/product-image-14.png" 
											className="w-[1000px] h-[563px] rounded-[32px] object-fill"
										/>
						<div className="flex items-start self-stretch gap-6">
							<div className="flex flex-col items-start bg-white w-[658px] pt-4 pb-24 gap-4 rounded-xl border border-solid border-[#E1E9FD]">
								<div className="flex flex-col items-start w-[509px] ml-4 mr-[133px] gap-6">
									<span className="text-[#1F2429] text-2xl" >
										{"Fast action"}
									</span>
									<span className="text-[#1F2429] text-lg" >
										{"The usage of highly active extracts with improved bioavailability."}
									</span>
								</div>
								<div className="flex flex-col items-start w-[585px] ml-4 mr-[57px] gap-6">
									<span className="text-[#1F2429] text-2xl" >
										{"Efficiency"}
									</span>
									<span className="text-[#1F2429] text-lg w-[585px]" >
										{"The complex includes well-known and well-studied components that have undergone prolonged clinical studies."}
									</span>
								</div>
								<div className="flex flex-col items-start w-[408px] ml-4 mr-[234px] gap-6">
									<span className="text-[#1F2429] text-2xl" >
										{"Plant-derived capsule"}
									</span>
									<span className="text-[#1F2429] text-lg" >
										{"Suitable for vegetarians, does not contain paraffins."}
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start bg-white w-[658px] p-4 gap-6 rounded-xl border border-solid border-[#E1E9FD]">
								<span className="text-[#1F2429] text-2xl" >
									{"30 capsules"}
								</span>
								<span className="text-[#1F2429] text-lg w-[622px]" >
									{"An antioxidant formula that protects against infections, toxins and premature aging.• Reduces the risk of developing chronic diseases• Slows down the aging process• Promotes cell regeneration• Supports immunity• Prevents the development of oxidative processesEach capsule of A contains 80 mg of grape seed extract and, when taken daily, helps reduce the risk of cardiovascular disease, cleanse blood vessels and neutralize oxidative processes."}
								</span>
							</div>
						</div>
						<button className="flex flex-col items-center bg-[#1F2429] text-left w-[362px] py-[15px] rounded-[100000px] border-0"
							onClick={()=>alert("Pressed!")}>
							<div className="flex flex-col items-start">
								<span className="text-white text-[15px]" >
									{`Buy ${productName} Now!`}
								</span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}