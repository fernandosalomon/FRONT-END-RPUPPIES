import React from 'react'
import ServicesTable from '../components/ServicesTable'
import BannerAdminView from '../components/BannerAdminView';

const AdministradorServices = () => {
  
    const services = [
        {
          id: 1  ,   
          servicio: "Consulta General",
          descripcion: "Evaluación general de la salud de la mascota, incluyendo revisión de signos vitales y estado físico.",
          costo: 50.00,
          activo: true
        },
        { 
          id: 2  ,
          servicio: "Vacunación",
          descripcion: "Administración de vacunas esenciales para proteger a la mascota contra enfermedades comunes.",
          costo: 30.00,
          activo: true
        },
        {
          id: 3  ,  
          servicio: "Desparasitación",
          descripcion: "Tratamiento para eliminar parásitos internos y externos de la mascota.",
          costo: 25.00,
          activo: true
        },
        {
          id: 4  ,
          servicio: "Esterilización/Castración",
          descripcion: "Procedimiento quirúrgico para esterilizar a la mascota y prevenir reproducción no deseada.",
          costo: 150.00,
          activo: true
        },
        {
          id: 5  ,
          servicio: "Limpieza Dental",
          descripcion: "Limpieza profesional de los dientes para prevenir enfermedades bucales.",
          costo: 80.00,
          activo: true
        },
        {
          id: 6  ,
          servicio: "Consulta de Emergencia",
          descripcion: "Atención inmediata para situaciones de emergencia que pongan en riesgo la vida de la mascota.",
          costo: 100.00,
          activo: true
        },
        {
          id: 7  ,
          servicio: "Radiografía",
          descripcion: "Imagenología para diagnosticar fracturas, problemas internos o anomalías estructurales.",
          costo: 70.00,
          activo: true
        },
        {
          id: 8  ,
          servicio: "Hospitalización",
          descripcion: "Cuidado y supervisión médica en caso de que la mascota necesite permanecer en la clínica.",
          costo: 200.00,
          activo: true
        },
        {
          id: 9  ,
          servicio: "Corte de Uñas",
          descripcion: "Recorte de las uñas de la mascota para evitar crecimiento excesivo y problemas asociados.",
          costo: 15.00,
          activo: true
        },
        {
          id: 10  ,
          servicio: "Examen de Laboratorio",
          descripcion: "Pruebas de laboratorio para analizar sangre, orina u otras muestras y diagnosticar enfermedades.",
          costo: 40.00,
          activo: true
        }
      ];
  
  
  
    return (
      <>
      <div>
          <BannerAdminView/>
      </div>
      <div className="container text-align fontPage">
         <h1 className="text-center my-4">Tabla de Servicios</h1>
            <ServicesTable services={services} />
        </div>
      </>
  )
}

export default AdministradorServices
