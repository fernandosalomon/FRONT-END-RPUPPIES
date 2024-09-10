import { Row, Col, Image, Container } from "react-bootstrap";
import imgLogo from "../assets/img/rolling_puppies_logo.png";
import { Link } from "react-router-dom";
import "../css/FooterC.css";

//PARA EL MODAL: PONERLO DONDE CORRESPONDA
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../css/ModalTurnos.css";

const FooterC = () => {
  //PARA EL MODAL: PONERLO DONDE CORRESPONDA
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid className="mt-auto pt-3 bgColorPrincipal">
        <Row>
          <Col
            xs={12}
            md={12}
            lg={3}
            xl={2}
            className="d-flex justify-content-lg-end justify-content-center align-items-center p-0"
          >
            <Image src={imgLogo} className="logo--img__footer" />
          </Col>
          <Col
            xs={12}
            md={8}
            lg={5}
            xl={5}
            className="ps-5 p-0 d-flex gap-5 pb-3"
          >
            <div>
              <h3 className="text-white">Servicios</h3>
              <ul className="list-group ">
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link text-white">Consultorio</Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link text-white">Internación</Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link text-white">Laboratorio</Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link text-white">Imagenología</Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link text-white">Cirugias</Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link text-white">Microchip</Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link text-white">Guardia</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white">Información</h3>
              <ul className="list-group">
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link text-white">
                    Acerca de nosotros
                  </Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link text-white">
                    Trabaja con nosotros
                  </Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link text-white">Adopciones</Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link text-white">Blog</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            lg={4}
            xl={5}
            className="p-0 d-flex align-items-center justify-content-center gap-3"
          >
            <div className="map--container__footer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1060679494326!2d-65.20974192408053!3d-26.836578490027872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1724506440040!5m2!1ses-419!2sar"
                height={200}
                width={250}
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <div className="d-flex flex-column gap-1 mt-4 mb-3">
                <div className="direccion d-flex align-items-baseline gap-2">
                  <i className="bi bi-geo-alt-fill fs-4 text-white"></i>
                  <p className="fs-5 m-0 text-white">Calle Falsa 123</p>
                </div>
                <div className="telefono d-flex align-items-baseline gap-2">
                  <i className="bi bi-telephone-fill fs-4 text-white"></i>
                  <p className="fs-5 m-0 text-white">555-123425</p>
                </div>
                <div className="direccion d-flex align-items-baseline gap-2">
                  <i className="bi bi bi-clock-fill fs-4 text-white"></i>
                  <p className="fs-5 m-0 text-white">8:00 a 20:00</p>
                </div>
                <div className="mt-3">
                  <button className="btn-1" onClick={handleShow}>
                    Reservar Turno
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} className="border-top border-3 py-3 bg-offwhite">
            <Container fluid className="mx-lg-0 d-flex flex-wrap">
              <div className="bottom--info__footer">
                <p className="m-0 ms-sm-2 text-center text-sm-start">
                  Todos los derechos reservados
                </p>
                <p className="m-0 ms-sm-2 text-center text-sm-start">
                  @Comunidad-RollingPuppies
                </p>
              </div>
              <div className="flex-grow-1 d-flex align-items-center gap-3 justify-content-sm-end justify-content-center">
                <p className="fs-4 fw-bold m-0">Seguinos</p>
                <div className="social d-flex justify-content-start gap-3 ">
                  <Link to="https://facebook.com" className="nav-link">
                    <i className="bi bi-facebook fs-5"></i>
                  </Link>
                  <Link to="https://x.com" className="nav-link">
                    <i className="bi bi-twitter-x fs-5"></i>
                  </Link>
                  <Link to="https://instagram.com" className="nav-link">
                    <i className="bi bi-instagram fs-5"></i>
                  </Link>
                  <Link to="https://youtube.com" className="nav-link">
                    <i className="bi bi-youtube fs-5"></i>
                  </Link>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          closeVariant="white"
          className="bgColorPrincipal text-white"
        >
          <Modal.Title>Editar/Agregar Turno</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bgColorFondo">
          <Form>
            <Container>
              <Row className="align-items-center">
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="fechaTurno">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date" aria-label="Date" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="horaTurno">
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="time" aria-label="Time" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="veterinarioTurno">
                    <Form.Label>Veterinario</Form.Label>
                    <Form.Select aria-label="seleccionar-veterinario">
                      <option>Elija al veterinario</option>
                      <option value="1">Fernando Salomón</option>
                      <option value="2">Maximiliano Soriano</option>
                      <option value="3">Marcos Bazán</option>
                      <option value="4">Lisandro Contreras </option>
                      <option value="5">Gonzalo Mainardi</option>
                      <option value="6">Cualquiera</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="mascotaTurno">
                    <Form.Label>Elija a su Mascota</Form.Label>
                    <Form.Select aria-label="seleccionar-mascota">
                      <option>Elija a su mascota</option>
                      <option value="1">Mascota 1</option>
                      <option value="2">Mascota 2</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col
                  lg={12}
                  className="d-flex justify-content-center gap-3 mb-3"
                >
                  <div className="img-container__modalTurnos">
                    <Image src="https://static.vecteezy.com/system/resources/previews/005/520/216/non_2x/cartoon-drawing-of-a-veterinarian-vector.jpg"></Image>
                  </div>
                  <div className="img-container__modalTurnos">
                    <Image src="https://img.freepik.com/vector-premium/diseno-logotipo-dibujos-animados-mascota-perro-lindo-estilo-diseno-plano_203040-109.jpg"></Image>
                  </div>
                </Col>

                <Col lg={12} className="mt-3">
                  <div className="d-flex justify-content-center gap-4">
                    <Button variant="primary" type="submit">
                      Guardar Turno
                    </Button>
                    <Button variant="danger">Cancelar</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FooterC;
