import { FETCH_ALL_MOVIE_CRUD } from '../actions/types'


const initialStates = {
    moviesCrud: []
}

export const MoviesCrud = (state = initialStates, action) => {
    switch (action.type) {
        case FETCH_ALL_MOVIE_CRUD:
            return {
                moviesCrud: [...action.payload],

            }
        default:
            return state;
    }
}