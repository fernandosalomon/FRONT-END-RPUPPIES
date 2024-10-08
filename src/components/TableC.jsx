import "../css/CustomTable.css";
import { useState, useEffect, useCallback } from "react";
import useTable from "../hooks/useTable";
import { Modal, Button, Accordion, Form, InputGroup } from "react-bootstrap";
import clientAxios from "../helpers/clientAxios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const TableSearchBar = ({ data, handleData, columns }) => {
  const [searchValue, setSearchValue] = useState("");
  const [dataColumns, setDataColumns] = useState([]);
  const [searchParam, setSearchParam] = useState(columns[0]);

  const handleSearchParam = (e) => {
    setSearchParam(e.target.value);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setDataColumns(columns);
  }, [columns]);

  useEffect(() => {
    if (searchParam !== "" && searchParam !== undefined) {
      const filterData = data.filter((row) =>
        row[searchParam].includes(searchValue)
      );
      handleData(filterData);
    } else {
      setSearchParam(columns[0]);
    }
  }, [searchValue, searchParam]);

  return (
    <>
      <Form className="searchbar-wrapper">
        <InputGroup className="mb-3 d-flex">
          <InputGroup.Text id="TableSearchBar">
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <Form.Control
            aria-label="Searchbar"
            aria-describedby="Searchbar"
            onChange={handleChange}
            className="flex-grow-1"
          />
          <Form.Select
            onChange={handleSearchParam}
            className="searchbar-select"
          >
            <option value={dataColumns[1]}>Buscar por...</option>
            {dataColumns.map((dataColumnName) => (
              <option
                key={dataColumnName}
                value={dataColumnName}
                className="searchbar-select__option"
              >
                {dataColumnName}
              </option>
            ))}
          </Form.Select>
        </InputGroup>
      </Form>
    </>
  );
};

