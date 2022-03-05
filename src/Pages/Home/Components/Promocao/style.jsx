import styled from 'styled-components'

/*---------------------Sessão Promoção-------------------------*/
const rosa = '#FF00E8';
const cinzaEEE = '#eee';

export const Promocao = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto 40px;

    h2 + p{
        color: ${rosa};
        margin-bottom: -15px;
    }

`
export const TimePromocao = styled.div`
    display: flex;
    gap: 30px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        background: #371910;
        border-radius: 5px;
        color: ${cinzaEEE};
        width: 100px;
        padding: 10px 0;

        span:first-child{
            font-size: 1.9em;
        }
        span:last-child{
            font-size: .9em;
        }
    }

    & + p{
        font-size: 1.1em;
        margin: 10px 0 -5px;

        span{
            color: ${rosa};
        }
    }
`

export const ItemPromocao = styled.div`
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
            color: ${rosa};
            font-size: 1.8em;
            font-family: 'Roboto light'
        }

        p{
            color: ${cinzaEEE};
            font-family: 'Roboto light';
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
                color: ${cinzaEEE};
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

export const ImagemItemPromocao = styled.div`
    background: url('${props => props.imagem}');
    background-position: center;
    background-size: cover;
    width: 400px;
    border-radius: 5px 0 0 5px;
`

/*---------------------Final da Sessão Promoção-------------------------*/