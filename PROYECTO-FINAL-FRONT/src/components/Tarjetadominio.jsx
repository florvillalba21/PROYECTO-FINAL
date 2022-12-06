import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Tarjetadominio = () => {
  const { admin } = useContext(AuthContext);

  const inpDom = useRef();
  const [div = " fade hidde", setDiv] = useState();
  const [data = [], setData] = useState();
  const [res = "", setRes] = useState();

  const dataDom = async () => {
    try {
      const url = "http://localhost:4000/buscarDom";
      const res = await axios.get(`${url}/${inpDom.current.value}`, {
        headers: {
          Authorization: `${admin.token}`,
        },
      });
      const infoRes = res.data;
      const infoList = infoRes;
      

      if (!infoList.car) {
        setData(infoList)
        setDiv("fade show");
        setRes("Este dominio no existe"), setData("");
      }

      if (
        infoList.car.licencia != true ||
        infoList.car.RTO != true ||
        infoList.car.seguro != true
      ) {
        setData(infoList)
          setDiv("fade show"),
          setRes(
            "Este vehículo no cuenta con la habilitación para utlizarse como transporte de personas."
          );
      } else {
        setData(infoList)
        setDiv("fade show")
        setRes(`Este vehículo está en regla.`)
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col ">
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
              src="../src\assets\img\carsecure.png"
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
                <div></div>
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
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
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
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Ingrese el domoninio del vehiculo:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="ABC-123 | AB-123-CD"
                            ref={inpDom}
                          />
                        </div>
                        <div className={div}>
                          <div
                            className="card text-center"
                            style={{
                              width: "80%",
                              margin: "auto",
                              marginTop: "30px",
                              marginBottom: "30px",
                            }}
                          >
                            <div className="card-header">
                              Resultado de tu búsqueda
                            </div>
                            <div className="card-body">
                              <p>{res}</p>
                              <ul>
                                
                              </ul>
                            </div>
                          </div>
                        </div>
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
                          onClick={dataDom}
                          type="button"
                          className="btn btn-success"
                        >
                          Verificar
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
