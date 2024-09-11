import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";
import $ from "jquery";
import DataTable from "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.min.css";
import "datatables.net-responsive";
import "../index.css";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clienteAxios from "../helpers/clientAxios";

const TableTurnos = ({ turnos, setTurnos }) => {
  const tablaturnos = useRef();

  useEffect(() => {
    const table = $(tablaturnos.current).DataTable({
      responsive: true,
      autoWidth: false,
      paging: true,
      rowReorder: {
        selector: "td:nth-child(2)",
      },
    });
    return () => {
      if ($.fn.dataTable.isDataTable(tablaturnos.current)) {
        table.destroy();
      }
    };
  }, []);

  const [show, setShow] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTurno, setSelectedTurno] = useState({
    fecha: "",
    hora: "",
    mascota: "",
    veterinario: "",
  });

  const handleClose = () => setShow(null);
  const handleShow = (id) => {
    setShow(id);
    setSelectedTurno(turnos[id]); 
  };

  const isWeekday = (date) => {
    const day = date.getDay(); 
    return day !== 0 && day !== 6;
  };

  const obtenerFechaHoy = () => {
    const hoy = new Date();
    return hoy.toISOString().split("T")[0];
  };

  const obtenerFechaMaxima = () => {
    const hoy = new Date();
    hoy.setMonth(hoy.getMonth() + 2);
    return hoy.toISOString().split("T")[0];
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await clienteAxios.put(
        `/turnos/${selectedTurno._id}`,
        selectedTurno
      );
      console.log(selectedTurno);
      if (response.status === 200) {
        Swal.fire({
          title: "Estas por Cambiar el Turno!",
          text: "Continuar?",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, guardar turno!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Turno guardado!",
              text: "el turno se ha guardado con exito",
              icon: "success",
            });
          }
        });
        handleClose(); 
      }
    } catch (error) {
      console.error("Error al actualizar el turno:", error);
      Swal.fire("Error", "Hubo un error al actualizar el turno", "error");
    }
  };


  const handleInputChange = (e) => {
    setSelectedTurno({
      ...selectedTurno,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    function formatDateToYYYYMMDD(date) {
      const year = date.getFullYear(); 
      const month = String(date.getMonth() + 1).padStart(2, "0"); 
      const day = String(date.getDate()).padStart(2, "0"); 

      return `${year}-${month}-${day}`; 
    }
    const formmateddate = formatDateToYYYYMMDD(date);
    setStartDate(date);
    setSelectedTurno({
      ...selectedTurno,
      fecha: formmateddate,
    });
  };

  const handleDelete = async (id) => {
    const turnoSeleccionado = turnos[id];

    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await clienteAxios.delete(
            `/turnos/${turnoSeleccionado._id}`
          );
          if (response.status === 200) {
            Swal.fire("Eliminado!", "El turno ha sido eliminado.", "success");

            setTurnos((prevTurnos) =>
              prevTurnos.filter((_, index) => index !== id)
            );
          }
        } catch (error) {
          console.error("Error al eliminar el turno:", error);
          Swal.fire("Error", "Hubo un error al eliminar el turno", "error");
        }
      }
    });
  };

  const [turnosAsignados, setTurnosAsignados] = useState({});

  useEffect(() => {
    const turnosAsignadosTemp = {}; 
  

    turnos.forEach((turno) => {
      const { fecha, hora, veterinario } = turno;
  

      if (!turnosAsignadosTemp[fecha]) {
        turnosAsignadosTemp[fecha] = {};
      }
  

      if (!turnosAsignadosTemp[fecha][hora]) {
        turnosAsignadosTemp[fecha][hora] = [];
      }
  

      turnosAsignadosTemp[fecha][hora].push(veterinario);
    });
  
    setTurnosAsignados(turnosAsignadosTemp);
  }, [turnos]); 

const horarios = ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30',]

const obtenerHorariosDisponibles = () => {

    if (!selectedTurno.fecha || !selectedTurno.veterinario) {
      return horarios; 
    }
  

    const turnosParaFecha = turnosAsignados[selectedTurno.fecha] || {};
  

    return horarios.filter((hora) => {

      const horariosOcupados = turnosParaFecha[hora] || [];
  

      return !horariosOcupados.includes(selectedTurno.veterinario);
    });
  };

  return (
    <div className="table-responsive">
      <table className="display nowrap fontPage" ref={tablaturnos}>
        <thead>
          <tr>
            <th className="text-center">Fecha</th>
            <th className="text-center">Hora</th>
            <th className="text-center">Mascota</th>
            <th className="text-center">Veterinario</th>
            <th className="text-center">Detalles</th>
            <th className="text-center">Editar Turno</th>
            <th className="text-center">Eliminar Turno</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno, id) => (
            <tr key={id}>
              <td className="text-center">{turno.fecha}</td>
              <td className="text-center">{turno.hora}</td>
              <td className="text-center">{turno.nombreMascota}</td>
              <td className="text-center">{turno.veterinario}</td>
              <td className="text-center">{turno.detalles}</td>
              <td className="text-center">
                <Button
                  className="btnPersonalized3"
                  onClick={() => handleShow(id)}
                >
                  Editar
                </Button>
              </td>
              <td className="text-center">
                <Button
                  className="btnPersonalized1"
                  onClick={() => handleDelete(id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {turnos.map((turno, id) => (
        <Modal key={id} show={show === id} onHide={handleClose}>
          <Modal.Header closeButton className="bgColorPrincipal text-white">
            <Modal.Title>Editar Turno</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bgColorFondo">
            <Form onSubmit={handleSubmit}>
              <Container>
                <Row className="align-items-center">
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="fechaTurno">
                      <Form.Label>Fecha</Form.Label>
                      <DatePicker
                        name="fecha"
                        selected={startDate}
                        dateFormat={"yyyy/MM/dd"}
                        onChange={handleDateChange}
                        minDate={obtenerFechaHoy()}
                        maxDate={obtenerFechaMaxima()}
                        filterDate={isWeekday}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="horaTurno">
                      <Form.Label>Hora</Form.Label>
                      <Form.Select
                        type="time"
                        aria-label="Time"
                        value={selectedTurno.hora || ""}
                        onChange={handleInputChange}
                        name="hora"
                        required
                      >
                        {obtenerHorariosDisponibles().map((hora, index) => (
                          <option key={index} value={hora}>
                            {hora}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="veterinarioTurno">
                      <Form.Label>Veterinario</Form.Label>
                      <Form.Select
                        value={selectedTurno.veterinario || ""}
                        onChange={handleInputChange}
                        name="veterinario"
                        required
                      >
                        <option key={1} value={"Jose Hernandez"}>
                          Jose Hernandez
                        </option>
                        <option key={2} value={"Ricardo Lopez"}>
                          Ricardo Lopez
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="mascotaTurno">
                      <Form.Label>Elija a su Mascota</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedTurno.nombreMascota || ""}
                        onChange={handleInputChange}
                        name="mascota"
                        required
                        disabled
                      />
                    </Form.Group>
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
