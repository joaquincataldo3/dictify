import { useContext, createContext, useState, useReducer, useEffect } from "react";
import reducer from '../hooks/reducer'
import axios from 'axios'

const AppContext = createContext()

const letters = ['Serif', 'Sans Serif']

const modes = {
    light: 'light',
    dark: 'dark'
}

const initialState = {
    modes: modes,
    modeActive: modes.light,
    activeLetter: letters[0],
    letters: letters,
    word: 'hello',
    data: []
}

const actions = {
    FETCH_WORD: 'FETCH_WORD',
    CHANGE_ACTIVE_LETTER: 'CHANGE_ACTIVE_LETTER'
}

const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en'

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)  

    useEffect(() => {
        fetchApi(initialState.word)
    }, [])

    const fetchApi = async (word) => {
        const response = await axios(`${apiUrl}/${word}`)
        const data = response.data
         console.log(data)
        dispatch({type: actions.FETCH_WORD, payload: data})
    }

    const changeActiveLetter = (id) => {
        dispatch({type: actions.CHANGE_ACTIVE_LETTER, payload: id})
    }
    
    const providerValue = {
        ...state,
        changeActiveLetter
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