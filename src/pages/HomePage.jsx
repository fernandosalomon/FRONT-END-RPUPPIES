import BannerC from "../components/BannerC";
import DireccionC from "../components/DireccionC";
import NuestrosPlanesC from "../components/NuestrosPlanesC";
import TestimonialsC from "../components/TestimonialsC";
import NuestrasMarcas from "../components/NuestrasMarcas";
import NuestrosProfesionales from "../components/NuestrosProfesionales";
import NuestrosServicios from "../components/NuestrosServicios";

const HomePage = () => {
  return (
    <>
      <BannerC />
      <TestimonialsC />
      <NuestrosServicios />
      <NuestrosPlanesC />
      <NuestrasMarcas />
      <NuestrosProfesionales />
      <DireccionC />
    </>
  );
};

export default HomePage;
