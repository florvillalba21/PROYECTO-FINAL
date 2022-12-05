import React from "react"
import NavAdmin from "../components/layout/NavAdmin"


export const Ayuda =()=>{
return(
    <>
    <NavAdmin text={"Todo lo que necesitas saber de nuestra aplicación."}/>
    
    <div className="container-sm me-md-5">
        <div className="title ">
            <h4 className="pl-8">Aquí podrás encontrar algunas recomendaciones y guías de nuestra aplicación:</h4>

            <div className="body">
                <h5>¿Qué es Transit.Ar?</h5>
                <p>Transit.Ar es una plataforma web creada con el objetivo de agilizar gestiones de control en los distintos puntos de la Provincia de Formosa para nuestros inspectores de la ciudad.</p>

                <h5>¿Qué puede realizar la plataforma?</h5>
                <p>Nuestra plataforma está enfocada en el control de vehiculos de transporte de personas, en donde podrán consultar mediante el dominio del vehiculo el estado de los papeles requeridos para realizar dicho servicio.
                    Ademas de lo antes mencionado, también existe un módulo en donde podrán iniciar una denuncia en caso de que un vehiculo no esté en condiciones de realizar el servicio de transporte.
                </p>
                <h5>¿Cómo utilizar la plataforma?</h5>
                <p>Luego de iniciar sesión con su credencial y contraseña personal, se encontrará en la pantalla principal donde tendrá dos tarjetas. Una para consultar el estado de un dominio de vehiculo y otra para realizar una denuncia a un dominio con sus respectivos detalles.</p>
                <p>También cuenta con una sección donde podrá ver las últimas denuncias que realizó durante el mes, con su fecha y descripcion del mismo.</p>
                <p>También podrá cambiar su contraseña si necesita agregar más seguridad a su perfil.</p>
            </div>
        </div>

    </div>
    </>
)
}