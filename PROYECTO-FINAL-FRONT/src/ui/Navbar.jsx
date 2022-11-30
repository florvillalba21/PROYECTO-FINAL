import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <h8 className="h6">Todos los derechos reservados®</h8>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
          <button className="btn btn-success">Buscar</button>
        </form>
      </div>
    </nav>
    <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: "black"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          Bienvenido
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="#">
                Contacto
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ¡Más!
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};
