import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import $ from 'jquery';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import '../index.css';

const ServicesTable = ({ services }) => {
    const [servicesState, setServicesState] = useState(services); 
    const tablaservicios = useRef();

    const cambiarPropiedad = (id, propiedad, valor) => {
        const updatedServices = servicesState.map(service =>
            service.id === id ? { ...service, [propiedad]: valor } : service
        );
        setServicesState(updatedServices);
    };

    const handleToggleActivo = (id) => {
        const servicio = servicesState.find(service => service.id === id);
        if (servicio) {
            cambiarPropiedad(id, 'activo', !servicio.activo);
        }
    };

    useEffect(() => {
        const table = $(tablaservicios.current).DataTable({
            responsive: true,
            autoWidth: false,
            paging: true,
            rowReorder: {
                selector: 'td:nth-child(2)'
            }
        });
        return () => {
            if ($.fn.dataTable.isDataTable(tablaservicios.current)) {
                table.destroy();
            }
        };
    }, []);

    return (
        <div className='table-responsive'>
        <table className='display nowrap fontPage' ref={tablaservicios} >
            <thead>
                <tr>
                    <th className='text-center'>Servicio</th>
                    <th className='text-center'>Descripción</th>
                    <th className='text-center'>Costo</th>
                    <th className='text-center'>Estado</th>
                    <th className='text-center'>Eliminar</th>
                    <th className='text-center'>Editar</th>
                </tr>
            </thead>
            <tbody>
                {servicesState.map((service, id) => (
                    <tr key={id}>
                        <td className='text-center'>{service.servicio}</td>
                        <td className='text-center'>{service.descripcion}</td>
                        <td className='text-center'>{service.costo}</td>
                        <td className='text-center'>
                            <Button className='btnPersonalized2'onClick={() => handleToggleActivo(service.id)}>
                                {service.activo ? 'Activo' : 'Inactivo'}
                            </Button>
                        </td>
                        <td className='text-center'><Button className='btnPersonalized1'>Eliminar</Button></td>
                        <td className='text-center'><Button className='btnPersonalized3'>Editar</Button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default ServicesTable;