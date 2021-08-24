import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 500px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #219ebc;
    }

    button {
      background: #f8961e;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #ffff;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;
      outline: none;

      &:hover {
        background: ${shade(0.2, "#f8961e")};
      }
    }
  }
`;

export const Background = styled.div`
  display: flex;
  width: 100%;
  background: linear-gradient(
    329.54deg,
    #4c95b6 5.21%,
    #8ccae8 55.51%,
    #8ecae6 100%
  );
  align-items: center;
  justify-content: center;
  & img {
    width: 100%;
    max-width: 320px;
  }
`;

