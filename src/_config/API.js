import Axios from "axios";

const BaseURL = `http://localhost:8000/api`

const axios = (url, dados) => {
    return dados ? Axios.post(`${BaseURL}${url}`,dados) 
    : Axios(`${BaseURL}${url}`)
}

const API = {
    async cadastrar_usuario(dados){
        const response = await axios('/cadastrar_usuario',dados)
        return response.data
    },
    async selecionar_usuarios(){
        const response = await axios('/selecionar_usuarios')
        return response.data
    },
    async mostrar_foto(dados){
        const response = await axios('/mostrar_foto',dados)
        return response.data
    },
    async verificar_login(dados){
        const response = await axios('/verificar_login',dados)
        return response.data
    },
    async add_produto(dados){
        const response = await axios('/add_produto',dados)
        return response.data
    },
    async selecionar_produtos(){
        const response = await axios('/selecionar_produtos')
        return response.data
    },
    async selecionar_produto(dados){
        const response = await axios('/selecionar_produto',dados)
        return response.data
    },
    async deletar_produto(dados){
        const response = await axios('/deletar_produto',dados)
        return response.data
    },
    async editar_produto(dados){
        const response = await axios('/editar_produto',dados)
        return response.data
    },
    async reagir_produto(dados){
        const response = await axios('/reagir_produto',dados)
        return response.data
    },
    async selecionar_reacoes(){
        const response = await axios('/selecionar_reacoes')
        return response.data
    },
    async selecionar_reacoes_produto(dados){
        const response = await axios('/selecionar_reacoes_produto',dados)
        return response.data
    },
    async selecionar_produtos_adorados(dados){
        const response = await axios('/selecionar_produtos_adorados',dados)
        return response.data
    },
    async selecionar_encomendas(){
        const response = await axios('/selecionar_encomendas')
        return response.data
    },
    async add_encomenda(dados){
        const response = await axios('/add_encomenda',dados)
        return response.data
    },
    async selecionar_encomendas_usuario(dados){
        const response = await axios('/selecionar_encomendas_usuario',dados)
        return response.data
    },
    async selecionar_produtos_encomendados(dados){
        const response = await axios('/selecionar_produtos_encomendados',dados)
        return response.data
    },
    async eliminar_encomenda(dados){
        const response = await axios('/eliminar_encomenda',dados)
        return response.data
    },
    async desrreagir_produto(dados){
        const response = await axios('/desrreagir_produto',dados)
        return response.data
    },
    async cadastrar_admin(dados){
        const response = await axios('/cadastrar_admin',dados)
        return response.data
    },
    async verificar_login_admin(dados){
        const response = await axios('/verificar_login_admin',dados)
        return response.data
    },
    async selecionar_admins(){
        const response = await axios('/selecionar_admins')
        return response.data
    }
}

export default API