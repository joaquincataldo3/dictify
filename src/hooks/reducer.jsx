import { actions } from "./context"

const reducer = (state, action) => {

    switch (action.type) {

        case actions.FETCH_WORD_SUCCESS:
            const wordSearched = action.payload.word
            const wordCount = action.payload.wordCount
            const storageValues = []

            if (wordCount > 0 && wordCount <= 4) {
                localStorage.setItem(`word ${wordCount}`, wordSearched)
            }

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                storageValues.push({ key, value });
            }

            console.log(storageValues)

            return { ...state, fetchError: false, data: action.payload.data, word: '', storageValues }

        case actions.FETCH_WORD_ERROR:
            return { ...state, wordError: action.payload, fetchError: true }

        case actions.CHANGE_ACTIVE_LETTER:
            return { ...state, activeLetter: action.payload }

        case actions.CHANGE_ACTIVE_MODE:
            const activeMode = action.payload
            const modeToChange = state.modes.find(mode => mode !== activeMode)
            return { ...state, modeActive: modeToChange }

        case actions.CHANGE_WORD_VALUE:
            const wordValue = action.payload

            return { ...state, word: wordValue }
    }


}

export default reducer