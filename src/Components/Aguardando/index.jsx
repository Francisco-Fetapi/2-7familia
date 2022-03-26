import React from 'react'

import { Container } from './style'
import Loading from '../../Imagens/loading.svg'


const Index = () => {
  return (
    <Container>
        <div>
            <img src={Loading} alt="Carregando" />
            <p>Aguarde, a sua encomenda está sendo processada</p>
        </div>
    </Container>
  )
}

export default Index