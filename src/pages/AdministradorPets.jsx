import React from 'react'
import PetTable from '../components/PetTable'
import BannerAdminView from '../components/BannerAdminView';


const AdministradorPets = () => {
   
    const pets = [
        { id: 1, nombre: 'Max', especie: 'Perro', raza: 'Labrador', edad: 5, dueno: 'Javier Garcia'},
        { id: 2, nombre: 'Nemo', especie: 'Pez', raza: 'Pez payaso', edad: 2, dueno: 'Jorge Lopez'},
        { id: 3, nombre: 'Felix', especie: 'Gato', raza: 'Siames', edad: 3, dueno: 'Maria Rodriguez'},
        { id: 4, nombre: 'Toby', especie: 'Perro', raza: 'Beagle', edad: 4, dueno: 'Carlos Sanchez'},
        { id: 5, nombre: 'Whiskas', especie: 'Gato', raza: 'Persa', edad: 1, dueno: 'Ana Martinez'},
        { id: 6, nombre: 'Bubbles', especie: 'Pez', raza: 'Pez globo', edad: 2, dueno: 'Pedro Gomez'},
        { id: 7, nombre: 'Luna', especie: 'Perro', raza: 'Poodle', edad: 5, dueno: 'Luisa Hernandez'},
        { id: 8, nombre: 'Simba', especie: 'Gato', raza: 'Africano', edad: 3, dueno: 'Juan Perez'},
        { id: 9, nombre: 'Goldie', especie: 'Pez', raza: 'Pez dorado', edad: 1, dueno: 'Sofia Lopez'},
        { id: 10, nombre: 'Rocky', especie: 'Perro', raza: 'Boxer', edad: 4, dueno: 'Miguel Garcia'}
      ];

    return (
        <>
        <div>
            <BannerAdminView/>
        </div>
        <div className="container text-align fontPage">
         <h1 className="text-center my-4">Tabla de Mascotas</h1>
            <PetTable pets={pets} />
        </div>
        </>
    );
};

export default AdministradorPets
