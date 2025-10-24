"use client";

import React, { useRef, useState } from "react";

const items = [
	"Apple",
	"Banana",
	"Cherry",
	"Date",
	"Fig",
	"Grape",
	"Lemon",
	"Mango",
	"Orange",
	"Peach",
];

export default function Wheel() {
	const [selected, setSelected] = useState(0);
	const listRef = useRef<HTMLDivElement>(null);
	const touchStartY = useRef<number | null>(null);
	const scrollStart = useRef<number>(0);

	const visibleCount = 5;
	const itemHeight = 40;

	const scrollToIndex = (idx: number) => {
		setSelected(idx);
		if (listRef.current) {
			listRef.current.scrollTo({
				top: Math.max(0, idx * itemHeight - (visibleCount >> 1) * itemHeight),
				behavior: "smooth",
			});
		}
	};

	const handleWheel = (e: React.WheelEvent) => {
		e.preventDefault();
		let next = selected + (e.deltaY > 0 ? 1 : -1);
		next = Math.max(0, Math.min(items.length - 1, next));
		scrollToIndex(next);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartY.current = e.touches[0].clientY;
		scrollStart.current = listRef.current?.scrollTop || 0;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (touchStartY.current !== null && listRef.current) {
			const delta = touchStartY.current - e.touches[0].clientY;
			listRef.current.scrollTop = scrollStart.current + delta;
		}
	};

	const handleTouchEnd = () => {
		if (listRef.current) {
			const idx = Math.round(listRef.current.scrollTop / itemHeight);
			scrollToIndex(idx);
		}
		touchStartY.current = null;
	};

	const handleClick = (idx: number) => {
		scrollToIndex(idx);
	};

	const handleScroll = () => {
		if (listRef.current) {
			const idx = Math.round(listRef.current.scrollTop / itemHeight);
			setSelected(idx);
		}
	};

	React.useEffect(() => {
		scrollToIndex(selected);
		// eslint-disable-next-line
	}, []);

	return (
		<div
			style={{
				width: 200,
				height: itemHeight * visibleCount,
				overflow: "hidden",
				position: "relative",
				borderRadius: 12,
				border: "1px solid #ccc",
				background: "#f9f9f9",
				boxShadow: "0 2px 8px #0001",
				userSelect: "none",
			}}
		>
			<div
				ref={listRef}
				style={{
					height: "100%",
					overflowY: "scroll",
					scrollSnapType: "y mandatory",
				}}
				onWheel={handleWheel}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				onScroll={handleScroll}
			>
				{items.map((item, idx) => (
					<div
						key={item}
						onClick={() => handleClick(idx)}
						style={{
							height: itemHeight,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							cursor: "pointer",
							background:
								idx === selected
									? "linear-gradient(90deg, #e0eaff 0%, #c0d8ff 100%)"
									: "transparent",
							fontWeight: idx === selected ? "bold" : "normal",
							fontSize: idx === selected ? 20 : 16,
							scrollSnapAlign: "center",
							transition: "background 0.2s, font-size 0.2s",
						}}
					>
						{item}
					</div>
				))}
			</div>
			<div
				style={{
					pointerEvents: "none",
					position: "absolute",
					top: "40%",
					left: 0,
					right: 0,
					height: itemHeight,
					borderTop: "2px solid #007aff",
					borderBottom: "2px solid #007aff",
					zIndex: 1,
				}}
			/>
		</div>
	);
}
