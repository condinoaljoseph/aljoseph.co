import Switch from 'react-switch';
import Logo from './Logo';
import { useTheme } from '../utils/themeContext';

const Header = () => {
	const { toggleTheme, theme } = useTheme();

	return (
		<header className="flex justify-between items-center mb-10">
			<Logo />
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
