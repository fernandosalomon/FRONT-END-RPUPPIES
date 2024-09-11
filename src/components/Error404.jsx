import { Link } from "react-router-dom";
import imagenCartel404 from "../assets/img/error-404-cartel.png";
import imagen404 from "../assets/img/error-404.png";
import { Button } from "react-bootstrap";

const Error404 = () => {
  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center flex-column py-4">
        <div className="container-fluid d-flex align-items-center justify-content-center">
          <h1 className="text-center me-3">Error</h1>
          <img
            src={imagenCartel404}
            alt="error-404"
            style={{ width: "60px", height: "60px" }}
          />
        </div>
        <img
          className="m-4"
          src={imagen404}
          alt="error-404"
          style={{ width: "200px", height: "200px" }}
        />
        <Button as={Link} className="btn btnPersonalized1" to="/">
          Volver al inicio
        </Button>
      </div>
    </>
  );
};

export default Error404;
