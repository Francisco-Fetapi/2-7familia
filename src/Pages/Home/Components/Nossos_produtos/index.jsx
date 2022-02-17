import React from 'react';
import { ImagemItemProdutoBig, ImagemItemProdutoSmall, NossosProdutos, Title } from './style';


/* Imagens */
import item1 from '../../../Imagens/1 (14).jpg'
import item2 from '../../../Imagens/1 (11).jpg'
import item3 from '../../../Imagens/1 (12).jpg'
import item4 from '../../../Imagens/1 (2).jpg'
import { Button } from '@material-ui/core';
import { ArrowForwardIos } from '@material-ui/icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
        <NossosProdutos>
            <Title>Nossos Produtos</Title>
            <div>
              <ImagemItemProdutoBig imagem={item1}/>
              <ImagemItemProdutoSmall imagem={item2}/>
              <ImagemItemProdutoSmall imagem={item3}/>
              <ImagemItemProdutoBig imagem={item4}/>
            </div>
            <Button  style={{background: '#A15300', color: '#eee', padding: '10px 60px', fontSize: '1.3em'}} endIcon={<ArrowForwardIos />}>Ver mais</Button>
        </NossosProdutos>
  )
}
