import React from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export const MovieCard = ({ movie }) => {

  // const dateToFormat = new Date('1976-04-19T12:59-0500');
  const dateToFormat = movie.release_date;
  return (
    <div className="col-md-3 mb-1" style={{ position: 'relative' }}>
      <div className="p-0 m-0 border-start-0 rounded-pill  rounded-start border border-warning 
       d-flex justify-content-evenly align-items-center fs-3"
        style={{ zIndex: '2000', position: 'relative', top: '85px', left: '0', height: '55px', width: '100px', color: '#fff', background: 'rgba(0 ,0 ,0 ,.7)' }}>
        <i className="fas fa-star text-warning  fs-3"></i>
        {movie.vote_average}
      </div>
      <Link style={{ textDecoration: 'none' }} to={'/movie/' + movie.id}>
        <div className="card card-body bg-dark text-center  p-0" style={{ position: 'relative' }}>

          <div className="two d-flex justify-content-center align-items-center " style={{ background: 'rgba(0,0,0,.1' }}>
            <i className="fas fa-play-circle text-warning" style={{ fontSize: '64px' }}></i>
          </div>
          <img className="w-100 mb-2" src={ movie.video ?movie.poster_path :"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="Movie Cover" />
          <h5 className="text-light card-title">
            {movie.title.substring(0, 16)} - <Moment format="D MMM YYYY" date={dateToFormat} />
          </h5>


          {/*    <Link className="btn btn-primary" to={'/movie/' + movie.id}>
            Movie Details
            <i className="fas fa-chevron-right" />
          </Link> */}
        </div>
      </Link>

    </div>
  )
}
