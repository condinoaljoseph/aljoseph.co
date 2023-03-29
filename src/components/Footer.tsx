export function Footer() {
	return (
		<footer className="mt-18 pt-7 text-base flex justify-between">
			<div>
				<a
					className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
					href="https://twitter.com/condino_aj"
					target="_blank"
					rel="noopener noreferrer"
				>
					twitter
				</a>{' '}
				&bull;{' '}
				<a
					className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
					href="https://github.com/condinoaljoseph"
					target="_blank"
					rel="noopener noreferrer"
				>
					github
				</a>{' '}
				&bull;{' '}
				<a
					className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none justify-self-end"
					href="https://stackoverflow.com/users/9043355/elpmid"
					target="_blank"
					rel="noopener noreferrer"
				>
					stack overflow
				</a>
			</div>
			<div>
				<a
					className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none justify-self-end"
					href="https://aljoseph.co/feed.xml"
					target="_blank"
					rel="noopener noreferrer"
				>
					rss
				</a>
			</div>
		</footer>
	);
};