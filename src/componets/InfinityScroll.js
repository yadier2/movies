import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovies, setLoading1 } from '../actions/allMoviesActions'
import { MovieCard } from './home/MovieCard'
import { Spinner } from './layout/Spinner'
import {Carousel} from './home/Carousel'

export const InfinityScroll = () => {
    const dispatch = useDispatch()

    const bottomRef = useRef()

    const { allmovies, loading, finish } = useSelector(state => state.allMovies);

    let options = {
        rootMargin: '0px 0px 1000px 0px',
        threshold: .9,

    }
    const intersectionObserver = new IntersectionObserver(enteries => {

        if (enteries[0].isIntersecting) {

            if (!finish) {
                setTimeout(() => {
                    dispatch(fetchAllMovies())
                   dispatch(setLoading1())
                }, 300);
            }
        }
    }, options)

   
    useEffect(() => {

        intersectionObserver.observe(bottomRef.current)
        return () => {
            intersectionObserver.disconnect()
        }
    }, [])


    return (
        <div  style={{background:'#111' , color:'#fff'}}>
            <Carousel/>
               
            <h2 className="mt-3 ms-4 ">Todas las peliculas</h2>

            <div className="row m-2  mb-0">

                {
                    allmovies.length > 0 && allmovies.map((movie) =>
                        <MovieCard movie={movie} key={movie.id} />
                    )
                }
                {
                    loading && !finish && <Spinner />
                }


            </div>
            <div ref={bottomRef} style={{ padding: '10px', marginTop: '100px' }}>....</div>
        </div>
    )
}
