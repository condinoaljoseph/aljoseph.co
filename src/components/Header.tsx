import Logo from './Logo';
import { ThemeToggle } from './ThemeToggle'

const Header = () => {
	return (
		<header className="flex justify-between relative items-center mb-10">
			<Logo />
			<ThemeToggle />
		</header>
	);
};

export default Header;
