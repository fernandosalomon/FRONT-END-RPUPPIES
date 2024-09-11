import TableTurnos from "../components/TableTurnos";
import BannerAdminView from "../components/BannerAdminView";
import React, { useState, useEffect } from "react";
import clientAxios from "../helpers/clientAxios";

const AdministradorTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [mascotas, setMascotas] = useState([]);
  const [turnosFinales, setTurnosFinales] = useState([]);

  const traerTurnos = async () => {
    try {
      const turnosResponse = await clientAxios.get("/turnos");
      const mascotasResponse = await clientAxios.get(`/mascotas/all/`);

      const turnosData = turnosResponse.data;
      const mascotasData = mascotasResponse.data;

      const mapaMascotas = crearMapaMascotas(mascotasData);

      const turnosFinales = agregarPropiedadNombreMascota(
        turnosData,
        mapaMascotas
      );

      setTurnos(turnosData);
      setMascotas(mascotasData);
      setTurnosFinales(turnosFinales);
    } catch (error) {
      console.error("Error al traer los turnos:", error);
    }
  };

  const crearMapaMascotas = (mascotas) => {
    return new Map(mascotas.map((mascota) => [mascota._id, mascota.nombre]));
  };

  const agregarPropiedadNombreMascota = (turnos, mapaMascotas) => {
    return turnos.map((turno) => {
      const nombreMascota = mapaMascotas.get(turno.mascota);
      return {
        ...turno,
        nombreMascota: nombreMascota || "Mascota fuera de la DB",
      };
    });
  };

  useEffect(() => {
    traerTurnos();
  }, []);

  return (
    <>
      <div>
        <BannerAdminView turnos={turnosFinales} setTurnos={setTurnosFinales} />
      </div>
      <div className="container text-align fontPage">
        <h1 className="text-center my-4">Tabla de Turnos</h1>
        <TableTurnos turnos={turnosFinales} setTurnos={setTurnosFinales} />
      </div>
    </>
  );
};

export default AdministradorTurnos;
