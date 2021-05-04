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
						<h1 className="mb-7 mt-14 sm:text-5xl text-4xl font-black font-sans">
							451 – Unavailable For Legal Reasons
						</h1>
					</header>
					<article className="text-xl leading-8">
						<p className="mb-7">
							Why show a generic 404 when I can make it sound mysterious? It
							seems you've found something that used to exist, or you spelled
							something wrong. I'm guessing you spelled something wrong. Can you
							double check that URL?
						</p>
						<Link href="/">
							<a className="shadow-link hover:shadow-none">Return Home</a>
						</Link>
					</article>
				</Main>
			</Container>
		</>
	);
}
