'use client'

import Image from 'next/image';
import { Tweet } from "@/components/Tweet";
import { Post } from "../../.contentlayer/generated";
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link';

function CustomLink(props) {
	const { href, children } = props;
	const isInternalLink = href && (href.startsWith('#') || href.startsWith('/'));

	if (isInternalLink) {
		return (
			<Link href={href} {...props}>
				{children}
			</Link>
		);
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export function Mdx({ post, tweets }: { post: Post, tweets: Array<any> }) {
    const Component = useMDXComponent(post.body.code)
    
    const StaticTweet = ({ id }) => {
		const tweet = tweets.find((tweet) => tweet.id === id);
		return <Tweet {...tweet} />;
	};

    const MDXComponents = {
        Image,
        a: CustomLink
    };

    return <Component components={{ ...MDXComponents, StaticTweet }} />
    
}