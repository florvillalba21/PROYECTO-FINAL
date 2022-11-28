import React from 'react'

const CambiarPw = () => {
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
                                <label htmlFor="exampleInputPassword1" className="form-label">Ingrese su nueva contraseña:</label>
                                <input type="password" className="form-control" id="Password1"/>
                                <br/>
                                <label for="exampleInputPassword1" className="form-label">Repita la contraseña:</label>
                                <input type="password" className="form-control" id="Password2"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-success">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CambiarPw