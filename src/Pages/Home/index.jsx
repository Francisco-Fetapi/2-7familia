import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { Phone }from '@material-ui/icons'

import Promocao from './Components/Promocao'
import { Header, Div, Pedacinho } from './style/style'
import Menu from './Components/MenuNavigation'
import ButtonContactar from './Components/ButtonContactar'

import PedacoBolo from '../../Imagens/1 (1).png'
import ProdutosMaisVendidos from './Components/ProdutosMaisVendidos';

const index = () => {
  return (
      <>
        <Header>
          <Div>
            <Menu />
            <div>
              <p>Suas comemorações agora com um toque mais acessível e delicioso.</p>
              <Link to='/contacto'>
                <ButtonContactar icon={<Phone style={{fontSize: '30px'}}/>}>
                  Contactar-nos
                </ButtonContactar> 
              </Link>
            </div>
          </Div>
        </Header>

        {/* Header is already very done */}

        <Pedacinho>
          <img src={PedacoBolo} alt="Bolo de chocolate" />
          <div>
            <h3>Vai um pedacinho de felicidade aí?</h3>
            <p>Nadinha de misturas prontas ou sabores artificiais, a Delicatezza tem receitas exclusivas, feitas com ingredientes frescos e muito amor para deixar o seu dia muito especial!</p>
            <Button style={{background: '#A15300', color: '#eee', padding: '10px 20px'}}>Confira os nossos produtos</Button>
          </div>
        </Pedacinho>

        {/* Pedacinho is already very done */}

        <Promocao />
        <ProdutosMaisVendidos />

      </>
  )
}

export default index;
