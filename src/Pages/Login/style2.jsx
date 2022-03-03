import styled from 'styled-components'

import Moca from '../../Imagens/1 (26).jpg'

export const Container = styled.main`
    height: 100vh;
    width: 100%;
    background: url('${Moca}');
    background-position: center;
    background-size: cover;

    * [class |= 'PrivateTabIndicator']{
        background-color: #FF00E8;
    }

    .MuiPaper-root{
        background: #0000008b;
    } 

    h2 {
        color: #fff;
        font-weight: 500;
        font-size: 1.8em;
        display: flex;
        align-items: center;
        gap: 7px;
    }

    form{
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            max-width: 450px;
            margin: 30px auto;

            .MuiInputLabel-formControl{
                font-size: 1.6em;
                margin-bottom: 20px;
                color: #eee;
                font-weight: 500;
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

            .senha {
                display: flex;
                gap: 25px;
                width: 100%;
            }
    }

    
`

export const Certo = styled.h3`
    background: #008000da;
    padding: 15px;
    color: white;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
`
export const Errado = styled.h3`
    background: #ff0000da;
    padding: 15px;
    color: white;
    font-weight: 500;
`