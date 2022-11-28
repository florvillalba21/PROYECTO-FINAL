import NavAdmin from "../components/layout/NavAdmin";
import Tarjetadenuncia from "../components/Tarjetadenuncia";
import Tarjetadominio from "../components/Tarjetadominio";

export const HomeAdmin = () => {
  return (
    <>
      <NavAdmin/>
      <div className="container card-group">
        <Tarjetadenuncia />
        <Tarjetadominio/>
      </div>
    </>
  );
};
