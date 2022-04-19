import styled from "styled-components";

export const Container = styled.div`

  & > div:nth-child(1){
      flex: 1;
      max-width: 320px;
      display: none;

      /* Ainda está oculto até corrigir o problema da largura */
      /* This component is ocult until to corrige the width's problem */
  }

  & > div:nth-child(2){
      display: flex;
      flex-direction: column;
      gap: 4%;
      align-items: center;
      flex: 1;
      width: 100%;
      max-width: 590px;

      h2{
          font-weight: 400;
          text-align: center;
          margin-top: 2rem;

          &::after{
              content: '';
              display: block;
              width: 60%;
              height: 2px;
              background: currentColor;
              margin: auto;
              margin-top: 3px;
          }
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
              max-width: 150px;
              color: red;
          }
      }
  }

  hr{
        width: 88%;
        margin: 0px auto 1rem;
        background: #ccc;
        height: 2px;

    }

    .botoes{
        display: flex;
        max-width: 88%;
        padding: 20px;
        margin: auto;
        align-items: center;
        justify-content: space-between;
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

export const Comentario = styled.div`
  max-width: 88%;
  margin: 1rem auto;

  p{
      margin-bottom: 5px;
  }
  div{
      div:first-child{
        display: flex;
        align-items: center;
        gap: 1%;
        margin-bottom: .4rem;
      }

      div:last-child{
          background: #1d1e20;
          border-radius: 4px;
          padding: 8px 5px;
          color: #ccc;
          max-width: auto;
      }
  }
`;

export const UsuarioFoto = styled.div`
  padding: 22px;
  width: 22px;
  height: 30px;
  border-radius: 50%;
  background: url('${props => props.imagem}');
  background-size: cover;
  background-position: center;
`;