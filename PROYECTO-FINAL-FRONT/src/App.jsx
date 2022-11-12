
import BasicExample from "./components/layout/Navbar";
import {Routes, Route} from "react-router-dom";
import { Login } from "./views/Login";


function App() {
  return (
    <>
    <BasicExample/>
    <Routes>
      <Route path='/' element= {<Login/>}/>
    </Routes>
    
    </>
  );
}

export default App;
