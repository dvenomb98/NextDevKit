
import { URLS } from "@/lib/urls";
import { ZapIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

const Logo: FC = () => {
	return (
		<Link href={URLS.HOMEPAGE} className="flex items-center gap-2 component-focus rounded-md">
			<ZapIcon className="w-5 h-5 fill-current" />
			<h1 className="inline-flex flex-col gap-0 leading-none font-medium">
				<span>DA</span>
				<span className="font-bold">NIEL.</span>
			</h1>
		</Link>
	);
};

export default Logo;