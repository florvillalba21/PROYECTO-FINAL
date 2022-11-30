import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const BuscadorDom = () => {
  const inpDom = useRef();
  const [data = {}, setData] = useState({});
  const [div= " fade hidde", setDiv] = useState()

  const dataDom = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/buscarDom";

      const res = await axios.get(`${url}/${inpDom.current.value}`);
      console.log(data);
      if(res){
        setDiv("fade show")
      }
      setData(res.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  return (
    <div className="container">
      <div
        className="card text-center"
        style={{
          backgroundColor: "",
          width: "50%",
          margin: "auto",
          marginTop: "30px",
          marginBottom: "30px",
          borderColor: "grey",
          borderWidth: "2px"
        }}
      >
        <div className="card-header">
        <div className="text-center">
        <img src="/public/img/TRANSIT-nb.png" style={{width: "200px"}} />
      </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            Ingresá el dominio que deseas verificar:
          </h5>
          <input type="text" className="form-control" ref={inpDom} />

          <Link
            onClick={dataDom}
            to=""
            className="btn btn-success"
            style={{ marginTop: "15px" }}
          >
            Consultar matrícula
          </Link>
        </div>
      </div>
      <div className={div}>
        <div
          className="card text-center"
          style={{
            width: "50%",
            margin: "auto",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <div className="card-header">Resultado de tu búsqueda</div>
          <div className="card-body" key={data._id}>{data.matricula}</div>
        </div>
      </div>
    </div>
  );
};
