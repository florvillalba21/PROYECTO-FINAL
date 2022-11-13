import { PrivateRoutes } from "../../../tlp2-practico-react/src/routers/PrivateRoutes";
import { PublicRoutes } from "../../../tlp2-practico-react/src/routers/PublicRoutes";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { HomeAdmin } from "./views/HomeAdmin";
import { Login } from "./views/Login";

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />

          <Route
            path="/*"
            element={
              <PrivateRoutes>
                <HomeAdmin />
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
