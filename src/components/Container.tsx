export function Container({ children }) {
	return (
		<div className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 min-h-screen">
			<div className="max-w-2xl mx-auto py-10 px-6">{children}</div>
		</div>
	);
};

