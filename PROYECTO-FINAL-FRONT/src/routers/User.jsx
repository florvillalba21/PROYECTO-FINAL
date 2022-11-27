import { Route, Routes } from "react-router-dom";
import Profile from "../views/Profile";

export const User = () => {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};