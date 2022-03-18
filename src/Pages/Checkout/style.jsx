import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;

  .title{
      background: #371910;
      padding: 4%;
      color: #eee;
    

      h1{
          font-size: 2.4em;
          font-weight: 300;
      }

      p{
          font-size: 1.1em;
          font-family: 'Roboto light';
      }
  }
`;