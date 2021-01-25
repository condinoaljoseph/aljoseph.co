import Container from '../../components/Container';
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import Main from '../../components/Main';
import { getAllPosts, getPostBySlug } from '../../utils/api';
import markdownToHtml from '../../utils/markdownToHtml';
import styles from '../../components/markdown-styles.module.css';

export default function Post({ post }) {
	return (
		<Container>
			<Header />
			<Aside />
			<Main>
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
