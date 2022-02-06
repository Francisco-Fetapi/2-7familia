import css from 'styled-components'

import Banner from '../../../Imagens/1 (9).jpg'

import Padeiro from '../../../Imagens/1 (5).jpg'

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
    max-width: 1200px;
    margin: 0 auto 40px;
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
        margin-bottom: -12px;
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
        font-size: 1.1em;
        margin: 20px 0 -5px;
    }

    .item-promocao{
        display: flex;
        max-width: 800px;
        margin: auto;

        .promocao--imagem{
            height: 304px;
            width: 300px;
            border-radius: 10px 0 0 10px;
        }
        .promocao_descricao{
            padding: 24px 0;
            padding-left: 20px;
            background: #371910;
            border-radius: 0 10px 10px 0;
            display: flex;
            flex-direction: column;
            gap: 15px;

            h3{
                color: #FF00E8;
                font-size: 1.8em;
                font-family: 'Roboto light'
            }

            p{
                color: #eee;
                font-family: 'Roboto light'
            }

            p + p span{
                color: #A15300;
                font-weight: bold;
            }

            .descricao--cotacao{
                display: flex;
                align-items: center;
                gap: 10px;
                color: #FFFF00;
            }

            .descricao--preco{
                .preco--novo{
                    color: #eee;
                    font-family: 'Times New Roman', Times, serif;
                    font-size: 1.3em;
                }
                .preco--antigo{
                    color: #ccc;
                    text-decoration: line-through;
                    font-size: 1em;
                    margin-left: 13px;
                }
            }
            .descricao--btns{
                display: flex;
                gap: 40px;
            }
        }
    }

    .warning{
        color: #444;
        align-self: flex-end;
    }

`

export const ProdutosMaisVendidos = css.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 1200px;
    margin: 120px auto 40px;

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

    h2 + p{
        font-size: 1.1em;
        margin: 20px 0 -5px;
    }

    .produtos--vendidos{
        display: flex;
        justify-content: center;
        gap: 15px;

        & > div{
            background: #371910;
            border-radius: 8px 8px 0 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            
            & > div:first-child{
                height: 300px;
                border-radius: 5px 5px 0 0;
                margin-bottom: 20px;
                width: 100%;
            }

            .produto--cotacao{
                display: flex;
                align-items: center;
                gap: 10px;
                color: #FFFF00;
            }
    
            .produto--preco{
                color: #eee;
                font-family: 'Times New Roman', Times, serif;
                font-size: 1.3em;
            }
    
            .produto--categoria{
                color: #eee;
                font-weight: 400;
    
                span{
                    color: #A15300;
                }
            }

            & > div:last-child{
                display: flex;
                gap: 15px;
                padding: 10px 20px 20px;
            }
        }

        & > div:nth-child(1){
            & > div:first-child{
                background: url('${item1}');
                background-position: center;
                background-size: cover;
            }
        }
        & > div:nth-child(2){
            & > div:first-child{
                background: url('${item2}');
                background-position: center;
                background-size: cover;
            }
        }
        & > div:nth-child(3){
            & > div:first-child{
                background: url('${item3}');
                background-position: center;
                background-size: cover;
            }
        }
    }
`

export const PorqueNos = css.section`
    margin: 150px 0;

    h2{
        font-size: 2em;
        text-align: center;
        margin-bottom: 40px;
    }

    h2::after{
        content: '';
        display: block;
        height: 3px;
        width: 8%;
        background: currentColor;
        margin: 10px auto; 
        border-radius: 20px;
    }

    & > div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        padding: 80px 0;

        background: #1D1E20;
        

        text-align: center;

        & > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        & > div > div svg{
            height: 100px;
            width: 100px;
        }
        
        & > div > div{
            margin-bottom: -15px;
        }

        div h4{
            margin-top: 30px;
            font-size: 1.3em;
            color: #A15300;
        }
        div p{
            max-width: 235px;
            color: #eee;
        }
    }
`

export const QuemSomos = css.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 130px;

    h2{
        font-size: 2em;
        text-align: center;
        margin-bottom: 40px;
    }

    h2::after{
        content: '';
        display: block;
        height: 3px;
        width: 8%;
        background: currentColor;
        margin: 10px auto; 
        border-radius: 20px;
    }

    & > h2 + div{
        background: url('${Padeiro}');
        background-position: center;
        background-size: cover;
    
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
    }

    .Nos{
        display: flex;
    }
`