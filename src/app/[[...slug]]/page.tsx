"use client";

import { useParams } from "next/navigation";

export default function Page() {
	const params = useParams();
	// params.slug will be undefined for "/", or an array for catch-all routes
	return <p>Post: {Array.isArray(params.slug) ? params.slug.join("/") : "Home"}</p>;
}
