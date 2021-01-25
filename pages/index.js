import Head from 'next/head';

import Container from '../components/Container';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Main from '../components/Main';
import Article from '../components/Article';
import Footer from '../components/Footer';

import { getAllPosts } from '../utils/api';

export default function Home({ posts }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="Description"
					content="Personal blog by Al Joseph Condino"
				></meta>
				<title>elpmid.</title>
			</Head>
			<Container>
				<Header />
				<Aside />
				<Main>
					{posts && posts.length > 0
						? posts.map((post) => <Article {...post} />)
						: null}
				</Main>
				<Footer />
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const posts = getAllPosts([
		'title',
		'excerpt',
		'date',
		'data',
		'slug',
		'author',
		'content'
	]);

	return {
		props: { posts }
	};
}
