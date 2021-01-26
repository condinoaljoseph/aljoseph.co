import Container from '../../components/Container';
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import Main from '../../components/Main';
import { getAllPosts, getPostBySlug } from '../../utils/api';
import markdownToHtml from '../../utils/markdownToHtml';
import styles from '../../components/markdown-styles.module.css';
import dayjs from 'dayjs';

export default function Post({ post }) {
	return (
		<Container>
			<Header />
			<Aside />
			<Main>
				<header>
					<h1 className="mb-7 mt-14 text-4xl font-black">{post.title}</h1>
					<p className="text-sm leading-7 mb-7 -mt-6">
						{dayjs(post.date).format('MMM DD YYYY')} • ☕️ 1 min read
					</p>
				</header>
				<article
					className={styles.markdown}
					dangerouslySetInnerHTML={{ __html: post.content }}
				></article>
			</Main>
		</Container>
	);
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		'title',
		'excerpt',
		'date',
		'slug',
		'content'
	]);
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content
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
