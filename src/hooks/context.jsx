import { useContext, createContext, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {

    const modes = {
        light: 'light',
        dark: 'dark'
    }

    const letters = {
        serif: 'Serif',
        sans_serif: 'Sans Serif'
    }

    const [activeMode, setActiveMode] = useState(modes.light)
    const [activeLetter, setActiveLetter] = useState(letters.serif)

    const providerValue = {
        modes,
        activeMode,
        setActiveMode,
        letters,
        activeLetter,
        setActiveLetter,
    }

    return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}