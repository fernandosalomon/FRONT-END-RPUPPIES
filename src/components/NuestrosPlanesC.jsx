import { useEffect, useState } from "react";
import CardC from "./CardC";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../css/NuestrosPlanesC.css";
import { Link } from "react-router-dom";

const NuestrosPlanesC = () => {
  const [listaPlanes, setListaPlanes] = useState([]);
  const planesDisponibles = [
    {
      image:
        "https://images.ctfassets.net/sfnkq8lmu5d7/4Ma58uke8SXDQLWYefWiIt/3f1945422ea07ea6520c7aae39180101/2021-11-24_Singleton_Puppy_Syndrome_One_Puppy_Litter.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg",
      title: "Primeros Pasos",
      bodyContent:
        "Plan para mascotas de 0 a 5 años pensado para lograr un desarrollo saludable de tu mascota.",
      buttonContent: "Solicitar asesoramiento",
    },
    {
      image:
        "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
      title: "Madurando",
      bodyContent:
        "Plan para mascotas de 5 a 10 años que ofrece un cuidado integral para mantener la vitalidad de tu mascota en la adultez.",
      buttonContent: "Solicitar asesoramiento",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWVTPWrRAOPtUXFG3Lm7_Yytjr2DHyXdERsw&s",
      title: "Adultos",
      bodyContent:
        "Plan para mascotas mayores de 10 años para que tu mascota tenga una vida saludable y prolongada.",
      buttonContent: "Solicitar asesoramiento",
    },
  ];

  useEffect(() => {
    setListaPlanes(planesDisponibles);
    console.log(listaPlanes);
  }, []);

  return (
    <>
      <Container className="bg-color-fondo pb-5">
        <h2 className="text-montserrat fs-1 text-center py-5">
          Nuestros Planes
        </h2>
        <Row className="d-flex justify-content-center align-items-center gy-3">
          {listaPlanes.map((plan) => (
            <Col xs={12} md={6} lg={4} key={plan.title}>
              <CardC
                cardID="nuestrosPlanes"
                image={plan.image}
                title={plan.title}
                body={plan.bodyContent}
                buttonText={plan.buttonContent}
              />
            </Col>
          ))}
          <Col className="d-flex justify-content-center">
            <Button
              className="btn btn-1 w-75 mt-2"
              as={Link}
              to="/nuestros-planes"
            >
              Conocer más
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NuestrosPlanesC;
