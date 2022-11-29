import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-white text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Encontranos en todas las redes sociales!</span>
        </div>

        <div>
          <Link href="" className="me-4 link-secondary">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="" className="me-4 link-secondary">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="" className="me-4 link-secondary">
            <i className="fab fa-google"></i>
          </Link>
          <Link href="" className="me-4 link-secondary">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="" className="me-4 link-secondary">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link href="" className="me-4 link-secondary">
            <i className="fab fa-github"></i>
          </Link>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold mb-4">
              <i className="bi bi-cone text-secondary">Transit.AR</i>
              </h6>
              <p>
                Estámos aquí para poder agilizarte los tiempos en los controles de transito, para que de
                ésta forma, puedas realizarlos con mayor comodidad.
              </p>
            </div>


            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto:</h6>
              <p>
                <i className="fas fa-home me-3 text-secondary"></i> Ruta Nac. 81 km. 1190
              </p>
              <p>
                <i className="fas fa-at me-3 text-secondary"></i>
                transit-AR@support.com
              </p>
              <p>
                <i className="fas fa-phone me-3 text-secondary"></i> + 54 9 370 480 0818
              </p>
              <p>
                <i className="fas fa-fax me-3 text-secondary"></i> + 54 9 370 484 7478
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{backgroundColor:"rgba(0, 0, 0, 0.025)"}}
      >
        © 2022 Copyright:
        <Link className="text-reset fw-bold" href="">
          Transit.AR.com
        </Link>
      </div>
    </footer>
  );
};
