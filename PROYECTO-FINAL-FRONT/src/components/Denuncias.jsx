import React from "react";

export const ListDenuncias = ({ denuncias =[] }) => {
  if(!denuncias){
    return null
  }
  return (
    <div className="row">
      {
        denuncias.map((denuncia, key) => {
          return (
            <div className="col" key={'denuncia' + key}>
              <div className="card">{denuncia.matricula}</div>
            </div>
          )
        })
      }
    </div>
  );
};
