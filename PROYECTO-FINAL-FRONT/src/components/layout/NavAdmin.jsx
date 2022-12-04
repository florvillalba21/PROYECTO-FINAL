import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const NavAdmin = ({ text }) => {
  const { admin } = useContext(AuthContext);
  const classDisabled = "nav-link h5 text-white my-2";
  const [isDisabled, setDisabled] = useState("");

  useEffect(() => {
    if (admin.rol == "ADMIN") {
      setDisabled(classDisabled + " disabled");
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
          <Link to="/verdenuncias" className={isDisabled}>
            <i className=" bi-journal-text"></i>
            <span className="mx-2">Ver denuncias</span>
          </Link>
          <Link to="/ayuda" className="nav-link h5 text-white my-2">
            <i className="bi bi-question-circle"></i>
            <span className="mx-2">Ayuda</span>
          </Link>
        </ul>
        <span className="nav-link h4 w-100">
<<<<<<< HEAD
          <Link
            to="/"
            onClick={logout}
            className="bi bi-box-arrow-left px-2 text-white"
            style={{ backgroundColor: "#0e1c2b" }}
          ></Link>
=======
          <i className="bi bi-box-arrow-left text-white" onClick={logout}></i>
>>>>>>> fafe37123e8a61d0519d988271e25356fa5276a4
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
            <img src="../src\assets\img\logo-user.png" width="40px" />
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavAdmin;
