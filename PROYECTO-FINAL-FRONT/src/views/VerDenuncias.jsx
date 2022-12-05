import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Accordion from "../components/Acordeon";
import { ListDenuncias } from "../components/Denuncias";
import NavAdmin from "../components/layout/NavAdmin";

export const Denuncias = () => {
  const [state = [], setState] = useState();
  const url = "http://localhost:4000/denuncias";

  useEffect(() => {
    axios.get(url).then((response) => {
      setState(response.data.denuncias);
    });
  }, []);
 


  return (
    <>
      <NavAdmin text={"Denuncias"} />
      <h2 style={{ marginLeft: "15%", marginTop: "20px" }}>
        Actas realizadas en el último mes:
      </h2>
      <div className="acordeon-cuerpo" style={{marginLeft: "30%"}}>
        <Accordion denuncias={state} />
      </div>
    </>
  );
};
