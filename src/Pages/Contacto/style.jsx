import styled from 'styled-components';

import Banner from '../../Imagens/contacto.jpg'

export const Header = styled.header`
    height: 94vh;
    background: url('${Banner}');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
`

export const Div = styled.div`
    padding: 30px 40px;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #00000092 80%, transparent);
    display: flex;
    flex-direction: column;

    h1{
        margin: auto;
        justify-self: center;
        align-self: center;
        font-size: 5em;
        color: #fff;
        font-weight: 500;
        max-width: 1000px;
        text-align: center;
    }
`

export const Title = styled.div`   
    margin: 100px 0 9% 60px;
    border-left: 4px solid #1d1e20;
    padding: 2px 7px;
    color: #1d1e20;

    h1{
        font-size: 3em;
        font-weight: 400;
    }

    p{
        font-size: 1.2em;
    }
`;
