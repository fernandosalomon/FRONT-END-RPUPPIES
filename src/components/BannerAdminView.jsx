import React from "react";
import { Button } from "react-bootstrap";
import "../index.css";
import axios from "axios";
import { Link } from "react-router-dom";

const BannerAdminView = () => {
  return (
    <>
      <div className="container d-flex flex-column w-100 my-5 fontPage justify-content-between align-items-center h-100">
        <div className="container d-flex justify-content-center align-items-center flex-column mx-100">
          <h3 className="conatainer fs-1">Bienvenido a Rolling Puppies</h3>
        </div>
        <div className="mt-5 d-flex justify-content-between align-items-center w-50">
          <>
            {location.pathname === "/administrador" && (
              <div className="d-flex justify-content-around align-items-center w-100">
                <Link
                  to="/administrador/turnos"
                  className="bgColorPrincipal text-decoration-none text-white fs-1 p-3 rounded"
                >
                  Turnos
                </Link>
                <Link
                  to="/administrador/turnos"
                  className="bgColorPrincipal text-decoration-none text-white fs-1 p-3 rounded"
                >
                  Usuarios
                </Link>
              </div>
            )}
          </>
          <>
            {location.pathname === "/administrador/turnos" && (
              <Button className="btnPersonalized4 container d-flex align-items-center justify-content-center">
                Agregar Turno
              </Button>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default BannerAdminView;
