import { useState } from "react";
import { Link } from "react-router-dom";

export const BuscadorDom = () => {
  const [data, setData] = useState([]);
  const dataDom = async (e) => {
    e.preventDefault();
    try {
      const dom = document.getElementsByClassName("matricula").value;

      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "My-Custom-Header": "foobar",
        },
      };
      console.log(data);
      const res = await fetch(
        `http://localhost:4000/buscarDominio`,
        requestOptions
      );
      const resJS = await res.JSON();
      setData(resJS);
    } catch (error) {
      setData({ error: error.toString() });
      console.error("There was an error!", error);
    }
  };
  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
          <input className="search_input" type="text" placeholder="Search..." />
          <button onClick={dataDom} className="search_icon matricula">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="container">
        <p>{data}</p>
      </div>
    </div>
  );
};
