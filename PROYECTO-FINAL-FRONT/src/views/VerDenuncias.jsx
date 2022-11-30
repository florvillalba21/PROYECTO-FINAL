import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import NavAdmin from "../components/layout/NavAdmin";

export const Denuncias = () => {
  const [state, setState] = useState([]);
  const url = "http://localhost:4000/denuncias";
  useEffect(() => {
    (async()=>{
        const res = await axios.get(url);
        const resDenuncias = res.data.denuncias;
        setState(resDenuncias)
        
    })()
  }, []);
  useEffect(()=>{
    state.map(denuncia =>console.log(denuncia))
  })
  return (
    <>
      <NavAdmin text={"Denuncias realizadas"} />
      <div
        className="container card-group"
        style={{ width: "30%", marginTop: "50px" }}
      >
        <div className="card-header">Resultado de tu búsqueda</div>
        <div className="card-body">
        </div>
      </div>
      {state.map(denuncia => {
                <p key={denuncia._id}>{denuncia.fecha}</p>
            })}
    </>
  );
};
