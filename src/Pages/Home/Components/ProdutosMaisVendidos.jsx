import React from 'react';

import { ProdutosMaisVendidos } from '../style/style'
import ButtonEncomendar from './ButtonEncomendar';
import ButtonVerMais from './ButtonVerMais';
import { Star, StarHalf, StarBorder } from '@material-ui/icons';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
            <ProdutosMaisVendidos>
                <h2>Produtos <span>mais vendidos</span></h2>
                <p>Você pode ver os nossos produtos mais comercializados , reagidos e escolheres o melhor para si.</p>
                <div className="produtos--vendidos">
                    <div>
                        <div></div>
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
                        <div>
                            <ButtonEncomendar />
                            <ButtonVerMais />
                        </div>
                    </div>
                    <div>
                        <div></div>
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
                        <div>
                            <ButtonEncomendar />
                            <ButtonVerMais />
                        </div>
                    </div>
                    <div>
                        <div></div>
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
                        <div>
                            <ButtonEncomendar />
                            <ButtonVerMais />
                        </div>
                    </div>
                </div>
            </ProdutosMaisVendidos>
    )
}
