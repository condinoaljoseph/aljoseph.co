import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
	const router = useRouter();
	const GITHUB_USERNAME = 'condinoaljoseph';
	const GITHUB_REPO = 'aljoseph.co';
	const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}/edit/master/_posts/${post.slug}.md`;

	return (
		<>
			<Head>
				<title>{post.title}</title>
				<link
					rel="canonical"
					href={`https://aljoseph.vercel.app${router.asPath}`}
				/>
				<meta name="description" content={post.excerpt} />
				<meta
					property="og:url"
					content={`https://aljoseph.vercel.app${router.asPath}`}
				/>
				<meta property="og:title" content={post.title} />
				<meta property="og:image" content={post.ogImage} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Al Joseph Condino" />
				<meta property="og:description" content={post.excerpt} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@condino_aj" />
				<meta name="twitter:title" content={post.title} />
				<meta name="twitter:description" content={post.excerpt} />
				<meta name="twitter:image" content={post.ogImage} />
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
					<article
						className={styles.markdown}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
					<footer className="mb-8 mt-6">
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
		'content',
		'ogImage'
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
	const posts = await getAllPosts();

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
