
import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING, RESULT, FETCH_ALL_MOVIE } from '../actions/types'

const initialStates = {
    text: '',
    movies: [],
    loading: false,
    movie: [],

}

export const search = (state = initialStates, action) => {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload ? action.payload : [],
                loading: false
            }

        case FETCH_MOVIE:

            return {
                ...state,
                movie: action.payload,
                loading: false,
                text: '',

            }
        case LOADING:
            return {
                ...state,
                loading: true,
            }

        default:
            return state;
    }
}