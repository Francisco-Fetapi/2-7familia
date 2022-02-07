import React from 'react';
import { QuemSomos } from '../style/style';
import mulher from '../../../Imagens/mulher.png'
import { Button } from '@material-ui/core';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
      <QuemSomos>
          <h2>Quem Somos?</h2>
          <div>
              <div>
                <div>
                    <p className='descricao'>A Delicatezza Doces e Salgados nasceu da paixão pela gastronomia e fascínio pela alquimia dos sabores. Ao longo da nossa história, conquistaremos os paladares mais exigentes e criaremos receitas exclusivas de bolos de festa, tortas salgadas e sobremesas cheias de personalidade e muito sabor, deixando manhãs mais animadas, festas mais saborosas e sobremesas de domingo com um gostinho mais especial. Hoje estamos ainda no começo, mas queremos resgatar valores intangíveis e nostálgicos presentes no lugar mais doce da memória de nossos clientes. A Delicatezza é assim, muito mais que uma casa de confeição, somos parte do sabor de cada bom momento do seu dia a dia.</p>
                    <p className='dica'>É um prazer fazer parte do seu dia!</p>
                </div>
                <img src={mulher} alt="Mulher apontando" />
              </div>
          </div>
          <div className='Nos'>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, eligendi delectus praesentium voluptate magni explicabo enim nulla beatae tempore, cumque id reiciendis deserunt fuga modi ipsa laboriosam illum animi. Suscipit?</p>
              </div>
              <div>
                  <Button style={{background: '#FF00E8'}}>Sobre nós</Button>
              </div>
          </div>
      </QuemSomos>
  )
}
