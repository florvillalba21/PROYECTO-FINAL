import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { ListDenuncias } from "../components/Denuncias";
import NavAdmin from "../components/layout/NavAdmin";

export const Denuncias = () => {
  const [state = [], setState] = useState();
  const url = "http://localhost:4000/denuncias";

  useEffect(() => {
    axios.get(url).then((response) => {
      setState(response.data.denuncias);
      
    })
  }, []);

  return (
    <>
      <NavAdmin text={"Denuncias"} />
      <p style={{marginLeft: "15%"}}>Denuncias realizadas en el último mes.</p>
      <div
        className="container card-group"
        style={{ width: "70%", marginTop: "50px", border: "1px" }}
      >
        <ListDenuncias denuncias={state} />
      </div>
    </>
  );
};
