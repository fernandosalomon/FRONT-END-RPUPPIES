import TableC from "../components/TableC";
import { Container } from "react-bootstrap";

const AdministradorUsuarios = () => {
  return (
    <>
      <Container className="m-auto">
        <TableC tableID={"users"} rowsPerPage={4} />
      </Container>
    </>
  );
};

export default AdministradorUsuarios;
