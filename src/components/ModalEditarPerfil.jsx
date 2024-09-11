import styleGeneral from '../../src/index.module.css';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalEditarPerfil({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton closeVariant="white" className={styleGeneral.bgColorPrincipal}>
                <Modal.Title className="text-white">Editar Perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styleGeneral.bgColorFondo}>
                <Form id="form-editar-perfil">
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="emailEditar" className="fw-bolder">
                    Email
                    </Form.Label>
                    <Form.Control
                    type="email"
                    id="emailEditar"
                    placeholder="Ingrese su email"
                    minLength="8"
                    maxLength="20"
                    name="Email"
                    autoComplete="username"
                    required
                    className={styleGeneral.bgInput}
                    aria-describedby="emailHelp"
                    />
                    <div id="emailErrorEditar"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="nombreEditar" className="fw-bolder">
                    Nombre
                    </Form.Label>
                    <Form.Control
                    type="text"
                    id="nombreEditar"
                    placeholder="Ingrese su nombre"
                    minLength="3"
                    maxLength="25"
                    name="Nombre"
                    required
                    className={styleGeneral.bgInput}
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
                    placeholder="Ingrese su apellido"
                    minLength="3"
                    maxLength="25"
                    name="Apellido"
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="apellidoErrorEditar"></div>
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
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="telefonoErrorEditar"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="fechaNacimientoEditar" className="fw-bolder">
                    Fecha de Nacimiento
                    </Form.Label>
                    <Form.Control
                    type="date"
                    id="fechaNacimientoEditar"
                    placeholder="Ingrese su Fecha de Nacimiento"
                    min="1900-01-01"
                    name="Fecha de nacimiento"
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="fechaNacimientoErrorEditar"></div>
                </Form.Group>

                <div className="d-flex align-items-center justify-content-center">
                    <Button
                    type="submit"
                    id="botonGuardarCambios"
                    className={`${styleGeneral.btnPersonalized2} mx-1 fw-bold`}
                    aria-label="Guardar cambios"
                    >
                    Guardar cambios
                    </Button>
                    <Button
                    type="button"
                    className={`${styleGeneral.btnPersonalized1} mx-1 fw-bold`}
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
}

export default ModalEditarPerfil;
