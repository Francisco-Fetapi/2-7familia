import css from 'styled-components'

import Banner from '../../../Imagens/1 (9).jpg'
import Padeiro from '../../../Imagens/1 (5).jpg'
import Cacks from '../../../Imagens/1 (3).jpg'
import nos from '../../../Imagens/nos.jpg'


export const Title = css.h2`
    font-size: 2em;

    span{
        color: #FF00E8;
    }

    &::after{
        content: '';
        display: block;
        height: 3px;
        width: 50%;
        background: #FF00E8;
        border-radius: 60px;
        margin: 10px auto; 
    }
`
/*------------------------------Header----------------------------------*/
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
/*---------------------Final do Header-------------------------*/

/*---------------------Final da Sessão Porquê Nós-------------------------*/

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
/*---------------------Final da Sessão Porquê Nós-------------------------*/

/*---------------------Sessão Promoção-------------------------*/

export const Promocao = css.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto 40px;

    h2 + p{
        color: #FF00E8;
        margin-bottom: -15px;
    }

`
export const TimePromocao = css.div`
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

    & + p{
        font-size: 1.1em;
        margin: 10px 0 -5px;
    }
`

export const ItemPromocao = css.div`
    display: flex;
    max-width: 1000px;
    margin: auto;

    .promocao_descricao{
        padding: 40px 0;
        padding-left: 20px;
        background: #371910;
        border-radius: 0 5px 5px 0;
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
            max-width: 600px;
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
            margin: 40px 0px -10px;
        }
    }

    & + p{
        color: #444;
        align-self: flex-end;
    }
`

export const ImagemItemPromocao = css.div`
    background: url('${props => props.imagem}');
    background-position: center;
    background-size: cover;
    width: 400px;
    border-radius: 5px 0 0 5px;
`

/*---------------------Final da Sessão Promoção-------------------------*/

/*-------------------------Sessão Porquê Nós-----------------------------*/

export const PorqueNos = css.section`
    margin: 150px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2{
        align-self: center;
    }

    
    h2::after{
        background: #1d1e20;
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

export const ItemMotivos = css.div`
    margin-bottom: -15px;

    svg{
        height: 100px;
        width: 100px;
    }
`
/*----------------------Final da Sessão Porquê Nós--------------------------*/

/*---------------------Sessão Produtos mais vendidos-------------------------*/
export const ProdutosMaisVendidos = css.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 1200px;
    margin: 120px auto 40px;

    h2 + p{
        font-size: 1.1em;
        margin: 20px 0 -5px;
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

    .botoes{
        display: flex;
        gap: 15px;
        padding: 10px 20px 20px;
    }
`

export const PodutosMaisVendidositems = css.div`
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
    }
`

export const ImagemProdutoMaisVendido = css.div`
    background: url('${props => props.imagem}');
    background-position: center;
    background-size: cover;
    height: 300px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 20px;
    width: 100%;

`
/*---------------------Final da Sessão Produtos mais vendidos-------------------------*/

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

/*---------------------Sessão Nossos Produtos-------------------------*/

export const NossosProdutos = css.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 100px;

    h2::after{
        background: #1d1e20;
    }

    & > div{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 85px;
    }

`

export const ImagemItemProdutoSmall = css.div`
    background: url('${props => props.imagem}');
    background-position: center;
    background-size: cover;
    height: 300px;
    flex-basis: 35%;
    border-radius: 4px;
    margin: 10px;
    transition: .4s ease-in-out;
    color: 

    &:hover{
        transform: scale(1.04);
    }
`

export const ImagemItemProdutoBig = css(ImagemItemProdutoSmall)`
    flex-basis: 60%;
`

/*---------------------Final da Sessão Nossos Produtos-------------------------*/

/*---------------------Sessão Contactar-nos-------------------------*/
export const ContactarNos = css.section`
    display: flex;
    width: 100%;

    & > div:last-child{
        background: #1d1e20;
        padding: 80px 60px 60px;
        width: 68%;

        h2{
            padding-left: 15px;
            border-left: 3px solid #FF00E8;
            color: #eee;
            font-weight: 300;
            font-size: 2em;
        }

        form{
            margin-top: 60px;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            gap: 40px;
            align-items: center;

            .MuiInputLabel-formControl{
                font-size: 1.6em;
                margin-bottom: 20px;
                color: #eee;
            }

            .Mui-focused{
                color: #FF00E8;
            }

            .MuiInput-underline{
                color: #ccc
            }

            .MuiInput-underline:after{
                border-bottom-color: #FF00E8;
            }

            .MuiInput-underline:before{
                border-bottom-color: #ccc;
            }
        }
    }
`

export const ImagemContactarNos = css.div`
    background: url('${Cacks}');
    background-position: center;
    background-size: cover;
    width: 32%;
`
/*---------------------Final da Sessão Contactar-nos-------------------------*/

/*---------------------Footer-------------------------*/
export const Footer = css.footer`
    & > div:nth-child(1){
        background: #371910;

        nav{
            padding: 40px 20px;
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
        }

        nav ul{
            display: flex;
            flex-direction: column;
            gap: 13px;

            h4{
                font-size: 1.4em;
                font-weight: 300;
                color: #fff;
                border-bottom: 1px solid #fff;
                padding-bottom: 5px;

                img{
                    max-width: 200px;
                }
            }
            & li, & a{
                color: #ccc;

                span{
                    color: #fff;
                    font-weight: 500;
                    font-size: 1.1em;
                }
            }
        }

        nav ul:nth-child(2), nav ul:nth-child(3){
            margin-top: 60px;
        }
    }
    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        padding: 30px;
        border-top: 2px solid #eee;
        background: #1d1e20;
        color: #eee;

        p span{
            color: #FF00E8;
            font-weight: 500;
        }
    }
`

/*---------------------Final do Footer-------------------------*/