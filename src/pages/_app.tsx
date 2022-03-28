import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';

import MDXComponents from '@/components/MDXComponents';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<MDXProvider components={MDXComponents}>
				<Component {...pageProps} />
			</MDXProvider>
		</ThemeProvider>
	);
}

export default MyApp;
