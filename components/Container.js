import { useTheme } from '../utils/themeContext';

const Container = ({ children }) => {
	const { theme } = useTheme();

	return (
		<div className={`${theme ? 'dark' : ''}`}>
			<div className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 min-h-screen font-serif">
				<div className="max-w-3xl mx-auto py-10 px-6">{children}</div>
			</div>
		</div>
	);
};

export default Container;
