import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

const nunitoSans = Nunito_Sans({
	variable: "--font-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Jordin Hipps",
	description: "Portfolio of Social Media Marketer Jordin Hipps",
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`prose prose-invert max-w-full antialiased ${nunitoSans.variable}`}
			>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
