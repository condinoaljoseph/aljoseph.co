import { useTheme } from 'next-themes';
import Image from 'next/image';
import Logo from './Logo';
import Toggle from './Toggle';

const Header = () => {
	const { setTheme, theme } = useTheme();

	return (
		<header className="flex justify-between items-center mb-10 fixed w-full top-0 left-0 z-50 py-4 px-6 bg-gray-50 dark:bg-gray-800 lg:px-60 border-b border-gray-100 dark:border-gray-700">
			<Logo />
			{theme === undefined ? null : (

				<Toggle
					icons={{
						checked: (
							<Image
								src="/assets/moon.png"
								width={16}
								height={16}
								role="presentation"
								style={{ pointerEvents: 'none' }}
							/>
						),
						unchecked: (
							<Image
								src="/assets/sun.png"
								width={16}
								height={16}
								role="presentation"
								style={{ pointerEvents: 'none' }}
							/>
						)
					}}
					checked={theme === 'dark'}
					onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				/>
			)}
		</header>
	);
};

export default Header;
