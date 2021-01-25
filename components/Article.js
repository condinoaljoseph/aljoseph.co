import Link from 'next/link';
import dayjs from 'dayjs';

const Article = ({ title, date, excerpt }) => {
	return (
		<article>
			<header>
				<h3 className="text-3xl mt-14 mb-2 font-black">
					<Link href="/">
						<a className="text-pink-600 dark:text-pink-400" href="#">
							{title}
						</a>
					</Link>
				</h3>
				<small>{dayjs(date).format('MMM DD YYYY')} • ☕️ 1 min read</small>
			</header>
			<p className="mb-7">{excerpt}</p>
		</article>
	);
};

export default Article;