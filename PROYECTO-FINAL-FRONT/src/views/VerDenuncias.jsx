import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Accordion from "../components/Acordeon";
import { ListDenuncias } from "../components/Denuncias";
import ControlledAccordions from "../components/layout/AcordeonDenuncia";
import NavAdmin from "../components/layout/NavAdmin";
import { AuthContext } from "../context/AuthContext";

export const Denuncias = () => {
  const [state = [], setState] = useState();
  const { admin } = useContext(AuthContext);
  const url = "http://localhost:4000/denuncias";
  const listDenuncias = [];
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `${admin.token}`,
        },
      })
      .then((response) => {
        if (typeof(response.data.denuncias) != "object") {
          listDenuncias.push(response.data.denuncias);
          setState(listDenuncias);
        } else {
          setState(response.data.denuncias);
        }
      });
  }, []);

  return (
    <>
      <NavAdmin text={"Denuncias"} categoria={"categorias"} />
      <h2 style={{ marginLeft: "15%", marginTop: "20px" }}>
        Actas realizadas en el último mes:
      </h2>
      <div style={{ marginLeft: "15%" }}>
        <ControlledAccordions denuncias={state} />
      </div>
    </>
  );
};
