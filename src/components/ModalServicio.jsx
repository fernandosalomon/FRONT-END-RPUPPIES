import styleGeneral from '../../src/index.module.css';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalServicio = () => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton closeVariant="white" className={styleGeneral.bgColorPrincipal}>
                <Modal.Title className="text-white">Agregar Servicio</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styleGeneral.bgColorFondo}>
                <Form id="form-editar-">
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="fotoServicio" className="fw-bolder">
                    Subir foto
                    </Form.Label>
                    <Form.Control type="file" id="fotoServicio" className={styleGeneral.bgInput} />
                    <div id="fotoMascotaError" className="text-danger"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="nombre" className="fw-bolder">
                    Titulo
                    </Form.Label>
                    <Form.Control
                    type="text"
                    id="titulo"
                    placeholder="Ingrese el titulo"
                    minLength="3"
                    maxLength="25"
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="tituloError" className="text-danger"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="descripcion" className="fw-bolder">
                    Descripción
                    </Form.Label>
                    <Form.Control
                    as="textarea"
                    id="descripcion"
                    placeholder="Ingrese descripción"
                    style={{ height: '100px' }}
                    className={styleGeneral.bgInput}
                    />
                    <div id="descripcionError" className="text-danger"></div>
                </Form.Group>

                <div className="d-flex align-items-center justify-content-center">
                    <Button
                    type="submit"
                    className={`${styleGeneral.btnPersonalized2} mx-1 fw-bold`}
                    aria-label="Guardar"
                    >
                    Guardar
                    </Button>
                    <Button
                    type="reset"
                    className={`${styleGeneral.btnPersonalized1} mx-1 fw-bold`}
                    aria-label="Cancelar"
                    >
                    Cancelar
                    </Button>
                </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalServicio
