import { formatPostDate, formatReadingTime } from '../utils/helpers';

const BlogDate = ({ date, minutes = 6 }) => {
	return (
		<small className="text-sm font-mono text-gray-700 dark:text-gray-400">
			{formatPostDate(date)} &bull; {formatReadingTime(minutes)}
		</small>
	);
};

export default BlogDate;
