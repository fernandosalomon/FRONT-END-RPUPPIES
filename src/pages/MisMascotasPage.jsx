import axios from "axios";
import MisMascotas from "../components/MisMascotas";
import PubliPeluqueria from "../components/PubliPeluqueria";

const MisMascotasPage = () => {
  //     const mascotas = [
  //         {
  //             nombre: 'Rex',
  //             fechaDeNacimiento: new Date('2015-06-15'),
  //             sexo: "Macho",
  //             especie: 'Canino',
  //             raza: 'Labrador',
  //             colorDePelo: 'Marrón',
  //             pesoKg: 30,
  //             esterilizado: "Si",
  //             domicilio: 'Calle Falsa 123',
  //             observaciones: 'Muy juguetón.'
  //         },
  //         {
  //             nombre: 'Whiskers',
  //             fechaDeNacimiento: new Date('2020-03-22'),
  //             sexo: "Hembra",
  //             especie: 'Felino',
  //             raza: 'Siamés',
  //             colorDePelo: 'Crema con puntos oscuros',
  //             pesoKg: 4,
  //             esterilizado: "Si",
  //             domicilio: 'Avenida Siempre Viva 742',
  //             observaciones: 'Muy cariñosa y activa.'
  //         },
  //         {
  //             nombre: 'Rocco',
  //             fechaDeNacimiento: new Date('2022-07-05'),
  //             sexo: "Macho",
  //             especie: 'Otros',
  //             raza: 'Conejo',
  //             colorDePelo: 'Blanco',
  //             pesoKg: 2.5,
  //             esterilizado: "No",
  //             domicilio: 'Calle de la Primavera 45',
  //             observaciones: 'Le gusta masticar zanahorias.'
  //         },
  //         {
  //             nombre: 'Binky',
  //             fechaDeNacimiento: new Date('2021-11-15'),
  //             sexo: "Hembra",
  //             especie: 'Otros',
  //             raza: 'Hámster',
  //             colorDePelo: 'Dorado',
  //             pesoKg: 0.2,
  //             esterilizado: "No",
  //             domicilio: 'Calle de los Rosales 123',
  //             observaciones: 'Muy activa durante la noche.'
  //         }
  //     ];

  const client = axios.create({
    baseURL: "http://localhost:3001/api/usuarios",
  });

  const getMascotas = async () => {
    const response = client.get();
  };

  return (
    <main className="flex-grow-1">
      <PubliPeluqueria />
      {/* <MisMascotas mascotas={mascotas} /> */}
    </main>
  );
};

export default MisMascotasPage;
