import React, { useRef } from "react";
import { useState } from "react";

const Tarjetadenuncia = () => {
  const [data={}, setData] = useState({})
  const selMarca = useRef();
  const inpDom = useRef();
  const inpColor = useRef();
  const textDet = useRef();
  const enviarDenuncia = async (e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:4000/nuevaDenuncia";
      const data = {
        matricula: inpDom.current.value,
        marca: selMarca.current.value,
        color: inpColor.current.value,
        detalles: textDet.current.value

      };

      const res = await axios.post(url, data);
      setData(res.data);
      console.log(res.data)
      
      
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  return (
      <div className="card-mb3">
        <div className="row g-0">
          <div className="col-md-4">
            <div
              className="card"
              style={{ width: "20rem",
              position: "relative", 
              left: "80%",
              borderColor: "grey",
              borderWidth: "2px" }}
            >
              <img
                src="../src\assets\img\inspector2.png"
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
                          <select ref={selMarca}
                            className="form-select form-select mx-4 mb-5"
                            aria-label="Default select example"
                            style={{
                              width: "400px",
                              top: "10px",
                              position: "relative",
                            }}
                            name="categoria"
                          >
                            <option defaultValue="0">Selecciona una opción.</option>
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
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Ingrese el dominio del vehiculo:
                          </label>
                          <input
                          ref={inpDom}
                            type="text"
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
                          <input ref={inpColor}
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
                          <textarea ref={textDet}
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
                          <button onClick={enviarDenuncia} type="button" className="btn btn-success"
                           data-bs-dismiss="modal">
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
