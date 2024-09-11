import axios from "axios";
import MisMascotas from "../components/MisMascotas";
import PubliPeluqueria from "../components/PubliPeluqueria";
import { useEffect, useState } from "react";

const MisMascotasPage = () => {
  const [mascotas, setMascotas] = useState([]);

  const client = axios.create({
    baseURL: "http://localhost:3001/api/mascotas",
  });

  const getMascotas = async () => {
    try {
      const mascotasDB = await client.get("/", {
        headers: {
          auth: sessionStorage.getItem("userToken"),
        },
      });
      setMascotas([mascotasDB.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMascotas();
  }, []);

  useEffect(() => {
    const misMascotas = mascotas;
    console.log(mascotas);
  }, [mascotas]);

  return (
    <main className="flex-grow-1">
      <MisMascotas mascotas={mascotas} />
      <PubliPeluqueria />
    </main>
  );
};

export default MisMascotasPage;
