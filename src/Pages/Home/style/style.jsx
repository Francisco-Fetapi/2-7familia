import css from 'styled-components'

import Banner from '../../../Imagens/1 (9).jpg'
import Bolo_Chocolate from '../../../Imagens/1 (7).jpeg'

import item1 from '../../../Imagens/1 (3).jpeg'
import item2 from '../../../Imagens/1 (6).jpeg'
import item3 from '../../../Imagens/1 (8).jpeg'

export const Header = css.header`
    height: 100vh;
    background: url('${Banner}');
    background-position: bottom;
    background-size: cover;
    background-attachment: fixed;
`

export const Div = css.div`
    padding: 30px 40px;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #00000085 65%, transparent);
    display: flex;
    flex-direction: column;
   
    
    & div{
        margin-top: 180px;
        
        p{
            font-size: 2.5em;
            max-width: 620px;
            color: #eee;
            margin-bottom: 30px;
        }
    }
    
`

export const Pedacinho = css.section`
    padding: 50px;
    margin: 70px 0;
    display: flex;
    align-items: center;
    gap: 100px;
    justify-content: center;


    & img{
        max-width: 300px;
    }
    & div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;


        h3{
            font-size: 1.7em;
        }


        p{
            font-size: 1.2em;
            max-width: 500px;
        }
    }
`

export const Promocao = css.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h2{
        font-size: 2em;

        span{
            color: #FF00E8;
        }
    }

    h2::after{
        content: '';
        display: block;
        height: 3px;
        width: 60%;
        background: #FF00E8;
        margin: 10px auto; 
    }

    h2 + p{
        color: #FF00E8;
        margin-bottom: -10px;
    }

    .time-promocao{
        display: flex;
        gap: 30px;

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3px;
            background: #371910;
            border-radius: 5px;
            color: #eee;
            width: 100px;
            padding: 10px 0;

            span:first-child{
                font-size: 1.5em;
            }
            span:last-child{
                font-size: .9em;
            }
        }
    }

    .time-promocao + p{
        font-size: 1.2em;
    }

    .item-promocao{
        display: flex;
    }

    .item-promocao--imagem{
        background-image: url('${Bolo_Chocolate}');
        background-position: center;
        background-size: cover;
        height: 350px;
        max-width: 350px;
        min-width: 250px;
        border-radius: 10px 0 0 10px;
    }

    .item-promocao--descricao{
        background: #371910;

        h3{
            color: #FF00E8;
        }
    }

`

export const ProdutosMaisVendidos = css.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h2{
        font-size: 2em;

        span{
            color: #FF00E8;
        }
    }

    h2::after{
        content: '';
        display: block;
        height: 3px;
        width: 40%;
        background: #FF00E8;
        margin: 10px auto; 
    }
    
`