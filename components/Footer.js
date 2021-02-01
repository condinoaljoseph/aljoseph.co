import React from 'react';

const Footer = () => {
	return (
		<footer className="mt-20 pt-7 text-xl">
			<a
				className="text-pink-500 dark:text-pink-300 underline"
				href="https://twitter.com/condino_aj"
				target="_blank"
			>
				twitter
			</a>{' '}
			&bull;{' '}
			<a
				className="text-pink-500 dark:text-pink-300 underline"
				href="https://github.com/condinoaljoseph"
				target="_blank"
			>
				github
			</a>{' '}
			&bull;{' '}
			<a
				className="text-pink-500 dark:text-pink-300 underline"
				href="https://stackoverflow.com/users/9043355/elpmid"
				target="_blank"
			>
				stack overflow
			</a>
		</footer>
	);
};

export default Footer;
