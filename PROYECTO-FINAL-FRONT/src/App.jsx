
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { Dashboard } from "./routers/Dashboard";
import { PrivateRoutes } from "./routers/PrivateRoutes";
import { HomeUser } from "./views/HomeUser";
import { Login } from "./views/Login";
import { Register } from "./views/Register";

function App() {

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
}

export default App;
