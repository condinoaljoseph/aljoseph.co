import Head from 'next/head';

import Container from '@/components/Container';
import Header from '@/components/Header';
import Aside from '@/components/Aside';
import Main from '@/components/Main';
import Article from '@/components/Article';
import Footer from '@/components/Footer';

import { posts } from '../posts.json';

export default function Home({ posts }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta name="Description" content="Personal blog by Al Joseph Condino" />
				<title>aljoseph.co</title>
				<meta property="og:title" content="aljoseph.co" />
				<meta
					property="og:image"
					content="https://pbs.twimg.com/profile_images/1353103600768098304/D75nwaE-_400x400.jpg"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Al Joseph Condino" />
				<meta
					property="og:description"
					content="Personal blog by Al Joseph Condino"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@condino_aj" />
				<meta name="twitter:title" content="aljoseph.co" />
				<meta
					name="twitter:description"
					content="Personal blog by Al Joseph Condino"
				/>
				<meta
					name="twitter:image"
					content="https://pbs.twimg.com/profile_images/1353103600768098304/D75nwaE-_400x400.jpg"
				/>
			</Head>
			<Container>
				<Header />
				<Aside />
				<Main>
					{posts && posts.length > 0
						? posts.map((post) => <Article key={post.slug} {...post} />)
						: null}
				</Main>
				<Footer />
			</Container>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: { posts }
	};
}
