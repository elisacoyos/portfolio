import { createContext, useState } from "react";

export const ThemeContext = createContext()



export function ThemeProvider({ children }) {

    // Créer un state pour le thème
    const [darkMode, setDarkMode] = useState(false)

     // Créer une fonction pour changer le thème
    function toggleTheme() {
        setDarkMode(!darkMode)
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}