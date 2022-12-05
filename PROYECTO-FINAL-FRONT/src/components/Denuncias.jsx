import React from "react";
import { CardDenuncia } from "./layout/CardDenuncia";

export const ListDenuncias = ({ denuncias =[] }) => {
  if(!denuncias){
    return null
  }
  return (
    <div className="acordeon">
      <hr />
      {
        denuncias.map((denuncia, key) => {
          return (
            <div className="contenedor" key={'denuncia' + key}>
              
                <CardDenuncia denuncia = {denuncia}/>
              
            </div>
          )
        })
      }
    </div>
  );
};
