import React from "react";

import { Link } from "react-router-dom";

const VerLogin = ({
  email,
  password,
  handleInputChange,
  handleLogin,
  handleGoogle,
  loading,
  handleFacebook,
  handleRecover,
}) => {
  return (
    <div className="form-signin d-flex justify-content-center">
      <form
        className="text-center mt-5 p-3 border"
        onSubmit={handleLogin}
        style={{ minWidth: "350px" }}
      >
        <h3> Iniciar sesión </h3>
        <div className="d-flex justify-content-between mt-3 mb-3">
          <button
            type="button"
            onClick={handleGoogle}
            style={{ background: "#4C8BF5", minWidth: "150px" }}
            className="btn btn-primary "
          >
            Google&nbsp;
           {/*  <FontAwesomeIcon icon={faGoogle} /> */}
          </button>

          <button
            type="button"
            style={{ background: "#3A5998", minWidth: "150px" }}
            className="btn btn-secondary "
            onClick={handleFacebook}
          >
            Facebook&nbsp;
          {/*   <FontAwesomeIcon icon={faFacebook} /> */}
          </button>
        </div>

        <div className="mb-3 mt-4">

          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Dirección de correo electrónico"
          />
        </div>
        <div className="mb-3">
  
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Contraseña"
          />
        </div>

        <div className="d-grid gap-1">
          <button className="btn btn-primary" disabled={loading} type="submit">
            Iniciar sesión
          </button>
        </div>
        <div className="mt-3">
          <p
            type="button"
            className="btn m-0"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            ¿Olvidaste tu contraseña?
          </p>
        </div>
        <div className="checkbox  mt-2 ">
          ¿No tienes una cuenta?&nbsp;
          <Link to="/registro">Regístrate</Link>
        </div>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Restablecer contraseña 
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Dirección de correo electrónico"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleRecover}
                >
                  Restablecer contraseña
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className=" mt-1 text-muted">&copy; 2021</p>
      </form>
    </div>
  );
};

export default VerLogin;
