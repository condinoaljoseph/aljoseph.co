import { getPagination } from 'lib/helpers';
import Link from 'next/link';

export function Pagination({ page }: { page: string }) {
	const { prevPage, nextPage } = getPagination(page);

	return (
		<nav>
			<ul className="text-base flex justify-between list-none">
				<li className="pr-3">
					{prevPage.url && (
						<Link href={`/posts/${prevPage.url}`} className="text-pink-600 dark:text-pink-300 ">
							← {prevPage.title}
						</Link>
					)}
				</li>
				<li className="pl-3">
					{nextPage.url && (
						<Link href={`/posts/${nextPage.url}` }className="text-pink-600 dark:text-pink-300 ">
							{nextPage.title} →
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
};

