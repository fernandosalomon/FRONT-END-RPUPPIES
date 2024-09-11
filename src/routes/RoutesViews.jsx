import { Routes, Route, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { usePageTitle } from "../helpers/usePageTitle";
import HomePage from "../pages/HomePage";
import Error404Page from "../pages/Error404Page";
import NavbarC from "../components/NavbarC";
import FooterC from "../components/FooterC";
import DesarrolladoresPage from "../pages/DesarrolladoresPage";
import NuestrosPlanesPage from "../pages/NuestrosPlanesPage";
import LoggedRoutes from "./PrivateRoutes/LoggedRoutes";
import AdminRoutes from "./PrivateRoutes/AdminRoutes";
import MisMascotas from "../components/MisMascotas";
import MisMascotasPage from "../pages/MisMascotasPage";

const RoutesViews = () => {
  const location = useLocation();
  usePageTitle(location.pathname);

  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [userRol, setUserRol] = useState("");

  const handleIsLogged = useCallback(
    (isLogged) => {
      setIsLogged(isLogged);
    },
    [isLogged]
  );

  useEffect(() => {
    userRol === "admin" && setIsAdmin(true);
  }, [userRol]);

  useEffect(() => {
    if (sessionStorage.getItem("userRole")) {
      setUserRol(sessionStorage.getItem("userRole"));
      userRol === "admin" && setIsAdmin(true);
    }
    const userToken = sessionStorage.getItem("userToken") || null;
    if (userToken) {
      setIsLogged(true);
    }
  }, []);

  return (
    <>
      <NavbarC
        isLogged={isLogged}
        isAdmin={isAdmin}
        handleIsLogged={handleIsLogged}
      />
      <Routes>
        {sessionStorage.getItem("userRole") === "admin" && (
          <Route path="/administrador/*" element={<AdminRoutes />} />
        )}
        {sessionStorage.getItem("userRole") === "user" && (
          <Route path="/*" element={<LoggedRoutes />} />
        )}

        <Route path="/desarrolladores" element={<DesarrolladoresPage />} />
        <Route path="/nuestros-planes" element={<NuestrosPlanesPage />} />
        {/* <Route path="/mismascotas" element={<MisMascotasPage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      {location.pathname !== "/" && <FooterC isLogged={isLogged} />}
    </>
  );
};

export default RoutesViews;
