import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;

  .title {
    background: #371910;
    padding: 4%;
    color: #eee;
    width: 100%;

    h1 {
      font-size: 2.4em;
      font-weight: 300;
    }

    p {
      font-size: 1.1em;
      font-family: "Roboto light";
    }
  }

  form {
    padding: 20px;
    width: 100%;
    max-width: 600px;

    .btns {
      display: flex;
      gap: 15px;
      margin-bottom: 20px;

      button + button {
        padding: 10px 40px;
        font-size: 1em;
      }
    }
    .Item {
      width: 100%;
      display: flex;
      margin-bottom: 7%;

      .conteudo {
        flex: 1;
        background: #371910;
        border-radius: 0 5px 5px 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3{
            display: flex;
            align-items: center;
            gap: 5px;
            color: #eee;
            font-weight: 500;
            font-size: 1.5em;
            justify-content: center;
            margin: .7rem 0 3rem;

            svg{
                font-size: 1.2em;
            }

        }

        div{

            label{
                color: #fff;
                font-size: 1.2em;
            }

            input{
                border: none;
                border-radius: 4px;
                font-size: 1em;
                padding: 6px;
                text-align: center;
            }
        }

        div:nth-child(2){
            label{
                margin-right: 5px;
            }
            input{
                max-width: 60px;
            }
        }
        div:nth-child(3){
            label{
                margin-bottom: 5px;
            }
        }

        div + div{
            margin-top: .8rem;
        }
      }
    }
  }
`;

export const ImagemProduto = styled.div`
  flex: 1;
  height: 42vh;
  background: url("${(props) => props.imagem}");
  background-position: center;
  background-size: cover;
  border-radius: 5px 0 0 5px;
`;
