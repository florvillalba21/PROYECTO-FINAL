import React from "react";

const Tarjetadenuncia = () => {
  return (
      <div classNameName="card-mb3">
        <div className="row g-0">
          <div className="col-md-4">
            <div
              className="card"
              style={{ width: "18rem", position: "relative", left: "80%" }}
            >
              <img
                src="src\assets\img\foto1.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Realizar un denuncia:</h5>
                <p className="card-text">
                  Complete este formulario si desea notificar que hay un
                  vehiculo con pedido de retiro de la via publica.
                </p>
                <div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#denuncia"
                  >
                    Denunciar
                  </button>
                  <div
                    className="modal fade"
                    id="denuncia"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="staticBackdropLabel"
                          >
                            Formulario de denuncia:
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <label htmlFor="formFile" className="form-label">
                            Indique la marca del vehiculo:
                          </label>
                          <select
                            className="form-select form-select mx-4 mb-5"
                            aria-label="Default select example"
                            style={{
                              width: "400px",
                              top: "10px",
                              position: "relative",
                            }}
                            name="categoria"
                          >
                            <option selected>Selecciona una opción.</option>
                            <option value="1">Alfa Romeo</option>
                            <option value="2">Audi</option>
                            <option value="3">BMW</option>
                            <option value="4">Chevrolet</option>
                            <option value="5">Citroen</option>
                            <option value="6">Fiat</option>
                            <option value="7">Ford</option>
                          </select>
                        </div>
                        <div className="modal-body">
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
                        <div className="modal-body">
                          <label
                            htmlFor="exampleColorInput"
                            className="form-label"
                          >
                            Indique el color del vehiculo:
                          </label>
                          <input
                            type="color"
                            className="form-control form-control-color"
                            id="exampleColorInput"
                            title="Choose your color"
                          />
                        </div>
                        <div className="modal-body">
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                          >
                            Indique detalles los cuales para facilitar la
                            identificación del vehículo. Especificar sí
                            ocurrieron otras infracciones.
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                          ></textarea>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Cerrar
                          </button>
                          <button type="button" className="btn btn-success">
                            Enviar
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

export default Tarjetadenuncia;
