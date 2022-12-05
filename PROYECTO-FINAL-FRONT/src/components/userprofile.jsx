import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UserProfile = () => {
  const [user = [], setUser] = useState();
  const { admin } = useContext(AuthContext);

  const url = "http://localhost:4000/admins";

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `${admin.token}`,
        },
      })
      .then((response) => {
        
        setUser(response.data.resAdmin)
      });
  }, []);
  return (
    <>
      <div
        className="form"
        style={{ width: "auto", left: "30%" }}
      >
        <fieldset disabled>
          <legend>Datos personales:</legend>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              N° de Credencial:
            </label>
            <input
              type="text"
              id="input1"
              className="form-control"
              placeholder={user.credencial}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              Nombre completo:
            </label>
            <input
              type="text"
              id="input2"
              className="form-control"
              placeholder={user.nombre}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              Apellido(s):
            </label>
            <input
              type="text"
              id="input3"
              className="form-control"
              placeholder={user.apellido}
            />
          </div>
         
        </fieldset>
      </div>
    </>
  );
};

export default UserProfile;
