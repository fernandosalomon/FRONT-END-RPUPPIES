import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalEditarPerfil = ({
  show,
  handleClose,
  nombre,
  apellido,
  email,
  telefono,
  rol,
}) => {
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    show &&
      setModalData({
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        rol: rol,
      });
  }, []);

  const handleChange = (e) => {
    setModalData({ ...modalData, [e.target.name]: e.target.value });
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header
        closeButton
        closeVariant="white"
        className="bgColorPrincipal"
      >
        <Modal.Title className="text-white">Editar Perfil</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bgColorFondo">
        <Form id="form-editar-perfil">
          <div className="d-flex gap-3">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="nombreEditar" className="fw-bolder">
                Nombre
              </Form.Label>
              <Form.Control
                type="text"
                id="nombreEditar"
                minLength="3"
                maxLength="25"
                name="nombre"
                value={modalData.nombre}
                onChange={handleChange}
                required
                className="bgInput"
              />
              <div id="nombreErrorEditar"></div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="apellidoEditar" className="fw-bolder">
                Apellido
              </Form.Label>
              <Form.Control
                type="text"
                id="apellidoEditar"
                minLength="3"
                maxLength="25"
                name="apellido"
                value={modalData.apellido}
                onChange={handleChange}
                required
                className="bgInput"
              />
              <div id="apellidoErrorEditar"></div>
            </Form.Group>
          </div>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="emailEditar" className="fw-bolder">
              Email
            </Form.Label>
            <Form.Control
              type="email"
              id="emailEditar"
              minLength="8"
              maxLength="20"
              name="email"
              value={modalData.email}
              onChange={handleChange}
              required
              className="bgInput"
              aria-describedby="emailHelp"
            />
            <div id="emailErrorEditar"></div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="telefonoEditar" className="fw-bolder">
              Teléfono
            </Form.Label>
            <Form.Control
              type="tel"
              id="telefonoEditar"
              placeholder="Ingresa tu teléfono"
              maxLength="10"
              pattern="\d{10}"
              name="Teléfono"
              value={modalData.telefono}
              onChange={handleChange}
              required
              className="bgInput"
            />
            <div id="telefonoErrorEditar"></div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bolder">Rol</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="bgInput"
            >
              <option value="user" selected={modalData.rol === "user"}>
                user
              </option>
              <option value="admin" selected={modalData.rol === "admin"}>
                admin
              </option>
            </Form.Select>
          </Form.Group>

          <div className="d-flex align-items-center justify-content-center">
            <Button
              type="submit"
              id="botonGuardarCambios"
              className={`$"btnPersonalized2} mx-1 fw-bold`}
              aria-label="Guardar cambios"
            >
              Guardar cambios
            </Button>
            <Button
              type="button"
              className={`$"btnPersonalized1} mx-1 fw-bold`}
              aria-label="Cancelar"
              onClick={handleClose}
            >
              Cancelar
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalEditarPerfil;
