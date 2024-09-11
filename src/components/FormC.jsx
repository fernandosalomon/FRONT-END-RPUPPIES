import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useEffect, useState } from "react";

const FormC = (formID, data) => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    setFormData(data);
  }, []);

  const userSchema = z.object({
    nombre: z
      .string({ message: "Formato de nombre invalido" })
      .max(25, { message: "Máximo permitido: 25 caracteres" })
      .min(1, { message: "Campo requerido" }),
    apellido: z
      .string({ message: "Formato de apellido invalido" })
      .max(25, { message: "Máximo permitido: 25 caracteres" })
      .min(1, { message: "Campo requerido" }),
    email: z
      .string({ message: "Formato de email invalido" })
      .email({ message: "Formato de email invalido" }),
    telefono: z
      .string()
      .min(7, { message: "Mínimo requerido: 7 dígitos" })
      .max(10, { message: "Máximo permitido: 10 dígitos" }),
    rol: z.enum(["user", "admin"], {
      message: "Solo los tipos 'user' y 'admin' estan permitidos",
    }),
  });

  //REACT HOOK FORM
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      telefono: formData.telefono,
      rol: formData.telefono,
    },
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (e) => {
    try {
      const response = await client.put(`/${formData._id}`, e);
      if (response.status === 200) {
        Swal.fire({
          title: "Los datos se actualizaron con exito",
          text: "Los datos del usuario se actualizaron correctamente",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Hubo un problema",
          text: `Error ${response.status}: No se pudieron actualizar los datos del usuario`,
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Hubo un problema",
        text: `${error}`,
        icon: "error",
      });
    }
    setShowEditarPerfil(false);
    navigate(0);
  };

  return (
    <>
      <Container>
        <Form id="form-editar-perfil" onSubmit={handleSubmit(onSubmit)}>
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
                className="bgInput"
                {...register("nombre")}
              />
              {errors.nombre && (
                <div className="text-danger">{errors.nombre.message}</div>
              )}
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
                required
                className="bgInput"
                {...register("apellido")}
              />
              {errors.apellido && (
                <div className="text-danger">{errors.apellido.message}</div>
              )}
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
            <Form.Label htmlFor="telefonoEditar" className="fw-bolder">
              Teléfono
            </Form.Label>
            <Form.Control
              type="text"
              id="telefonoEditar"
              // maxLength="10"
              // pattern="\d{10}"
              name="telefono"
              required
              className="bgInput"
              {...register("telefono")}
            />
            {errors.telefono && (
              <div className="text-danger">{errors.telefono.message}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bolder">Rol</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="bgInput"
              name="rol"
              {...register("rol")}
            >
              <option value="user">user</option>
              <option value="admin">admin</option>
            </Form.Select>
            {errors.rol && (
              <div className="text-danger">{errors.rol.message}</div>
            )}
          </Form.Group>

          <div className="d-flex align-items-center justify-content-center">
            <Button
              type="submit"
              id="botonGuardarCambios"
              className="btnPersonalized2 mx-1 fw-bold"
              aria-label="Guardar cambios"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Guardando cambios..." : "Guardar cambios"}
            </Button>
            <Button
              type="button"
              className="btnPersonalized1 mx-1 fw-bold"
              aria-label="Cancelar"
              onClick={handleCloseEditarPerfil}
            >
              Cancelar
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FormC;
