import redis from 'redis';
const dev = process.env.NODE_ENV !== 'production';

const redisCredentials = dev
	? 6379
	: {
			host: 'usw1-loyal-muskrat-30458.upstash.io',
			port: '30458',
			password: 'ffd60d922ec14ebea48691c3b8dac77e'
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
