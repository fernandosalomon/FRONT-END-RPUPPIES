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
import DesarrolladoresPage from "../pages/DesarrolladoresPage";

const RoutesViews = () => {
  const location = useLocation();
  usePageTitle(location.pathname);
  return (
    <>
      <NavbarC />
      <Routes>
        <Route path="/desarrolladores" element={<DesarrolladoresPage />} />
        {isAdmin ? (
          <Route path="/administrador/*" element={<AdminRoutes />} />
        ) : (
          <Route path="/error" element={<Error404Page />} />
        )}
        {isLogged ? (
          <Route path="/*" element={<LoggedRoutes />} />
        ) : (
          <Route path="/error" element={<Error404Page />} />
        )}

        <Route path="/nuestrosplanes" element={<NuestrosPlanesPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      <FooterC />
    </>
  );
};

export default RoutesViews;
