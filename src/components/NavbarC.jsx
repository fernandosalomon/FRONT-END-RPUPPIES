import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import imgLogo from "../assets/img/rolling_puppies_logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalIniciarSesion from "./ModalIniciarSesion";
import ModalRegistrarse from "./ModalRegistrarse";
import ModalEditarPerfil from "./ModalEditarPerfil";

const NavbarC = () => {
  const [userRole, setUserRole] = useState();
  const [userLogged, setUserLogged] = useState();

  const [showModalIniciarSesion, setShowModalIniciarSesion] = useState(false);

  const handleOpenModalIniciarSesion = () => setShowModalIniciarSesion(true);
  const handleCloseModalIniciarSesion = () => setShowModalIniciarSesion(false);

  const [showModalRegistrarse, setShowModalRegistrarse] = useState(false);
  const handleOpenModalRegistrarse = () => setShowModalRegistrarse(true);
  const handleCloseModalRegistrarse = () => setShowModalRegistrarse(false);

  const [showModalEditarPerfil, setShowModalEditarPerfil] = useState(false);
  const handleOpenModalEditarPerfil = () => setShowModalEditarPerfil(true);
  const handleCloseModalEditarPerfil = () => setShowModalEditarPerfil(false);

  //###################### PARA PROBAR - ELIMINAR CUANDO AGREGUEMOS TODA LA LOGICA ##########################
  useEffect(() => {
    setUserRole("user");
    setUserLogged(false);
  }, []);
  //##########################################################################################################

  return (
    <>
      <Navbar expand="lg" className="sticky-top bgColorPrincipal text-poppins p-0">
        <Container fluid>
          <Navbar.Brand className="me-5" href="#home">
            <Image src={imgLogo} width={130} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {userRole === "admin" ? (
              <>
                <Nav className="me-auto d-flex gap-4">
                  <Link className="nav-link fw-medium text-white" href="#home">
                    Usuarios
                  </Link>
                  <Link className="nav-link fw-medium text-white" href="#link">
                    Administrar Turnos
                  </Link>
                </Nav>
              </>
            ) : (
              <>
                <Nav className="me-auto d-flex gap-4">
                  <Link to="#" className="nav-link fw-medium text-white">
                    Nosotros
                  </Link>
                  <Link to="#" className="nav-link fw-medium text-white">
                    Servicios
                  </Link>
                  <Link to="#" className="nav-link fw-medium text-white">
                    Planes
                  </Link>
                  <Link to="#" className="nav-link fw-medium text-white">
                    Contacto
                  </Link>
                </Nav>
              </>
            )}

            <Nav className="ms-auto">
              {userLogged && (
                <>
                  <Link to="#" className="nav-link">
                    <i class="bi bi-bag fs-1 me-2"></i>
                  </Link>
                  <Link to="#" className="nav-link">
                    <i class="bi bi-calendar-event fs-1 me-2"></i>
                  </Link>
                </>
              )}
              {userLogged ? (
                <>
                  <Link to="#" className="nav-link">
                    <i class="bi bi-person-circle fs-1 me-2"></i>
                  </Link>
                </>
              ) : (
                <>
                  <div className="d-flex gap-2">
                    <button className="btn-1" onClick={handleOpenModalIniciarSesion}>Iniciar Sesión</button>
                    <ModalIniciarSesion show={showModalIniciarSesion} handleClose={handleCloseModalIniciarSesion}/>
                    <button className="btn-1" onClick={handleOpenModalRegistrarse}>Registrarse</button>
                    <ModalRegistrarse show={showModalRegistrarse} handleClose={handleCloseModalRegistrarse}/>
                    <button className="btn-1" onClick={handleOpenModalEditarPerfil}>Editar Perfil</button>
                    <ModalEditarPerfil show={showModalEditarPerfil} handleClose={handleCloseModalEditarPerfil} />
                  </div>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
