import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const divSucces = "alert alert-success alert-dismissible fade show";
  const divDanger = "alert alert-danger alert-dismissible fade show";

  const [logg = false, setLogg] = useState();
  const [divAlert, setDivAlert] = useState("");
  const [text = "", setText] = useState();

  const inpNombre = useRef();
  const inpApellido = useRef();
  const inpCredencial = useRef();
  const inpPassword = useRef();
  const selRol = useRef();

  const registrar = async (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/register";
    const data = {
      nombre: inpNombre.current.value,
      apellido: inpApellido.current.value,
      credencial: inpCredencial.current.value,
      password: inpPassword.current.value,
      rol: selRol.current.value
    };

    try {
      const res = await axios.post(url, data);
      if (res.data.ok == true) {
        setLogg(true);
        setDivAlert(divSucces);
        setText("Usted se ha registrado");
      } else {
        setDivAlert(divDanger);
        setText("Ha ocurrido un error, inténtelo más tarde.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container  h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                  style={{width: "80%", marginTop: "30%", marginLeft: "5%"}}
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
                        <span className="h1 fw-bold mb-0">Registrarse</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3">Ingresa tu cuenta</h5>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="nombre"
                          className="form-control form-control-lg"
                          ref={inpNombre}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Nombre(s):
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="apellido"
                          className="form-control form-control-lg"
                          ref={inpApellido}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Apellido:
                        </label>
                      </div>

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

                      <div className="form-outline mb-4">
                        <select
                        
                          id="rol"
                          className="form-control form-control-lg"
                          ref={selRol}
                        >
                          <option defaultValue="INSPECTOR">INSPECTOR</option>
                          <option value="ADMIN">ADMINISTRADOR</option>
                        </select>
                        <label className="form-label" htmlFor="form2Example27">
                          Seleccione su rol:
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          onClick={registrar}
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Registrarse
                        </button>
                      </div>
                      <div className={divAlert}>
                        <p>{text}</p>
                      </div>

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
