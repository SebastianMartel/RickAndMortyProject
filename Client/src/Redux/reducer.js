import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"

const initialState = {
    myFavourites: [],
    allFavCharacters: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return {
                //PREV:
                // ...state,
                // myFavourites: [...state.allFavCharacters, payload],
                // allFavCharacters: [...state.allFavCharacters, payload]
                ...state, 
                myFavourites: payload, 
                allFavCharacters: payload
            }
        case REMOVE_FAV:
            return {
                // ...state,
                // myFavourites: state.myFavourites.filter((fav) => fav.id !== payload)
                ...state, 
                myFavourites: payload
            }
        case FILTER:
            return {
                ...state,
                myFavourites: state.allFavCharacters.filter((char) => char.gender === payload)
            }
        case ORDER:
            const allFavCharactersCopy = [...state.allFavCharacters]
            return {
                ...state,
                myFavourites: 
                    payload === 'A' 
                    ? allFavCharactersCopy.sort((a,b)=> a.id - b.id)
                    : allFavCharactersCopy.sort((a,b)=> b.id - a.id)

            }
        default:
            return state
    }
}

export default reducer