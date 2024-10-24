import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {


    const [theme, setTheme] = useState('');
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme)
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme

    }, [theme]);

    const changeTheme = (newTheme) => {
        setTheme(newTheme)
    }
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}