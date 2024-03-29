import { useContext, createContext, useState, useReducer, useEffect } from "react";
import actions from "../utils/actions";
import reducer from '../hooks/reducer'
import axios from 'axios'

const AppContext = createContext()

const letters = ['Serif', 'Sans Serif']

const modes = ['light', 'dark']

const initialState = {
    modes: modes,
    modeActive: modes[0],
    activeLetter: letters[0],
    letters: letters,
    firstWord: 'hello',
    word: '',
    data: [],
    fetchError: false,
    wordError: '',
    storageValues: []
}


const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en'

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [loading, setLoading] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const body = document.body

    useEffect(() => {
        fetchApi(initialState.firstWord)
        body.classList.add('body-light')
    }, [])

    const fetchApi = async (word) => {
        setLoading(true)
        try {
            const response = await axios(`${apiUrl}/${word}`)
            const data = response.data
            if(wordCount === 4) {
                setWordCount(1)        
            } else {
                setWordCount(wordCount + 1)
            }
            dispatch({ type: actions.FETCH_WORD_SUCCESS, payload: {data, word, wordCount} })
            setLoading(false)
        } catch (error) {
            console.log(error)
            return dispatch({ type: actions.FETCH_WORD_ERROR, payload: word })
        }
    }

    const changeActiveLetter = (id, letterList) => {
        const list = letterList.current
        list.classList.toggle('list-active')
        dispatch({ type: actions.CHANGE_ACTIVE_LETTER, payload: id })
    }

    const changeActiveMode = (modeActive) => {
        body.classList.toggle('body-dark')
        body.classList.toggle('body-light')
        dispatch({ type: actions.CHANGE_ACTIVE_MODE, payload: modeActive })
    }

    const changeWordValue = (target) => {
        dispatch({ type: actions.CHANGE_WORD_VALUE, payload: target })
    }

    const providerValue = {
        ...state,
        changeActiveLetter,
        changeActiveMode,
        changeWordValue,
        loading,
        setLoading,
        fetchApi
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

export { AppProvider, useGlobalContext, actions }