import Head from 'next/head';
import Image from 'next/image';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Aside from '@/components/Aside';
import Main from '@/components/Main';
import BlogDate from '@/components/BlogDate';
import Pagination from '@/components/Pagination';
import styles from '@/components/markdown-styles.module.css';
import markdownToHtml from '@/utils/markdownToHtml';
import { getAllPosts, getPostBySlug, getPagination } from '@/utils/api';

export default function Post({ post, pagination }) {
	const GITHUB_USERNAME = 'condinoaljoseph';
	const GITHUB_REPO = 'aljoseph.co';
	const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}/edit/master/_posts/${post.slug}.md`;

	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta name="description" content={post.excerpt}></meta>
			</Head>
			<Container>
				<Header />
				<Main>
					<header>
						<h1 className="mb-7 mt-14 text-5xl font-black font-sans">
							{post.title}
						</h1>
						<p className="leading-7 mb-7 -mt-6">
							<BlogDate date={post.date} minutes={4} />
						</p>
					</header>
					<Image
						src={post.coverImage}
						alt={`Cover image for ${post.title}`}
						layout="responsive"
						width={1240}
						height={620}
					/>
					<article
						className={styles.markdown}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
					<footer className="mb-8">
						<p className="text-lg">
							<a
								className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
								href={GITHUB_URL}
								target="_blank"
								rel="noopener"
							>
								Discuss on Twitter
							</a>{' '}
							&bull;{' '}
							<a
								className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
								href={GITHUB_URL}
								target="_blank"
								rel="noopener"
							>
								Edit on Github
							</a>
						</p>
					</footer>
				</Main>
				<Aside />
				<Pagination pagination={pagination} />
			</Container>
		</>
	);
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		'title',
		'excerpt',
		'date',
		'slug',
		'coverImage',
		'content'
	]);
	const content = await markdownToHtml(post.content || '');
	const { prevPage, nextPage } = await getPagination(params.slug);

	return {
		props: {
			post: {
				...post,
				content
			},
			pagination: {
				prevPage,
				nextPage
			}
		}
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug
				}
			};
		}),
		fallback: false
	};
}
