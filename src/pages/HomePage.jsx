import BannerC from "../components/BannerC";
import Bienvenidad from "../components/Bienvenidad";
import DireccionC from "../components/DireccionC";
import NuestrasMarcas from "../components/NuestrasMarcas";
import NuestrosPlanesC from "../components/NuestrosPlanesC";
import NuestrosProfesionales from "../components/NuestrosProfesionales";
import NuestrosServicios from "../components/NuestrosServicios";
import PubliPeluqueria from "../components/PubliPeluqueria";

const HomePage = () => {
  return (
    <main className="flex-grow-1 main-container">
      <BannerC />
      <Bienvenidad />
      <NuestrasMarcas />
      <NuestrosServicios />
      <NuestrosPlanesC />
      <NuestrosProfesionales />
      <PubliPeluqueria />
      <DireccionC />
    </main>
  );
};

export default HomePage;
