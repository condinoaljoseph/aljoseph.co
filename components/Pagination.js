import Link from 'next/link';

const Pagination = ({ pagination }) => {
	const { prevPage, nextPage } = pagination;

	return (
		<nav>
			<ul className="text-lg grid lg:grid-cols-2 space-y-4 lg:space-y-0">
				<li>
					{prevPage.url && (
						<Link as={`/posts/${prevPage.url}`} href="/posts/[slug]">
							<a className="group text-pink-600 dark:text-pink-300 flex flex-col">
								<span>← Previous</span>
								<span className="font-sans underline group-hover:no-underline">{prevPage.title}</span>
							</a>
						</Link>
					)}
				</li>
				<li className="lg:text-right">
					{nextPage.url && (
						<Link as={`/posts/${nextPage.url}`} href="/posts/[slug]">
							<a className="group text-pink-600 dark:text-pink-300 flex flex-col">
								<span>Next →</span>
								<span className="font-sans underline group-hover:no-underline">{nextPage.title}</span>
							</a>
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
