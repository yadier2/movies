
import React from 'react'
import {searchMovie, fetchMovies,setLoading} from '../../actions/searchActions'
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


const  SearchForm = () => {
  let history = useHistory();
  const  {text}  = useSelector(state => state.movies);
  const dispatch = useDispatch()

  const onChange = e => {
      dispatch(searchMovie(e.target.value))
        
    }
  const onSubmit = e => {
    e.preventDefault()
    if(text.trim().length > 0){
        history.push("/search");
      dispatch(fetchMovies(text))
      dispatch(setLoading())
      
    }
  }
    return (
      
            <form id="searchForm" onSubmit={onSubmit} className="d-flex" style={{width:'100%', maxWidth:'500px'}}>
            <input  
             className="form-control  rounded-0 rounded-start border-warning border-end-0" 
             type="search" placeholder="Busca tu pelicula favorita" 
             onChange={onChange} 
             aria-label="Busca tu pelicula favorita"/>
            <button 
            className="btn btn-outline-warning rounded-0 rounded-end" 
            type="submit">
              <i className="far fa-search"></i>
                </button>
          </form>
      /*   </div> 
        
        <p>Total: {text}</p> 
  /*     </div> */
    )
}


export default SearchForm 