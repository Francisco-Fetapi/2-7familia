import styled from 'styled-components';

import Banner from '../../Imagens/nos.jpg'
import BannerExplicativoImagem from '../../Imagens/1 (9).jpg'

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

export const Introducao = styled.section`
  display: flex;
  max-width: 1000px;
  gap: 8%;
  margin: auto;
  margin-bottom: 8%;

  div{
      position: relative;
  }

  p{
      max-width: 50%;
      line-height: 2.3rem;
      font-size: 1.4em;

      span{
          font-family: 'Aapex';
          font-size: 3em;
          display: inline-block;
      }

      span:first-child{
        transform: rotate(180deg);
        margin: 0 3% 0 0;
      }
  }
`;

export const ImagemIntroducao = styled.div`
  width: 50%;
  max-width: 320px;
  height: 50vh;
  background: url('${props => props.imagem}');
  background-size: cover;
  background-position: center;

  &::after{
      content: '';
      display: block;
      border: 16px solid #FF00E8;
      height: 88%;
      width: 85%;
      z-index: -1;
      margin: 30px 0 0 40px;
      position: absolute;
  }
`;

export const Texto = styled.div`
  max-width: 1200px;
  font-size: 1.4em;
  line-height: 1.7em;
  margin: auto;
  margin-bottom: 7%;

  p + p{
      margin-top: 1.5rem;
  }

  span{
      color: #FF00E8;
  }
`;

export const BannerExplicativo = styled.div`
    background: url('${BannerExplicativoImagem}');
    background-size: cover;
    background-position: center;

  div{
      padding: 8%;
      background: linear-gradient(to bottom right, #0000008f 80%, transparent);

      p{
          font-size: 1.5em;
          color: #fff;
          max-width: 1000px;
          text-align: center;
          margin: auto;
          line-height: 1.8em;
      }
  }
  
`;

export const Opcoes = styled.div`
    padding: 6%;
  & > p{
    font-size: 1.5em;
    margin-bottom: 5%;
    text-align: center;

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
    max-width: 1200px;
    justify-content: center;
    gap: 8%;
  }

  div div{
      p{
          font-size: 1.2em;
          text-align: center;
          margin-bottom: 7%;
      }
  }
`;