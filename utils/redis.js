import redis from 'redis';

const client = redis.createClient(6379);
client.on('error', (err) => console.log(err));

export function getCache(key) {
	return new Promise((resolve, reject) => {
		client.get(key, (err, data) => {
			if (err) {
				reject(err);
				return;
			}

			resolve(JSON.parse(data));
		});
	});
}

export function setCache(key, value) {
	client.setex(key, 3600, JSON.stringify(value));
}
