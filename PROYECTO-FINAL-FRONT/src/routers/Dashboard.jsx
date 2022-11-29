import { Route, Routes } from "react-router-dom";
import { CargarAuto } from "../views/CargarAuto";
import { HomeAdmin } from "../views/HomeAdmin";
import Profile from "../views/Profile";

export const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/homeAdmin" element={<HomeAdmin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cargarAuto" element={<CargarAuto />} />
      </Routes>
    </>
  );
};
