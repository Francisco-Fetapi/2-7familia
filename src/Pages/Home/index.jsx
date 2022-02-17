import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { Phone }from '@material-ui/icons'

import { Header, Div, Pedacinho  } from './style'

import PedacoBolo from '../../Imagens/1 (1).png'

import Menu from '../../Components/Menu'
import ButtonContactar from '../../Components/ButtonContactar'

import Promocao from './Components/Promocao'
import ProdutosMaisVendidos from './Components/ProdutosMaisVendidos';
import PorqueNos from './Components/PorqueNos';
import QuemSomos from './Components/QuemSomos';
import NossosProdutos from './Components/Nossos_produtos';
import ContactarNos from './Components/Contactar_nos';
import Footer from './Components/Footer';


const index = () => {
  return (
      <>
        <Header>
          <Div>
            <Menu />
            <div>
              <p>Suas comemorações agora com um toque mais acessível e delicioso.</p>
              <Link to='/contacto'>
                <ButtonContactar icon={<Phone style={{fontSize: '30px'}}/>} />
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
        <PorqueNos />
        <QuemSomos />
        <NossosProdutos />
        <ContactarNos />
        <Footer />
      </>
  )
}

export default index;
