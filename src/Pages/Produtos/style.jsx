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

export const ContainerProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    width: 100%;
    padding: 60px;

    & > div{
        flex: 1;
        min-width: 200px;
        max-width: 300px;
    }
`;

export const ProdutoItem = styled.div`
    background: #371910;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border-radius: 4px;

    h3{
        color: #FF00E8;
        font-size: 1.4em;
        font-weight: 300;
        text-align: center;
    }

    p{
        color: #eee;
        font-size: 1.2em;
        font-family: 'Times New Roman', Times, serif;
    }    
`;
export const ProdutoImagem = styled.div`
    width: 100%;
    height: 180px;
    background: url('${props => props.imagem}');
    background-position: center;
    background-size: cover; 
    border-radius: 4px 4px 0 0;
`;