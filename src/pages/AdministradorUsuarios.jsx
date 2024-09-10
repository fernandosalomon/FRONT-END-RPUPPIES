import { useEffect, useState } from "react";
import TableC from "../components/TableC";
import axios from "axios";

const AdministradorUsuarios = () => {
  return (
    <>
      <TableC tableID={"usuarios"} />
    </>
  );
};

export default AdministradorUsuarios;
