import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

type AgeCarouselProps = {
	min?: number;
	max?: number;
	value: number | null | undefined;
	onChange: (age: number) => void;
};

// A horizontally scrollable, center-snap number picker.
// Numbers closer to the center pointer scale up.
export default function AgeCarousel({ min = 16, max = 90, value, onChange }: AgeCarouselProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const itemWidth = 48; // px width reserved per number
	const [containerWidth, setContainerWidth] = useState(0);
	const [viewportWidth, setViewportWidth] = useState(0);
	const [spacerWidth, setSpacerWidth] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const numbers = useMemo(() => {
		const arr: number[] = [];
		for (let i = min; i <= max; i++) arr.push(i);
		return arr;
	}, [min, max]);

	// Default to 37 if value is not set/invalid
	const selected = useMemo(() => {
		const parsed = typeof value === "number" && value >= min && value <= max ? value : 37;
		return parsed;
	}, [value, min, max]);

	// Track container width, paddings and derived viewport width/spacer width
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		const updateSize = () => {
			const cw = el.clientWidth;
			setContainerWidth(cw);
			const styles = getComputedStyle(el);
			const padL = parseFloat(styles.paddingLeft || "0");
			const padR = parseFloat(styles.paddingRight || "0");
			const vw = Math.max(0, cw - padL - padR);
			setViewportWidth(vw);
			setSpacerWidth(Math.max(0, vw / 2 - itemWidth / 2));
		};
		updateSize();
		const ro = new ResizeObserver(updateSize);
		ro.observe(el);
		return () => ro.disconnect();
	}, [itemWidth]);

	// Helper: snap to nearest with smooth behavior (usable from anywhere)
	const snapToNearestPublic = useCallback(() => {
		const container = containerRef.current;
		if (!container) return;
		const contentCenter = container.scrollLeft + viewportWidth / 2;
		const rawIndex = (contentCenter - spacerWidth - itemWidth / 2) / itemWidth;
		let nearestIndex = Math.round(rawIndex);
		if (nearestIndex < 0) nearestIndex = 0;
		if (nearestIndex > numbers.length - 1) nearestIndex = numbers.length - 1;
		const targetLeft = spacerWidth + nearestIndex * itemWidth + itemWidth / 2 - viewportWidth / 2;
		container.scrollTo({ left: targetLeft, behavior: "smooth" });
		const newValue = numbers[nearestIndex];
		if (newValue !== value) onChange(newValue);
	}, [numbers, itemWidth, spacerWidth, value, onChange, viewportWidth]);

	// Keyboard navigation (arrow keys)
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowLeft') {
				e.preventDefault();
				const currentIndex = numbers.indexOf(selected);
				if (currentIndex > 0) {
					onChange(numbers[currentIndex - 1]);
				}
			} else if (e.key === 'ArrowRight') {
				e.preventDefault();
				const currentIndex = numbers.indexOf(selected);
				if (currentIndex < numbers.length - 1) {
					onChange(numbers[currentIndex + 1]);
				}
			}
		};

		container.addEventListener('keydown', onKeyDown);
		return () => {
			container.removeEventListener('keydown', onKeyDown);
		};
	}, [selected, numbers, onChange]);

	// Scroll to selected on mount/update
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		const index = selected - min;
		const targetX = spacerWidth + index * itemWidth + itemWidth / 2 - viewportWidth / 2;
		container.scrollTo({ left: targetX, behavior: "instant" as ScrollBehavior });
	}, [selected, min, spacerWidth, viewportWidth, itemWidth]);

	// On scroll end, snap to nearest index and notify
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		let rafId = 0;
		let lastScrollLeft = container.scrollLeft;
		let ticking = false;

		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				rAF();
			}
		};

		const rAF = () => {
			rafId = requestAnimationFrame(() => {
				const current = container.scrollLeft;
				if (isDragging) {
					// don't snap while actively dragging
					lastScrollLeft = current;
					rAF();
					return;
				}
				if (Math.abs(current - lastScrollLeft) < 0.5) {
					// consider scroll stopped -> snap
					snapToNearestPublic();
					ticking = false;
					return;
				}
				lastScrollLeft = current;
				rAF();
			});
		};

    const onWheel = (e: WheelEvent) => {
        // Translate vertical wheel to horizontal scroll for better desktop UX
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            e.stopPropagation();
            
            const currentIndex = numbers.indexOf(selected);
            if (e.deltaY > 0 && currentIndex < numbers.length - 1) {
                // Scroll down -> move right
                onChange(numbers[currentIndex + 1]);
            } else if (e.deltaY < 0 && currentIndex > 0) {
                // Scroll up -> move left
                onChange(numbers[currentIndex - 1]);
            }
        }
    };

		container.addEventListener("scroll", onScroll, { passive: true });
		container.addEventListener("wheel", onWheel, { passive: false });
		return () => {
			container.removeEventListener("scroll", onScroll as any);
			container.removeEventListener("wheel", onWheel as any);
			cancelAnimationFrame(rafId);
		};
	}, [numbers, itemWidth, onChange, value, spacerWidth, snapToNearestPublic, isDragging, viewportWidth, selected]);

	return (
		<div className="w-full pt-8">
			<div className="relative border border-gray-200 rounded-2xl p-4">
				<div className="flex items-center justify-between pb-4">
					<div className="text-sm text-gray-600 z-60 font-medium">Age</div>
					<div className="text-sm text-gray-600 z-60 font-medium">years old</div>
				</div>
				{/* Center pointer (bottom, small blue triangle) */}
				<div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-16 flex items-end z-50">
					<div className="w-0 h-0 border-l-8 border-r-8 border-b-[18px] border-l-transparent border-r-transparent border-b-[#00A8E2]" />
				</div>

				<div className="relative">
					<div
						ref={containerRef}
						className={`relative overflow-x-auto px-4 age-scroll select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
						style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", msOverflowStyle: "none", scrollbarWidth: "none", scrollBehavior: 'smooth', touchAction: 'pan-x' }}
						tabIndex={0}
					>
						<div className="relative flex items-center h-16" style={{ width: spacerWidth * 2 + numbers.length * itemWidth }}>
							{/* Left spacer to allow first value to center */}
							<div style={{ width: spacerWidth }} />
							{numbers.map((n, i) => (
								<ScaleItem key={n} index={i} itemWidth={itemWidth} spacerWidth={spacerWidth} viewportWidth={viewportWidth} value={n} onClick={() => onChange(n)}>
									{n}
								</ScaleItem>
							))}
							{/* Right spacer to allow last value to center */}
							<div style={{ width: spacerWidth }} />
						</div>
					</div>
					{/* Edge fades (in wrapper so not clipped, below pointer) */}
					<div className="pointer-events-none absolute inset-y-0 left-0 w-12 z-40 bg-gradient-to-r from-white to-white/0" />
					<div className="pointer-events-none absolute inset-y-0 right-[-2px] w-12 z-40 bg-gradient-to-l from-white to-white/0" />
				</div>
			</div>
			{/*<div className="mt-3 text-center font-semibold text-[#1F2429]">{selected}</div>*/}

			{/* Scoped style to hide scrollbar for WebKit */}
			<style>{`
				.age-scroll::-webkit-scrollbar { display: none; height: 0; width: 0; }
			`}</style>
		</div>
	);
}

function ScaleItem({ index, itemWidth, spacerWidth, viewportWidth, value, onClick, children }: { index: number; itemWidth: number; spacerWidth: number; viewportWidth: number; value: number; onClick: () => void; children: React.ReactNode; }) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [scale, setScale] = React.useState(1);
	const [opacity, setOpacity] = React.useState(0.6);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const container = el.parentElement?.parentElement as HTMLDivElement | null; // scroll container
		if (!container) return;

		let rafId = 0;
		const update = () => {
			rafId = requestAnimationFrame(() => {
				const elCenter = spacerWidth + index * itemWidth + itemWidth / 2 - container.scrollLeft;
				const dist = Math.abs(elCenter - viewportWidth / 2);
				// Only the exact center item (within half item width) should be large
				const isCenter = dist <= itemWidth * 0.5;
				// Smoothly ease values instead of abrupt jumps
				const targetScale = isCenter ? 2.2 : 1;
				const targetOpacity = isCenter ? 1 : 0.6;
				setScale((prev) => prev + (targetScale - prev) * 0.2);
				setOpacity((prev) => prev + (targetOpacity - prev) * 0.2);
				update();
			});
		};
		update();
		return () => cancelAnimationFrame(rafId);
	}, [index, itemWidth, spacerWidth, viewportWidth]);

	return (
		<div
			ref={ref}
			className="flex items-center justify-center select-none cursor-pointer hover:opacity-80 transition-opacity"
			style={{ width: itemWidth, scrollSnapAlign: "center", transform: `scale(${scale})`, opacity }}
			onClick={onClick}
		>
			<div className="text-lg text-[#1F2429] font-bold">{children}</div>
		</div>
	);
}


