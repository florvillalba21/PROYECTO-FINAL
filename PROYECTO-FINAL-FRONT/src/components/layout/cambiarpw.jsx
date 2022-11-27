import React from 'react'

const CambiarPw = () => {
    return (
        <>
        <div style={{ width: "18rem", position: "relative", left: "15%" }}>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cambiarbtn">
                Actulizar contraseña
            </button>
            <div className="modal fade" id="cambiarbtn" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Cambiar contraseña</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Ingrese su nueva contraseña:</label>
                                <input type="password" class="form-control" id="Password1"/>
                                <br/>
                                <label for="exampleInputPassword1" class="form-label">Repita la contraseña:</label>
                                <input type="password" class="form-control" id="Password2"/>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-success">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CambiarPw