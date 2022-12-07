import { useEffect, useReducer } from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavAdmin from "../components/layout/NavAdmin";
import Tarjetadenuncia from "../components/Tarjetadenuncia";
import Tarjetadominio from "../components/Tarjetadominio";
import { AuthContext } from "../context/AuthContext";
import { CargarAuto } from "./CargarAuto";

export const HomeAdmin = () => {

  const {admin} = useContext(AuthContext);
  
   
  
  console.log(admin.rol);
  if (admin.rol == "ADMIN") {
    return (
      <>
        <NavAdmin text={"Bienvenido"} />
        <CargarAuto />
      </>
    );
  } else if (admin.rol == "INSPECTOR") {
    return (
      <>
        <NavAdmin text={"Bienvenido"} />
        <div
          className="container card-group"
          style={{ padding: "30px", paddingLeft: "250px" }}
        >
          <Tarjetadenuncia />
          <Tarjetadominio />
        </div>
      </>
    );
  }
};
