import { useState } from "react";
import { Link } from "react-router-dom";

export const BuscadorDom = () => {
  const [data, setData] = useState({});
  const dataDom = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "My-Custom-Header": "foobar",
        },
      };

      const dom = document.getElementById("matricula").value;
      const res = await fetch(
        `http://localhost:4000/buscarDom/${dom}`,
        requestOptions
      );
      const resJS = await res.json();
      setData(resJS);
    } catch (error) {
      setData({ error: error.toString() });
      console.error("There was an error!", error);
    }
  };
  return (
    <form onSubmit={dataDom}>
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <input
              className="search_input"
              type="text"
              placeholder="Search..."
              id="matricula"
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
