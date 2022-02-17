import React from 'react';
import { Footer } from './style';

import logo from '../../../../Imagens/Delicatezza.svg'
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
      <Footer>
          <div>
              <nav>
                <ul>
                    <h4><img src={logo} alt="Delicatezza - logo da empresa" /></h4>
                    <li>Bela Vista, Lobito.</li>
                    <li>Benguela, <span>Angola</span></li>
                    <li><span>Telefone:</span> +244 941 059 086</li>
                    <li><span>E-mail:</span> delicatezza@gmail.com</li>
                </ul>
                <ul>
                    <h4>Links Rápidos</h4>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Sobre</Link></li>
                    <li><Link to='/'>Produtos</Link></li>
                    <li><Link to='/'>Contactar-nos</Link></li>
                    <li><Link to='/'>Carrinho</Link></li>
                    <li><Link to='/'>Login</Link></li>
                </ul>
                <ul>
                    <h4>Nossos Serviços</h4>
                    <li>Encomendas</li>
                    <li>Decorações</li>
                </ul>                  
              </nav>
          </div>
          <div>
              <p>Designed by <span>BEFAT Company</span></p>
              <p>© Copyright Delicatezza, 2020 | Todos os direitos reservados.</p>
          </div>
          
      </Footer>
  )
}
