import styled from 'styled-components'

/*---------------------Sessão Nossos Produtos-------------------------*/

export const NossosProdutos = styled.section`
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

export const ImagemItemProdutoSmall = styled.div`
    background: url('${props => props.imagem}');
    background-position: center;
    background-size: cover;
    height: 300px;
    flex-basis: 35%;
    border-radius: 4px;
    margin: 10px;
    transition: .4s ease-in-out;

    &:hover{
        transform: scale(1.03);
    }

    @media(max-width: 500px){
        flex-basis: 100%;
    }
`

export const ImagemItemProdutoBig = styled(ImagemItemProdutoSmall)`
    flex-basis: 60%;

    @media(max-width: 500px){
        flex-basis: 100%;
    }
`

/*---------------------Final da Sessão Nossos Produtos-------------------------*/