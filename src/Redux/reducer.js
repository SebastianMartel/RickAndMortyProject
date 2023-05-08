import { ADD_FAV, REMOVE_FAV } from "./actions"

const initialState = {
    myFavourites: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_FAV:
            return {
                myFavourites: [...state.myFavourites, payload]
            }
        case REMOVE_FAV:
            return {
                myFavourites: state.myFavourites.filter((fav) => fav.id !== payload)
            }
        default:
            return state
    }
}

export default reducer