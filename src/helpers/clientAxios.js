import axios from "axios";

const clienteAxios = axios.create({
  baseURL: `https://back-end-rpuppies.vercel.app/api`,
});

export default clienteAxios;
