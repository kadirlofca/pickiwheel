import Entry from "./Entry";

interface WheelProps {
	entries: string[];
}

export default function Wheel({ entries }: WheelProps) {
	return (
		<div
			className="flex flex-col max-h-1/2 overflow-y-scroll"
			style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
		>
			{entries.map((entry, idx) => (
				<Entry key={idx}>{entry}</Entry>
			))}
		</div>
	);
}
