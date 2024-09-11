import { Navigate, Route, Routes } from "react-router-dom";
import AdministradorPets from "../../pages/AdministradorPets";
import AdministradorTurnos from "../../pages/AdministradorTurnos";
import AdministradorUsuarios from "../../pages/AdministradorUsuarios";
import AdministradorPage from "../../pages/AdministradorPage";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/turnos" element={<AdministradorTurnos />} />
      <Route path="/usuarios" element={<AdministradorUsuarios />} />
      <Route path="/" element={<AdministradorPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AdminRoutes;
