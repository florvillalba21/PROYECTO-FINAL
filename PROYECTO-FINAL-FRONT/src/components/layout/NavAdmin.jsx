import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const NavAdmin = ({text}) => {
  const classNav =
    "side-navbar active-nav d-flex justify-content-between flex-wrap flex-column";
  const classNavIn =
    "side-navbar inactive-nav d-flex justify-content-between flex-wrap flex-column";

  const classBtn = "my-container active-cont";
  const classBtnIn = "my-container inactive-cont";
  const [nav, setNav] = useState(classNav);
  const [btn, setBtn] = useState(classBtn);

  const navAction = (e) => {
    e.preventDefault();
    if (nav == classNav && btn == classBtn) {
      setNav(classNavIn);
      setBtn(classBtnIn);
    } else {
      setNav(classNav);
      setBtn(classBtn);
    }
  };


  return (
    <>
      <div className={nav} id="sidebar">
        <ul className="nav flex-column text-white w-100">
          <Link to="/homeAdmin" className="nav-link h3 text-white my-2">
            <img src="../src\assets\img\cono-barra.png" width="45px" />{" "}
            Transit.AR
            <br />
          </Link>
          <Link to="/homeAdmin" className="nav-link h5 text-white my-2">
            <i className="bi bi-house-fill"></i>
            <span className="mx-2">Inicio</span>
          </Link>
          <Link to="/profile" className="nav-link h5 text-white my-2">
            <i className="bi bi-person-fill"></i>
            <span className="mx-2">Perfil</span>
          </Link>
          <Link to="/ayuda" className="nav-link h5 text-white my-2">
            <i className="bi bi-question-circle"></i>
            <span className="mx-2">Ayuda</span>
          </Link>
        </ul>
        <span className="nav-link h4 w-100">
          <Link to="/login">
            <i className="bi bi-box-arrow-left px-2 text-white"></i>
          </Link>
        </span>
      </div>
      <div className={btn}>
        <nav className="navbar navbar-dark bg-dark px-5">
          <Link className="btn border-0" id="menu-btn">
            <i>
              <img
                onClick={navAction}
                width="55px"
                src="../src\assets\img\TRANSIT.AR.png"
                alt=""
              />
            </i>
          </Link>
          <div>
            <p className="h1">{text}</p>
          </div>
          <Link to = "/profile">
            <img src="../src\assets\img\logo-user.png" width="40px" />
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavAdmin;
