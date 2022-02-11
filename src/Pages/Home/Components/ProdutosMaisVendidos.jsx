import React from 'react';

import { ImagemProdutoMaisVendido, PodutosMaisVendidositems, ProdutosMaisVendidos, Title } from '../style/style'
import ButtonEncomendar from './ButtonEncomendar';
import ButtonVerMais from './ButtonVerMais';
import { Star, StarHalf, StarBorder } from '@material-ui/icons';

import item1 from '../../../Imagens/1 (3).jpeg'
import item2 from '../../../Imagens/1 (6).jpeg'
import item3 from '../../../Imagens/1 (8).jpeg'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
            <ProdutosMaisVendidos>
                <Title>Produtos <span>mais vendidos</span></Title>
                <p>Você pode ver os nossos produtos mais comercializados , reagidos e escolheres o melhor para si.</p>
                <PodutosMaisVendidositems>
                    <div>
                        <ImagemProdutoMaisVendido imagem={item1} />
                        <p className='produto--categoria'>Categoria: <span>Bolos de casamento</span></p>
                        <div className='produto--cotacao'>
                            <span>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </span>
                            <span>5 Estrelas</span>
                        </div>
                        <p className='produto--preco'>KZ 85.000,00</p>
                        <div className='botoes'>
                            <ButtonEncomendar />
                            <ButtonVerMais />
                        </div>
                    </div>
                    <div>
                        <ImagemProdutoMaisVendido imagem={item2} />
                        <p className='produto--categoria'>Categoria: <span>Sobremesas com chocolate</span></p>
                        <div className='produto--cotacao'>
                            <span>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <StarHalf />
                            </span>
                            <span>4,5 Estrelas</span>
                        </div>
                        <p className='produto--preco'>KZ 52.000,00</p>
                        <div className='botoes'>
                            <ButtonEncomendar />
                            <ButtonVerMais />
                        </div>
                    </div>
                    <div>
                        <ImagemProdutoMaisVendido imagem={item3} />
                        <p className='produto--categoria'>Categoria: <span>Bolos de aniversário</span></p>
                        <div className='produto--cotacao'>
                            <span>
                                <Star />
                                <Star />
                                <Star />
                                <StarHalf />
                                <StarBorder />
                            </span>
                            <span>3,5 Estrelas</span>
                        </div>
                        <p className='produto--preco'>KZ 61.000,00</p>
                        <div className='botoes'>
                            <ButtonEncomendar />
                            <ButtonVerMais />
                        </div>
                    </div>
                </PodutosMaisVendidositems>
            </ProdutosMaisVendidos>
    )
}
