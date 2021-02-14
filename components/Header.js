import Image from 'next/image';
import Logo from './Logo';
import Toggle from './Toggle';
import { useTheme } from '../utils/themeContext';

const Header = () => {
	const { toggleTheme, theme } = useTheme();

	return (
		<header className="flex justify-between items-center mb-10">
			<Logo />
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
				checked={theme}
				onChange={toggleTheme}
			/>
		</header>
	);
};

export default Header;
