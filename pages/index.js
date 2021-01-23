import Switch from 'react-switch';

import { useTheme } from '../utils/themeContext';

export default function Home() {
	const { toggleTheme, theme } = useTheme();

	return (
		<div className={`${theme ? 'dark' : ''}`}>
			<div className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 min-h-screen">
				<div className="max-w-2xl mx-auto py-10 px-6">
					<header className="flex justify-between items-center mb-10">
						<h1>
							<a className="text-3xl font-black" href="#">
								elpmid.
							</a>
						</h1>
						<Switch
							checked={theme}
							checkedIcon={false}
							uncheckedIcon={false}
							height={24}
							width={50}
							offColor={'#0f1114'}
							onColor={'#0f1114'}
							onChange={toggleTheme}
						/>
					</header>
					<aside>
						<div className="flex mb-14 items-center">
							<img
								src="https://pbs.twimg.com/profile_images/1234630674138587136/0GlknSwT_400x400.jpg"
								alt="Al Joseph Condino"
								className="mr-3.5 w-14 h-14 rounded-full"
							/>
							<p className="max-w-xs">
								Personal blog by{' '}
								<a
									className="text-pink-500 dark:text-pink-300 underline"
									href="https://twitter.com/condino_aj"
									target="_blank"
								>
									Al Joseph Condino
								</a>
								.<span className="block">I explain with words and code.</span>
							</p>
						</div>
					</aside>
					<main>
						<article>
							<header>
								<h3 className="text-3xl mt-14 mb-2 font-black">
									<a className="text-pink-600 dark:text-pink-400" href="#">
										Lorem ipsum dolor sit.
									</a>
								</h3>
								<small>July 13, 2020 • ☕️ 1 min read</small>
							</header>
							<p className="mb-7">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Maecenas dictum.
							</p>
						</article>
						<article>
							<header>
								<h3 className="text-3xl mt-14 mb-2 font-black">
									<a className="text-pink-600 dark:text-pink-400" href="#">
										Lorem ipsum dolor sit.
									</a>
								</h3>
								<small>July 13, 2020 • ☕️ 1 min read</small>
							</header>
							<p className="mb-7">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Maecenas dictum.
							</p>
						</article>
						<article>
							<header>
								<h3 className="text-3xl mt-14 mb-2 font-black">
									<a className="text-pink-600 dark:text-pink-400" href="#">
										Lorem ipsum dolor sit.
									</a>
								</h3>
								<small>July 13, 2020 • ☕️ 1 min read</small>
							</header>
							<p className="mb-7">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Maecenas dictum.
							</p>
						</article>
						<article>
							<header>
								<h3 className="text-3xl mt-14 mb-2 font-black">
									<a className="text-pink-600 dark:text-pink-400" href="#">
										Lorem ipsum dolor sit.
									</a>
								</h3>
								<small>July 13, 2020 • ☕️ 1 min read</small>
							</header>
							<p className="mb-7">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Maecenas dictum.
							</p>
						</article>
						<article>
							<header>
								<h3 className="text-3xl mt-14 mb-2 font-black">
									<a className="text-pink-600 dark:text-pink-400" href="#">
										Lorem ipsum dolor sit.
									</a>
								</h3>
								<small>July 13, 2020 • ☕️ 1 min read</small>
							</header>
							<p className="mb-7">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Maecenas dictum.
							</p>
						</article>
						<article>
							<header>
								<h3 className="text-3xl mt-14 mb-2 font-black">
									<a className="text-pink-600 dark:text-pink-400" href="#">
										Lorem ipsum dolor sit.
									</a>
								</h3>
								<small>July 13, 2020 • ☕️ 1 min read</small>
							</header>
							<p className="mb-7">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Maecenas dictum.
							</p>
						</article>
						<article>
							<header>
								<h3 className="text-3xl mt-14 mb-2 font-black">
									<a className="text-pink-600 dark:text-pink-400" href="#">
										Lorem ipsum dolor sit.
									</a>
								</h3>
								<small>July 13, 2020 • ☕️ 1 min read</small>
							</header>
							<p className="mb-7">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Maecenas dictum.
							</p>
						</article>
					</main>
					<footer className="mt-20 pt-7">
						<a
							className="text-pink-500 dark:text-pink-300 underline"
							href="https://twitter.com/condino_aj"
							target="_blank"
						>
							twitter
						</a>{' '}
						•{' '}
						<a
							className="text-pink-500 dark:text-pink-300 underline"
							href="https://github.com/condinoaljoseph"
							target="_blank"
						>
							github
						</a>{' '}
						•{' '}
						<a
							className="text-pink-500 dark:text-pink-300 underline"
							href="https://stackoverflow.com/users/9043355/elpmid"
							target="_blank"
						>
							stack overflow
						</a>
					</footer>
				</div>
			</div>
		</div>
	);
}
