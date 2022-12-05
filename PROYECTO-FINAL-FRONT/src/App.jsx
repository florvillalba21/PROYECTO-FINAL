import React from "react";
import { AuthContext } from "./context/AuthContext";
import { AppRouter } from "./routers/AppRoutes";
import { PrivateRoutes } from "./routers/PrivateRoutes";


export const App = () => {
  
  const admin ={ 
    rol: sessionStorage.getItem("rol"),
    token: sessionStorage.getItem("token")}

  return (
    <AuthContext.Provider value={ {admin} }>
      <AppRouter />
    </AuthContext.Provider>
  );
};
