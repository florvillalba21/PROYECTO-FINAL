
import { AuthContext } from "./context/AuthContext";
import { AppRouter } from "./routers/AppRouter";

function App() {
  const user = {
    logged: true,
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
