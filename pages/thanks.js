import Head from 'next/head';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Main from '@/components/Main';

export default function Thanks() {
	return (
		<>
			<Head>
				<title>Thanks for subscribing.</title>
			</Head>
			<Container>
				<Header />
				<Main>
					<header>
						<h1 className="mb-7 mt-14 sm:text-5xl text-4xl font-bold font-serif">
							Thank you for subscribing
						</h1>
					</header>
					<article className="text-xl leading-8">
						<p>
							You are now confirmed. You can expect to receive emails as I
							create new content.
						</p>
					</article>
				</Main>
			</Container>
		</>
	);
}
