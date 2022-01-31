import React from 'react';

import { ProdutosMaisVendidos } from '../style/style'
import ButtonEncomendar from './ButtonEncomendar';
import ButtonVerMais from './ButtonVerMais';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
            <ProdutosMaisVendidos>
                <h2>Produtos <span>mais vendidos</span></h2>
                <p>Você pode ver os nossos produtos mais comercializados , reagidos e escolheres o melhor para si.</p>
                <div className="produtos--vendidos">
                    <div>
                        <div></div>
                        <p></p>
                        <span></span>
                        <p></p>
                        <div>
                            <ButtonEncomendar />
                            <ButtonVerMais />
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <p></p>
                        <span></span>
                        <p></p>
                        <div>
                            <ButtonEncomendar />
                            <ButtonVerMais />
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <p></p>
                        <span></span>
                        <p></p>
                        <div>
                            <ButtonEncomendar />
                            <ButtonVerMais />
                        </div>
                    </div>
                </div>
            </ProdutosMaisVendidos>
    )
}
