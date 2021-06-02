import Link from 'next/link';

const CustomLink = (props) => {
	const { href } = props;
	const isInternalLink = href && (href.startsWith('#') || href.startsWith('/'));

	if (isInternalLink) {
		return (
			<Link href={href}>
				<a
					className="no-underline text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
					{...props}
				/>
			</Link>
		);
	}

	return (
		<a
			className="no-underline text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		/>
	);
};

export default CustomLink;
