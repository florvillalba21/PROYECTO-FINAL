import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const NavAdmin = ({ text, categoria }) => {
  const { admin } = useContext(AuthContext);
  const classDisabled = "nav-link h5 text-white my-2";
  const [isDisabled, setDisabled] = useState("");

  useEffect(() => {
    if (admin.rol == "INSPECTOR") {
      setDisabled(classDisabled + " collapse");
    } else {
      setDisabled(classDisabled);
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("rol");
  };

  return (
    <>
      <div
        className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column"
        id="sidebar"
      >
        <ul className="nav flex-column text-white w-100">
          <Link to="/homeAdmin" className="nav-link h3 text-white my-2">
            <img src="/public/img/TRANSIT-nb.png" width="100%" /> <br />
          </Link>
          <Link to="/homeAdmin" className="nav-link h5 text-white my-2">
            <i className="bi bi-house"></i>
            <span className="mx-2">Inicio</span>
          </Link>
          <Link to="/profile" className="nav-link h5 text-white my-2">
            <i className="bi bi-person"></i>
            <span className="mx-2">Perfil</span>
          </Link>
          <Link to="/register" className={isDisabled}>
            <i className="bi bi-person-plus"></i>
            <span className="mx-2">Agregar inspector</span>
          </Link>
          <Link to="/verdenuncias" className="nav-link h5 text-white my-2">
            <i className=" bi-journal-text"></i>
            <span className="mx-2">Ver denuncias</span>
          </Link>
          <Link to="/ayuda" className="nav-link h5 text-white my-2">
            <i className="bi bi-question-circle"></i>
            <span className="mx-2">Ayuda</span>
          </Link>
        </ul>
        <span className="nav-link h4 w-100">
          <Link to="/" onClick={logout}>
            <i className="bi bi-box-arrow-left text-white"></i>
          </Link>
        </span>
      </div>
      <div className="my-container active-cont">
        <nav className="navbar navbar-dark bg-dark px-5">
          <div>
            <center>
              <p className="h1">{text}</p>
            </center>
          </div>

          
          <Link to="/profile">
            <img src="\img\logo-user.png" width="40px" />
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavAdmin;
