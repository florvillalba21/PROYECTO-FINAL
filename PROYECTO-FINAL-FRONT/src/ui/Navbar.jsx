import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <h5>HOLA</h5>
        </div>
      </nav>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <h3 style={{ color: "white" }}>Bienvenido</h3>
          <h1>
            <img
              src="/public/img/TRANSIT-nb.png"
              style={{ width: "120px", marginRight: "700px" }}
            />
          </h1>
        </div>
      </nav>
    </>
  );
};
