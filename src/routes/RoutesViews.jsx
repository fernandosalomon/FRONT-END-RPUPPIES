import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Error404Page from "../pages/Error404Page";
import NavbarC from "../components/NavbarC";
import { usePageTitle } from "../helpers/usePageTitle";
import FooterC from "../components/FooterC";
import DesarrolladoresPage from "../pages/DesarrolladoresPage";
import NuestrosPlanesPage from "../pages/NuestrosPlanesPage";
import { useEffect, useState } from "react";

const RoutesViews = () => {
  const location = useLocation();
  usePageTitle(location.pathname);

  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const userRol = sessionStorage.getItem("userRole");
    userRol && setIsLogged(true);
    userRol === "admin" && setIsAdmin(true);
  }, []);

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
