import Link from 'next/link';

const Pagination = ({ pagination }) => {
	const { prev, next } = pagination;

	return (
		<nav>
			<ul className="text-lg flex justify-between">
				<li>
					{prev && (
						<Link as={`/posts/${prev}`} href="/posts/[slug]">
							<a className="text-pink-600 dark:text-pink-300 ">← {prev}</a>
						</Link>
					)}
				</li>
				<li>
					{next && (
						<Link as={`/posts/${next}`} href="/posts/[slug]">
							<a className="text-pink-600 dark:text-pink-300 ">{next} →</a>
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
