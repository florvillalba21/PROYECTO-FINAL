import React from "react";

const Cards = () => {
  return (
    <div className="card-group">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Realizar un denuncia:</h5>
          <p className="card-text">
            Complete este formulario si desea notificar que hay un vehiculo con
            pedido de retiro de la via publica.
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
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
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
                    <label htmlFor="exampleColorInput" className="form-label">
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
                      identificación del vehículo. Especificar sí ocurrieron
                      otras infracciones.
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
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Buscar dominio:</h5>
          <p class="card-text">
            Verifique si un vehiculo está habilitado para funcionar como
            transporte de personas.
          </p>
          <div>
            <button
              type="button"
              class="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#dominio"
            >
              Verificar
            </button>
            <div
              class="modal fade"
              id="dominio"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                      Dominio:
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Ingrese el domoninio del vehiculo:
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="ABC-123 | AB-123-CD"
                      />
                    </div>
                    <button type="button" class="btn btn-success">
                      Verificar
                    </button>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
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
  );
};

export default Cards;
