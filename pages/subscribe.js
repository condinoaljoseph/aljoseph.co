import Head from 'next/head';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Signup from '@/components/Signup';

export default function Subscribe() {
	return (
		<>
			<Head>
				<title>Join the newsletter</title>
			</Head>
			<Container>
				<Header />
				<Main>
					<header>
						<h1 className="mb-7 mt-14 sm:text-5xl text-4xl font-bold font-serif">
							Yay!
						</h1>
					</header>
					<article className="text-xl leading-8 mb-5">
						<p>Want to keep updated? Subscribe to my newsletter.</p>
					</article>
					<Signup />
				</Main>
			</Container>
		</>
	);
}
