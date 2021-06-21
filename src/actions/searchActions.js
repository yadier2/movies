import {SEARCH_MOVIE,FETCH_MOVIES,FETCH_MOVIE,LOADING } from './types'
import axios from 'axios'
import {APIKey} from '../APIKey'
import { loadMovies, loadMovie } from '../helpers/loadMovies';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}  

export const fetchMovies = text => async(dispatch) => {
   
    const movies = await loadMovies(text)

    dispatch({
        type: FETCH_MOVIES,
        payload:movies
    })
    //axios.get('http://www.omdbapi.com/?apikey=e1189f3e&s=papel')
   /*  axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response => dispatch({
        type: FETCH_MOVIES,
        payload:movies
    }))
    .catch(err => console.log(err)) */
}

export const fetchMovie = id => async(dispatch) => {
    const movie = await loadMovie(id)
  
    dispatch({
    type: FETCH_MOVIE,
    payload:movie 
    })
    
}

export const setLoading = () => {
    return{
        type: LOADING,

    }
}

