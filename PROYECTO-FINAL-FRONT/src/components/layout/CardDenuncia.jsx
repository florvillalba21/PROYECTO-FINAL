import React from "react";

export const CardDenuncia = ({ denuncia }) => {
  return (
    <>
      <div className="etiqueta">Informe:</div>

      <div className="contenido">
        Se realizo una denuncia correspondiente al día {denuncia.fecha}, al
        vehiculo {denuncia.marca} con dominio {denuncia.matricula}. Se muestran
        detalles para una mejor identificación.
        <h6>Detalles:</h6>
        <p>{denuncia.detalles}</p>
      </div>
    </>
  );
};
