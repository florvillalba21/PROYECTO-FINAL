import { useReducer } from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavAdmin from "../components/layout/NavAdmin";
import Tarjetadenuncia from "../components/Tarjetadenuncia";
import Tarjetadominio from "../components/Tarjetadominio";



export const HomeAdmin = () => {
  const navigate = useNavigate();
  // const token = sessionStorage.getItem("token");
  // if (!token) {
  //   navigate("/");
  // }
  
 
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
