import React from 'react';

import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import { ArrowForwardIos } from '@material-ui/icons';

import { Footer } from './style';

import logo from '../../../../Imagens/Delicatezza.svg'
import TitleTooltip from '../../../../Components/TitleTooltip';


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
                    <Tooltip title={<TitleTooltip>Página inicial</TitleTooltip>} arrow placement='left'>
                        <li><Link to='/'><ArrowForwardIos style={{fontSize: '1.2em'}} /> Home</Link></li>
                    </Tooltip>
                    <Tooltip title={<TitleTooltip>Saiba mais sobre nós</TitleTooltip>} arrow placement='left'>
                        <li><Link to='/sobre'><ArrowForwardIos style={{fontSize: '1.2em'}} /> Sobre</Link></li>
                    </Tooltip>
                    <Tooltip title={<TitleTooltip>Ver nossos produtos</TitleTooltip>} arrow placement='left'>
                        <li><Link to='/produtos'><ArrowForwardIos style={{fontSize: '1.2em'}} /> Produtos</Link></li>
                    </Tooltip>
                    <Tooltip title={<TitleTooltip>Entre em contacto connosco</TitleTooltip>} arrow placement='left'>
                        <li><Link to='/contactar_nos'><ArrowForwardIos style={{fontSize: '1.2em'}} /> Contactar-nos</Link></li>
                    </Tooltip>
                    <Tooltip title={<TitleTooltip>Carrinho de encomendas</TitleTooltip>} arrow placement='left'>
                        <li><Link to='/'><ArrowForwardIos style={{fontSize: '1.2em'}} /> Carrinho</Link></li>
                    </Tooltip>
                    <Tooltip title={<TitleTooltip>Faça o seu login já</TitleTooltip>} arrow placement='left'>
                        <li><Link to='/login'><ArrowForwardIos style={{fontSize: '1.2em'}} /> Login</Link></li>
                    </Tooltip>
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
