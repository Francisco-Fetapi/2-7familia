import React from 'react';

import { Star, StarBorder } from '@material-ui/icons';
import { ImagemItemPromocao, ItemPromocao, Promocao, TimePromocao, Title } from '../style/style'
import ButtonEncomendar from '../../../Components/ButtonEncomendar';
import ButtonVerMais from '../../../Components/ButtonVerMais';

import Bolo_Chocolate from '../../../Imagens/1 (7).jpeg'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
        <Promocao>
            <Title>Promoção do <span>dia</span></Title>
            <p>FALTAM 15 DIAS E</p>
            <TimePromocao>
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
            </TimePromocao>
            <p>Faça já a sua encomenda e delicie-se com as nossas Delicatezzas.</p>
            <ItemPromocao>
              <ImagemItemPromocao imagem={Bolo_Chocolate}/>
              <div className='promocao_descricao'>
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
                    <span className='preco--novo'>KZ 50.000,00</span>
                    <span className='preco--antigo'>KZ 70.000,00</span>
                </div>
                <div className='descricao--btns'>
                    <ButtonEncomendar />
                    <ButtonVerMais />
                </div>
              </div>
            </ItemPromocao>
            <p className='warning'>Quantidades limitadas.</p>
        </Promocao>
  )
}
