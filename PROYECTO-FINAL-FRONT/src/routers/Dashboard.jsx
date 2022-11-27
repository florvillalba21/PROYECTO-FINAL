import { Route, Routes } from "react-router-dom";
import { HomeAdmin } from "../views/HomeAdmin";
import { Login } from "../views/Login";
import Profile from "../views/Profile";

export const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/homeAdmin" element={<HomeAdmin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};
