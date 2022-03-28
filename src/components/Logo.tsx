import Link from 'next/link';
import { useRouter } from 'next/router';

const Logo = () => {
	const router = useRouter();
	const isIndex = router.pathname === '/';

	return isIndex ? (
		<h1 className="font-mono">
			<Link href="/">
				<a className="text-xl text-gray-900 dark:text-gray-200">aljoseph.co</a>
			</Link>
		</h1>
	) : (
		<h4 className="font-mono">
			<Link href="/">
				<a className="text-xl text-pink-600 dark:text-pink-300 leading-9">
					aljoseph.co
				</a>
			</Link>
		</h4>
	);
};

export default Logo;
