import { Link } from "react-router-dom";

export const Register = () => {
  const registrar = async (e) => {
    e.preventDefault();
    const credencial = document.getElementById("credencial").value;
    const password = document.getElementById("password").value;
    const data = {
      credencial: credencial,
      password: password,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "My-Custom-Header": "foobar",
      },
      body: JSON.stringify(data),
    };
    try {
      const res = await fetch(`http://localhost:4000/login`, requestOptions);
      const resJS = await res.json();
      console.log(resJS);
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
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
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
                          id="credencial"
                          className="form-control form-control-lg"
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
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Contraseña
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
