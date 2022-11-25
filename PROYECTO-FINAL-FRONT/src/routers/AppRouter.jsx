import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeAdmin } from "../views/HomeAdmin";
import { HomeUser } from "../views/HomeUser";
import { Login } from "../views/Login";
import { Register } from "../views/Register";
import { Dashboard } from "./Dashboard";

import { PrivateRoutes } from "./PrivateRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/login" element= {<Login/>}/> 
        <Route path="/register" element= {<Register/>}/>
        <Route
          path="admin/*"
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
