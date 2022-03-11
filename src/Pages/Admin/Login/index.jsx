import React, { useState } from 'react'

import { Tooltip } from '@material-ui/core';
import Title from '../../../Components/TitleTooltip';
import Button from '../components/button';
import Cadastro from './cadastro';
import { Container } from './style'

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

  const Logar = e => {
    e.preventDefault()
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
                <input type="text" name='email' value={Campos.email} onChange={handleChange} placeholder='exemplo@gmail.com' id='email' />
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