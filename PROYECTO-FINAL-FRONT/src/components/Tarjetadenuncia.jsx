import axios from "axios";
import React, { useContext, useRef } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Tarjetadenuncia = () => {
  const {admin}= useContext(AuthContext);
  const [data = {}, setData] = useState({});
  const selMarca = useRef();
  const inpDom = useRef();
  const inpColor = useRef();
  const textDet = useRef();
  const checkSeguro = document.getElementById("seguro")
  const checkRTO = document.getElementById("RTO")
  const checkLicencia = document.getElementById("licencia")
  const checkCedula =document.getElementById("cedula")
  const fecha = new Date();


  
  const enviarDenuncia = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/denunciasN";
      const data = {
        inspector: admin.credencial,
        matricula: inpDom.current.value,
        marca: selMarca.current.value,
        color: inpColor.current.value,
        detalles: textDet.current.value,
        cedula: checkCedula.checked ? true : false,
        RTO: checkRTO.checked ? true : false,
        seguro: checkSeguro.checked ? true : false,
        licencia: checkLicencia.checked ? true : false,
        fecha: fecha.toLocaleDateString(),
      };

      const res = await axios.post(url, data);
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="card-mb3">
      <div className="row g-0">
        <div className="col-md-4">
          <div
            className="card"
            style={{
              width: "20rem",
              position: "relative",
              left: "80%",
              borderColor: "grey",
              borderWidth: "2px",
            }}
          >
            <img
              src="../src\assets\img\papeldenuncia.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Realizar un denuncia:</h5>
              <p className="card-text">
                Complete este formulario si desea notificar que hay un vehiculo
                con pedido de retiro de la via publica.
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
                        <label htmlFor="formFile" className="form-label">
                          Indique la marca del vehiculo:
                        </label>
                        <select
                          ref={selMarca}
                          className="form-select form-select mx-4 mb-5"
                          aria-label="Default select example"
                          style={{
                            width: "400px",
                            top: "10px",
                            position: "relative",
                          }}
                          name="categoria"
                        >
                          <option defaultValue="0">
                            Selecciona una opción.
                          </option>
                          <option value="Alfa Romeo">Alfa Romeo</option>
                          <option value="Audi">Audi</option>
                          <option value="BMW">BMW</option>
                          <option value="Chevrolet">Chevrolet</option>
                          <option value="Citroen">Citroen</option>
                          <option value="Fiat">Fiat</option>
                          <option value="Ford">Ford</option>
                          <option value="Renault">Renault</option>
                          <option value="Toyota">Toyota</option>
                          <option value="Peugeot">Peugeot</option>
                        </select>
                      </div>
                      <div className="modal-body">
                        <label
                          htmlFor="exampleColorInput"
                          className="form-label"
                        >
                          Indique el color del vehiculo:
                        </label>
                        <input
                          ref={inpColor}
                          type="color"
                          className="form-control form-control-color"
                          id="exampleColorInput"
                          title="Choose your color"
                        />
                      </div>

                      <div className="modal-body">
                        <label
                          htmlFor="exampleColorInput"
                          className="form-label"
                        >
                          Indique la(s) infracción(es) cometida:
                        </label>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="seguro"
                            id="seguro"
                            ref={checkSeguro}

                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Falta seguro
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="RTO"
                            ref={checkRTO}
                            id="RTO"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Falta RTO
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="licencia"
                            ref={checkLicencia}
                            id="licencia"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Falta Licencia
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="cedula"
                            ref={checkCedula}
                            id="cedula"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Falta Cédula
                          </label>
                        </div>
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
                          ref={textDet}
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
                        <button
                          onClick={enviarDenuncia}
                          type="button"
                          className="btn btn-success"
                          data-bs-dismiss="modal"
                        >
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
