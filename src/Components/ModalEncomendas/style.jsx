import styled from "styled-components";

export const Title = styled.h2`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 500;
    color: #371910;
    justify-content: center;
    font-weight: 500;

    svg{
        font-size: 1.2em;
    }
`;

export const Container = styled.div`
  width: 100%;
  padding: 3rem 5rem;
`;

export const ItemProduto = styled.div`
  padding: 5% 0;
  display: flex;
  align-items: center;
  gap: 17px;

  .nome_produto{
    font-size: 1.3em;
    color: #FF00E8;
  }

  & + &{
    border-top: 1px solid #371910;
  }
`;

export const ImagemProduto = styled.div`
  padding: 30px;
  border-radius: 50%;
  background: url('${props => props.imagem}');
  background-position: center;
  background-size: cover;
`;