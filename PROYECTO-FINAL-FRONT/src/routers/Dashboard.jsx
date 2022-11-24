import { Route, Routes } from "react-router-dom";
import { HomeAdmin } from "../views/HomeAdmin";
import { Login } from "../views/Login";

export const Dashboard =  ()=>{
  return (
    <>
      <Routes>
        <Route path="/homeAdmin" element={<HomeAdmin />} />
        
      </Routes>
    </>
  );
};
