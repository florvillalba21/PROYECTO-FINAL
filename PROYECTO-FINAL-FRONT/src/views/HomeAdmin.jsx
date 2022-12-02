import { useReducer } from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavAdmin from "../components/layout/NavAdmin";
import Tarjetadenuncia from "../components/Tarjetadenuncia";
import Tarjetadominio from "../components/Tarjetadominio";
import { AuthContext } from "../context/AuthContext";



export const HomeAdmin = () => {
  const user = useContext(AuthContext);
  
  
 
  return (
    <>
      <NavAdmin text={"Bienvenido :)"} />

      <div
        className="container card-group"
        style={{ padding: "30px", paddingLeft: "250px" }}
      >
        <Tarjetadenuncia />
        <Tarjetadominio />
      </div>
    </>
  );
};
