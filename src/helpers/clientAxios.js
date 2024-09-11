import axios from "axios";

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.URL_BACK_LOCAL}`
})

export default clienteAxios
