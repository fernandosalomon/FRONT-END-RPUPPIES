import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdministradorPage from "../pages/AdministradorPage";
import Error404Page from "../pages/Error404Page";
import AdministradorPets from "../pages/AdministradorPets";
import NavbarC from "../components/NavbarC";
import AdministradorServices from "../pages/AdministradorServices";
import AdministradorTurnos from "../pages/AdministradorTurnos";
import { usePageTitle } from "../helpers/usePageTitle";
import FooterC from "../components/FooterC";
import MisMascotasPage from "../pages/MisMascotasPage";
import NuestrosPlanesPage from "../pages/NuestrosPlanesPage";
import DesarrolladoresPage from "../pages/DesarrolladoresPage";

const RoutesViews = () => {
  const location = useLocation();
  usePageTitle(location.pathname);
  return (
    <>
      <NavbarC />
      <Routes>
        <Route path="/administrador/pets" element={<AdministradorPets />} />
        <Route path="/administrador/services" element={<AdministradorServices />} />
        <Route path="/administrador/turnos" element={<AdministradorTurnos />} />
        <Route path="/desarrolladores" element={<DesarrolladoresPage />} />
        <Route path="/mismascotas" element={<MisMascotasPage />} />
        <Route path="/administrador" element={<AdministradorPage />} />
        <Route path="/nuestrosplanes" element={<NuestrosPlanesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      <FooterC />
    </>
  );
};

export default RoutesViews;
