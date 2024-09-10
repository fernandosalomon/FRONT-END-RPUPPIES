import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ModalIniciarSesion({ show, handleClose }) {
  const navigate = useNavigate();
  const client = axios.create({
    baseURL: "http://localhost:3001/api/usuarios",
  });

  const loginSchema = z.object({
    email: z
      .string()
      .email({ message: "Formato de email invalido" })
      .min(1, { message: "Campo requerido" }),
    contrasenia: z.string().min(1, { message: "Campo requerido" }),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (e) => {
    try {
      const response = await client.post("/login", e);
      if (response.data.token) {
        Swal.fire({
          title: "Bienvenido",
          text: `${response.data.mensaje}`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        sessionStorage.setItem("userToken", response.data.token);
        sessionStorage.setItem("userRole", response.data.rol);
        handleClose();
        navigate(0);
      } else {
        Swal.fire({
          title: "Algo salio mal",
          text: `${response.data}`,
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header
        closeButton
        closeVariant="white"
        className="bgColorPrincipal"
      >
        <Modal.Title className="text-white">Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bgColorFondo">
        <Form id="form-iniciar-sesion" onSubmit={handleSubmit(onSubmit)}>
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
              name="email"
              required
              className="bgInput"
              aria-describedby="emailHelp"
              {...register("email")}
            />
            {errors.email && (
              <div className="text-danger">{errors.email.message}</div>
            )}
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
              name="contrasenia"
              required
              className="bgInput"
              {...register("contrasenia")}
            />
            {errors.contrasenia && (
              <div className="text-danger">{errors.contrasenia.message}</div>
            )}
          </Form.Group>

          <Link
            to="/reset-password"
            className="link-dark link-offset-2 link-underline link-underline-opacity-0"
          >
            Olvidé mi contraseña
          </Link>

          <div className="d-flex align-items-center justify-content-center mt-3">
            <Button
              type="submit"
              className="btnPersonalized2 mx-1 fw-bold"
              aria-label="Ingresar"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Ingresando" : "Ingresar"}
            </Button>
            <Button
              type="reset"
              className="btnPersonalized1 mx-1 fw-bold"
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


export default ModalIniciarSesion;
