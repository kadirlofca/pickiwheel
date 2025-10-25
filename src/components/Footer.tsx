import Link from "next/link";

export default function Footer() {
	return (
		<footer>
			<Link
				href="mailto:potato@tomato.com"
				className="text-sm text-primary hover:text-primary-highlight"
			>
				potato@tomato.com
			</Link>
		</footer>
	);
}
