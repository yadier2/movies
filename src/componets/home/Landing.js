import React from 'react'
import {  useSelector } from 'react-redux';
import {MoviesContainer} from './MoviesContainer'
import {Spinner} from '../layout/Spinner'
import {Carousel} from './Carousel'
export const Landing = () => {

    const  {loading}  = useSelector(state => state.movies);

    return (
        <div>
            <Carousel/>
            <div className="container">
             {
                 /* Resultado de buqueda */
                loading ? <Spinner/> : <MoviesContainer/>
            }
            </div>
        </div>



    )
}
