import React from "react";

export const CardDenuncia = ({denuncia})=>{
    return (
        <div className="card-body">
            <h4 className="card-header bg-dark text-light">Fecha: {denuncia.fecha}</h4>
            <h6 className="card-title">Información de la denuncia</h6>
            <p className="card-text">El día {denuncia.fecha}, se ha realizado una denuncia a un vehiculo de transporte de pasajeros con el dominio {denuncia.matricula}, marca del vehiculo {denuncia.marca}</p>
            <h6>Detalles:</h6>
            <p>{denuncia.detalles}</p>

        </div>
    )
}