import styled from 'styled-components';

import Banner from '../../Imagens/1 (24).jpg'

export const Header = styled.header`
    height: 83vh;
    background: url('${Banner}');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
`

export const Div = styled.div`
    padding: 30px 40px;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #00000092 65%, transparent);

    div{
        margin: auto;
        max-width: 500px;
        margin-top: 7em;
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;

        form{
            width: 100%;
            display: flex;
        
            input{
                padding: 12px 25px;
                border-radius: 50px 0 0 50px;
                border: none;
                flex: 1;
                font-size: 1.1em;
                color: #1d1e20;
                background: #ffffffce;
            }
            button{
                padding: 5px;
                border-radius: 0 50px 50px 0;
                border: none;
                background: #ff00ead4;
                color: #1d1e20;
                cursor: pointer;
            }
        }

        p{
            font-size: 1.2em;
            color: #eee;
        }
    }
`

export const Title = styled.div`   
    margin: 100px 0 60px 60px;
    border-left: 4px solid #1d1e20;
    padding: 2px 7px;
    color: #1d1e20;

    h1{
        font-size: 3em;
        font-weight: 400;
    }
`;

