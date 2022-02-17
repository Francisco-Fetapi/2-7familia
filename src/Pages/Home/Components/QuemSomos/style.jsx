import css from 'styled-components'

import Padeiro from '../../../../Imagens/1 (5).jpg'
import nos from '../../../../Imagens/nos.jpg'

/*---------------------Sessão Quem Somos-------------------------*/

export const QuemSomos = css.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 130px;

    h2{
        align-self: center;
    }

    h2::after{
        background: #1d1e20;
    }
`

export const BannerDescritivo = css.div`
    background: url('${Padeiro}');
    background-position: center;
    background-size: cover;
    bakground-attachment: fixed;

    & > div{
        display: flex;
        justify-content: center;
        gap: 30px;
        background: #0000006c;
        padding: 120px 20px 0;

        & > div{
            display: flex;
            flex-direction: column;
            gap: 60px;
            color: #eee;
            
            p:first-child{
                font-size: 1.3em;
                line-height: 1.6em;
                max-width: 650px;
            }

            p:last-child{
                font-size: 2em;
                margin-bottom: 70px;
            }
        }

        & > img{
            width: 470px;
            height: 350px;
            align-self: flex-end;
        }
    } 
`

export const Nos = css.div`
    background: #1d1e20;
    color: #fff;
    width: 100%;
    max-width: 800px;
    margin: 140px auto -20px;
    display: flex;
    justify-content: space-between;

    & > div:first-child{
        padding: 30px;
        width: 60%;

        ul{
            display: flex;
            flex-direction: column;
            gap: 40px;
        }
        ul li > div{
            display: flex;
            align-items: center;
            gap: 20px;
            
            span{
                border-radius: 50%;
                background: #fff;
                padding: 10px;
                color: #1d1e20;
            }

            div p:first-child{
                font-size: 1.4em;
            }

            div p:last-child{
                font-size: .9em;
                font-family: 'Roboto light'
            }
        }
    }

    & > div:last-child{
        background: url('${nos}');
        background-position: center;
        background-size: cover;
        width: 40%;

        div{
            background: #000000a4;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 50px;
            width: 100%;
            height: 100%;
        }
    }
`

/*---------------------Final da Sessão Quem Somos-------------------------*/