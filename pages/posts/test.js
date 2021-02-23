import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';

const Test = () => <h1>Hello</h1>;

const components = { Test };

export default function TestPage({ source, frontMatter }) {
	const content = hydrate(source, { components });
	return (
		<div className="wrapper">
			<h1>{frontMatter.title}</h1>
			{content}
		</div>
	);
}

export async function getStaticProps() {
	const source = `---
title: Test
---

Some **mdx** text, with a component <Test name={title}/>
  `;
	const { content, data } = matter(source);
	const mdxSource = await renderToString(content, { components, scope: data });
	return { props: { source: mdxSource, frontMatter: data } };
}
