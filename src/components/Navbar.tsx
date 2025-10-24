import WheelEntry from "./WheelEntry";

export default function Navbar() {
	return (
		<nav className="fixed flex h-screen">
			{/* Navbar content */}
			<div className="max-w-80 h-full p-primary text-right bg-accent">
				<h1 className="text-base font-normal text-primary hover:text-primary-highlight">
					User Name
				</h1>
				<WheelEntry>Title</WheelEntry>
				<WheelEntry>A Longer Title</WheelEntry>
				<WheelEntry>A Pretty Long Title</WheelEntry>
				<WheelEntry>The Longest Title That Looks Pretty Good</WheelEntry>
			</div>

			{/* Decorative */}
			<div className="h-full w-primary bg-accent">
				<div className="h-full w-full bg-primary-highlight rounded-l-full"></div>
			</div>
		</nav>
	);
}
