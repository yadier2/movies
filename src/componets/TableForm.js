import React from 'react'
import { useSelector } from "react-redux";

export const TableForm = ({ setDataToEdit, deleteData }) => {
  const { moviesCrud } = useSelector(state => state.moviesCrud);

  return (
    <div className="col-12">

    <table className="table  text-center">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Valoracion</th>
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        {
          moviesCrud.map(item => (
            <tr key={item.id}>
              <td scope="row">{item.title}</td>
              <td>{item.vote_average}</td>
              <td>
                <button className="btn btn-success me-3 "
                  onClick={
                    () => setDataToEdit(item)
                  } >Editar</button>
                <button className="btn btn-danger "

onClick={() => deleteData(item.id)}
>Eliminar</button>
              </td>

            </tr>
          ))
        }
      </tbody>
    </table>
</div>
  )
}
