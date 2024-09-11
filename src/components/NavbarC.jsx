import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Dropdown, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import imgLogo from "../assets/img/rolling_puppies_logo.png";
import logoDespedida from "../assets/img/logoDespedida.jpg";
import Swal from "sweetalert2";
import ModalIniciarSesion from "./ModalIniciarSesion";
import ModalRegistrarse from "./ModalRegistrarse";
import ModalEditarPerfil from "./ModalEditarPerfil";
import "../css/NavbarC.css";

const NavbarC = ({ isLogged, handleIsLogged }) => {
  const [userRole, setUserRole] = useState();
  const [userLogged, setUserLogged] = useState();
  const navigate = useNavigate();

  //CONTROLADORES DE MODALES
  const [showModalIniciarSesion, setShowModalIniciarSesion] = useState(false);
  const handleOpenModalIniciarSesion = () => setShowModalIniciarSesion(true);
  const handleCloseModalIniciarSesion = () => setShowModalIniciarSesion(false);

  const [showModalRegistrarse, setShowModalRegistrarse] = useState(false);
  const handleOpenModalRegistrarse = () => setShowModalRegistrarse(true);
  const handleCloseModalRegistrarse = () => setShowModalRegistrarse(false);

  const [showModalEditarPerfil, setShowModalEditarPerfil] = useState(false);
  const handleOpenModalEditarPerfil = () => setShowModalEditarPerfil(true);
  const handleCloseModalEditarPerfil = () => setShowModalEditarPerfil(false);

  const handleLogIn = useCallback(
    (isLogged) => {
      setUserLogged(isLogged);
      setUserRole(sessionStorage.getItem("userRole"));
      handleIsLogged(isLogged);
    },
    [isLogged]
  );

  useEffect(() => {
    if (sessionStorage.getItem("userRole")) {
      setUserRole(sessionStorage.getItem("userRole"));
    }
    const userToken = sessionStorage.getItem("userToken") || null;
    if (userToken) {
      setUserLogged(true);
    }
  }, []);

  const handleCloseSession = () => {
    sessionStorage.removeItem("userToken");
    sessionStorage.removeItem("userRole");
    setUserLogged(false);
    Swal.fire({
      imageUrl: logoDespedida,
      imageHeight: 300,
      imageAlt: "LogoDespedida",
      title: "Gracias por tu visita",
      showConfirmButton: false,
      timer: 2000,
    });
    handleLogIn(false);
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <Navbar expand="lg" className="bgColorPrincipal text-poppins p-0">
        <Container fluid className="p-0">
          <Navbar.Brand>
            <Link to="/" className="ms-2">
              <Image src={imgLogo} width={100} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="bgColorPrincipal p-0"
            id="basic-navbar-nav"
          >
            {userRole === "admin" ? (
              <>
                <Nav className="me-auto d-flex gap-4">
                  <Link
                    className="nav-link fw-medium text-white"
                    to="/administrador/usuarios"
                  >
                    Usuarios
                  </Link>
                  <Link
                    className="nav-link fw-medium text-white"
                    to="/administrador/turnos"
                  >
                    Administrar Turnos
                  </Link>
                </Nav>
              </>
            ) : (
              <>
                <Nav className="me-auto d-flex gap-4">
                  <Link
                    to="#"
                    className="nav-link fw-medium text-white text-center"
                  >
                    Nosotros
                  </Link>
                  <Link
                    to="nuestros-planes"
                    className="nav-link fw-medium text-white text-center"
                  >
                    Planes
                  </Link>
                  <Link
                    to="#"
                    className="nav-link fw-medium text-white text-center"
                  >
                    Contacto
                  </Link>
                </Nav>
              </>
            )}

            <Nav className="ms-auto">
              {userLogged ? (
                <div className="d-flex align-items-center me-5">
                  <Link to="#" className="nav-link">
                    <i className="bi bi-bag fs-1 me-2 text-white"></i>
                  </Link>
                  <Link to="#" className="nav-link">
                    <i className="bi bi-calendar-event fs-1 me-2 text-white"></i>
                  </Link>

                  <Dropdown className="ms-2">
                    <Dropdown.Toggle
                      className="bg-transparent border-0 p-0"
                      id="userOptions-dropdown"
                    >
                      <i className="bi bi-person-circle fs-1 me-2 text-white"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ right: 0, left: "-150px" }}
                      className="bgColorPrincipal custom-dropdown-item"
                    >
                      <Dropdown.Item
                        as={Button}
                        className="border-0 bg-transparent text-white p-0 fw-3 custom-dropdown-item"
                        onClick={handleOpenModalEditarPerfil}
                      >
                        Editar Perfil
                      </Dropdown.Item>
                      <Dropdown.Item
                        as={Link}
                        to="/mismascotas"
                        className="text-decoration-none text-white fw-3"
                      >
                        Mis mascotas
                      </Dropdown.Item>
                      <NavDropdown.Divider />
                      <Dropdown.Item
                        as={Button}
                        className="border-0 bg-transparent text-white p-0 fw-3 custom-dropdown-item"
                        onClick={handleCloseSession}
                      >
                        Cerrar Sesión
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : (
                <>
                  <div className="d-flex gap-2 justify-content-center py-3 me-3">
                    <button
                      className="btn-1"
                      onClick={handleOpenModalIniciarSesion}
                    >
                      Iniciar Sesión
                    </button>
                    <ModalIniciarSesion
                      show={showModalIniciarSesion}
                      handleClose={handleCloseModalIniciarSesion}
                      handleLogIn={handleLogIn}
                    />
                    <button
                      className="btn-1"
                      onClick={handleOpenModalRegistrarse}
                    >
                      Registrarse
                    </button>
                    <ModalRegistrarse
                      show={showModalRegistrarse}
                      handleClose={handleCloseModalRegistrarse}
                    />
                    <ModalEditarPerfil
                      show={showModalEditarPerfil}
                      handleClose={handleCloseModalEditarPerfil}
                    />
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
