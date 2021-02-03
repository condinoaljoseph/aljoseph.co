import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preload"
						href="/fonts/charter/charter_regular-webfont.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="true"
					/>
					<link
						rel="preload"
						href="/fonts/charter/charter_italic-webfont.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="true"
					/>
					<link
						rel="preload"
						href="/fonts/charter/charter_bold-webfont.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="true"
					/>
					<link
						rel="preload"
						href="/fonts/charter/charter_bold_italic-webfont.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="true"
					/>
					<link
						rel="preload"
						href="/fonts/montserrat/montserrat-900-l.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="true"
					/>
					<link href="/fonts/style.css" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
