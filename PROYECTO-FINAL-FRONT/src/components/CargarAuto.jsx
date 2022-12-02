import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const CargarAuto = () => {
  const inpMatricula = useRef();
  const inpTitular = useRef();
  const inpLicencia = useRef();
  const inpSeguro = useRef();
  const inpRTO = useRef();
  const inpMarca = useRef();
  const inpModelo = useRef();

  const registrar = async (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/subirAuto";
    const data = {
      matricula: inpMatricula.current.value,
      titular: inpTitular.current.value,
      licencia: inpLicencia.current.value,
      seguro: inpSeguro.current.value,
      RTO: inpRTO.current.value,
      marca: inpMarca.current.value,
      modelo: inpModelo.current.value,
    };

    try {
      const addAuto = await axios.post(url, data);
      console.log(addAuto.data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="/src/assets/img/carform.png"
                    alt="login form"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3"></i>
                        <span className="h1 fw-bold mb-0">Cargar autos</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3">Describe el auto</h5>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          Matricula:
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          className="form-control form-control-lg"
                          ref={inpMatricula}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          Titular:
                        </label>
                        <input
                          type="text"
                          id="credencial"
                          className="form-control form-control-lg"
                          ref={inpTitular}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          Licencia:
                        </label>
                        <select
                          className="form-control form-control-lg"
                          name=""
                          id=""
                          ref={inpLicencia}
                        >
                          <option value="true">Si</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          Poliza de Seguro:
                        </label>
                        <select
                          className="form-control form-control-lg"
                          name=""
                          id=""
                          ref={inpSeguro}
                        >
                          <option value="true">Si</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          Revisión Técnica Obligatoria:
                        </label>
                        <select
                          className="form-control form-control-lg"
                          name=""
                          id=""
                          ref={inpRTO}
                        >
                          <option value="true">Si</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          Marca:
                        </label>
                        <input
                          type="text"
                          id="credencial"
                          className="form-control form-control-lg"
                          ref={inpMarca}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          Modelo:
                        </label>
                        <input
                          type="text"
                          id="credencial"
                          className="form-control form-control-lg"
                          ref={inpModelo}
                        />
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          onClick={registrar}
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Cargar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
