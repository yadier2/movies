import { LOADING1, FETCH_ALL_MOVIE, FINISH } from './types'
import { AllMovies } from '../helpers/loadMovies';

export const fetchAllMovies = () => async (dispatch) => {

  const allMovies = await AllMovies()

  if (allMovies.length === 0) {
    dispatch(setFinish())
  } else {

    return dispatch({
      type: FETCH_ALL_MOVIE,
      payload: allMovies
    })
  }
}

export const setLoading1 = () => {
  return {
    type: LOADING1,
  }
}

export const setFinish = () => {
  return {
    type: FINISH,
  }
}