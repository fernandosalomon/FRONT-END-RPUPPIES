import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal, Form, Container, Row, Col, Image } from 'react-bootstrap'; 
import $ from 'jquery';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
import 'datatables.net-responsive';
import '../index.css';
import Swal from 'sweetalert2';

const TableTurnos = ({ turnos }) => {
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
    
    const [show, setShow] = useState(null);

    const handleClose = () => setShow(null);
    const handleShow = (id) => setShow(id); 

    const [fechaTurno, setFechaTurno] = useState('');

    // Función para obtener la fecha de hoy en formato AAAA-MM-DD
    const obtenerFechaHoy = () => {
        const hoy = new Date();
        return hoy.toISOString().split('T')[0]; // Retorna la fecha en formato AAAA-MM-DD
    };

    // Función para obtener la fecha máxima (2 meses hacia adelante)
    const obtenerFechaMaxima = () => {
        const hoy = new Date();
        hoy.setMonth(hoy.getMonth() + 2); // Avanza 2 meses
        return hoy.toISOString().split('T')[0]; // Retorna la fecha en formato AAAA-MM-DD
    };

    // Función para verificar si la fecha es fin de semana
    const esFinDeSemana = (fecha) => {
        const dia = new Date(fecha).getDay(); // getDay() retorna el día de la semana (0=Domingo, 6=Sábado)
        return dia === 5 || dia === 6; // True si es Sábado o Domingo
    };

    // Manejar el cambio de la fecha seleccionada
    const handleFechaChange = (e) => {
        const nuevaFecha = e.target.value;

        // Validar que no sea fin de semana
        if (esFinDeSemana(nuevaFecha)) {
            Swal.fire({
                icon: "error",
                text: "Fecha invalida, solo se permite de Lunes a Viernes!",
              });
            setFechaTurno(''); // Limpia el campo de fecha si es fin de semana
        } else {
            setFechaTurno(nuevaFecha); // Actualiza la fecha si es válida
        }
    };


        const [searchQuery, setSearchQuery] = useState('');
      
        const handleSearch = (e) => {
          e.preventDefault();
          onSearch(searchQuery); // Función para manejar la búsqueda
        };

    return (
        <div className='table-responsive'>
            <table className='display nowrap fontPage' ref={tablaturnos}>
                <thead>
                    <tr>
                        <th className='text-center'>Fecha</th>
                        <th className='text-center'>Hora</th>
                        <th className='text-center'>Mascota</th>
                        <th className='text-center'>Veterinario</th>
                        <th className='text-center'>Detalles</th>
                        <th className='text-center'>Editar Turno</th>
                        <th className='text-center'>Eliminar Turno</th>
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
                            <td className='text-center'>
                                <Button className='btnPersonalized3' onClick={() => handleShow(id)}>Editar</Button>
                            </td>
                            <td className='text-center'>
                                <Button className='btnPersonalized1'>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {turnos.map((turno, id) => (
                <Modal key={id} show={show === id} onHide={handleClose}  onSubmit={handleSearch}>
                    <Modal.Header closeButton className="bgColorPrincipal text-white">
                        <Modal.Title>Editar/Agregar Turno</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bgColorFondo">
                        <Form>
                            <Container>
                                <Row className="align-items-center">
                                    <Col xs={12} md={6}>
                                        <Form.Group className="mb-3" controlId="fechaTurno">
                                            <Form.Label>Fecha</Form.Label>
                                            <Form.Control type="date" aria-label="Date" defaultValue={turno.fecha} onChange={handleFechaChange} min={obtenerFechaHoy()} max={obtenerFechaMaxima()} required/>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Group className="mb-3" controlId="horaTurno">
                                            <Form.Label>Hora</Form.Label>
                                            <Form.Control type="time" aria-label="Time" defaultValue={turno.hora} min={'10:00'} max={'18:00'} step={1800} required/>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Group className="mb-3" controlId="veterinarioTurno">
                                            <Form.Label>Veterinario</Form.Label>
                                            <Form.Control type='search' placeholder="Seleccionar Veterinario" value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)} required>

                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Group className="mb-3" controlId="mascotaTurno">
                                            <Form.Label>Elija a su Mascota</Form.Label>
                                            <Form.Control type='search' placeholder="Seleccionar Mascota" defaultValue={turno.mascota} required>

                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} className="d-flex justify-content-center gap-3 mb-3">
                                        <div className="img-container__modalTurnos">
                                            <Image src="https://static.vecteezy.com/system/resources/previews/005/520/216/non_2x/cartoon-drawing-of-a-veterinarian-vector.jpg"></Image>
                                        </div>
                                        <div className="img-container__modalTurnos">
                                            <Image src="https://img.freepik.com/vector-premium/diseno-logotipo-dibujos-animados-mascota-perro-lindo-estilo-diseno-plano_203040-109.jpg"></Image>
                                        </div>
                                    </Col>
                                    <Col lg={12} className="mt-3">
                                        <div className="d-flex justify-content-center gap-4">
                                            <Button variant="primary" type="submit">
                                                Guardar Turno
                                            </Button>
                                            <Button variant="danger" onClick={handleClose}>
                                                Cancelar
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                    </Modal.Body>
                </Modal>
            ))}
        </div>
    );
};

export default TableTurnos;
