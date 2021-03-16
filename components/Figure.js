import React from 'react';

export const Figcaption = ({ children }) => {
	return (
		<figcaption className="text-gray-600 dark:text-gray-300 font-default text-sm mt-3">
			{children}
		</figcaption>
	);
};

const Figure = ({ children }) => {
	return (
		<figure className="mb-7">
			{children}
			<Figcaption />
		</figure>
	);
};

export default Figure;
