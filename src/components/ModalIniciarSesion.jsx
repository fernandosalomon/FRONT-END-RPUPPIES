import { useState } from 'react';
import styleGeneral from '../../src/index.module.css';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ModalIniciarSesion = ({ show, handleClose }) => {
    const [formLogin, setFormLogin] = useState({ email: '', contrasenia: '' });
    const [errores, setErrores] = useState({});
    const navigate = useNavigate();

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setFormLogin((prev) => ({ ...prev, [name]: value }));
    };

    const handleClickLogin = (ev) => {
        ev.preventDefault();
        let hasErrors = false;

        if (!formLogin.email) {
            setErrores((prev) => ({ ...prev, email: true }));
            hasErrors = true;
        } else {
            setErrores((prev) => ({ ...prev, email: false }));
        }

        if (!formLogin.contrasenia) {
            setErrores((prev) => ({ ...prev, contrasenia: true }));
            hasErrors = true;
        } else {
            setErrores((prev) => ({ ...prev, contrasenia: false }));
        }

        if (hasErrors) {
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuarioExiste = usuarios.find((usuario) => usuario.email === formLogin.email);
      
        if (!usuarioExiste) {
            return alert("Usuario y/o contraseña incorrecta.");
        }

        if (usuarioExiste.contrasenia === formLogin.contrasenia) {
            usuarioExiste.login = true;
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            sessionStorage.setItem("usuario", JSON.stringify(usuarioExiste));

            if (usuarioExiste.role === "admin") {
            
                setTimeout(() => {
                    navigate("/admin-inicio");
                }, 1000);
            } else {
                setTimeout(() => {
                    navigate("/usuario-inicio");
                }, 1000);
            }
        } else {
            return alert("Usuario y/o contraseña incorrecta.");
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton closeVariant="white" className={styleGeneral.bgColorPrincipal}>
                <Modal.Title className="text-white">Iniciar Sesión</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styleGeneral.bgColorFondo}>
                <Form id="form-iniciar-sesion" onSubmit={handleClickLogin}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="email-iniciar-sesion" className="fw-bolder">
                            Email
                        </Form.Label>
                        <Form.Control
                            type="email"
                            id="email-iniciar-sesion"
                            placeholder="Ingrese su email"
                            minLength="5"
                            maxLength="30"
                            name="email"
                            required
                            autoComplete="username"
                            className={styleGeneral.bgInput}
                            onChange={handleChange}
                            aria-describedby="emailHelp"
                        />
                        <div id="emailErrorIniciarSesion"></div>
                        {errores.email && <div className="text-danger">Campo email vacío</div>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="password-iniciar-sesion" className="fw-bolder">
                            Contraseña
                        </Form.Label>
                        <Form.Control
                            type="password"
                            id="password-iniciar-sesion"
                            placeholder="Ingrese su contraseña"
                            name="contrasenia"
                            required
                            title="Debe contener al menos un número, una letra mayúscula, una letra minúscula, y tener entre 8 y 16 caracteres"
                            autoComplete="current-password"
                            className={styleGeneral.bgInput}
                            onChange={handleChange}
                        />
                        <div id="passwordErrorIniciarSesion">
                            {errores.contrasenia && <p className="text-danger">Campo contraseña vacío</p>}
                        </div>
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

export default ModalIniciarSesion;
