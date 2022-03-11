/* eslint-disable no-throw-literal */
import React, { useState } from 'react'

import { Tooltip } from '@material-ui/core';
import Title from '../../../Components/TitleTooltip';
import Button from '../components/button';
import Cadastro from './cadastro';
import { Container } from './style'
import API from '../../../_config/API';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [Login, setLogin] = useState(true);
  const [Campos, setCampos] = useState({
    email: '',
    senha: ''
  });

  const handleChange = e => {
    const campo = e.target
    setCampos({
      ...Campos,
      [campo.name]: campo.value
    })
  } 

  const Logar = async e => {
    e.preventDefault()
    
    const FD = new FormData()

    try {
      if(Campos.email === '') throw 'E-mail está vazio'
      else if(Campos.senha === '') throw 'Senha está vazia'

      FD.append('email',Campos.email)
      FD.append('senha',Campos.senha)

      const response = await API.verificar_login_admin(FD)

      if(response === 'Admin não encontrado') alert(response)
      else{
        localStorage.setItem('admin_logado', response)
        window.location.href = 'http://localhost:3000/admin'
      }

    } catch (error) {
      alert(error)
    }
  }

  return (
    <Container>
      {
        Login ? (
          <>
            <h2>Logar como Admin</h2>
            <form onSubmit={Logar}>
              <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" name='email' value={Campos.email} onChange={handleChange} placeholder='exemplo@gmail.com' id='email' />
              </div>
              <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" name='senha' value={Campos.senha} onChange={handleChange} placeholder='editoh$20/%' id='senha' />
              </div>
              <Button className='button'>Logar</Button>
            </form>
            <Tooltip title={<Title>Crie sua conta</Title>} arrow>
              <p onClick={() => setLogin(false)}>Não tem uma conta? <span>Criar.</span></p>
            </Tooltip>
          </>
        )
          : <Cadastro voltar={setLogin} />
      }
    </Container>

  )
}