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
          font-size: 2.5em;
          font-weight: 500;
      }

      p{
          font-size: 1.2em;
      }
  }
`;