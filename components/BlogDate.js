import { formatPostDate, formatReadingTime } from '../utils/helpers';

const BlogDate = ({ date, minutes = 6 }) => {
	return (
		<small className="text-sm">
			{formatPostDate(date)} &bull; {formatReadingTime(minutes)}
		</small>
	);
};

export default BlogDate;
