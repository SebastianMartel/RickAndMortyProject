import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";


    const initialState = {
        myFavourites: [],
        myFavouritesCopy: []
    }


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                //PREV:
                // ...state,
                // myFavourites: [...state.allFavCharacters, payload],
                // allFavCharacters: [...state.allFavCharacters, payload]
                ...state, 
                myFavourites: payload, 
                myFavouritesCopy: payload
            }
        case REMOVE_FAV:
            return {
                // ...state,
                // myFavourites: state.myFavourites.filter((fav) => fav.id !== parseInt(payload))
                ...state, 
                myFavourites: payload,
                myFavouritesCopy: payload
            }
        case FILTER:
            const myFavouritesCopyFiltered = state.myFavouritesCopy.filter((fav) => fav.gender === payload)
            return {
                ...state,
                myFavourites:
                payload === 'All'
                ? [...state.myFavouritesCopy]
                : myFavouritesCopyFiltered // could be assigned directly to save memory.
            }
        case ORDER:
            const myFavouritesCopyCopy = [...state.myFavouritesCopy]
            return {
                ...state,
                myFavourites: 
                    payload === 'A' 
                    ? myFavouritesCopyCopy.sort((a,b)=> a.id - b.id)
                    : myFavouritesCopyCopy.sort((a,b)=> b.id - a.id)
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer