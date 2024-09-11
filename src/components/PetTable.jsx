import React, { useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import $ from 'jquery';
import DataTable from 'datatables.net-react';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import '../index.css';
    
    const PetTable = ({ pets }) => {
        const tablapets = useRef();
    
        useEffect(() => {
            const table = $(tablapets.current).DataTable({
                responsive: true,
                autoWidth: false,
                paging: true,
                rowReorder: {
                    selector: 'td:nth-child(2)'
                }
            });
            return () => {
                if ($.fn.dataTable.isDataTable(tablapets.current)) {
                    table.destroy();
                }
            };
        }, []);

    return (
        <div className='table-responsive'>
       <table className='display nowrap fontPage' ref={tablapets} >
            <thead >
                <tr>
                    <th className='text-center'>Nombre</th>
                    <th className='text-center'>Especie</th>
                    <th className='text-center'>Raza</th>
                    <th className='text-center'>Edad</th>
                    <th className='text-center'>Dueño</th>
                    <th className='text-center'>Historia Clinica</th>
                </tr>
            </thead>
            <tbody>
                {pets.map((pet, id) => (
                    <tr key={id}>
                        <td className='text-center'>{pet.nombre}</td>
                        <td className='text-center'>{pet.especie}</td>
                        <td className='text-center'>{pet.raza}</td>
                        <td className='text-center'>{pet.edad}</td>
                        <td className='text-center'><Button className='btnPersonalized1'>Dueño</Button></td>
                        <td className='text-center'><Button className='btnPersonalized4'>Ver Historia Clinica</Button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default PetTable;