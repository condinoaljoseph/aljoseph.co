import Image from 'next/image';
import CustomLink from './CustomLink';
import Figure, { Figcaption } from './Figure';

const MDXComponents = {
	Figure,
	Figcaption,
	Image,
	a: CustomLink
};

export default MDXComponents;
