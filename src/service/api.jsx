import axios from "axios";

const URL = 'https://pruebasnode-production.up.railway.app';


export const addUsuario = async (valores) => {
    await axios.post(`${URL}/add`,valores)
};