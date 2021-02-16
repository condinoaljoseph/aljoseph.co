import redis from 'redis';
const dev = process.env.NODE_ENV !== 'production';

const redisCredentials = dev
	? 6379
	: {
			host: process.env.REDIS_HOST,
			port: process.env.REDIS_PORT,
			password: process.env.PASSWORD
	  };

const client = redis.createClient(redisCredentials);
client.on('error', (err) => console.log(err));

console.log(redisCredentials);

export function getCache(key) {
	return new Promise((resolve, reject) => {
		client.get(key, (err, data) => {
			if (err) {
				reject(err);
				return;
			}

			console.log(data, '@@@@@@@@@@@');
			resolve(JSON.parse(data));
		});
	});
}

export function setCache(key, value) {
	console.log(value, '@@@@@@@@@@@');
	client.setex(key, 3600, JSON.stringify(value));
}
