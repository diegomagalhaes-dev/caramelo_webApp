import styled, { keyframes } from "styled-components";

const appearFromTop = keyframes`

  from{
    opacity: 0;
    transform: translateY(-100vh);
  }

  to{
    opacity: 1;
    transform: translateY(0vh);
  }
`;

const appearFromLeft = keyframes`

  from{
    opacity: 0;
    transform: translateX(-100vw);
  }

  to{
    opacity: 1;
    transform: translateX(0vw);
  }
`;
const appearFromRight = keyframes`

  from{
    opacity: 0;
    transform: translateX(100vw);
  }

  to{
    opacity: 1;
    transform: translateX(0vw);
  }
`;

export const PageCreateFeeder = styled.div`
  display: flex;
  flex-direction: column;

  & main {
    flex: 1;
    transform: translateY(-110px);
  }

  & form.create-feeder-form {
    width: 700px;
    margin: 64px auto;

    background: #ffffff;
    border: 1px solid #d3e2e5;
    border-radius: 20px;

    padding: 64px 80px;

    overflow: hidden;
  }

  & form.create-feeder-form fieldset {
    border: 0;
  }

  & form.create-feeder-form fieldset + fieldset {
    margin-top: 80px;
  }

  & form.create-feeder-form .input-block .new-image {
    width: 100%;
    height: 128px;
    background: #f5f8fa;
    border: 1px dashed #96d2f0;
    border-radius: 20px;
    cursor: pointer;
  }

  & form .confirm-button {
    margin-top: 40px;

    cursor: pointer;
    width: 100%;
    background: #219ebc;
    color: #ffffff;
    padding: 10px;

    border: none;

    border-radius: 7px;
    transition: background 1s ease;
  }

  & form .confirm-button:hover {
    background: #305c72;
  }
  & form.create-feeder-form .create-feeder-map {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    align-items: center;

    justify-content: center;
    border-radius: 20px;
    background: #7fbfdd;
    border: solid 1px #d3e2e5;

    & p {
      padding: 10px 20px;
      font-size: 18px;
      line-height: 22px;
      font-weight: 600;
      letter-spacing: 0.02em;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    & .map {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom: solid 1px #d3e2e5;
    }

    & .fkKDKT img {
      border-radius: 20px;
    }
  }
`;

export const Popup = styled.div`
  width: 100vw;
  height: 100vh;

  animation: ${appearFromTop} 1s;

  display: flex;
  align-items: center;
  justify-content: center;
  background: #219ebc;

  gap: 52px;

  article {
    animation: ${appearFromLeft} 1.2s;
    h1 {
      font-size: 56px;
      color: #ffffff;
      font-weight: 800;
    }

    p {
      font-size: 22px;
      color: #ffffff;
      font-weight: 500;
    }
  }

  img {
    animation: ${appearFromRight} 1.2s;

    max-width: 300px;
  }

  button {
    animation: ${appearFromLeft} 1s;

    text-decoration: none;
    border: none;
    padding: 12px 30px;
    border-radius: 20px;
    margin-top: 30px;
    background: #0689a9;

    cursor: pointer;

    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #ffffff;

    transition: background 0.4s ease;
  }

  button:hover {
    background: #2ec3e7;
  }
`;
