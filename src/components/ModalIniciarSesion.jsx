import styleGeneral from '../../src/index.module.css';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalIniciarSesion({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton closeVariant="white" className={styleGeneral.bgColorPrincipal}>
            <Modal.Title className="text-white">
            Iniciar Sesión
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styleGeneral.bgColorFondo}>
            <Form id="form-iniciar-sesion">
            <Form.Group className="mb-3">
                <Form.Label htmlFor="email-iniciar-sesion" className="fw-bolder">
                Email
                </Form.Label>
                <Form.Control
                type="email"
                id="email-iniciar-sesion"
                placeholder="Ingrese su email"
                minLength="5"
                maxLength="254"
                name="Email"
                required
                pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                autoComplete="username"
                className={styleGeneral.bgInput}
                aria-describedby="emailHelp"
                />
                <div id="emailErrorIniciarSesion"></div>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="password-iniciar-sesion" className="fw-bolder">
                Contraseña
                </Form.Label>
                <Form.Control
                type="password"
                id="password-iniciar-sesion"
                placeholder="Ingrese su contraseña"
                minLength="6"
                maxLength="16"
                name="Contraseña"
                required
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^\W_]{6,16}$"
                title="Debe contener al menos un número, una letra mayúscula, una letra minúscula, y tener entre 6 y 16 caracteres"
                autoComplete="current-password"
                className={styleGeneral.bgInput}
                />
                <div id="passwordErrorIniciarSesion"></div>
            </Form.Group>

            <Form.Text className="mb-3">
                <a href="#" className="link-dark link-offset-2 link-underline link-underline-opacity-0">
                Olvidé mi contraseña
                </a>
            </Form.Text>

            <div className="d-flex align-items-center justify-content-center">
                <Button
                    type="submit"
                    className={`${styleGeneral.btnPersonalized2} mx-1 fw-bold`}
                    aria-label="Ingresar"
                >
                    Ingresar
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

export default ModalIniciarSesion;