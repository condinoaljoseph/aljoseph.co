import Link from 'next/link';
import Switch from 'react-switch';
import { useTheme } from '../utils/themeContext';

const Header = () => {
	const { toggleTheme, theme } = useTheme();

	return (
		<header className="flex justify-between items-center mb-10">
			<h1>
				<Link href="/">
					<a className="text-3xl font-black">aljoseph.</a>
				</Link>
			</h1>
			<Switch
				checked={theme}
				checkedIcon={false}
				uncheckedIcon={false}
				height={24}
				width={50}
				offColor={'#0f1114'}
				onColor={'#0f1114'}
				onChange={toggleTheme}
			/>
		</header>
	);
};

export default Header;
