import Axios from "axios";

const BaseURL = `http://localhost:8000/api/`

const axios = (url, dados) => {
    return dados ? Axios.post(`${BaseURL}${url}`,dados) 
    : Axios(`${BaseURL}${url}`)
}

const API = {
    async cadastrar_usuario(dados){
        const response = await axios('/cadastrar_user',dados)
        return response.data
    },
    async mostrar_foto(dados){
        const response = await axios('/mostar_foto',dados)
        return response.data
    }
}

export default API