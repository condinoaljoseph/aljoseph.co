import { getAllPosts, getPostBySlug } from '../../utils/api';

export default function Post({ post }) {
	return <h1>{post.title}</h1>;
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, ['title', 'excerpt', 'date']);

	return {
		props: {
			post
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
