import React from "react";

const Tarjetadominio = () => {
  return (
    
      <div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col ">
            <div
              className="card"
              style={{ width: "18rem", position: "relative", left: "80%" }}
            >
              <img
                src="src\assets\img\foto3.jpeg"
                className="card-img-top"
                alt="..."
              />

              <div className="card-body">
                <h5 className="card-title">Buscar dominio:</h5>
                <p className="card-text">
                  Verifique si un vehiculo está habilitado para funcionar como
                  transporte de personas.
                </p>
                <div>
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#dominio"
                  >
                    Verificar
                  </button>
                  <div
                    className="modal fade"
                    id="dominio"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            Dominio:
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label"
                            >
                              Ingrese el domoninio del vehiculo:
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="ABC-123 | AB-123-CD"
                            />
                          </div>
                          <button type="button" className="btn btn-success">
                            Verificar
                          </button>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Cerrar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Tarjetadominio;
