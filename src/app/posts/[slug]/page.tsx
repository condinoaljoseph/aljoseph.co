import { Aside } from '@/components/Aside';
import { BlogDate } from '@/components/BlogDate';

import { getTweets } from 'lib/twitter';
import { allPosts } from '../../../../.contentlayer/generated';
import { notFound } from 'next/navigation';
import { Pagination } from '@/components/Pagination';
import { Mdx } from '@/components/Mdx';

export default async function Post({ params }) {
	const post = allPosts.find(post => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	const tweets = await getTweets(post.tweetIds);

	const canonicalUrl = `https://aljoseph.co/posts/${post.slug}`;
	const GITHUB_USERNAME = 'condinoaljoseph';
	const GITHUB_REPO = 'aljoseph.co';
	const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}/edit/master/_posts/${post.slug}.mdx`;
	const TWITTER_URL = `https://twitter.com/search?q=${encodeURIComponent(
		canonicalUrl
	)}`;

	return (
		<>
			<main>
				<h1 className="mb-7 mt-10 sm:text-4xl text-3xl font-bold font-serif">
					{post.title}
				</h1>
				<p className="leading-7 mb-7 -mt-6">
					<BlogDate date={post.date} minutes={post.readTime} />
				</p>
				<article className="prose dark:prose-dark w-full">
					<Mdx 
						post={post}	
						tweets={tweets}
					/>	
				</article>
				<footer className="mb-8 mt-6">
					<p className="text-base">
						<a
							className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
							href={TWITTER_URL}
							target="_blank"
							rel="noopener noreferrer"
						>
							Discuss on Twitter
						</a>{' '}
						&bull;{' '}
						<a
							className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
							href={GITHUB_URL}
							target="_blank"
							rel="noopener noreferrer"
						>
							Edit on Github
						</a>
					</p>
				</footer>
			</main>
			<Aside />
			<Pagination page={post.slug} />
		</>
	);
}


export async function generateStaticParams() {
	return allPosts.map((post) => ({
		params: {
			slug: post.slug
		}
	}))
}

export async function generateMetadata({ params }) {
	const post = allPosts.find(post => post.slug === params.slug);

	return {
		title: `${post?.title} - Al Joseph Condino`,
		description: post?.excerpt,
		openGraph: {
			title: post?.title,
			type: 'website',
			siteName: 'Al Joseph Condino',
			description: post?.excerpt
		},
		twitter: {
			card: 'summary_large_image',
			site: '@condino_aj',
			title: post?.title,
			description: post?.excerpt,
		}
	}
}


  