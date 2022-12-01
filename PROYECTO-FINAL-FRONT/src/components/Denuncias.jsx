import React from "react";

export const ListDenuncias = ({ denuncias = [] }) => {
  return (
    <div className="row">
      {denuncias.map((denuncia, key) => {
        <div className="col" key={key}>
          <div className="card">{denuncia}</div>
        </div>;
      })}
    </div>
  );
};
