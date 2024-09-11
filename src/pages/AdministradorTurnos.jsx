import React from "react";
import TableTurnos from "../components/TableTurnos";
import BannerAdminView from "../components/BannerAdminView";

const AdministradorTurnos = () => {
  const turnos = [
    {
      fecha: "2024-08-26",
      hora: "10:00",
      mascota: "Perrito",
      veterinario: "Dr. Juan Pérez",
      detalles: "Revisión anual y vacunación",
    },
    {
      fecha: "2024-08-26",
      hora: "11:00",
      mascota: "Gatito",
      veterinario: "Dra. María Rodriguez",
      detalles: "Cirugía de esterilización",
    },
    {
      fecha: "2024-08-27",
      hora: "9:00",
      mascota: "Tortuga",
      veterinario: "Dr. Carlos Lopez",
      detalles: "Revisión de la caparazón",
    },
    {
      fecha: "2024-08-27",
      hora: "10:30",
      mascota: "Pájaro",
      veterinario: "Dra. Ana Martinez",
      detalles: "Corte de alas y revisión anual",
    },
    {
      fecha: "2024-08-28",
      hora: "14:00",
      mascota: "Conejo",
      veterinario: "Dr. Pedro Sanchez",
      detalles: "Revisión dental",
    },
    {
      fecha: "2024-08-29",
      hora: "9:30",
      mascota: "Perro",
      veterinario: "Dr. Juan Pérez",
      detalles: "Revisión anual y vacunación",
    },
    {
      fecha: "2024-08-30",
      hora: "10:00",
      mascota: "Gato",
      veterinario: "Dra. María Rodriguez",
      detalles: "Cirugía de esterilización",
    },
    {
      fecha: "2024-08-31",
      hora: "11:30",
      mascota: "Pez",
      veterinario: "Dr. Carlos Lopez",
      detalles: "Revisión del acuario",
    },
    {
      fecha: "2024-09-01",
      hora: "9:00",
      mascota: "Conejo",
      veterinario: "Dra. Ana Martinez",
      detalles: "Revisión de la salud",
    },
    {
      fecha: "2024-09-02",
      hora: "10:30",
      mascota: "Tortuga",
      veterinario: "Dr. Pedro Sanchez",
      detalles: "Revisión de la caparazón",
    },
  ];

  return (
    <main className="flex-grow-1">
      <div className="container text-align fontPage">
        <h1 className="text-center my-4">Tabla de Turnos</h1>
        <TableTurnos turnos={turnos} />
      </div>
    </main>
  );
};

export default AdministradorTurnos;
