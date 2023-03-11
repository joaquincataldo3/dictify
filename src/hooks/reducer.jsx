const reducer = (state, action) => {

    switch(action.type) {

        case "FETCH_WORD":
            return {...state, data: action.payload}
      
        case "CHANGE_ACTIVE_LETTER":
            return {...state, activeLetter: action.payload}

    }


} 

export default reducer