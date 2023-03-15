import { actions } from "./context"

const reducer = (state, action) => {

    switch (action.type) {

        case actions.FETCH_WORD_SUCCESS:
            return { ...state, fetchError: false, data: action.payload }

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