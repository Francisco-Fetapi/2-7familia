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
        max-width: 1200px;
        text-align: center;
    }
`

export const Title = styled.div`   
    margin: 6% auto 3%;
    border-left: 4px solid #1d1e20;
    padding: 2px 7px;
    color: #1d1e20;
    width: 100%;
    max-width: 1200px;

    h1{
        font-size: 3em;
        font-weight: 400;
    }

    p{
        font-size: 1.2em;
    }
`;

export const DuvidaBanner = styled.div`
  display: flex;
  gap: 2%;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 6%;


  & > div{
    max-width: 600px;

      p:first-child{
        font-size: 3em;
        font-weight: 300;
      }

      p:last-child{
          font-size: 1.5em;

          span{
            color: #DB00C6;
          }
      }

      p + p{
        margin-top: 8%;
      }
  }

  img{
      width: 100%;
      max-width: 450px;
  }
`;

export const Questionario = styled.div`
    background: url('${props => props.imagem}');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    & > div{
        background: #00000089;
        padding: 8% 4%;
        display: flex;
        flex-direction: column;
        gap: 4%;
        justify-content: center;
        align-items: center;

        p{
            color: #fff;
            font-size: 1.6em;
            margin-bottom: 2em;
        }

        form{
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 500px;

            div{
                label{
                    display: block;
                    margin-bottom: .8em;
                    font-size: 1.3em;
                    color: #F3F2F2;
                }
                
                input, textarea{
                    width: 100%;
                    padding: 10px 13px;
                    font-size: 1.2em;
                    background: #F3F2F2;
                    border: none;
                    border-radius: 4px;
                    color: #333;
                }
            }

            div:last-child{
                margin-top: 8%;
            }

            div + div{
                margin-top: 6%;
            }
        }
    }
`;

export const OutrasFormas = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 4%;
  margin: auto;
  text-align: center;

  & > p{
    font-size: 1.5em;
    margin-bottom: 5%;

    &::after{
        content: '';
        display: block;
        height: 2px;
        width: 15%;
        margin: 10px auto 0;
        background: currentColor;
    }
  }

  & > div{
      display: flex;
      align-items: center;
      justify-content: space-around;

      div{
          display: flex;
          align-items: center;
          gap: 1%;
          width: 100%;

          p{
              font-size: 1.5em;
          }

          svg{
              font-size: 2.7em;
          }
      }

      a:nth-child(1) p{
          color: blue;
      }
      a:nth-child(2) p{
          color: #a307a3;
      }
      a:nth-child(3) p{
          color: green;
      }
  }

  span{
      display: block;
      margin-top: 4%;
  }
`;