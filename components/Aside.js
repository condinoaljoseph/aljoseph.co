import Logo from './Logo';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Aside = () => {
	const router = useRouter();
	const isIndex = router.pathname === '/';

	return (
		<aside>
			{!isIndex && (
				<div className="mb-7">
					<Logo />
				</div>
			)}
			<div className="flex mb-14 items-center text-lg">
				<Image
					src="/assets/author/aljoseph.jpg"
					alt="Al Joseph Condino"
					width={56}
					height={56}
					className=" rounded-full"
				/>
				<p className="ml-3.5 max-w-xs">
					Personal blog by{' '}
					<a
						className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
						href="https://twitter.com/condino_aj"
						target="_blank"
						rel="noopener"
					>
						Al Joseph Condino
					</a>
					.<span className="block">I explain with words and code.</span>
				</p>
			</div>
		</aside>
	);
};

export default Aside;
