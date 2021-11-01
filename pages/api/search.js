import algoliasearch from 'algoliasearch';

const client = algoliasearch(
	process.env.ALGOLIA_APP_ID,
	process.env.ALGOLIA_API_KEY
);

const handler = async (req, res) => {
	const index = client.initIndex('aljoseph.co');
	index.search('aljoseph').then((data) => {
		console.log(data);
	});

	return res.status(200).json({ msg: 'search' });
};

export default handler;
