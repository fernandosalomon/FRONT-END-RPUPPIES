import clientAxios from "../helpers/clientAxios";
import MisMascotas from "../components/MisMascotas";
import PubliPeluqueria from "../components/PubliPeluqueria";
import { useEffect, useState } from "react";

const MisMascotasPage = () => {
  const [mascotas, setMascotas] = useState([]);

  const getMascotas = async () => {
    try {
      const mascotasDB = await clientAxios.get("/mascotas/", {
        headers: {
          auth: sessionStorage.getItem("userToken"),
        },
      });
      setMascotas(mascotasDB.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMascotas();
  }, []);

  return (
    <main className="flex-grow-1">
      <MisMascotas mascotas={mascotas} />
      <PubliPeluqueria />
    </main>
  );
};

export default MisMascotasPage;
