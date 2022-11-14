
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