const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className="tableFooter">
      {range.map((el, index) => (
        <button
          key={index}
          className={
            page === el ? " button activeButton" : "button inactiveButton"
          }
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

const TableC = ({ tableID, data, columns, rowsPerPage }) => {
  const [tableData, setTableData] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showEditarPerfil, setShowEditarPerfil] = useState(false);
  const [formData, setFormData] = useState({});

  //USER

  const [userData, setUserData] = useState([]);
  const [pending, setPending] = useState(true);

  const handleShowEditarPerfil = (data) => {
    setShowEditarPerfil(true);
    setFormData({
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      telefono: data.telefono,
      rol: data.rol,
      _id: data._id,
    });
  };

  useEffect(() => {
    reset({
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      telefono: formData.telefono,
      rol: formData.rol,
    });
  }, [formData]);

  const handleCloseEditarPerfil = () => setShowEditarPerfil(false);

  //CRUD

  const deshabilitarUsuario = async (userID, is_bloqueado) => {
    Swal.fire({
      icon: "question",
      title: `Estas seguro que deseas ${
        is_bloqueado ? "habilitar" : "deshabilitar"
      } al usuario?`,
      showCancelButton: true,
      confirmButtonText: `${is_bloqueado ? "Habilitar" : "Deshabilitar"}`,
    }).then((result) => {
      if (result.isConfirmed) {
        clientAxios
          .put(`/usuarios/${userID}`, {
            bloqueado: !is_bloqueado,
          })
          .catch((error) => {
            console.log(error);
          });
        Swal.fire({
          title: `${
            is_bloqueado
              ? "El usuario fue habilitado"
              : "El usuario fue dehabilitado"
          }`,
          showConfirmButton: false,
          timer: 1500,
          icon: "success",
        });
        console.log("HOLA");
        setTimeout(() => {
          navigate(0);
        }, 1500);
      }
    });
  };

  const eliminarUsuario = async (userID) => {
    Swal.fire({
      icon: "question",
      title: `Estas seguro que deseas eliminar a este usuario?`,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("El usuario fue eliminado", "", "success");
        clientAxios.delete(`/usuarios/${userID}`).catch((error) => {
          console.log(error);
        });
      }
    });
  };

  const getUsers = async () => {
    try {
      const response = await clientAxios.get("/usuarios/");
      await setUserData(response.data);
      await setPending(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setTableData(userData);
    setTableColumns(["nombre", "apellido", "email", "telefono", "rol"]);
  }, [userData]);

  const [page, setPage] = useState(1);
  const { slice, range } = useTable(tableData, page, rowsPerPage);

  const handleTableData = useCallback((data) => {
    setTableData(data);
  });

  // ZOD

  const userSchema = z.object({
    nombre: z
      .string({ message: "Formato de nombre invalido" })
      .max(25, { message: "Máximo permitido: 25 caracteres" })
      .min(1, { message: "Campo requerido" }),
    apellido: z
      .string({ message: "Formato de apellido invalido" })
      .max(25, { message: "Máximo permitido: 25 caracteres" })
      .min(1, { message: "Campo requerido" }),
    email: z
      .string({ message: "Formato de email invalido" })
      .email({ message: "Formato de email invalido" }),
    telefono: z
      .string()
      .min(7, { message: "Mínimo requerido: 7 dígitos" })
      .max(10, { message: "Máximo permitido: 10 dígitos" }),
    rol: z.enum(["user", "admin"], {
      message: "Solo los tipos 'user' y 'admin' estan permitidos",
    }),
  });

  //REACT HOOK FORM
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (e) => {
    try {
      const response = await clientAxios.put(`/usuarios/${formData._id}`, e);
      if (response.status === 200) {
        Swal.fire({
          title: "Los datos se actualizaron con exito",
          text: "Los datos del usuario se actualizaron correctamente",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Hubo un problema",
          text: `Error ${response.status}: No se pudieron actualizar los datos del usuario`,
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Hubo un problema",
        text: `${error}`,
        icon: "error",
      });
    }
    setShowEditarPerfil(false);
    navigate(0);
  };

  return (
    <>
      <TableSearchBar
        handleData={handleTableData}
        data={userData}
        columns={tableColumns}
      />
      <table className="table">
        {windowWidth < 726 ? (
          <>
            <tbody>
              {slice.map((el) => (
                <tr className="tableRowItems" key={el._id}>
                  <td className="tableCell">
                    <Accordion flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="d-flex gap-2 align-items-center w-100 justify-content-between">
                            <div className="accordion-title d-flex align-items-center">
                              <p className="fs-3 mb-0 me-2">+</p>
                              {tableID === "users"
                                ? el[tableColumns[0]] +
                                  " " +
                                  el[tableColumns[1]]
                                : el[tableColumns[0]]}
                            </div>
                            <div className="d-flex gap-2 me-2 z-3">
                              <button
                                className="btnPersonalized3 fs-5"
                                onClick={() => {
                                  handleShowEditarPerfil(el);
                                }}
                              >
                                <i className="bi bi-pencil-square"></i>
                              </button>

                              <button
                                className="btn btn-warning fs-5"
                                onClick={() => {
                                  deshabilitarUsuario(el._id, el.bloqueado);
                                }}
                              >
                                {el.bloqueado ? (
                                  <i className="bi bi-ban"></i>
                                ) : (
                                  <i className="bi bi-check-lg"></i>
                                )}
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  eliminarUsuario(el._id);
                                }}
                              >
                                <i className="bi bi-trash fs-4"></i>
                              </button>
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div>
                            {tableColumns.map((columnName) => (
                              <>
                                <p style={{ fontSize: "1rem" }}>
                                  <span
                                    className="text-capitalize fw-bold"
                                    style={{ fontSize: "1rem" }}
                                  >
                                    {columnName}:{" "}
                                  </span>
                                  {el[columnName]}
                                </p>
                              </>
                            ))}
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        ) : (
          <>
            <thead className="tableRowHeader">
              <tr>
                {tableColumns.map((columnName) => (
                  <th className="tableHeader text-capitalize" key={columnName}>
                    {columnName}
                  </th>
                ))}
                <th className="tableHeader text-capitalize">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {slice.map((el) => (
                <tr className="tableRowItems" key={el._id}>
                  {tableColumns.map((columnName) => (
                    <>
                      <td className="tableCell" key={columnName}>
                        {el[columnName]}
                      </td>
                    </>
                  ))}
                  <td className="tableCell">
                    {" "}
                    <div className="d-flex gap-2">
                      <button
                        className="btnPersonalized3"
                        style={{ fontSize: "1rem" }}
                        onClick={() => {
                          handleShowEditarPerfil(el);
                        }}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>

                      <button
                        className="btn btn-warning btn-CRUD"
                        onClick={() => {
                          deshabilitarUsuario(el._id, el.bloqueado);
                        }}
                      >
                        {el.bloqueado ? (
                          <i className="bi bi-ban"></i>
                        ) : (
                          <i className="bi bi-check-lg"></i>
                        )}
                      </button>
                      <button
                        className="btn btn-danger btn-CRUD"
                        style={{ fontSize: "1rem" }}
                        onClick={() => {
                          eliminarUsuario(el._id);
                        }}
                      >
                        <i className="bi bi-trash fs-4"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      <Modal show={showEditarPerfil} onHide={handleCloseEditarPerfil} centered>
        <Modal.Header
          closeButton
          closeVariant="white"
          className="bgColorPrincipal"
        >
          <Modal.Title className="text-white">Editar Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bgColorFondo">
          <Form id="form-editar-perfil" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex gap-3">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="nombreEditar" className="fw-bolder">
                  Nombre
                </Form.Label>
                <Form.Control
                  type="text"
                  id="nombreEditar"
                  minLength="3"
                  maxLength="25"
                  name="nombre"
                  className="bgInput"
                  {...register("nombre")}
                />
                {errors.nombre && (
                  <div className="text-danger">{errors.nombre.message}</div>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="apellidoEditar" className="fw-bolder">
                  Apellido
                </Form.Label>
                <Form.Control
                  type="text"
                  id="apellidoEditar"
                  minLength="3"
                  maxLength="25"
                  name="apellido"
                  required
                  className="bgInput"
                  {...register("apellido")}
                />
                {errors.apellido && (
                  <div className="text-danger">{errors.apellido.message}</div>
                )}
              </Form.Group>
            </div>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="emailEditar" className="fw-bolder">
                Email
              </Form.Label>
              <Form.Control
                type="email"
                id="emailEditar"
                minLength="8"
                maxLength="20"
                name="email"
                required
                className="bgInput"
                aria-describedby="emailHelp"
                {...register("email")}
              />
              {errors.email && (
                <div className="text-danger">{errors.email.message}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="telefonoEditar" className="fw-bolder">
                Teléfono
              </Form.Label>
              <Form.Control
                type="text"
                id="telefonoEditar"
                maxLength="10"
                name="telefono"
                required
                className="bgInput"
                {...register("telefono")}
              />
              {errors.telefono && (
                <div className="text-danger">{errors.telefono.message}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bolder">Rol</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="bgInput"
                name="rol"
                {...register("rol")}
              >
                <option value="user">user</option>
                <option value="admin">admin</option>
              </Form.Select>
              {errors.rol && (
                <div className="text-danger">{errors.rol.message}</div>
              )}
            </Form.Group>

            <div className="d-flex align-items-center justify-content-center">
              <Button
                type="submit"
                id="botonGuardarCambios"
                className="btnPersonalized2 mx-1 fw-bold"
                aria-label="Guardar cambios"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Guardando cambios..." : "Guardar cambios"}
              </Button>
              <Button
                type="button"
                className="btnPersonalized1 mx-1 fw-bold"
                aria-label="Cancelar"
                onClick={handleCloseEditarPerfil}
              >
                Cancelar
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TableC;
