import React from 'react'
import Menu from '../../Components/Menu'
import { Div, Header, Title } from './style'

const index = () => {
  return (
    <>
      <Header>
        <Div>
            <Menu />
            <h1>O começo da nossa jornada na confeitaria.</h1>
        </Div>
      </Header>
      <Title>
          <h1>Contactar-nos</h1>
          <p>Envie-nos um feedback sobre qualquer coisa.</p>
      </Title>
    </>
  )
}

export default index