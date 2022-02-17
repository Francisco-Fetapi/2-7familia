import css from 'styled-components'

import Cacks from '../../../../Imagens/1 (3).jpg'

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