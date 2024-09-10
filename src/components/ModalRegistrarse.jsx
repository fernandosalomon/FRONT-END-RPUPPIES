import styleGeneral from '../../src/index.module.css';
import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ModalRegistrarse({ show, handleClose }) {

  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({});
  const [errores, setErrores] = useState({});

  const handleChange = (ev) => {
    setFormRegister({ ...formRegister, [ev.target.name.toLowerCase()]: ev.target.value });
  };

  const validarEmail = (email) => {
    const emailRequerido = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRequerido.test(email);
  };

  const validarContraseña = (password) => {
    const contraseñaRequerida = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return contraseñaRequerida.test(password);
  };

  const handleClick = (ev) => {
    ev.preventDefault();

    let hasErrors = false;

    if (!formRegister.nombre) {
      setErrores((prev) => ({ ...prev, nombre: true }));
      hasErrors = true;
    } else {
      setErrores((prev) => ({ ...prev, nombre: false }));
    }

    if (!formRegister.apellido) {
      setErrores((prev) => ({ ...prev, apellido: true }));
      hasErrors = true;
    } else {
      setErrores((prev) => ({ ...prev, apellido: false }));
    }

    if (!formRegister.email) {
      setErrores((prev) => ({ ...prev, email: true }));
      hasErrors = true;
    } else {
      setErrores((prev) => ({ ...prev, email: false }));
    }

    if (!formRegister.telefono) {
      setErrores((prev) => ({ ...prev, telefono: true }));
      hasErrors = true;
    } else {
      setErrores((prev) => ({ ...prev, telefono: false }));
    }

    if (!formRegister.contraseña) {
      setErrores((prev) => ({ ...prev, contraseña: true }));
      hasErrors = true;
    } else {
      setErrores((prev) => ({ ...prev, contraseña: false }));
    }

    if (!formRegister.rcontraseña) {
      setErrores((prev) => ({ ...prev, rcontraseña: true }));
      hasErrors = true;
    } else {
      setErrores((prev) => ({ ...prev, rcontraseña: false }));
    }

    if (hasErrors) return;

    if (!validarEmail(formRegister.email)) {
      return alert("Email inválido");
    }

    if (!validarContraseña(formRegister.contraseña)) {
      return alert("La contraseña debe tener al menos 8 caracteres, una mayúscula y un número");
    }

    if (formRegister.contraseña !== formRegister.rcontraseña) {
      return alert("Las contraseñas no coinciden");
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioExistente = usuarios.find((usuario) => usuario.nombreUsuario === formRegister.email);

    if (usuarioExistente) {
      return alert("El usuario ya existe");
    }

    const nuevoUsuario = {
      id: usuarios[usuarios.length - 1]?.id + 1 || 1,
      nombre: formRegister.nombre,
      apellido: formRegister.apellido,
      email: formRegister.email,
      telefono: formRegister.telefono,
      contrasenia: formRegister.contraseña,
      role: "usuario",
      bloqueado: false,
      login: false,
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    handleClose();
    setTimeout(() => {
      
      navigate("/iniciar-sesion");
    }, 1000);

  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton closeVariant="white" className={styleGeneral.bgColorPrincipal}>
        <Modal.Title className="text-white">Registrarse</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styleGeneral.bgColorFondo}>
        <Form id="form-registro" onSubmit={handleClick}>
          <div className="d-flex gap-2">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="nombreRegistro" className="fw-bolder">Nombre</Form.Label>
              <Form.Control
                type="text"
                id="nombreRegistro"
                placeholder="Ingrese su nombre"
                minLength="3"
                maxLength="25"
                name="Nombre"
                required
                className={styleGeneral.bgInput}
                onChange={handleChange}
              />
              {errores.nombre && <div className="text-danger">Campo nombre vacío</div>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="apellidoRegistro" className="fw-bolder">Apellido</Form.Label>
              <Form.Control
                type="text"
                id="apellidoRegistro"
                placeholder="Ingrese su apellido"
                minLength="3"
                maxLength="25"
                name="Apellido"
                required
                className={styleGeneral.bgInput}
                onChange={handleChange}
              />
              {errores.apellido && <div className="text-danger">Campo apellido vacío</div>}
            </Form.Group>
          </div>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="emailRegistro" className="fw-bolder">Email</Form.Label>
            <Form.Control
              type="email"
              id="emailRegistro"
              placeholder="Ingrese su email"
              minLength="8"
              maxLength="30"
              name="Email"
              autoComplete="username"
              required
              className={styleGeneral.bgInput}
              onChange={handleChange}
            />
            {errores.email && <div className="text-danger">Campo email vacío</div>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="telefonoRegistro" className="fw-bolder">Teléfono</Form.Label>
            <Form.Control
              type="tel"
              id="telefonoRegistro"
              placeholder="Ingrese su teléfono"
              maxLength="10"
              pattern="\d{10}"
              name="Telefono"
              required
              className={styleGeneral.bgInput}
              onChange={handleChange}
            />
            {errores.telefono && <div className="text-danger">Campo teléfono vacío</div>}
          </Form.Group>

          <div className="d-flex gap-2">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="passwordRegistro" className="fw-bolder">Contraseña</Form.Label>
              <Form.Control
                type="password"
                id="passwordRegistro"
                placeholder="Ingrese su contraseña"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Debe contener al menos un número, una letra mayúscula, una minúscula, y al menos 8 caracteres"
                maxLength="20"
                minLength="8"
                autoComplete="new-password"
                name="Contraseña"
                required
                className={styleGeneral.bgInput}
                onChange={handleChange}
              />
              {errores.contraseña && <div className="text-danger">Campo contraseña vacío</div>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="passwordRegistroRepetir" className="fw-bolder">Repetir contraseña</Form.Label>
              <Form.Control
                type="password"
                id="passwordRegistroRepetir"
                placeholder="Repita su contraseña"
                maxLength="20"
                minLength="8"
                autoComplete="new-password"
                name="Rcontraseña"
                required
                className={styleGeneral.bgInput}
                onChange={handleChange}
              />
              {errores.rcontraseña && <div className="text-danger">Campo repetir contraseña vacío</div>}
            </Form.Group>
          </div>

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

export default ModalRegistrarse;
