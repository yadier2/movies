import React from 'react'
import SearchForm from './home/SearchForm'
import { Link } from "react-router-dom";
export const Navbar = ({isLoggedIn}) => {
    return (
        
        <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> 
    <img src=" https://i.ibb.co/MZtfLzT/logo-block-Buster.png" alt="" height='50px'/>
   </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Todas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Más valoradas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Menos valoradas</a>
        </li>
      <li className="nav-item">
        
      {isLoggedIn && <Link
      style={{ textDecoration: 'none'}}
                className=" nav-link active"
                to="/admin"
                tabIndex="-1"
                aria-disabled="true" 
                >Admin&nbsp; 
                {/*  <FontAwesomeIcon icon={faUserCog} className="fs-4" />   */}
              </Link>
      }
      </li>
      
      </ul>
      <SearchForm/>
    
    </div>
  </div>
</nav>
    )
}
