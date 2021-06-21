import React from 'react'
import spinner from './spinner.gif'
import './spiner.css'
export const Spinner = () => {

    return (
    <div>
      <div className="loader">Loading...</div>
     {/*  <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      /> */}
    </div>
  )
}

