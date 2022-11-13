import Sidebar from "../components/Sidebar";
import Tarjetadenuncia from "../components/tarjetadenuncia";
import Tarjetadominio from "../components/tarjetadominio";

export const HomeAdmin = () => {
  return (
    <>
      <Sidebar/>
      <div className="container card-group">
        <Tarjetadenuncia />
        <Tarjetadominio/>
      </div>
    </>
  );
};
