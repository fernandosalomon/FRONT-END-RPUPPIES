import styleGeneral from "../../src/index.module.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import clientAxios from "../helpers/clientAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ModalRegistrarse({ show, handleClose }) {
  const navigate = useNavigate();

  const registerSchema = z.object({
    nombre: z
      .string()
      .min(1, { message: "Campo Requerido" })
      .max(25, "Máximo permitido: 25 caracteres"),
    apellido: z
      .string()
      .min(1, { message: "Campo Requerido" })
      .max(25, "Máximo permitido: 25 caracteres"),
    email: z
      .string()
      .email({ message: "Formato de email incorrecto" })
      .min(1, { message: "Campo Requerido" }),
    telefono: z
      .string()
      .min(7, { message: "Mínimo requerido: 7 dígitos" })
      .max(10, { message: "Máximo permitido: 10 dígitos" }),
    contrasenia: z
      .string()
      .min(8, { message: "La contraseña debe contener al menos 8 caracteres" })
      .max(25, { message: "Máximo permitido: 25 caracteres" })
      .refine(
        (value) => {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(
            value ?? ""
          );
        },
        {
          message:
            "La contraseña debe contener al menos una letra mayuscula, una minuscula, un número y un caracter especial(@$!%*?&)",
        }
      ),
    repetirContrasenia: z.string(),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (e) => {
    if (e.contrasenia === e.repetirContrasenia) {
      try {
        const { repetirContrasenia, ...userData } = e;
        const response = await clientAxios.post("/usuarios/", userData);

        Swal.fire({
          title: "Usuario creado con exito",
          text: "Te hemos enviado un mail de bienvenida",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        sessionStorage.setItem("userToken", response.data.token);
        sessionStorage.setItem("userRole", response.data.rol);
        handleClose();
        setTimeout(() => {
          navigate(0);
        }, 1000);
      } catch (error) {
        setError("root", {
          message: "ERROR",
        });
      }
    } else {
      setError("repetirContrasenia", {
        type: "error",
        message: "Las contraseñas deben coincidir",
      });
    }
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
        reset();
      }}
      centered
    >
      <Modal.Header
        closeButton
        closeVariant="white"
        className="bgColorPrincipal"
      >
        <Modal.Title className="text-white">Registrarse</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styleGeneral.bgColorFondo}>
        <Form id="form-registro" onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex gap-3">
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
                name="nombre"
                required
                className="bgInput"
                {...register("nombre")}
              />
              {errors.nombre && (
                <div className="text-danger fw-bold">
                  {errors.nombre.message}
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="apellidoRegistro" className="fw-bolder">
                Apellido
              </Form.Label>
              <Form.Control
                type="text"
                id="apellidoRegistro"
                placeholder="Ingrese su apellido"
                maxLength="25"
                name="apellido"
                required
                className="bgInput"
                {...register("apellido")}
              />
              {errors.apellido && (
                <div className="text-danger fw-bold">
                  {errors.apellido.message}
                </div>
              )}
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="emailRegistro" className="fw-bolder">
              Email
            </Form.Label>
            <Form.Control
              type="email"
              id="emailRegistro"
              placeholder="Ingrese su email"
              name="email"
              required
              className="bgInput"
              {...register("email")}
            />
            {errors.email && (
              <div className="text-danger fw-bold">{errors.email.message}</div>
            )}
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
              name="Teléfono"
              required
              className="bgInput"
              {...register("telefono")}
            />
            {errors.telefono && (
              <div className="text-danger fw-bold">
                {errors.telefono.message}
              </div>
            )}
          </Form.Group>

          <div className="d-flex gap-3">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="passwordRegistro" className="fw-bolder">
                Contraseña
              </Form.Label>
              <Form.Control
                type="password"
                id="passwordRegistro"
                placeholder="Ingrese su contraseña"
                maxLength="20"
                minLength="8"
                name="contrasenia"
                required
                className="bgInput"
                {...register("contrasenia")}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                htmlFor="passwordRegistroRepetir"
                className="fw-bolder"
              >
                Repetir contraseña
              </Form.Label>
              <Form.Control
                type="password"
                id="passwordRegistroRepetir"
                placeholder="Repita su contraseña"
                maxLength="20"
                minLength="8"
                name="repetirContrasenia"
                required
                className="bgInput"
                {...register("repetirContrasenia")}
              />
            </Form.Group>
          </div>
          {errors.contrasenia && (
            <div className="text-danger fw-bold">
              {errors.contrasenia.message}
            </div>
          )}
          {errors.repetirContrasenia && (
            <div className="text-danger fw-bold">
              {errors.repetirContrasenia.message}
            </div>
          )}
          {errors.root && (
            <div className="text-danger fw-bold">{errors.root.message}</div>
          )}

          <div className="d-flex align-items-center justify-content-center mt-3">
            <Button
              type="submit"
              id="botonRegistrarse"
              className="btnPersonalized2 mx-1 fw-bold"
              aria-label="Registrarse"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registrando..." : "Registrarse"}
            </Button>
            <Button
              type="reset"
              className="btnPersonalized1 mx-1 fw-bold"
              aria-label="Cancelar"
              onClick={() => {
                handleClose();
                reset();
              }}
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
