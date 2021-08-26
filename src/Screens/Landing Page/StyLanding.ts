import styled from "styled-components";

export const StyLanding = styled.div`
  max-width: 100%;

  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    329.54deg,
    #4c95b6 5.21%,
    #8ccae8 55.51%,
    #8ecae6 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    max-width: 1024px;
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  header img {
    position: absolute;
    left: 0;
    top: 30px;
  }

  header div a {
    text-decoration: none;

    color: #ffffff;

    position: absolute;
    right: 0;
    top: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 8px 12px;

    border-radius: 20px;
    border: 2px solid #f8961e;

    cursor: pointer;

    transition: background 0.3s ease;
  }

  header div a:hover {
    background: #fabd72;
  }

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 30rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    img {
      max-width: 32vw;
    }
  }

  section {
    display: flex;
    flex-direction: column;

    h1 {
      max-width: 40vw;

      font-size: 48px;
      line-height: 62px;
      font-weight: 900;
      width: 100%;
    }

    p {
      margin-top: 10px;
      font-size: 28px;
      font-weight: 500;
      color: #ffffff;
      opacity: 80%;
    }
    a {
      text-decoration: none;

      margin-top: 44px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      max-width: 190px;
      width: 100%;

      padding: 8px 12px;
      background-color: #f8961e;
      border-radius: 10px;

      font-size: 24px;
      font-weight: 800;
      letter-spacing: 0.5px;
      color: #ffffff;

      transition: background-color 0.2s;

      & img {
        max-width: 54px;
      }
    }
    a:hover {
      background-color: #f8961e;
    }
    span {
      margin-right: 4px;
    }
  }
`;
