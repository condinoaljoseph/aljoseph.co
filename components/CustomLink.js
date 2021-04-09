import Link from 'next/link';

const CustomLink = (props) => {
	const { href } = props;
	const isInternalLink = href && (href.startsWith('#') || href.startsWith('/'));

	if (isInternalLink) {
		return (
			<Link href={href}>
				<a {...props} />
			</Link>
		);
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export default CustomLink;
