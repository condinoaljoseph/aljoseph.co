import Link from 'next/link';
import BlogDate from './BlogDate';

const Article = ({ title, date, excerpt, slug, readingTime }) => {
	return (
		<article>
			<header className="mb-2">
				<h2 className="text-xxl mt-10 mb-2 font-serif font-bold">
					<Link as={`/posts/${slug}`} href="/posts/[slug]">
						<a className="text-pink-600 dark:text-pink-300">{title}</a>
					</Link>
				</h2>
				<BlogDate date={date} minutes={readingTime} />
			</header>
			<p className="mb-7 text-base text-gray-700 dark:text-gray-400">
				{excerpt}
			</p>
		</article>
	);
};

export default Article;
