import Sidebar from "../components/Sidebar";
import Tarjetadenuncia from "../components/Tarjetadenuncia";
import Tarjetadominio from "../components/Tarjetadominio";

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
