import React from 'react'
import { useSelector } from 'react-redux';
export const ErrorResult = () => {
    const  {text}  = useSelector(state => state.movies);
    return (
        <div className="text-center">
        
           <img className="img-fluid" src="https://i.ibb.co/s1xp7N5/Frame-29.png" alt="" />     
            <p>No se encontraron resultados para “{text}”</p>
    
</div>

    )
}
