import React from "react";

export const CardDenuncia = ({denuncia})=>{
    return (
        <>
        <div className="card-header" style={{ backgroundColor: "#212529" }}>
            <h4 className="card-title text-white">Informe:</h4>
        </div>
        <div className="card-body">
            <p className="card-text">Se realizo una denuncia correspondiente al día {denuncia.fecha}, 
            al vehiculo {denuncia.marca} con dominio {denuncia.matricula}.
            Se muestran detalles para una mejor identificación.</p>
            <h6>Detalles:</h6>
            <p>{denuncia.detalles}</p>
        </div>
        </>
    )
}