import Link from 'next/link';

const Pagination = ({ pagination }) => {
	const { prevPage, nextPage } = pagination;

	return (
		<nav>
			<ul className="text-lg flex justify-between list-none">
				<li className="pr-3">
					{prevPage.url && (
						<Link as={`/posts/${prevPage.url}`} href="/posts/[slug]">
							<a className="text-pink-600 dark:text-pink-300 ">
								← {prevPage.title}
							</a>
						</Link>
					)}
				</li>
				<li className="pl-3">
					{nextPage.url && (
						<Link as={`/posts/${nextPage.url}`} href="/posts/[slug]">
							<a className="text-pink-600 dark:text-pink-300 ">
								{nextPage.title} →
							</a>
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
