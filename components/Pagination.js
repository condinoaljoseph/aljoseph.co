import Link from 'next/link';

const Pagination = ({ pagination }) => {
	const { prevPage, nextPage } = pagination;

	return (
		<nav>
			<ul className="text-lg flex justify-between">
				<li>
					{prevPage.url && (
						<Link as={`/posts/${prevPage.url}`} href="/posts/[slug]">
							<a className="text-pink-600 dark:text-pink-300 ">
								← {prevPage.title}
							</a>
						</Link>
					)}
				</li>
				<li>
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
