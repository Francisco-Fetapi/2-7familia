import React, { useState, useEffect } from 'react';

import { Title } from '../../style';
import { Star, StarBorder } from '@material-ui/icons';
import { ImagemItemPromocao, ItemPromocao, Promocao, TimePromocao } from './style'
import ButtonEncomendar from '../../../../Components/ButtonEncomendar';
import ButtonVerMais from '../../../../Components/ButtonVerMais';

import Bolo_Chocolate from '../../../../Imagens/1 (7).jpeg'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [Hora, setHora] = useState('');
  const [Minuto, setMinuto] = useState('');
  const [Segundo, setSegundo] = useState('');

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      setHora(() => date.getHours() < 10 ? '0'+date.getHours() : date.getHours())
      setMinuto(() => date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes())
      setSegundo(() => date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds())
    }, 800)
  }, []);

  return (
        <Promocao>
            <Title>Promoção do <span>dia</span></Title>
            <p>FALTAM 15 DIAS E</p>
            <TimePromocao>
              <div>
                <span>{Hora}</span>
                <span>Hora{ Hora > 1 ? 's' : ''}</span>
              </div>
              <div>
                <span>{Minuto}</span>
                <span>Minuto{ Minuto > 1 ? 's' : ''}</span>
              </div>
              <div>
                <span>{Segundo}</span>
                <span>Segundo{ Segundo > 1 ? 's' : ''}</span>
              </div>
            </TimePromocao>
            <p>Faça já a sua encomenda e delicie-se com as nossas <span>Delicatezzas.</span></p>
            <ItemPromocao>
              <ImagemItemPromocao imagem={Bolo_Chocolate}/>
              <div className='promocao_descricao'>
                <h3>Bolo de chocolate</h3>
                <p> O melhor bolo de chocolate que você já viu e vai provar, com creme de chocolate e recheio de morango.</p>
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
