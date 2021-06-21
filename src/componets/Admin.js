import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/Auth";
import { allMoviesCrud, startDeleting, startUpdate, startNewMovie } from "../actions/crudMoviesActions";
import { FormCrud } from './FormCrud'
import { TableForm } from './TableForm'


export const Admin = () => {
  const dispatch = useDispatch();

  const userNameFromData = useSelector((state) => state.auth.name);

  const [dataToEdit, setDataToEdit] = useState(null)
 
  const handleLogout = () => {
    dispatch(startLogout());
  };
  const createData = (data) => {

    dispatch(startNewMovie(data))
  }
  const updateData = (id, data) => {

    dispatch(startUpdate(id, data))
  }

  const deleteData = (id) => {
    let isDelete = window.confirm('Estás seguro de eliminar la pelicula?')
    if (isDelete) {
      dispatch(startDeleting(id))
    } else {
      return
    }
  }

  const photoProfile = useSelector(state => state.auth.photoURL)
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-md-3 text-center m-2">
          <img src={photoProfile} alt=""  className="img-fluid" />
          <h3 className="card-title">{userNameFromData}</h3>
          <Link to='/login'>
            <button
              className="btn btn-xs  btn-outline-danger mt-1"
              onClick={handleLogout}
              >
              Cerrar sesion
            </button>
          </Link>
          </div>
      
        <div className="col-sm-12 col-md-8 mt-3">
          <FormCrud
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        </div>
        <div className='row'>

          <TableForm
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        </div>
        <button className="btn btn-info m-4" onClick={
          () =>  dispatch(allMoviesCrud())
        }>Siguiente</button>
      </div>
    </div>       
  );
};

