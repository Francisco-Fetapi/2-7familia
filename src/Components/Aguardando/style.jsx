import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  div{
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
      align-items: center;
      justify-content: center;

      p{
          font-size: 1.2em;
          font-weight: 400;
      }
  }
`;