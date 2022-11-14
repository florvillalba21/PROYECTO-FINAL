import { PrivateRoutes } from "./routers/PrivateRoutes";
import { PublicRoutes } from "./routers/PublicRoutes";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { AppRouter } from "./routers/AppRouter";

function App() {
  const user = {
    logged: false,
  };
  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      <AppRouter/>
    </AuthContext.Provider>
  );
}

export default App;
