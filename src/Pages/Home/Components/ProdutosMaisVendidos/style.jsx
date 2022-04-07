import styled from 'styled-components'

/*---------------------Sessão Produtos mais vendidos-------------------------*/
export const ProdutosMaisVendidos = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2%;
    max-width: 1200px;
    margin: 120px auto 40px;

    h2 + p{
        font-size: 1.1em;
        margin: 20px 0 -5px;
        text-align: center;
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
        text-align: center;

        span{
            color: #A15300;
        }
    }

    .botoes{
        display: flex;
        gap: 15px;
        padding: 10px 20px 20px;
    }
    
    @media(max-width: 500px){
        gap: 4%;

        .botoes{
            flex-direction: column;
            align-items: center;
        }
    }

`

export const PodutosMaisVendidositems = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;

    & > div{
        background: #371910;
        border-radius: 8px 8px 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    @media(max-width: 500px){
        margin-top: 30px;
        flex-wrap: wrap;
        width: 100%;

        & > div{
            width: 100%;
            gap: 6px;
            margin: 5px 10px 10px;
        }
    }
`

export const ImagemProdutoMaisVendido = styled.div`
    background: url('${props => props.imagem}');
    background-position: center;
    background-size: cover;
    height: 300px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 20px;
    width: 100%;

    @media(max-width: 500px){
        height: 40vh;
    }

`
/*---------------------Final da Sessão Produtos mais vendidos-------------------------*/