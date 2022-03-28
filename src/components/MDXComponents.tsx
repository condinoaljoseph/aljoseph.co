import Image from 'next/image';
import CustomLink from './CustomLink';
import BlurImage from './BlurImage';
import Figure, { Figcaption } from './Figure';

const MDXComponents = {
	Figure,
	Figcaption,
	Image: BlurImage,
	a: CustomLink
};

export default MDXComponents;
