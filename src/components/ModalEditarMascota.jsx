import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styleGeneral from "../../src/index.module.css";
import { Modal, Button, Form } from "react-bootstrap";

function ModalAgregarMascota({ show, handleClose, mascota }) {
  const [mascotaDatos, setMacotaDatos] = useState({
    nombre: mascota.nombre,
    fechaDeNacimiento: mascota.fechaDeNacimiento.split("T")[0],
    sexo: mascota.sexo,
    especie: mascota.especie,
    raza: mascota.raza,
    colorDePelo: mascota.colorDePelo,
    pesoKg: mascota.pesoKg,
    esterilizado: mascota.esterilizado,
    domicilio: mascota.domicilio,
    observaciones: mascota.observaciones,
  });

  const client = axios.create({
    baseURL: "http://localhost:3001/api/mascotas",
  });

  const [nombreValido, setNombreValido] = useState(-1);
  const [fechaDeNacimientoValido, setFechaDeNacimientoValido] = useState(-1);
  const [sexoValido, setSexoValido] = useState(-1);
  const [especieValido, setEspecieValido] = useState(-1);
  const [razaValido, setRazaValido] = useState(-1);
  const [colorDePeloValido, setColorDePeloValido] = useState(-1);
  const [pesoKgValido, setPesoKgValido] = useState(-1);
  const [esterilizadoValido, setEsterilizadoValido] = useState(-1);
  const [domicilioValido, setDomicilioValido] = useState(-1);
  const [observacionesValido, setObservacionesValido] = useState(-1);

  const [nombreError, setNombreError] = useState(-1);
  const [fechaDeNacimientoError, setFechaDeNacimientoError] = useState(-1);
  const [sexoError, setSexoError] = useState(-1);
  const [especieError, setEspecieError] = useState(-1);
  const [razaError, setRazaError] = useState(-1);
  const [colorDePeloError, setColorDePeloError] = useState(-1);
  const [pesoKgError, setPesoKgError] = useState(-1);
  const [esterilizadoError, setEsterilizadoError] = useState(-1);
  const [domicilioError, setDomicilioError] = useState(-1);
  const [observacionesError, setObservacionesError] = useState(-1);

  const resetFormulario = () => {
    setMacotaDatos({
      nombre: "",
      fechaDeNacimiento: "",
      sexo: "",
      especie: "",
      raza: "",
      colorDePelo: "",
      pesoKg: 0,
      esterilizado: 0,
      domicilio: "",
      observaciones: "",
    });
    setNombreValido(-1);
    setFechaDeNacimientoValido(-1);
    setSexoValido(-1);
    setEspecieValido(-1);
    setRazaValido(-1);
    setColorDePeloValido(-1);
    setPesoKgValido(-1);
    setEspecieValido(-1);
    setDomicilioValido(-1);
    setObservacionesValido(-1);
    setNombreError(-1);
    setFechaDeNacimientoError(-1);
    setSexoError(-1);
    setEspecieError(-1);
    setRazaError(-1);
    setColorDePeloError(-1);
    setPesoKgError(-1);
    setEsterilizadoError(-1);
    setDomicilioError(-1);
    setObservacionesError(-1);
  };

  //   useEffect(() => {
  //     console.log(nombreValido);
  //     console.log(fechaDeNacimientoValido);
  //     console.log(sexoValido);
  //     console.log(especieValido);
  //     console.log(razaValido);
  //     console.log(colorDePeloValido);
  //     console.log(pesoKgValido);
  //     console.log(esterilizadoValido);
  //     console.log(domicilioValido);
  //   }, [
  //     nombreValido,
  //     fechaDeNacimientoValido,
  //     sexoValido,
  //     especieValido,
  //     razaValido,
  //     colorDePeloValido,
  //     pesoKgValido,
  //     esterilizadoValido,
  //     domicilioValido,
  //   ]);

  const handleChangeNombre = (e) => {
    setMacotaDatos({ ...mascotaDatos, nombre: e.target.value });
    setNombreValido(validarNombre(e.target.value));
    setNombreError(validarNombre(e.target.value));
  };

  const handleFechaDeNacimiento = (e) => {
    setMacotaDatos({ ...mascotaDatos, fechaDeNacimiento: e.target.value });
    setFechaDeNacimientoValido(validarFechaDeNacimiento(e.target.value));
    setFechaDeNacimientoError(validarFechaDeNacimiento(e.target.value));
  };

  const handleChangeSexo = (e) => {
    setMacotaDatos({ ...mascotaDatos, sexo: e.target.value });
    setSexoValido(validarRadio(e.target.value));
    setSexoError(validarRadio(e.target.value));
  };

  const handleChangeEspecie = (e) => {
    setMacotaDatos({ ...mascotaDatos, especie: e.target.value });
    setEspecieValido(validarRadio(e.target.value));
    setEspecieError(validarRadio(e.target.value));
  };

  const handleChangeRaza = (e) => {
    setMacotaDatos({ ...mascotaDatos, raza: e.target.value });
    setRazaValido(validarNombre(e.target.value));
    setRazaError(validarNombre(e.target.value));
  };

  const handleChangeColorDePelo = (e) => {
    setMacotaDatos({ ...mascotaDatos, colorDePelo: e.target.value });
    setColorDePeloValido(validarNombre(e.target.value));
    setColorDePeloError(validarNombre(e.target.value));
  };

  const handleChangePesoKg = (e) => {
    setMacotaDatos({ ...mascotaDatos, pesoKg: e.target.value });
    setPesoKgValido(validarPesoKg(e.target.value));
    setPesoKgError(validarPesoKg(e.target.value));
  };

  const handleChangeEsterilizado = (e) => {
    setMacotaDatos({ ...mascotaDatos, esterilizado: e.target.value });
    setEspecieValido(validarRadio(e.target.value));
    setEsterilizadoError(validarRadio(e.target.value));
  };

  const handleChangeDomicilio = (e) => {
    setMacotaDatos({ ...mascotaDatos, domicilio: e.target.value });
    setDomicilioValido(validarTexto(e.target.value));
    setDomicilioError(validarTexto(e.target.value));
  };

  const handleChangeObservaciones = (e) => {
    setMacotaDatos({ ...mascotaDatos, observaciones: e.target.value });
    setObservacionesValido(validarTexto(e.target.value));
    setObservacionesError(validarTexto(e.target.value));
  };

  const capitalizarTexto = (nombre) => {
    return nombre.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  };

  const validarNombre = (nombre) => {
    const regex = /^([a-zA-Z]{3,}s+)*[a-zA-Z]{3,}$/;
    let textoNormalizado = capitalizarTexto(nombre.trim().toLowerCase());
    if (!regex.test(textoNormalizado)) {
      return 0;
    } else {
      return 1;
    }
  };

  const validarFechaDeNacimiento = (fechaDeNacimiento) => {
    const fecha = new Date(fechaDeNacimiento);
    const hoy = new Date();
    const limiteInferior = new Date("1900-01-01");
    if (fecha >= limiteInferior && fecha <= hoy) {
      return 1;
    } else {
      return 0;
    }
  };

  const validarRadio = (opcion) => {
    return opcion ? 1 : 0;
  };

  const validarPesoKg = (peso) => {
    const pesoNumerico = parseFloat(peso);
    if (!isNaN(pesoNumerico) && pesoNumerico > 0 && pesoNumerico <= 1000) {
      return 1;
    } else {
      return 0;
    }
  };

  const validarTexto = (texto) => {
    const textoLimpio = texto.trim();
    const longitud = textoLimpio.length;
    if (longitud >= 10 && longitud <= 100) {
      return 1;
    } else {
      return 0;
    }
  };

  const validarEstilo = (valor) => {
    if (valor === 1) {
      return "is-valid";
    } else if (valor === 0) {
      return "is-invalid";
    } else {
      return styleGeneral.bgInput;
    }
  };

  const validarMensaje = (valor) => {
    if (valor === 1) {
      return "text-success fw-bold valid-feedback";
    } else if (valor === 0) {
      return "text-danger fw-bold invalid-feedback";
    } else {
      return "text-danger fw-bold invalid-feedback";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nombreValido === 1 &&
      fechaDeNacimientoValido === 1 &&
      sexoValido === 1 &&
      especieValido === 1 &&
      razaValido === 1 &&
      colorDePeloValido === 1 &&
      pesoKgValido === 1 &&
      esterilizadoValido === 1 &&
      domicilioValido === 1
    ) {
      try {
        const id = mascota.id;
        const response = await client.put(`/${id}`, {
          headers: {
            auth: sessionStorage.getItem("userToken"),
          },
        });
        Swal.fire({
          title: "Éxito",
          text: "Mascota editada correctamente",
          icon: "success",
          showConfirmButton: false,
          background: "#eaeef4",
          timer: 1500,
        });
        handleClose();
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Hubo un problema al editar la mascota",
          icon: "error",
          showConfirmButton: false,
          background: "#eaeef4",
          timer: 1500,
        });
      }
    } else {
      if (nombreValido === 0 || nombreValido === -1) {
        setNombreError(0);
        console.log("No se puese enviar el formulario Nombre");
      }
      if (fechaDeNacimientoValido === 0 || fechaDeNacimientoValido === -1) {
        setFechaDeNacimientoError(0);
        console.log("No se puese enviar el formulario Fecha N");
      }
      if (sexoError === 0 || sexoError === -1) {
        setSexoError(0);
        console.log("No se puese enviar el formulario Sexo");
      }
      if (especieError === 0 || especieError === -1) {
        setEspecieError(0);
        console.log("No se puese enviar el formulario Especie");
      }
      if (razaError === 0 || razaError === -1) {
        setRazaError(0);
        console.log("No se puese enviar el formulario Raza");
      }
      if (colorDePeloError === 0 || colorDePeloError === -1) {
        setColorDePeloError(0);
        console.log("No se puese enviar el formulario Color");
      }
      if (pesoKgError === 0 || pesoKgError === -1) {
        setPesoKgError(0);
        console.log("No se puese enviar el formulario Peso");
      }
      if (esterilizadoError === 0 || esterilizadoError === -1) {
        setEsterilizadoError(0);
        console.log("No se puese enviar el formulario Esterilizado");
      }
      if (domicilioError === 0 || domicilioError === -1) {
        setDomicilioError(0);
        console.log("No se puese enviar el formulario Domicilio");
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header
        closeButton
        closeVariant="white"
        className={styleGeneral.bgColorPrincipal}
      >
        <Modal.Title className="text-white">Editar Mascota</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styleGeneral.bgColorFondo}>
        <Form id="form-agregar-mascota" onSubmit={handleSubmit}>
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
            <Form.Control
              type="text"
              id="nombre"
              placeholder="Ingrese el nombre"
              minLength="3"
              maxLength="25"
              value={mascotaDatos.nombre}
              required
              className={validarEstilo(nombreError)}
              onChange={handleChangeNombre}
              onBlur={handleChangeNombre}
            />
            <div id="nombreError" className={`${validarMensaje(nombreError)}`}>
              Nombre{" "}
              {nombreError === 1
                ? " válido."
                : " invalido debe tener minimo 3 caracteres."}
            </div>
          </Form.Group>

          <div className="d-flex gap-2 w-100">
            <Form.Group className="mb-3 w-100">
              <Form.Label htmlFor="fecha-nacimiento" className="fw-bolder">
                Fecha de Nacimiento*
              </Form.Label>
              <Form.Control
                type="date"
                id="fecha-nacimiento"
                placeholder="Ingrese su Fecha de Nacimiento"
                min="1900-01-01"
                max="2024-12-31"
                value={mascotaDatos.fechaDeNacimiento}
                required
                className={validarEstilo(fechaDeNacimientoError)}
                onChange={handleFechaDeNacimiento}
                onBlur={handleFechaDeNacimiento}
              />
              <div
                id="fechaNacimientoError"
                className={`${validarMensaje(fechaDeNacimientoError)}`}
              >
                Fecha de nacimiento{" "}
                {fechaDeNacimientoError === 1 ? " válido." : " invalida."}
              </div>
            </Form.Group>

            <Form.Group className="mb-3 w-100">
              <Form.Label htmlFor="raza" className="fw-bolder">
                Raza*
              </Form.Label>
              <Form.Control
                type="text"
                id="raza"
                placeholder="Ingrese la raza"
                minLength="3"
                maxLength="25"
                value={mascotaDatos.raza}
                required
                className={validarEstilo(razaError)}
                onChange={handleChangeRaza}
                onBlur={handleChangeRaza}
              />
              <div id="razaError" className={`${validarMensaje(razaError)}`}>
                Raza{" "}
                {razaError === 1
                  ? " válida."
                  : " invalido debe tener minimo 3 caracteres."}
              </div>
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
                value="Canino"
                className="me-3"
                label={
                  <>
                    <i className="fa-solid fa-dog"></i> Canino
                  </>
                }
                checked={mascotaDatos.especie === "Canino"}
                onChange={handleChangeEspecie}
                onBlur={handleChangeEspecie}
              />
              <Form.Check
                inline
                type="radio"
                id="especieRadio2"
                name="especieRadioOptions"
                value="Felino"
                label={
                  <>
                    <i className="fa-solid fa-cat"></i> Felino
                  </>
                }
                checked={mascotaDatos.especie === "Felino"}
                onChange={handleChangeEspecie}
                onBlur={handleChangeEspecie}
              />
              <Form.Check
                inline
                type="radio"
                id="especieRadio3"
                name="especieRadioOptions"
                value="Otros"
                label={
                  <>
                    <i className="fa-solid fa-paw"></i> Otros
                  </>
                }
                checked={mascotaDatos.especie === "Otros"}
                onChange={handleChangeEspecie}
                onBlur={handleChangeEspecie}
              />
            </div>
            <div
              id="especieError"
              className={`${validarMensaje(especieError)}`}
            >
              Especie{" "}
              {especieError === 1 ? " válido." : " es un campo obligatorio."}
            </div>
          </Form.Group>

          <div className="d-flex gap-4">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder w-100">Sexo*</Form.Label>
              <div className="d-flex">
                <Form.Check
                  inline
                  type="radio"
                  id="sexoRadio1"
                  name="sexoRadioOptions"
                  value="Macho"
                  className="me-3"
                  label={
                    <>
                      <i className="fa-solid fa-mars iconoRadioMacho"></i> Macho
                    </>
                  }
                  checked={mascotaDatos.sexo === "Macho"}
                  onChange={handleChangeSexo}
                  onBlur={handleChangeSexo}
                  onFocus={handleChangeSexo}
                />
                <Form.Check
                  inline
                  type="radio"
                  id="sexoRadio2"
                  name="sexoRadioOptions"
                  value="Hembra"
                  label={
                    <>
                      <i className="fa-solid fa-venus iconoRadioHembra"></i>{" "}
                      Hembra
                    </>
                  }
                  checked={mascotaDatos.sexo === "Hembra"}
                  onChange={handleChangeSexo}
                  onBlur={handleChangeSexo}
                  onFocus={handleChangeSexo}
                />
              </div>
              <div id="sexoError" className={`${validarMensaje(sexoError)}`}>
                Sexo{" "}
                {sexoError === 1 ? " válido." : " es un campo obligatorio."}
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder w-100">
                Esterilizado/a*
              </Form.Label>
              <div className="d-flex">
                <Form.Check
                  inline
                  type="radio"
                  id="esterilizadoRadio1"
                  name="esterilizadoRadioOptions"
                  value="Si"
                  className="me-3"
                  label="Si"
                  checked={mascotaDatos.esterilizado === "Si"}
                  onChange={handleChangeEsterilizado}
                  onBlur={handleChangeEsterilizado}
                />
                <Form.Check
                  inline
                  type="radio"
                  id="esterilizadoRadio2"
                  name="esterilizadoRadioOptions"
                  value="No"
                  label="No"
                  checked={mascotaDatos.esterilizado === "No"}
                  onChange={handleChangeEsterilizado}
                  onBlur={handleChangeEsterilizado}
                />
              </div>
              <div
                id="esterilizadoError"
                className={`${validarMensaje(esterilizadoError)}`}
              >
                Esterilizado{" "}
                {esterilizadoError === 1
                  ? " válido."
                  : " es un campo obligatorio."}
              </div>
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
                placeholder="Ingrese el color de pelo"
                minLength="3"
                maxLength="25"
                value={mascotaDatos.colorDePelo}
                required
                className={validarEstilo(colorDePeloError)}
                onChange={handleChangeColorDePelo}
                onBlur={handleChangeColorDePelo}
              />
              <div
                id="colorError"
                className={`${validarMensaje(colorDePeloError)}`}
              >
                Color de pelo{" "}
                {colorDePeloError === 1
                  ? " válido."
                  : " invalido debe tener minimo 3 caracteres."}
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="peso" className="fw-bolder">
                Peso (kg)*
              </Form.Label>
              <Form.Control
                type="number"
                id="peso"
                placeholder="Ingrese el peso"
                min="0"
                max="10000"
                step="0.1"
                value={mascotaDatos.pesoKg}
                required
                className={validarEstilo(pesoKgError)}
                onChange={handleChangePesoKg}
                onBlur={handleChangePesoKg}
              />
              <div id="pesoError" className={`${validarMensaje(pesoKgError)}`}>
                Peso KG{" "}
                {pesoKgError === 1
                  ? " válido."
                  : " invalido debe tener positivo y no superar 100KG."}
              </div>
            </Form.Group>
          </div>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="domicilio" className="fw-bolder">
              Domicilio*
            </Form.Label>
            <Form.Control
              type="text"
              id="domicilio"
              placeholder="Ingrese el domicilio"
              minLength="3"
              maxLength="25"
              value={mascotaDatos.domicilio}
              required
              className={validarEstilo(domicilioError)}
              onChange={handleChangeDomicilio}
              onBlur={handleChangeDomicilio}
            />
            <div
              id="domicilioError"
              className={`${validarMensaje(domicilioError)}`}
            >
              Domicilio{" "}
              {domicilioError === 1
                ? " válido."
                : " invalido debe tener minimo 10 caracteres."}
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="observaciones" className="fw-bolder">
              Observaciones
            </Form.Label>
            <Form.Control
              as="textarea"
              id="observaciones"
              placeholder="Ingrese observaciones"
              style={{ height: "100px" }}
              value={mascotaDatos.observaciones}
              className={validarEstilo(observacionesError)}
              onChange={handleChangeObservaciones}
            />
            <div
              id="observacionesError"
              className={`${validarMensaje(observacionesError)}`}
            >
              Observaciones{" "}
              {observacionesError === 1
                ? " válido."
                : " invalido debe tener minimo 10 caracteres."}
            </div>
          </Form.Group>

          <Form.Text className="mb-3 fw-bolder">
            <p>Campos obligatorios*</p>
          </Form.Text>

          <div className="d-flex align-items-center justify-content-center">
            <Button
              type="submit"
              className={`${styleGeneral.btnPersonalized2} mx-1 fw-bold`}
              aria-label="Agregar"
            >
              Agregar
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
