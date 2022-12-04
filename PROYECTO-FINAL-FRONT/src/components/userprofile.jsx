import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const UserProfile = () => {
    const [user = [], setUser] = useState();
    const {admin} = useContext(AuthContext);
    console.log(admin.token)
  const url = "http://localhost:4000/admins";
  const instance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 1000,
    headers: {'Authorization': 'Bearer '+admin.token}
  });


  useEffect(() => {
    instance.get("/admins").then((response) => {
      setUser(response.data);
      console.log(data)
      
    })
  }, []);
    return (
        <>
            <div className='form' style={{ width: "18rem", position: "relative", left: "15%" }}>
                    <fieldset disabled>
                        <legend>Datos personales:</legend>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">N° de Credencial:</label>
                            <input type="text" id="input1" className="form-control" placeholder="093.432"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Nombre completo:</label>
                            <input type="text" id="input2" className="form-control" placeholder="Griselda Noemi"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Apellido(s):</label>
                            <input type="text" id="input3" className="form-control" placeholder="Rodriguez"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Contraseña actual:</label>
                            <input type="text" id="input4" className="form-control" placeholder="T*****32"/>
                        </div>
                    </fieldset>
            </div>
        </>
    )
}

export default UserProfile