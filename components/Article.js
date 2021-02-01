import Link from 'next/link';
import BlogDate from './BlogDate';

const Article = ({ title, date, excerpt, slug }) => {
	return (
		<article>
			<header>
				<h3 className="text-3xl mt-14 mb-2 font-black font-sans">
					<Link as={`/posts/${slug}`} href="/posts/[slug]">
						<a className="text-pink-600 dark:text-pink-300 ">{title}</a>
					</Link>
				</h3>
				<BlogDate date={date} minutes={6} />
			</header>
			<p className="mb-7 text-lg">{excerpt}</p>
		</article>
	);
};

export default Article;
