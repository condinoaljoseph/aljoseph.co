import fs from 'fs';
import { join } from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';

import MDXComponents from '@/components/MDXComponents';
import { posts } from '../posts.json';

const postDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
	return fs.readdirSync(postDirectory);
}

export async function getPostBySlug(slug) {
	const realSlug = slug.replace(/\.mdx$/, '');
	const fullPath = join(postDirectory, `${realSlug}.mdx`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	const { data, content } = matter(fileContents);
	const mdxSource = await renderToString(content, {
		components: MDXComponents,
		scope: data,
		mdxOptions: {
			remarkPlugins: [
				require('remark-autolink-headings'),
				require('remark-slug'),
				require('remark-code-titles')
			],
			rehypePlugins: [mdxPrism]
		}
	});

	return {
		mdxSource,
		frontMatter: data
	};
}

export function getAllPosts() {
	const files = fs.readdirSync(postDirectory);

	return files.reduce((allPosts, postSlug) => {
		const source = fs.readFileSync(join(postDirectory, postSlug));
		const { data } = matter(source);

		return [
			{
				...data,
				slug: postSlug.replace('.mdx', '')
			},
			...allPosts
		];
	}, []);
}

export function getPagination(pageSlug) {
	const slugs = posts.map(({ slug }) => slug);
	const postsTitle = posts.map(({ title }) => title);

	const totalPages = posts.length;
	const current = slugs.indexOf(pageSlug) + 1;

	let prev = undefined;
	let next = undefined;

	if (totalPages > 1) {
		if (current === 1) {
			next = 2;
			prev = undefined;
		}
		if (current > 1) {
			next = current + 1;
			prev = current - 1;
		}
		if (current === totalPages) {
			prev = totalPages - 1;
			next = undefined;
		}
	}
	return {
		prevPage: {
			url: slugs[prev - 1] || null,
			title: postsTitle[prev - 1] || null
		},
		nextPage: {
			url: slugs[next - 1] || null,
			title: postsTitle[next - 1] || null
		}
	};
}
