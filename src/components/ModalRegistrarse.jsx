import styleGeneral from '../../src/index.module.css';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalRegistrarse({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton closeVariant="white" className={styleGeneral.bgColorPrincipal}>
                <Modal.Title className="text-white">Registrarse</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styleGeneral.bgColorFondo}>
                <Form id="form-registro">
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="emailRegistro" className="fw-bolder">
                    Email
                    </Form.Label>
                    <Form.Control
                    type="email"
                    id="emailRegistro"
                    placeholder="Ingrese su email"
                    minLength="8"
                    maxLength="20"
                    name="Email"
                    autoComplete="username"
                    required
                    className={styleGeneral.bgInput}
                    aria-describedby="emailHelp"
                    />
                    <div id="emailErrorRegistro"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="nombreRegistro" className="fw-bolder">
                    Nombre
                    </Form.Label>
                    <Form.Control
                    type="text"
                    id="nombreRegistro"
                    placeholder="Ingrese su nombre"
                    minLength="3"
                    maxLength="25"
                    name="Nombre"
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="nombreErrorRegistro"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="apellidoRegistro" className="fw-bolder">
                    Apellido
                    </Form.Label>
                    <Form.Control
                    type="text"
                    id="apellidoRegistro"
                    placeholder="Ingrese su apellido"
                    minLength="3"
                    maxLength="25"
                    name="Apellido"
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="apellidoErrorRegistro"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="telefonoRegistro" className="fw-bolder">
                    Teléfono
                    </Form.Label>
                    <Form.Control
                    type="tel"
                    id="telefonoRegistro"
                    placeholder="Ingresa tu teléfono"
                    maxLength="10"
                    pattern="\d{10}"
                    name="Teléfono"
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="telefonoErrorRegistro"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="passwordRegistro" className="fw-bolder">
                    Contraseña
                    </Form.Label>
                    <Form.Control
                    type="password"
                    id="passwordRegistro"
                    placeholder="Ingrese su contraseña"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    title="Debe contener al menos un número, una letra mayúscula, una minúscula, y al menos 8 caracteres"
                    maxLength="20"
                    minLength="8"
                    autoComplete="new-password"
                    name="Contraseña"
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="passwordErrorRegistro"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="passwordRegistroRepetir" className="fw-bolder">
                    Repetir contraseña
                    </Form.Label>
                    <Form.Control
                    type="password"
                    id="passwordRegistroRepetir"
                    placeholder="Repita su contraseña"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    title="Debe contener al menos un número, una letra mayúscula, una minúscula, y al menos 8 caracteres"
                    maxLength="20"
                    minLength="8"
                    autoComplete="new-password"
                    name="Contraseña repetir"
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="passwordRepetirErrorRegistro"></div>
                </Form.Group>

                <div className="d-flex align-items-center justify-content-center">
                    <Button
                    type="submit"
                    id="botonRegistrarse"
                    className={`${styleGeneral.btnPersonalized2} mx-1 fw-bold`}
                    aria-label="Registrarse"
                    >
                    Registrarse
                    </Button>
                    <Button
                    type="reset"
                    className={`${styleGeneral.btnPersonalized1} mx-1 fw-bold`}
                    aria-label="Cancelar"
                    >
                    Cancelar
                    </Button>
                </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalRegistrarse;
