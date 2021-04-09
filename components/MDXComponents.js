import Image from 'next/image';
import Tweet from 'react-tweet-embed';
import Figure, { Figcaption } from './Figure.js';
import CustomLink from './CustomLink';

const MDXComponents = {
	Figure,
	Figcaption,
	Image,
	Tweet,
	a: CustomLink
};

export default MDXComponents;
