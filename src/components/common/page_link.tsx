import Link from "next/link"
import {ReactNode} from "react"

import {cn} from "@/lib/styles"

interface Props {
	children: ReactNode
	href: string
	className?: string
}
const attributes = (href: string, ...rest: string[]) => {
	if (href.startsWith("https")) {
		return {
			href,
			...rest,
			target: "_blank",
			rel: "noopener noreferrer",
		}
	}
	return {
		href,
		...rest,
	}
}

function PageLink({children, href, className}: Props) {
	return (
		<Link
			className={cn(
				"inline-block relative pb-[2px] text-slate-600 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-slate-900 after:transition-all after:content-[''] hover:after:w-full   dark:text-slate-300  dark:after:bg-slate-50 font-bold",
				className
			)}
			{...attributes(href)}
		>
			{children}
		</Link>
	)
}

export default PageLink