import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 30px;

  div{
    margin-top: 5%;
    background: #fff;
    border-left: 4px solid #FF00E8;
    border-radius: 5px;
    padding: 15px 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    cursor: pointer;

    span{
      p:last-child{
        font-size: 2em;
        color: #FF00E8;
      }
    }

    svg{
      font-size: 2.5em;
      color: #ddd;
    }
  }
`;