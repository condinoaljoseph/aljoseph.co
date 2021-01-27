import Link from 'next/link';
import { useRouter } from 'next/router';

const Logo = () => {
	const router = useRouter();
	const isIndex = router.pathname === '/';
	const className = isIndex
		? `text-3xl font-black`
		: `text-2xl font-black text-pink-600 dark:text-pink-400 leading-9`;

	return (
		<h1>
			<Link href="/">
				<a className={className}>elpmid</a>
			</Link>
		</h1>
	);
};

export default Logo;
