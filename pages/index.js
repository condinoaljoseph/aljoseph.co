import Head from 'next/head';

import Container from '../components/Container';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Main from '../components/Main';
import Article from '../components/Article';
import Footer from '../components/Footer';

export default function Home({ title, description }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta name="Description" content={description}></meta>
				<title>{title}</title>
			</Head>
			<Container>
				<Header />
				<Aside />
				<Main>
					<Article />
				</Main>
				<Footer />
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const data = await import('../config.json');

	return {
		props: {
			title: data.default.title,
			description: data.default.description
		}
	};
}
