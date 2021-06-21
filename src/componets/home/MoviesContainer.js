import React from 'react'
import {MovieCard} from './MovieCard'
import { useSelector } from 'react-redux';
import {ErrorResult} from '../layout/ErrorResult'
export const MoviesContainer = () => {
  
    const  {movies}  = useSelector(state => state.movies);

    return (
        <>
        
         <h2 className="mt-4 mb-3">Resultados de busqueda</h2>
        <div className="row  d-flex justify-content-evenly ">

            {
                movies.map((movie, index) =>(
                    <MovieCard key={index} movie={movie}/>
                ))
            }
            {
                movies.length === 0 &&  <ErrorResult/>
            }
        </div>
        </>
    )
}


