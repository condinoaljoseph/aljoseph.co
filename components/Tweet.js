import Image from 'next/image';
import { format } from 'date-fns';
import comma from 'comma-number';

/**
 * Supports plain text, images, quote tweets.
 *
 * Needs support for images, GIFs, and replies maybe?
 * Styles use !important to override Tailwind .prose inside MDX.
 */
export default function Tweet({
	text,
	id,
	author,
	media,
	created_at,
	public_metrics,
	referenced_tweets
}) {
	const authorUrl = `https://twitter.com/${author.username}`;
	const likeUrl = `https://twitter.com/intent/like?tweet_id=${id}`;
	const retweetUrl = `https://twitter.com/intent/retweet?tweet_id=${id}`;
	const replyUrl = `https://twitter.com/intent/tweet?in_reply_to=${id}`;
	const tweetUrl = `https://twitter.com/${author.username}/status/${id}`;
	const createdAt = new Date(created_at);

	// const formattedText = text.replace(/https:\/\/[\n\S]+/g, '');
	const formattedText = text.replace(/https:\/\/[\n\S]+/g, '');
	const quoteTweet =
		referenced_tweets && referenced_tweets.find((t) => t.type === 'quoted');

	return (
		<div className="bg-gray-50 dark:bg-gray-800 flex items-center justify-center mb-7 prose dark:prose-dark max-w-none w-full">
			<div className="bg-white dark:bg-gray-900 dark:border-gray-900 border rounded-lg -mx-4 p-4 shadow-md">
				<div className="flex justify-between">
					<a
						className="no-underline flex items-center"
						href={authorUrl}
						target="_blank"
						rel="noopener noreferrer noreferrer"
					>
						<Image
							className="h-11 w-11 rounded-full"
							src={author.profile_image_url}
							alt={author.username}
							width={48}
							height={48}
						/>
						<div className="ml-1.5">
							<span className="flex items-center dark:text-white font-bold block">
								{author.name}

								{author.verified ? (
									<svg
										aria-label="Verified Account"
										className="ml-1 text-pink-500 dark:text-white inline h-4 w-4"
										viewBox="0 0 24 24"
									>
										<g fill="currentColor">
											<path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
										</g>
									</svg>
								) : null}
							</span>
							<span className="text-gray-500 dark:text-gray-400 text-sm font-normal block">
								@{author.username}
							</span>
						</div>
					</a>
					<svg
						className="text-pink-400 dark:text-gray-50 h-6 w-auto inline-block fill-current"
						viewBox="0 0 24 24"
					>
						<g>
							<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
						</g>
					</svg>
				</div>
				<p className="block">{formattedText}</p>

				{media && media.length ? (
					<div
						className={
							media.length === 1
								? 'inline-grid grid-cols-1 gap-x-2 gap-y-2 my-2'
								: 'inline-grid grid-cols-2 gap-x-2 gap-y-2 my-2'
						}
					>
						{media.map((m) => (
							<Image
								key={m.media_key}
								alt={text}
								height={m.height}
								width={m.width}
								src={m.url}
								className="rounded-lg"
								placeholder="blur"
								blurDataURL="data:image/jpeg;base64,aHR0cHM6Ly9jZG4yLndoYXRvcGxheS5jb20vdWkvcGxhY2Vob2xkZXIuanBn"
							/>
						))}
					</div>
				) : null}

				<div className="text-gray-500 dark:text-gray-400 flex mt-2">
					<div className="flex items-center mr-4">
						<svg className="fill-current h-5 w-auto" viewBox="0 0 24 24">
							<g>
								<path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
							</g>
						</svg>
						<span className="ml-2 text-base">
							{comma(public_metrics.like_count)}
						</span>
					</div>
					<span className="text-gray-500 dark:text-gray-400 text-sm py-1">
						{format(createdAt, 'h:mm a - MMM d, y')}
					</span>
				</div>

				<a
					href={tweetUrl}
					target="_blank"
					rel="noopener noreferrer noreferrer"
					className="no-underline text-blue-500 dark:text-blue-400 flex mt-2"
				>
					<div className="flex items-center mr-4 text-pink-500 dark:text-pink-300">
						<svg className="fill-current h-5 w-auto" viewBox="0 0 24 24">
							<g>
								<path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
							</g>
						</svg>
						<span className="ml-2 text-sm ">
							{comma(public_metrics.retweet_count)} people are talking about
							this
						</span>
					</div>
				</a>
			</div>
		</div>
	);
}
