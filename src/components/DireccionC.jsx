import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const DireccionC = () => {
  return (
    <>
      <Container fluid className="bg-color-fondo p-0" data-aos="fade-down">
        <Row className="p-0">
          <Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 1 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1060679494326!2d-65.20974192408053!3d-26.836578490027872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1724506440040!5m2!1ses-419!2sar"
              height="300"
              style={{ border: 0, width: "100%", height: "100%" }}
              loading="lazy"
            ></iframe>
          </Col>
          <Col xs={{ span: 12, order: 0 }} md={{ span: 5, order: 2 }}>
            <h2 className="fs-1 text-center mt-3 text-white">
              Rolling Puppies
            </h2>
            <div className="social d-flex justify-content-center gap-3">
              <Link to="https://facebook.com" className="nav-link text-white">
                <i className="bi bi-facebook fs-2"></i>
              </Link>
              <Link to="https://x.com" className="nav-link text-white">
                <i className="bi bi-twitter-x fs-2"></i>
              </Link>
              <Link to="https://instagram.com" className="nav-link text-white">
                <i className="bi bi-instagram fs-2"></i>
              </Link>
              <Link to="https://youtube.com" className="nav-link text-white">
                <i className="bi bi-youtube fs-2"></i>
              </Link>
            </div>
            <div className="d-flex flex-column gap-1 mt-4 ms-4 mb-3">
              <div className="direccion d-flex align-items-baseline gap-2 text-white">
                <i className="bi bi-geo-alt-fill fs-4"></i>
                <p className="fs-5 m-0">Calle Falsa 123</p>
              </div>
              <div className="telefono d-flex align-items-baseline gap-2 text-white">
                <i className="bi bi-telephone-fill fs-4"></i>
                <p className="fs-5 m-0">555-123425</p>
              </div>
              <div className="direccion d-flex align-items-baseline gap-2 text-white">
                <i className="bi bi bi-clock-fill fs-4"></i>
                <p className="fs-5 m-0">8:00 a 20:00</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DireccionC;
