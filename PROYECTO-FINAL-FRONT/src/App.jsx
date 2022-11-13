import { PrivateRoutes } from "./routers/PrivateRoutes";
import { PublicRoutes } from "./routers/PublicRoutes";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { HomeAdmin } from "./views/HomeAdmin";
import { Login } from "./views/Login";

function App() {
  const user ={
    logged: true
  }
  return (
    <AuthContext.Provider value={{
      user
    }}>
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
    </AuthContext.Provider>
  );
}

export default App;
