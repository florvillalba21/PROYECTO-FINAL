import React from "react";
import { AuthContext } from "./context/AuthContext";
import { AppRouter } from "./routers/AppRoutes";

export const App = () => {
  const token = sessionStorage.getItem("token");

  return (
    <AuthContext.Provider value={{ token }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
