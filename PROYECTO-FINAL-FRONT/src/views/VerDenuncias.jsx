import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { ListDenuncias } from "../components/Denuncias";
import NavAdmin from "../components/layout/NavAdmin";

export const Denuncias = () => {
  const [state=[], setState] = useState();
  const url = "http://localhost:4000/denuncias";

  const getDenuncias = async () => {
    const res = await axios.get(url);
    const listaDenuncias = res.data.denuncias;
    try {
      setState(listaDenuncias);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getDenuncias()
    console.log(state)
  }, [])


  return (
    <>
      <NavAdmin text={"Denuncias realizadas"} />
      <div
        className="container"
        style={{ width: "30%", marginTop: "50px", border: "1px" }}
      >
        <ListDenuncias denuncias={state} />
      </div>
    </>
  );
};
