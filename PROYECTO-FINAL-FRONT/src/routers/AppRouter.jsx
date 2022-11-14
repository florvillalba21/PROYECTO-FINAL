import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeAdmin } from "../views/HomeAdmin";
import { HomeUser } from "../views/HomeUser";
import { Login } from "../views/Login";
import { Dashboard } from "./Dashboard";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route
          path="/"
          element={
            <PublicRoutes>
              <HomeUser />
            </PublicRoutes>
          }
        />

        <Route path="admin/*" element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>
  );
};
