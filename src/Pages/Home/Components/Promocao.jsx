import React from 'react';

import { Star, StarBorder } from '@material-ui/icons';
import { Promocao } from '../style/style'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
        <Promocao>
            <h2>Promoção do <span>dia</span></h2>
            <p>FALTAM 15 DIAS E</p>
            <div className='time-promocao'>
              <div>
                <span>10</span>
                <span>Hora(s)</span>
              </div>
              <div>
                <span>31</span>
                <span>Minuto(s)</span>
              </div>
              <div>
                <span>57</span>
                <span>Segundo(s)</span>
              </div>
            </div>
            <p>Faça já a sua encomenda e delicie-se com as nossas Delicatezzas.</p>
            <div className='item-promocao'>
              <div className='item-promocao--imagem'>
                {/* Aqui vai a imagem */}
              </div>
              <div className='item-promocao--descricao'>
                <h3>Bolo de chocolate</h3>
                <p> O melhor bolo de chocolate que você já viu e vai provar, com creme de chocolate e recheio de morango.</p>
                <p><span>Categoria: </span>Bolos de chocolate</p>
                <div className='descricao--cotacao'>
                  <span className='cotacao--estrelas'>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <StarBorder />
                  </span>
                  <span>4 Estrelas</span>
                </div>
                <div className='descricao--preco'>

                </div>
                <div className='descricao--btns'>

                </div>
              </div>
            </div>
        </Promocao>
  )
}
