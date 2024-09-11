import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";
import "../index.css";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clienteAxios from "../helpers/clientAxios";

const BannerAdminView = ({ turnos, setTurnos }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [mascotas, setMascotas] = useState([]);
  const [mascotasFiltradas, setMascotasFiltradas] = useState([]);
  const [selectedUsuario, setSelectedUsuario] = useState("");
  const [selectedMascota, setSelectedMascota] = useState("");

  useEffect(() => {
    const fetchUsuariosAndMascotas = async () => {
      try {
        const usuariosResponse = await clienteAxios.get("/usuarios");
        setUsuarios(usuariosResponse.data);

        const mascotasResponse = await clienteAxios.get("/mascotas/all/");
        setMascotas(mascotasResponse.data);
        setMascotasFiltradas(mascotasResponse.data);
      } catch (error) {
        console.error("Error al obtener usuarios o mascotas:", error);
      }
    };

    fetchUsuariosAndMascotas();
  }, []);

  const handleUsuarioChange = (e) => {
    const usuarioId = e.target.value;
    setSelectedUsuario(usuarioId);
    setSelectedMascota("");

    const usuario = usuarios.find((usuario) => usuario._id === usuarioId);

    if (usuario && Array.isArray(usuario.mascotas)) {
      const mascotasDeUsuario = mascotas.filter((mascota) =>
        usuario.mascotas.includes(mascota._id)
      );
      setMascotasFiltradas(mascotasDeUsuario);
    } else {
      setMascotasFiltradas(mascotas);
    }
  };

  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTurno, setSelectedTurno] = useState({
    fecha: "",
    hora: "",
    mascota: "",
    veterinario: "",
    usuario: "",
  });

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await clienteAxios.get("/usuarios");
        setUsuarios(response.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };
    obtenerUsuarios();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    if (id !== null && id !== undefined) {
      setSelectedTurno(turnos[id]);
    } else {
      setSelectedTurno({
        fecha: "",
        hora: "",
        mascota: "",
        veterinario: "",
        usuario: "",
      });
    }
    setShow(true);
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
      const response = await clienteAxios.post("/turnos", selectedTurno);
      if (response.status === 200) {
        Swal.fire({
          title: "Turno Creado!",
          text: "El turno se ha creado con éxito",
          icon: "success",
        });
        handleClose();
      }
    } catch (error) {
      console.error("Error al crear el turno:", error);
      Swal.fire("Error", "Hubo un error al crear el turno", "error");
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
    const formattedDate = formatDateToYYYYMMDD(date);
    setStartDate(date);
    setSelectedTurno({
      ...selectedTurno,
      fecha: formattedDate,
    });
  };

  const [turnosAsignados, setTurnosAsignados] = useState({});

  const horarios = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

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

  return (
    <>
      <div className="container d-flex w-100 my-5 fontPage">
        <div className="container d-flex flex-column w-25">
          <Button
            className="btnPersonalized4 py-1 my-1"
            href="/administrador/services"
          >
            Servicios
          </Button>
          <Button
            className="btnPersonalized4 py-1 my-1"
            href="/administrador/pets"
          >
            Mascotas
          </Button>
          <Button
            className="btnPersonalized4 py-1 my-1"
            href="/administrador/turnos"
          >
            Turnos
          </Button>
        </div>
        <div className="container d-flex justify-content-center align-items-center flex-column mx-100">
          <h3 className="conatainer">Bienvenido!</h3>
          <h3 className="conatainer">
            {sessionStorage.nombre}nombre del admin
          </h3>
          <h3 className="conatainer">Rolling Puppies</h3>
        </div>
        <div className="container d-flex w-25 align-items-stretch">
          {location.pathname === "/administrador/turnos" && (
            <Button
              className="btnPersonalized4 container d-flex align-items-center justify-content-center"
              onClick={() => handleShow(null)}
            >
              Agregar Turno
            </Button>
          )}
          {location.pathname === "/administrador/services" && (
            <Button className="btnPersonalized4 container d-flex align-items-center justify-content-center">
              Agregar Servicio
            </Button>
          )}
        </div>
      </div>
      <Modal onHide={handleClose} show={show}>
        <Modal.Header closeButton className="bgColorPrincipal text-white">
          <Modal.Title>
            {selectedTurno._id ? "Editar Turno" : "Crear Turno"}
          </Modal.Title>
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
                      value={selectedTurno.hora}
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
                      value={selectedTurno.veterinario}
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
                  <Form.Group className="mb-3" controlId="usuarioSelect">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Select
                      onChange={handleUsuarioChange}
                      name="usuario"
                      required
                    >
                      {usuarios.map((usuario) => (
                        <option key={usuario._id} value={usuario._id}>
                          {usuario.nombre}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="mascotaSelect">
                    <Form.Label>Mascota</Form.Label>
                    <Form.Select
                      value={selectedMascota}
                      onChange={(e) => setSelectedMascota(e.target.value)}
                      name="mascota"
                      required
                    >
                      <option value="">Seleccionar Mascota</option>
                      {mascotasFiltradas.map((mascota) => (
                        <option key={mascota._id} value={mascota._id}>
                          {mascota.nombre}
                        </option>
                      ))}
                    </Form.Select>
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
    </>
  );
};

export default BannerAdminView;
