import Head from 'next/head';
import Link from 'next/link';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Main from '@/components/Main';

export default function Custom404() {
	return (
		<>
			<Head>
				<title>404 - Page not found</title>
			</Head>
			<Container>
				<Header />
				<Main>
					<header>
						<h1 className="mb-7 mt-14 sm:text-5xl text-4xl font-bold font-sans">
							404 - Page not found
						</h1>
					</header>
					<article className="text-xl leading-8">
						<p className="mb-7">Why are you here? I think your lost.</p>
						<div
							style={{
								width: '100%',
								height: '0',
								paddingBottom: '54%',
								position: 'relative'
							}}
						>
							<iframe
								src="https://giphy.com/embed/gKsJUddjnpPG0"
								width="100%"
								height="100%"
								style={{ position: 'absolute' }}
								frameBorder="0"
								className="giphy-embed"
								allowFullScreen
							></iframe>
						</div>
						<p>
							<a href="https://giphy.com/gifs/gKsJUddjnpPG0">via GIPHY</a>
						</p>
						<p className="mt-6">
							<Link href="/">
								<a className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none">
									Return Home
								</a>
							</Link>
						</p>
					</article>
				</Main>
			</Container>
		</>
	);
}
