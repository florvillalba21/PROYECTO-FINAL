import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // const [active, setActive] = useState('inactive')

  return (
    <>
      <div
        className="side-navbar inactive-nav d-flex justify-content-between flex-wrap flex-column"
        id="sidebar"
      >
        <ul className="nav flex-column text-white w-100">
          <Link to="#" className="nav-link h3 text-white my-2">
            <img src="src\assets\img\cropped-cono.png" width="45px" /> TransiFor
            <br />
          </Link>
          <li href="#" className="nav-link">
            <i className="bi bi-house-fill"></i>
            <span className="mx-2">Inicio</span>
          </li>
          <li href="#" className="nav-link">
            <i className="bi bi-person-fill"></i>
            <span className="mx-2">Perfil</span>
          </li>
          <li href="#" className="nav-link">
            <i className="bi bi-question-circle"></i>
            <span className="mx-2">Ayuda</span>
          </li>
        </ul>
        <span className="nav-link h4 w-100">
          <Link to="">
            <i className="bi bi-box-arrow-left px-2 text-white"></i>
          </Link>
        </span>
      </div>
      <div className="my-container inactive-cont">
        <nav className="navbar navbar-dark bg-dark px-5">
          <Link className="btn border-0" id="menu-btn">
            <i>
              <img width="30px" src="src\assets\img\descarga.png" alt="" />
            </i>
          </Link>
          <div>
            <p className="h1">Bienvenid@ Inspertor!</p>
          </div>
          <img src="src\assets\img\logo-user.png" width="40px" />
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
