import React from 'react'
import axios from 'axios'
import { useRef } from 'react'

const CambiarPw = () => {
    const inpPassActual = useRef();
    const inpPassNueva = useRef();
    const inpPassRep  = useRef();

    const CambiarPass = async()=>{
        const url = "http://localhost:4000/cambiarpass";
        const data = {
          passActual : inpPassActual.current.value,
          passNueva : inpPassNueva.current.value,
          passRep : inpPassRep.current.value,
        };
        try {
          const res = await axios.put(url, data);
          const info = res.data;
        } catch (error) {
          console.error("There was an error!", error);
        }
      };
     
    
    return (
        <>
        <div style={{ width: "18rem", position: "relative", left: "15%" }}>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cambiarbtn">
                Actulizar contraseña
            </button>
            <div className="modal fade" id="cambiarbtn" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Cambiar contraseña</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Ingrese su contraseña actual:</label>
                                <input type="password" className="form-control" id="Password1"/>
                                <br/>
                                <label for="exampleInputPassword1" className="form-label">Ingrese la contraseña nueva:</label>
                                <input type="password" className="form-control" id="Password2"/>
                                <br />
                                <label for="exampleInputPassword1" className="form-label">Repita la nueva contraseña:</label>
                                <input type="password" className="form-control" id="Password2"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                            <button onClick={CambiarPass} type="button" className="btn btn-success">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CambiarPw