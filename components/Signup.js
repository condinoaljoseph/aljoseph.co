import { useState } from 'react';
import { useRouter } from 'next/router';
import SignupIcon from './SignupIcon';

const Signup = () => {
	const router = useRouter();
	const [fName, setFName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const subscribe = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const res = await fetch('/api/subscribe', {
			body: JSON.stringify({ email, fName }),
			headers: { 'Content-Type': 'application/json' },
			method: 'POST'
		});

		const { error } = await res.json();

		setIsLoading(false);
		if (error) {
			setMessage(error);
			return;
		}

		router.push('/confirm');
	};

	return (
		<div className="font-default shadow-cm mb-10 sm:rounded-md text-gray-900 dark:text-gray-100 dark:bg-gray-800">
			<form onSubmit={subscribe}>
				<div className="grid sm:grid-cols-2">
					<div className="p-12 bg-gray-100 dark:bg-gray-700 sm:rounded-tl-md sm:rounded-bl-md sm:rounded-tr-none rounded-tl-md rounded-tr-md">
						<h3 className="text-xl font-black leading-6 mb-5">
							Subscribe to the Newsletter
						</h3>
						<p className="leading-7 mb-5">
							Subscribe to get my latest content via email.
						</p>

						<SignupIcon />
					</div>
					<div className="p-12">
						<div className="mb-4">
							<div className="mb-3">
								<input
									type="text"
									name="first_name"
									aria-label="Your first name"
									placeholder="Your first name"
									className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none"
									value={fName}
									onChange={(e) => setFName(e.target.value)}
									required
								/>
							</div>
							<div className="mb-4">
								<input
									type="email"
									name="email_address"
									aria-label="Your email"
									placeholder="Your email"
									className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<button
								type="submit"
								className="bg-pink-600 rounded-full py-3 px-6 text-gray-50 hover:bg-pink-500"
							>
								<span>{isLoading ? 'Processing...' : 'Subscribe'}</span>
							</button>
						</div>
						{message ? (
							<small>{message}</small>
						) : (
							<small>
								I won't send you spam.{' '}
								<span className="block">
									Unsubscribe at <em>any</em> time.
								</span>
							</small>
						)}
					</div>
				</div>
			</form>
		</div>
	);
};

export default Signup;
