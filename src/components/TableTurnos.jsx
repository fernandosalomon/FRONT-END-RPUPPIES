import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import $ from 'jquery';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
import 'datatables.net-responsive';
import '../index.css';

const TableTurnos = ({turnos}) => {
    const tablaturnos = useRef();
    
    useEffect(() => {
        const table = $(tablaturnos.current).DataTable({
            responsive: true,
            autoWidth: false,
            paging: true,
            rowReorder: {
                selector: 'td:nth-child(2)'
            }

        });
        return () => {
            if ($.fn.dataTable.isDataTable(tablaturnos.current)) {
                table.destroy();
            }
        };
    }, []);
    

    
return (
     <div className='table-responsive'>
    <table className='display nowrap fontPage'  ref={tablaturnos} >
        <thead >
            <tr>
                <th className='text-center'>Fecha</th>
                <th className='text-center'>Hora</th>
                <th className='text-center'>Mascota</th>
                <th className='text-center'>Veterinario</th>
                <th className='text-center'>Detalles</th>
                <th className='text-center'>Editar Turno</th>
            </tr>
        </thead>
        <tbody>
            {turnos.map((turno, id) => (
                <tr key={id}>
                    <td className='text-center'>{turno.fecha}</td>
                    <td className='text-center'>{turno.hora}</td>
                    <td className='text-center'>{turno.mascota}</td>
                    <td className='text-center'>{turno.veterinario}</td>
                    <td className='text-center'>{turno.detalles}</td>
                    <td className='text-center '><Button className='btnPersonalized3'>Editar</Button></td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
);
};

export default TableTurnos;