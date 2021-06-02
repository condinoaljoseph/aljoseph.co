import { format } from 'date-fns';

export function formatReadingTime(minutes) {
	const cups = Math.round(minutes / 5);

	if (cups > 5) {
		return `${new Array(Math.round(cups / Math.E))
			.fill('🍱')
			.join('')} ${minutes} min read`;
	}

	return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
}

export function formatPostDate(date) {
	return format(new Date(date), 'MMM d, y');
}
