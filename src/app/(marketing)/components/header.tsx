import {Link} from "@/components/ui/link";

import {HeaderContent} from "./header-content";

export default function MarketingHeader() {
	return (
		<header className="sticky left-0 top-0 z-10 mb-10 bg-gray-50 dark:bg-gray-950 dark:text-gray-50">
			<div className="mx-auto flex max-w-4xl items-center justify-between px-2 py-5">
				<Link href="/" variant="subtile" disableActive>
					<strong className="uppercase hover:opacity-60">
						<span className="text-base tracking-normal text-gray-900   dark:text-primary-100">
							<span className="text-gray-950 dark:text-gray-300">Marcell</span>
							<span className="text-gray-600 dark:text-gray-400">Ciszek</span>
							<span className="text-gray-500 dark:text-gray-500">
								Druzynski
							</span>
						</span>
					</strong>
				</Link>
				<HeaderContent />
			</div>
		</header>
	);
}
