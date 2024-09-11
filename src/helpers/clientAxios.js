import axios from "axios";

const clienteAxios = axios.create({
  baseURL: `back-end-rpuppies.vercel.app/api`,
});

export default clienteAxios;
