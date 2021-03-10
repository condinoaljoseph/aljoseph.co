import React from 'react';

const Figure = ({ children }) => {
	return (
		<figure className="mb-7">
			{children}
			<figcaption className="text-gray-600 dark:text-gray-300 font-default text-sm mt-3">
				Photo by{' '}
				<a href="https://unsplash.com/@punttim" target="_blank" rel="noopener">
					Tim Gouw
				</a>{' '}
				on{' '}
				<a href="https://unsplash.com/" target="_blank" rel="noopener">
					Unsplash
				</a>
			</figcaption>
		</figure>
	);
};

export default Figure;
