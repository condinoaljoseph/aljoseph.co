import redis from 'redis';
const dev = process.env.NODE_ENV !== 'production';

const redisCredentials = dev
	? 6379
	: {
			url: process.env.REDIS_URL
	  };

const client = redis.createClient(redisCredentials);
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
	client.set(key, JSON.stringify(value), redis.print);
}
