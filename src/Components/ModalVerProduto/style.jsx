import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  & > div:nth-child(1){
      flex: 1;
      max-width: 320px;
  }
  & > div:nth-child(2){
      display: flex;
      flex-direction: column;
      gap: 4%;
      align-items: center;
      flex: 1;

      h2{
          font-weight: 400;
          display: flex;
          justify-content: center;
          margin-top: 20px;
      }

      form{
          width: 100%;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 4%;

          textarea{
              background: #eee;
              border: none;
              border-radius: 4px;
              width: 100%;
              padding: 10px;
              font-size: 1em;
          }

          button{
              padding: 0;
              max-width: 150px;
              font-size: 0.7em;
          }
      }

  }
`;

export const ProdutoItem = styled.div`
    background: #371910;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
    padding: 0 0 1.3rem;

    h3{
        margin-top: 10px;
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
    .btns{
        display: flex;
        align-items: center;
    } 
`;
export const ProdutoImagem = styled.div`
    width: 100%;
    height: 36vh;
    background: url('${props => props.imagem}');
    background-position: center;
    background-size: cover; 
    border-radius: 4px 4px 0 0;
`;