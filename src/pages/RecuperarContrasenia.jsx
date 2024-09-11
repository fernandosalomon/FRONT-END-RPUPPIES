import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const RecuperarContrasenia = () => {
  const location = useLocation();
  const [userID, setUserID] = useState(null);
  const [token, setToken] = useState(location.search.split("?")[1]);
  console.log(token);

  const client = axios.create({
    baseURL: "https://localhost:3001",
  });

  useEffect(() => {
    const verifyToken = async () => {
      await client
        .post(`/token`)
        .then((res) => {
          setUserID(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    verifyToken();
  }, []);

  if (!userID) {
    return (
      <>
        <Container className="w-50 main-container">
          <h2 className="text-center fs-1">Enlace Invalido</h2>
          <p className="text-center fs-3">Algo salio mal</p>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container className="w-50 main-container">
        <h2>Cambiar contraseña</h2>
        <Form>
          <Form.Group className="mb-3" controlId="changePassword">
            <Form.Label>Ingrese su nueva contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="changePasswordRepeat">
            <Form.Label>Repita su contraseña</Form.Label>
            <Form.Control type="password" placeholder="Repetir contraseña" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Actualizar contraseña
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default RecuperarContrasenia;
