import React from "react";
import { CardDenuncia } from "./layout/CardDenuncia";

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
              <div className="card" style={{borderColor: "grey"}}>
                <CardDenuncia denuncia = {denuncia}/>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};
