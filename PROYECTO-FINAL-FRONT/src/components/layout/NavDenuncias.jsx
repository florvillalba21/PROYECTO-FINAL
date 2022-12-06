import React from "react";
import { Link } from "react-router-dom";

export const NavDenuncia = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light" style={{width: "80%", marginLeft: "13.5%", marginRight: 0}}>
        <div className="container-flex " style={{paddingLeft: "70%"}}>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Falta de Cédula
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Falta de RTO
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Falta Póliza de Seguro
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Falta Licencia
                    </Link>
                  </li>
                </ul>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
