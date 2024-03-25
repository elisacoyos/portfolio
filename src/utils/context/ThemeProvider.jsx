import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();



export function ThemeProvider({ children }) {

    // Créer un state pour le thème
    const [darkMode, setDarkMode] = useState(false);

     // Créer une fonction pour changer le thème
    function toggleTheme() {
        setDarkMode(prevMode => !prevMode);
    }

    useEffect(() => {
        // Vérifier si l'utilisateur préfère le thème sombre lors de la première visite
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
    }, []);

    return (
        <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}