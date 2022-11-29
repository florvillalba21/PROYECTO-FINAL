import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const BuscadorDom = () => {
  const inpDom = useRef();
  const [data = {}, setData] = useState({});

  const dataDom = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/buscarDom";

      const res = await axios.get(`${url}/${inpDom.current.value}`);
      console.log(data);
      setData(res.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  return (
    <div className="card text-center" style={{ width: "50%",  margin: "auto", marginTop: "30px" , marginBottom: "30px"}}>
      <div className="card-header">Transit.Ar</div>
      <div className="card-body">
        <h5 className="card-title">Ingresa el dominio que deseas verificar</h5>
        <input type="text" className="form-control"
        ref={inpDom}/>

        <Link onClick={dataDom} to="" className="btn btn-primary" style={{marginTop: "5px"}}>
          Consultar matrícula
        </Link>
      </div>
    </div>
  );
};
