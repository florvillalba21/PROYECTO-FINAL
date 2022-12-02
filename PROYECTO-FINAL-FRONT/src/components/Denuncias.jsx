import React from "react";

export const ListDenuncias = ({ denuncias =[] }) => {
  console.log(denuncias)
  if(!denuncias){
    return null
  }
  return (
    <div className="row">
      {denuncias.map((denuncia, key) => {
        <div className="col" key={denuncia[key]}>
          <div className="card">{denuncia[key]}</div>
        </div>;
      })}
    </div>
  );
};
