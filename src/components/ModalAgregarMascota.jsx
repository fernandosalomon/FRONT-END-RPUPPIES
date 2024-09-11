import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styleGeneral from "../../src/index.module.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

function ModalAgregarMascota({ show, handleClose, mascota }) {
  const [mascotaDatos, setMascotaDatos] = useState({});
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const mascotaSchema = z.object({
    nombre: z
      .string()
      .min(1, { message: "Campo requerido" })
      .max(25, { message: "Máximo permitido: 25 caracteres" }),
    colorDePelo: z
      .string()
      .min(1, { message: "Campo requerido" })
      .max(25, { message: "Máximo permitido: 25 caracteres" }),
    domicilio: z
      .string()
      .min(1, { message: "Campo requerido" })
      .max(25, { message: "Máximo permitido: 25 caracteres" }),
    especie: z.enum(["canino", "felino", "otro"], {
      message: "Valor no permitido",
    }),
    esterilizado: z.enum(["true", "false"], { message: "Valor no permitido" }),
    sexo: z.enum(["macho", "hembra"], { message: "Valor no permitido" }),
    fechaDeNacimiento: z
      .string()
      .min(1, { message: "Campo requerido" })
      .max(25, { message: "Máximo permitido: 25 caracteres" }),
    pesoKg: z
      .string()
      .min(0.1, { message: "Mínimo permitido: 0.1kg" })
      .max(1000, { message: "Máximo permitido: 1000kg" }),
    raza: z
      .string()
      .min(1, { message: "Campo requerido" })
      .max(25, { message: "Máximo permitido: 25 caracteres" }),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(mascotaSchema),
  });

  const onSubmit = async (e) => {
    const client = axios.create({
      baseURL: "http://localhost:3001/api/mascotas",
    });
    console.log(e);
    try {
      const response = await client.post("/", e, {
        headers: {
          auth: sessionStorage.getItem("userToken"),
        },
      });
      Swal.fire({
        title: "La mascota fue creada",
        text: `${response.data.mensaje}`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      handleCloseForm();
      setTimeout(() => {
        navigate(0);
      }, 1500);
    } catch (error) {
      Swal.fire({
        title: "No pudimos crear tu mascota",
        text: `${error}`,
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleCloseForm = () => {
    handleClose();
    reset();
  };

  return (
    <Modal show={show} onHide={handleCloseForm} centered>
      <Modal.Header
        closeButton
        closeVariant="white"
        className={styleGeneral.bgColorPrincipal}
      >
        <Modal.Title className="text-white">Agregar Mascota</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styleGeneral.bgColorFondo}>
        <Form id="form-agregar-mascota" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="fotoMascota" className="fw-bolder">
              Subir foto
            </Form.Label>
            <Form.Control
              type="file"
              id="fotoMascota"
              className={styleGeneral.bgInput}
            />
            <div id="fotoMascotaError" className="text-danger"></div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre" className="fw-bolder">
              Nombre*
            </Form.Label>
            <Form.Control type="text" id="nombre" {...register("nombre")} />
            {errors.nombre && (
              <div className="text-danger fw-bold">{errors.nombre.message}</div>
            )}
          </Form.Group>

          <div className="d-flex gap-2 w-100">
            <Form.Group className="mb-3 w-100">
              <Form.Label htmlFor="fecha-nacimiento" className="fw-bolder">
                Fecha de Nacimiento*
              </Form.Label>
              <Form.Control
                type="date"
                id="fecha-nacimiento"
                required
                {...register("fechaDeNacimiento")}
              />
              {errors.fechaDeNacimiento && (
                <div className="text-danger fw-bold">
                  {errors.fechaDeNacimiento.message}
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3 w-100">
              <Form.Label className="fw-bolder">Raza*</Form.Label>
              <Form.Control
                type="text"
                id="raza"
                required
                {...register("raza")}
              />
              {errors.raza && (
                <div className="text-danger fw-bold">{errors.raza.message}</div>
              )}
            </Form.Group>
          </div>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bolder w-100">Especie*</Form.Label>

            <div className="d-flex">
              <Form.Check
                inline
                type="radio"
                id="especieRadio1"
                name="especieRadioOptions"
                className="me-3"
                value="canino"
                label={
                  <>
                    <i className="fa-solid fa-dog"></i> Canino
                  </>
                }
                // checked={mascotaDatos.especie === "canino"}
                {...register("especie")}
              />
              <Form.Check
                inline
                type="radio"
                id="especieRadio2"
                value="felino"
                label={
                  <>
                    <i className="fa-solid fa-cat"></i> Felino
                  </>
                }
                // checked={mascotaDatos.especie === "felino"}
                {...register("especie")}
              />
              <Form.Check
                inline
                type="radio"
                id="especieRadio3"
                name="especieRadioOptions"
                value="otro"
                label={
                  <>
                    <i className="fa-solid fa-paw"></i> Otro
                  </>
                }
                // checked={mascotaDatos.especie === "otro"}
                {...register("especie")}
              />
            </div>
            {errors.especie && (
              <div className="text-danger fw-bold">
                {errors.especie.message}
              </div>
            )}
          </Form.Group>

          <div className="d-flex gap-4">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder w-100">Sexo*</Form.Label>
              <div className="d-flex gap-3">
                <Form.Check
                  type="radio"
                  id="radioBtnMacho"
                  name="sexoRadio"
                  value="macho"
                  label={
                    <>
                      <i className="fa-solid fa-mars iconoRadioMacho"></i> Macho
                    </>
                  }
                  {...register("sexo")}
                />
                <Form.Check
                  type="radio"
                  id="radioBtnHembra"
                  name="sexoRadio"
                  value="hembra"
                  label={
                    <>
                      <i className="fa-solid fa-venus iconoRadioMacho"></i>{" "}
                      Hembra
                    </>
                  }
                  {...register("sexo")}
                />
              </div>
              {errors.sexo && (
                <div className="text-danger fw-bold">{errors.sexo.message}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder w-100">
                Esterilizado/a*
              </Form.Label>
              <div className="d-flex gap-3">
                <Form.Check
                  type="radio"
                  id="radioBtnEsterilizadoSi"
                  name="esterilizadoRadio"
                  value="true"
                  label="Si"
                  {...register("esterilizado")}
                />
                <Form.Check
                  type="radio"
                  id="radioBtnEsterilizadoNo"
                  name="esterilizadoRadio"
                  value="false"
                  label="No"
                  {...register("esterilizado")}
                />
              </div>
              {errors.esterilizado && (
                <div className="text-danger fw-bold">
                  {errors.esterilizado.message}
                </div>
              )}
            </Form.Group>
          </div>

          <div className="d-flex gap-3">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="color" className="fw-bolder">
                Color de pelo*
              </Form.Label>
              <Form.Control
                type="text"
                id="color"
                required
                {...register("colorDePelo")}
              />
              {errors.colorDePelo && (
                <div className="text-danger fw-bold">
                  {errors.colorDePelo.message}
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="peso" className="fw-bolder">
                Peso (kg)*
              </Form.Label>
              <Form.Control
                type="number"
                id="peso"
                required
                {...register("pesoKg")}
              />
              {errors.pesoKg && (
                <div className="text-danger fw-bold">
                  {errors.pesoKg.message}
                </div>
              )}
            </Form.Group>
          </div>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="domicilio" className="fw-bolder">
              Domicilio*
            </Form.Label>
            <Form.Control
              type="text"
              id="domicilio"
              required
              {...register("domicilio")}
            />
            {errors.domicilio && (
              <div className="text-danger fw-bold">
                {errors.domicilio.message}
              </div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="observaciones" className="fw-bolder">
              Observaciones
            </Form.Label>
            <Form.Control
              as="textarea"
              id="observaciones"
              style={{ height: "100px" }}
              {...register("observaciones")}
            />
            {errors.observaciones && (
              <div className="text-danger fw-bold">
                {errors.observaciones.message}
              </div>
            )}
          </Form.Group>

          <Form.Text className="mb-3 fw-bolder">
            <p>Campos obligatorios*</p>
          </Form.Text>

          <div className="d-flex align-items-center justify-content-center">
            <Button
              type="submit"
              className={`${styleGeneral.btnPersonalized2} mx-1 fw-bold`}
              aria-label="Agregar"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Actualizando..." : "Actualizar"}
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

export default ModalAgregarMascota;
