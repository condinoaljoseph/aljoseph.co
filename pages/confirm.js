import Head from 'next/head';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Main from '@/components/Main';

export default function Confirm() {
	return (
		<>
			<Head>
				<title>Confirm Subscription</title>
			</Head>
			<Container>
				<Header />
				<Main>
					<header>
						<h1 className="mb-7 mt-14 sm:text-5xl text-4xl font-black font-sans">
							Just one more thing...
						</h1>
					</header>
					<article className="text-xl leading-8">
						<p>
							Thank you for subscribing. You will need to check your inbox and
							confirm your subscription. If you cant find email try searching{' '}
							<code>aljoseph.co</code>.
						</p>
					</article>
				</Main>
			</Container>
		</>
	);
}
