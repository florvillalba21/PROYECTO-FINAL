import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeUser } from "../ui/HomeUser";
import { Login } from "../views/Login";
import { Register } from "../views/Register";
import { Dashboard } from "./Dashboard";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeUser />} />
        <Route path="/" element={<Login />} />
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
