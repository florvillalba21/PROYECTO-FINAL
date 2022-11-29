import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext, ProviderAuth } from "./context/AuthContext";
import { Dashboard } from "./routers/Dashboard";
import { PrivateRoutes } from "./routers/PrivateRoutes";
import { HomeUser } from "./views/HomeUser";
import { Login } from "./views/Login";
import { Register } from "./views/Register";

export const App = () => {
  const token = useContext(AuthContext)
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/*"
            element={
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>

  );
};
