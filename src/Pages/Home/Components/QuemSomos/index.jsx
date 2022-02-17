import React from 'react';

import { Title } from '../../style';
import { BannerDescritivo, Nos, QuemSomos } from './style';
import { Button } from '@material-ui/core';
import { LocationOn, Email, LocalPhone } from '@material-ui/icons'

import mulher from '../../../../Imagens/mulher.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
      <QuemSomos>
          <Title>Quem Somos?</Title>
          <BannerDescritivo>
              <div>
                <div>
                    <p className='descricao'>A Delicatezza Doces e Salgados nasceu da paixão pela gastronomia e fascínio pela alquimia dos sabores. Ao longo da nossa história, conquistaremos os paladares mais exigentes e criaremos receitas exclusivas de bolos de festa, tortas salgadas e sobremesas cheias de personalidade e muito sabor, deixando manhãs mais animadas, festas mais saborosas e sobremesas de domingo com um gostinho mais especial. Hoje estamos ainda no começo, mas queremos resgatar valores intangíveis e nostálgicos presentes no lugar mais doce da memória de nossos clientes. A Delicatezza é assim, muito mais que uma casa de confeição, somos parte do sabor de cada bom momento do seu dia a dia.</p>
                    <p className='dica'>É um prazer fazer parte do seu dia!</p>
                </div>
                <img src={mulher} alt="Mulher apontando" />
              </div>
          </BannerDescritivo>
          <Nos>
              <div>
                <ul>
                  <li>
                      <div>
                        <span>
                          <LocationOn />
                        </span>
                        <div>
                          <p>Localização</p>
                          <p>Bela vista, Lobito, Benguela</p>
                        </div>
                      </div>
                  </li>
                  <li>
                      <div>
                        <span>
                          <Email />
                        </span>
                        <div>
                          <p>E-mail</p>
                          <p>delicatezza@gmail.com</p>
                        </div>
                      </div>
                  </li>
                  <li>
                      <div>
                        <span>
                            <LocalPhone />
                        </span>
                        <div>
                          <p>Telefone</p>
                          <p>+244 923 478 388</p>
                        </div>
                      </div>
                  </li>
                </ul>
              </div>
              <div>
                <div>
                  <Button style={{background: 'linear-gradient(#FF00E8, #AF049F)', padding: '8px 50px', fontSize: '1.2em', color: '#eee'}}>Sobre nós</Button>
                </div>
              </div>
          </Nos>
      </QuemSomos>
  )
}
