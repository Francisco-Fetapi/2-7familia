import styled from 'styled-components'

import Cacks from '../../../../Imagens/1 (3).jpg'

/*---------------------Sessão Contactar-nos-------------------------*/
export const ContactarNos = styled.section`
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
            margin-top: .8rem;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: center;

            .MuiInputLabel-formControl{
                font-size: 1.6em;
                margin-bottom: .8rem;
                color: #eee;
            }

            .MuiInputBase-input:focus{
                padding: 12px 0;
            }

            .MuiInputBase-input{
                padding: 12px 0;
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

            p{
                color: #eee;

                a{
                    color: #FF00E8;
                }
            }
        }
    }

    @media(max-width: 500px){
        display: block;

        & > div:last-child{
            width: 100%;

            form{
                margin-top: 30px;
                gap: 25px;

                .MuiInputLabel-formControl{
                    font-size: 1.3em;
                    margin-bottom: 12px;
                }
            }
        }
    }
`

export const ImagemContactarNos = styled.div`
    background: url('${Cacks}');
    background-position: center;
    background-size: cover;
    width: 32%;

    @media(max-width: 500px){
        display: none;
    }
`
/*---------------------Final da Sessão Contactar-nos-------------------------*/