import styled from 'styled-components'

/*---------------------Sessão Produtos mais vendidos-------------------------*/
export const ProdutosMaisVendidos = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 1200px;
    margin: 120px auto 40px;

    h2 + p{
        font-size: 1.1em;
        margin: 20px 0 -5px;
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

        span{
            color: #A15300;
        }
    }

    .botoes{
        display: flex;
        gap: 15px;
        padding: 10px 20px 20px;
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
        flex-wrap: wrap;
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

`
/*---------------------Final da Sessão Produtos mais vendidos-------------------------*/