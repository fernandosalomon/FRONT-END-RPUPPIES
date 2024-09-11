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
        <Route path="/desarrolladores" element={<DesarrolladoresPage />} />
        {isAdmin ? (
          <Route path="/administrador/*" element={<AdminRoutes />} />
        ) : (
          <Route path="/error" element={<Error404Page />} />
        )}
        {isLogged ? (
          <Route path="/*" element={<LoggedRoutes />} />
        ) : (
          <Route path="/error404" element={<Error404Page />} />
        )}

        <Route path="/nuestros-planes" element={<NuestrosPlanesPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      {location.pathname !== "/" && <FooterC isLogged={isLogged} />}
    </>
  );
};

export default RoutesViews;
