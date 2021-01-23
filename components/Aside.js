const Aside = () => {
	return (
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
	);
};

export default Aside;
