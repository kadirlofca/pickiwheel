import Footer from "./Footer";
import Wheel from "./Wheel";

export default function Navbar() {
	return (
		<nav className="fixed flex h-screen">
			{/* Navbar content */}
			<div className="flex flex-col justify-between max-w-80 h-full p-primary text-right bg-accent">
				<h1 className="text-base font-normal text-primary hover:text-primary-highlight">
					User Name
				</h1>

				<Wheel
					entries={[
						"Title",
						"A Longer Title",
						"A Pretty Long Title",
						"The Longest Title That Looks Pretty Good",
						"Title",
						"A Longer Title",
						"A Pretty Long Title",
						"The Longest Title That Looks Pretty Good",
						"Title",
						"A Longer Title",
						"A Pretty Long Title",
						"The Longest Title That Looks Pretty Good",
					]}
				/>

				<Footer />
			</div>

			{/* Decorative */}
			<div className="h-full w-primary bg-accent">
				<div className="h-full w-full bg-primary rounded-l-full shadow-[-10px_0_8px_rgba(0,0,0,0.05)]"></div>
			</div>
		</nav>
	);
}
