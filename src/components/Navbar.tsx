import Wheel from "./Wheel";

export default function Navbar() {
	return (
		<nav className="fixed flex h-screen">
			{/* Navbar content */}
			<div className="h-full p-primary text-right text-primary bg-accent">
				<h1 className="text-base font-normal hover:text-primary-highlight">
					Jordin Hipps
				</h1>
				<h2 className="text-2xl">Title</h2>
			</div>

			{/* Decorative */}
			<div className="h-full w-primary bg-accent">
				<div className="h-full w-full bg-primary rounded-l-full"></div>
			</div>
		</nav>
	);
}
