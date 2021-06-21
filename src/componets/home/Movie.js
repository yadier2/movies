import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchMovie, setLoading } from '../../actions/searchActions';

import {Spinner} from '../layout/Spinner'
import { VideoPlayer } from '../VideoPlayer';
import Moment from 'react-moment';

export const Movie = (props) => {
    
    const dispatch = useDispatch()
  
    const  {movie,loading}  = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(fetchMovie(props.match.params.id))
        dispatch(setLoading())
      
    }, [])
  
    return (
        <> {movie?
        <div className="container">
          {
            loading ? <Spinner/> :
          <>
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={ movie?.video ? 
              movie?.poster_path : 
               "https://image.tmdb.org/t/p/w500"+movie?.poster_path 
            }
              className="thumbnail" alt="Poster" />
           
          </div>
          <div className="col-md-8">
       
            <ul className="list-group mt-4">
            <li className="list-group-item">
                <strong>Title:</strong> {movie?.title}
              </li>
              <li className="list-group-item">
                <strong>Original_language:</strong> {movie?.original_language}
              </li>
              <li className="list-group-item">
                <strong>Overview:</strong> {movie?.overview}
              </li>
              <li className="list-group-item">
                <strong>Popularity:</strong> {movie?.popularity}
              </li>
              <li className="list-group-item">
                <strong>Release_date:</strong> <Moment format="D MMM YYYY" date={movie?.release_date} />
              </li>
              <li className="list-group-item">
                <strong>Vote_average:</strong> {movie?.vote_average}
              </li>
             {/*  <li className="list-group-item">
                <strong>Director:</strong> {movie?.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie?.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie?.Actors}
              </li> */}
            
            </ul>
          </div>
        </div>
        <div className="row" >
         
              <VideoPlayer url={movie.url_video} style={{zIndex:'1000'}}/>
        </div>
    
           </>
            }
     </div>
          
      : <div className="container bg-success m-5 fs-1 p-5 text-center">Esta pagina no existe</div>
        }</>
    )
}
