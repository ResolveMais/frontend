import { createContext, useContext, useState, ReactNode } from "react";
import lightTheme from "../styles/themes/light";

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}