export default function WheelEntry({ children }: { children: React.ReactNode }) {
	return (
		<div className="group/wheelentry p-secondary rounded-2xl hover:bg-primary-highlight">
			<h2 className="not-prose text-2xl text-primary font-medium text-pretty group-hover/wheelentry:text-accent-highlight">
				{children}
			</h2>
		</div>
	);
}
