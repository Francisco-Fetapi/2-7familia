import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #1d1e20;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  color: #eee;

  h2 {
    font-weight: 500;
    font-size: 2em;
  }

  form {
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    div {
      width: 100%;

      label {
        display: block;
        margin-bottom: 10px;
        font-size: 1.5em;
      }

      input {
        width: 100%;
        border: none;
        border-radius: 4px;
        background: #eee;
        padding: 9px 15px;
        font-size: 1.2em;
        color: #333;
      }
    }

    div + div {
      margin-bottom: 18px;
    }

    .codigos {
      display: flex;
      gap: 30px;
      width: 100%;
    }
  }

  p {
    font-size: 1.1em;
    cursor: pointer;

    span {
      color: #ff00e8;
    }
  }
`;
