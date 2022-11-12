import react from "react"


import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
        <ul className="nav flex-column text-white w-100">
          <a href="#" className="nav-link h3 text-white my-2"><img src="src\assets\img\cropped-cono.png" width="45px" /> TransiFor<br /></a>
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
          <a href=""><i className="bi bi-box-arrow-left px-2 text-white"></i></a>
        </span>
      </div>
      <div className="my-container active-cont">
        <nav className="navbar navbar-dark bg-dark px-5">
          <a className="btn border-0" id="menu-btn"><i><img width="30px" src="src\assets\img\descarga.png" alt="" /></i></a>
          <div>
            <p className="h1">Bienvenid@ Inspertor!</p>
          </div>
          <img src="src\assets\img\logo-user.png" width="40px" />
        </nav>
    </div>
    </div>
  )
}

export default Sidebar