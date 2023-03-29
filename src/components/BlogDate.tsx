import { formatPostDate, formatReadingTime } from '../lib/helpers';

export function BlogDate({ date, minutes = 2 }) {
	return (
		<small className="text-sm font-mono text-gray-700 dark:text-gray-400">
			{formatPostDate(date)} &bull; {formatReadingTime(minutes)}
		</small>
	);
};
