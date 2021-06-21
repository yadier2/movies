import {FINISH,LOADING1, FETCH_ALL_MOVIE} from '../actions/types'


const initialStates ={
    finish : false,
    loading:false,
    movie:[],
    allmovies:[]
}

export const allMovies =  (state = initialStates, action) => {
    switch (action.type) {
        case FETCH_ALL_MOVIE:
                return {
                    ...state,
                  allmovies:[...state.allmovies, ...action.payload], 
                    loading:false,
                }    
        case FINISH:
                    return {
                        ...state,
                        finish: true,
                        loading:false,
                    }            
            
        case LOADING1:
                return {
                    ...state,
                    loading: true,
                
                }            
       
        default:
            return state;
    }
}