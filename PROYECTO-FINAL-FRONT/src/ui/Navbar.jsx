import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#b73258" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <b className="h3 display-5">Home</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled">Disabled</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
