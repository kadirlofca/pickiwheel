import Link from "next/link";

export default function Entry({ children }: { children: React.ReactNode }) {
	return (
		<Link href="#" className="group/entry py-secondary no-underline">
			<h2 className="not-prose text-2xl text-primary font-medium text-pretty drop-shadow drop-shadow-black/5 group-hover/entry:text-primary-highlight group-hover/entry:drop-shadow-black/10">
				{children}
			</h2>
		</Link>
	);
}
