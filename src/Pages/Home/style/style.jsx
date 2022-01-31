import css from 'styled-components'

import Banner from '../../../Imagens/1 (9).jpg'
import Bolo_Chocolate from '../../../Imagens/1 (7).jpeg'

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
            font-size: 1.3em;
        }


        p{
            max-width: 500px;
        }
    }
`

export const Promocao = css.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

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
        background: #FF00E8;
        width: 55%;
        margin: 10px auto 20px;
        border-radius: 20%;
    }

    h2 + p{
        color: #FF00E8;
    }

    .time-promocao{
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        
        div{
            padding: 10px;
            background: #371910;
            color: #eee;
            border-radius: 5px;
            width: 140px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;

            span:first-child{
                font-size: 1.8em;
            }
            span:last-child{
                font-size: .9em;
            }
        }
    }

    .time-promocao + p{
        font-size: 1.2em;
        margin: 15px 0 0;
    }

    .item-promocao{
        max-width: 800px;
        margin: 0 auto 40px;
        display: flex;
        align-items: center;
     

        .item-promocao--imagem{
            background: url('${Bolo_Chocolate}');
            background-position: center;
            background-size: cover;
            height: 350px;
            max-width: 350px;
            min-width: 250px;
            border-radius: 5px 0 0 5px;
        }
        .item-promocao--descricao{
            padding: 30px;
            border-radius: 0 5px 5px 0;
            display: flex;
            flex-direction: column;
            gap: 20px;
            flex: 1;

            h3{
                margin-bottom: -10px;
                color: #FF00E8;
            }
            p{
                color: #eee;
            }

            .descricao--cotacao{
                color: yellow;
                display: flex;
                align-items: center;
                gap: 20px;
            }
        }
    }

`