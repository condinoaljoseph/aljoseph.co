import Link from 'next/link';
import { useRouter } from 'next/router';

const Logo = () => {
	const router = useRouter();
	const isIndex = router.pathname === '/';
	const className = isIndex
		? `text-3xl`
		: `text-2xl text-pink-600 dark:text-pink-400 leading-9`;

	return (
		<h1 className="font-sans font-black">
			<Link href="/">
				<a className={className}>aljoseph.co</a>
			</Link>
		</h1>
	);
};

export default Logo;
