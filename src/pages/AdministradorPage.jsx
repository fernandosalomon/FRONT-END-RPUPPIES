import React, { useState } from "react";
import BannerAdminView from "../components/BannerAdminView";
import TableC from "../components/TableC";

const AdministradorPage = () => {
  const [userData, setUserData] = useState([
    {
      _id: 1,
      email: "fernandosalomon1992@gmail.com",
      nombre: "Fernando Federico",
      apellido: "Salomon",
      telefono: "5551257552",
      rol: "admin",
    },
    {
      _id: 2,
      email: "fsalomon@gmail.com",
      nombre: "Fernando",
      apellido: "Salomon",
      telefono: "525527552",
      rol: "admin",
    },
    {
      _id: 3,
      email: "fersalomon1992@gmail.com",
      nombre: "Federico",
      apellido: "Salomon",
      telefono: "555227552",
      rol: "user",
    },
  ]);

  return (
    <main className="flex-grow-1">
      <BannerAdminView />
    </main>
  );
};

export default AdministradorPage;
