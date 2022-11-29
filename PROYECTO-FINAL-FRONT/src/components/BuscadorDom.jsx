import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const BuscadorDom = () => {
  const inpDom = useRef();
  const [data={}, setData] = useState({});

  const dataDom = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/buscarDom";

      const res = await axios.get(`${url}/${inpDom.current.value}`);
      setData(res.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  return (
    <form onSubmit={dataDom}>
      <div className="container h-100">
        <div className=" justify-content-center h-100">
          <div className="searchbar">
            <input
              className="search_input"
              type="text"
              placeholder="Search..."
              id="matricula"
              ref={inpDom}
            />
            <button type="submit" className="search_icon matricula">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="container">
          <p key={data._id}> {data.matricula}</p>
        </div>
      </div>
    </form>
  );
};
