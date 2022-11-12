import React from 'react'

const Tarjetadominio = () => {
  return (
    <div className='card-group'>

    <div>
        <div class="row row-cols-1 row-cols-md-2">
        <div class="col "  >
            <div class="card" style={{ width: "18rem", position:"relative", left:"80%" }}>
              <img src="src\assets\img\foto3.jpeg" class="card-img-top" alt="..." />

              <div class="card-body" >
                <h5 class="card-title">Buscar dominio:</h5>
                <p class="card-text">Verifique si un vehiculo está habilitado para funcionar como transporte de personas.</p>
                <div>
                  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#dominio">
                    Verificar
                  </button>
                  <div class="modal fade" id="dominio" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="staticBackdropLabel">Dominio:</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Ingrese el domoninio del vehiculo:</label>
                          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="ABC-123 | AB-123-CD" />
                        </div>
                        <button type="button" class="btn btn-success">Verificar</button>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Tarjetadominio