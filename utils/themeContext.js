import React, { useState, useContext, createContext } from 'react';

const initialValue = { theme: false };

export const ThemeContext = createContext(initialValue);

export default function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(false);

	const toggleTheme = () => {
		setTheme(!theme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
