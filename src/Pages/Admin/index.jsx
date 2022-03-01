import React from 'react'

import { Button } from '@material-ui/core'
import { Container, Drawer } from './style'
import avatar from '../../Imagens/avatar.png'

const Index = () => {
  return (
      <Container>
        <Drawer>
            <div>
                <img src={avatar} alt="Avatar" />
                <p>Editoh Donatello</p>
            </div>

            {
                ["Dashboard","Produto","Encomendas","Usuários","Chat"]
                .map((item, index) => <Button key={index} style={{color: '#eee', marginTop: '20px'}} fullWidth>{item}</Button>)
            }
        </Drawer>
        <div>
            <h1>Painel Administrador</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
            <h1>dfghjkkghxj</h1>
        </div>
      </Container>
  )
}

export default Index