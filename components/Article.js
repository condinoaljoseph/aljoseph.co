import Link from 'next/link';

const Article = () => {
	return (
		<article>
			<header>
				<h3 className="text-3xl mt-14 mb-2 font-black">
					<Link href="/">
						<a className="text-pink-600 dark:text-pink-400" href="#">
							Lorem ipsum dolor sit.
						</a>
					</Link>
				</h3>
				<small>July 13, 2020 • ☕️ 1 min read</small>
			</header>
			<p className="mb-7">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
				dictum.
			</p>
		</article>
	);
};

export default Article;
