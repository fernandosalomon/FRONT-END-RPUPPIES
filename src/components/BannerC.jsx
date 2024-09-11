import { Link } from "react-router-dom";
import "../css/BannerC.css";
import { Button } from "react-bootstrap";

const BannerC = () => {
  return (
    <>
      <div className="banner-wrapper">
        <div className="background-landing">
          <div className="banner-text-wrapper">
            <h2 className="banner-title">Rolling Puppies</h2>
            <p className="banner-text">
              Tenemos el compromiso de brindarles a tí y a tus mascotas el mejor
              cuidado posible.
            </p>
            <div className="banner-btn">
              <Button className="btn-1" as={Link} to="/acerca-nosotros">
                Saber más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerC;
