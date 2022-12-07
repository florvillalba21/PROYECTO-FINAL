import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const BuscadorDom = () => {
  const inpDom = useRef();
  const [data = {}, setData] = useState({});
  const [div = " fade hidde", setDiv] = useState();
  const [res = "", setRes] = useState();

  const dataDom = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/buscar";

      const res = await axios.get(`${url}/${inpDom.current.value}`);
      const infoRes = res.data;

      const infoList = infoRes;
      console.log(res)
      if (!infoList.car) {
        setData(infoList);
        setDiv("fade show");
        setRes("Este dominio no existe"), setData("");
      }

      if (
        infoList.car.licencia != true ||
        infoList.car.RTO != true ||
        infoList.car.seguro != true
      ) {
        setData(infoList);
        setDiv("fade show"),
          setRes(
            "Este vehículo no cuenta con la habilitación para utlizarse como transporte de personas."
          );
      } else {
        setData(infoList);
        setDiv("fade show");
        setRes(`Este vehículo está en regla.`);
      }
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
          borderColor: "rgb(175, 175, 175)",
          borderWidth: "1px",
        }}
      >
        <div className="card-header " style={{ backgroundColor: "white" }}>
          <div className="text-center"></div>
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
          <div className="card-body">
            <p>{res}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
