import React from 'react';

const Footer = () => {
	return (
		<footer className="mt-20 pt-7 text-xl">
			<a
				className="text-pink-600 dark:text-pink-300 underline"
				href="https://twitter.com/condino_aj"
				target="_blank"
				rel="noopener"
			>
				twitter
			</a>{' '}
			&bull;{' '}
			<a
				className="text-pink-600 dark:text-pink-300 underline"
				href="https://github.com/condinoaljoseph"
				target="_blank"
				rel="noopener"
			>
				github
			</a>{' '}
			&bull;{' '}
			<a
				className="text-pink-600 dark:text-pink-300 underline"
				href="https://stackoverflow.com/users/9043355/elpmid"
				target="_blank"
				rel="noopener"
			>
				stack overflow
			</a>
		</footer>
	);
};

export default Footer;
