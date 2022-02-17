import css from 'styled-components'

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