import axios from "axios";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const divDanger = "alert alert-danger alert-dismissible fade show";
  const [divAlert, setDivAlert] = useState("");
  const [text = "", setText] = useState();
  const inpCredencial = useRef();
  const inpPassword = useRef();

  const loguear = async (e) => {
    e.preventDefault();

    const url = "http://localhost:4000/login";
    const data = {
      credencial: inpCredencial.current.value,
      password: inpPassword.current.value,
    };
    try {
      const res = await axios.post(url, data);
   
      if (res.data.ok == true) {
        const tokenRes = res.data.token;
        const adminRol = res.data.rol;
        sessionStorage.setItem("insp",res.data.admin.credencial )
        sessionStorage.setItem("token", tokenRes);
        sessionStorage.setItem("rol", adminRol);

        navigate("/homeAdmin");
      }

    } catch (error) {
      console.error("There was an error!", error);
      setDivAlert(divDanger);
      setText("Ha ocurrido un error, inténtelo más tarde.");
    }
  };
  return (
    <>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    style={{ width: "80%", marginTop: "30%", marginLeft: "5%" }}
                    src="/img/TRANSIT-nb.png"
                    alt=""
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
                          type="number"
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
                          type="submit"
                        >
                          Iniciar Sesión
                        </button>
                      </div>
                      <div className={divAlert}>
                        <p>{text}</p>
                      </div>
                      <Link to="#!" className="small text-muted">
                        Terminos de uso
                      </Link>
                      <br />
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
