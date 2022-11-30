import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { App } from "./../App";
import { AuthContext, ProviderAuth } from "../context/AuthContext";
import { HomeAdmin } from "./HomeAdmin";
import { useState } from "react";
import { useContext } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const inpCredencial = useRef();
  const inpPassword = useRef();
  const tokenC = useContext(AuthContext)
  const [token, setToken] = useState({});
  const loguear = async (e) => {
    e.preventDefault();

    const url = "http://localhost:4000/login";
    const data = {
      credencial: inpCredencial.current.value,
      password: inpPassword.current.value,
    };
    try {
      const res = await axios.post(url, data);
      const tokenRes = res.data.token;
      setToken(tokenRes);

      // sessionStorage.setItem("token", token)
      if (tokenC) {
      
        navigate("/homeAdmin");
      }
    } catch (error) {
      console.error("There was an error!", error);
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
                    src="/img/inicio.png"
                    alt="login form"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3"></i>
                        <span className="h1 fw-bold mb-0">Iniciar Sesion</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3">Ingresa tu cuenta</h5>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="credencial"
                          className="form-control form-control-lg"
                          ref={inpCredencial}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Número de credencial
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          ref={inpPassword}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Contraseña
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          onClick={loguear}
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Iniciar Sesión
                        </button>
                      </div>

                      <Link className="small text-muted" to="#!">
                        ¿No recuerdas tu contraseña?
                      </Link>
                      <p className="mb-5 pb-lg-2">
                        ¿No tienes una cuenta?{" "}
                        <Link to="/register">Registrate aquí</Link>
                      </p>
                      <Link to="#!" className="small text-muted">
                        Terminos de uso.
                      </Link>
                      <Link to="#!" className="small text-muted">
                        Políticas de Privacidad
                      </Link>
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
