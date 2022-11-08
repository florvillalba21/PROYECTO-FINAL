import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { BuscaDominio } from "./components/BuscaDominio";
import { GetTarea } from "./components/GetTareas";
import BasicExample from "./components/layout/Navbar";

function App() {
  return (
    <div className="container">
      {<BasicExample />}
      {<BuscaDominio/>}
    </div>
  );
}

export default App;
