import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    
    <nav className="navbar bg-light">
      <div className="container-fluid">
<<<<<<< HEAD
        <h8 className="h6">Todos los derechos reservados®</h8>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
          <button className="btn btn-success">Buscar</button>
        </form>
=======
        <h6>Todos los derechos reservados®</h6>
>>>>>>> e3cbac39d527c7759e51f46cda2f7a6469ab5068
      </div>
    </nav>
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <h6 style={{color: "white"}}>Bienvenido</h6>
        <h1><img src="/public/img/TRANSIT-nb.png" style={{width:"120px", marginRight: "700px"}}/></h1>

      </div>
    </nav>
    </>
  );
};
