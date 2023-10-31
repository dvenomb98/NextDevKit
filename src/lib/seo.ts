import { Metadata } from "next";
import siteMetadata from "@/app/data/siteMetadata";


interface PageSEOProps {
	title: string;
	description?: string;
	image?: string;
	[key: string]: any;
}

export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
	return {
		title,
		openGraph: {
			title: `${title} | ${siteMetadata.title}`,
			description: description || siteMetadata.description,
			url: "./",
			siteName: siteMetadata.title,
			locale: "en",
			type: "website",
		},
		twitter: {
			title: `${title} | ${siteMetadata.title}`,
			card: "summary_large_image",
		},
		...rest,
	};
}