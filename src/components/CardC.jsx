import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardC = ({ cardID, image, title, body, buttonText }) => {
  return (
    <>
      <Card
        className={
          cardID === "testimonials"
            ? "card--wrapper__testimonials"
            : cardID === "nuestrosPlanes"
            ? "card--wrapper__nuestrosPlanes"
            : ""
        }
      >
        <Card.Body
          className={
            cardID === "testimonials"
              ? "card--body-wrapper__testimonials"
              : cardID === "nuestrosPlanes"
              ? "card--body-wrapper__nuestrosPlanes"
              : ""
          }
        >
          <Container
            className={
              cardID === "testimonials"
                ? "card--img__testimonials"
                : cardID === "nuestrosPlanes"
                ? "card--img__nuestrosPlanes"
                : ""
            }
          >
            <Card.Img src={image} />
          </Container>
          <Card.Title
            className={
              cardID === "testimonials"
                ? "card--title__testimonials"
                : cardID === "nuestrosPlanes"
                ? "card--title__nuestrosPlanes"
                : ""
            }
          >
            {title}
          </Card.Title>
          <Container>
            <Card.Text
              className={
                cardID === "testimonials"
                  ? "card--body__testimonials"
                  : cardID === "nuestrosPlanes"
                  ? "card--description__nuestrosPlanes"
                  : ""
              }
            >
              {cardID === "testimonials" && (
                <div className="testimonial--quotes">
                  <i className="bi bi-quote"></i>
                </div>
              )}
              {body}
            </Card.Text>
            {cardID === "testimonials" && (
              <div className="chat--wrapper">
                <div className="testimonial-triangle"></div>
              </div>
            )}
          </Container>
          <Container className="d-flex justify-content-center">
            {cardID !== "testimonials" && cardID !== "nuestrosPlanes" && (
              <Button>{buttonText}</Button>
            )}
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardC;
