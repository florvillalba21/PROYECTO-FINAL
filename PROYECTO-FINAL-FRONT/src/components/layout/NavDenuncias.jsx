import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ControlledAccordions from "./AcordeonDenuncia";

export const NavDenuncia = () => {
  const [denuncias, setDenuncias] = useState([]);
  const [buscador, setBuscador] = useState([])
  const { admin } = useContext(AuthContext);
  const listDenuncias = []

  useEffect(()=>{
    axios.get("http://localhost:4000/denBuscador", {
      headers: {
        Authorization: `${admin.token}`,
        value: buscador,
      },
    })
  })
  const getDenuncias = (value) => {
    axios
      .get("http://localhost:4000/denunciasCat", {
        headers: {
          Authorization: `${admin.token}`,
          value: value,
        },
      })
      .then((response) => {
        const resultado = response.data.denuncias;
        if (resultado) {
          if (Array.isArray(resultado)) {
            setDenuncias(resultado);
          } else {
            listDenuncias.push(resultado);
            setDenuncias(listDenuncias);
          }
        }
      });
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-light"
        style={{ width: "auto", marginLeft: "11.9%", marginRight: 0 }}
      >
        <div className="container-flex " style={{ paddingLeft: "65%" }}>
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
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        getDenuncias("cedula");
                      }}
                    >
                      Falta de Cédula
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        getDenuncias("RTO");
                      }}
                    >
                      Falta de RTO
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        getDenuncias("seguro");
                      }}
                    >
                      Falta Póliza de Seguro
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        getDenuncias("licencia");
                      }}
                    >
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
                placeholder="Buscar denuncias de un inspector"
                aria-label="Search"
                onChange={event => {

                  setBuscador (event.target.value)
                  
                  }}
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div style={{ marginLeft: "15%" }}>
        <ControlledAccordions denuncias={denuncias} />
      </div>
    </>
  );
};
