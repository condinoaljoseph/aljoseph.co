export default function Home() {
	return (
		<div className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 min-h-screen">
			<div className="max-w-2xl mx-auto py-10 px-6">
				<header className="flex justify-between items-center mb-10">
					<h1 className="text-3xl font-black">elpmid.</h1>
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
									The WET Codebase
								</a>
							</h3>
							<small>July 13, 2020 • ☕️ 1 min read</small>
						</header>
						<p className="mb-7">Come waste your time with me.</p>
					</article>
					<article>
						<header>
							<h3 className="text-3xl mt-14 mb-2 font-black">
								<a className="text-pink-600 dark:text-pink-400" href="#">
									Goodbye, Clean Code
								</a>
							</h3>
							<small>January 11, 2020 • ☕️ 5 min read</small>
						</header>
						<p className="mb-7">Let clean code guide you. Then let it go</p>
					</article>
					<article>
						<header>
							<h3 className="text-3xl mt-14 mb-2 font-black">
								<a className="text-pink-600 dark:text-pink-400" href="#">
									What Are the React Team Principles?
								</a>
							</h3>
							<small>December 25, 2019 • ☕️ 5 min read</small>
						</header>
						<p className="mb-7">UI Before API.</p>
					</article>
					<article>
						<header>
							<h3 className="text-3xl mt-14 mb-2 font-black">
								<a className="text-pink-600 dark:text-pink-400" href="#">
									On let vs const
								</a>
							</h3>
							<small>December 22, 2019 • ☕️ 3 min read</small>
						</header>
						<p className="mb-7">So which one should I use?</p>
					</article>
					<article>
						<header>
							<h3 className="text-3xl mt-14 mb-2 font-black">
								<a className="text-pink-600 dark:text-pink-400" href="#">
									What is JavaScript Made Of?
								</a>
							</h3>
							<small>December 20, 2019 • ☕️ 13 min read</small>
						</header>
						<p className="mb-7">Getting a closure on JavaScript.</p>
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
	);
}
