import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY,
	server: process.env.MAILCHIMP_API_SERVER
});

const handler = async (req, res) => {
	const { fName, email } = req.body;

	if (!email) {
		return res.status(400).json({ error: 'Email is required' });
	}

	try {
		await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
			email_address: email,
			status: 'pending',
			merge_fields: {
				FNAME: fName
			}
		});

		return res.status(201).json({ error: '' });
	} catch (error) {
		if (error.status >= 400) {
			const { text } = error.response;

			if (text.includes('Member Exists')) {
				return res.status(400).json({
					error: `You're already subscribed to my mailing list.`
				});
			}
		}

		return res.status(500).json({ error: error.message || error.toString() });
	}
};

export default handler;
