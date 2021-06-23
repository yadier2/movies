import { db } from "../firebase/firebase-config"
import { FETCH_ALL_MOVIE_CRUD } from './types';
import Swal from 'sweetalert2';

let latesDoc1 = 0;
let reset = 0;
let copia = 0;
let ref = null;

export const allMoviesCrud = (action) => async (dispatch) => {
  if (action === 'update') {
    ref = db.collection('movies')
      .orderBy('title')
      .startAfter(copia)
      .limit(10)
  } 
 else if (action === 'next') {
    ref = db.collection('movies')
      .orderBy('title')
      .startAfter(latesDoc1)
      .limit(10)

  } else {
   ref = db.collection('movies')
      .orderBy('title')
      .endBefore(reset)
      .limit(10) 
  }

  const allMovies = await ref.get()
  const movies = [];
  allMovies.forEach(snapHijo => {
    movies.push({
      ...snapHijo.data(),
      id: snapHijo.id
    })
  })

  if(action === 'next' ){
    copia = latesDoc1;
  }
  if (!allMovies.empty ) {
    reset = allMovies.docs[0]
    latesDoc1 = allMovies.docs[allMovies.docs.length - 1]
  }
  return dispatch({
    type: FETCH_ALL_MOVIE_CRUD,
    payload: movies

  })
}


export const startNewMovie = ({ title, overview, poster_path, release_date, url_video }) => {
  return async (dispatch, getState) => {

    const newMovie = {
      original_language: 'en',
      original_title: title,
      overview,
      popularity: 0.173,
      poster_path,
      release_date,
      title: title,
      video: false,
      vote_average: 8.7,
      vote_count: 1242,
      url_video,
    }


    await db.collection('movies').add(newMovie)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Add',
      showConfirmButton: false,
      timer: 1500
    })
    dispatch(allMoviesCrud())
  }
}

// Elimiminar movie
export const startDeleting = (id) => {
  return async (dispatch, getState) => {

    await db.collection('movies').doc(id).delete()

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Delete',
      showConfirmButton: false,
      timer: 1500
    })
    dispatch(allMoviesCrud())
  }
}
// Actualizar movie
export const startUpdate = (id, data) => {
  return async (dispatch, getState) => {

    var movieRef = db.collection("movies").doc(id);

    return movieRef.update({
      ...data
    })
      .then(() => {
        console.log("Document successfully updated!");
        dispatch(allMoviesCrud('update'))
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });

  }
}