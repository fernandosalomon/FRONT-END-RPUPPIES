import { Navigate, Route, Routes } from "react-router-dom";
import MisMascotasPage from "../../pages/MisMascotasPage";

const LoggedRoutes = () => {
  return (
    <Routes>
      <Route path="/mismascotas" element={<MisMascotasPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default LoggedRoutes;
