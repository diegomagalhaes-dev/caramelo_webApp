import styled from "styled-components";

export const StyLanding = styled.div`
  max-width: 100%;

  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #577590 0%, #00c7c7 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    max-width: 980px;
    max-height: 620px;
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  header {
    position: absolute;
    left: 0;
    top: 0;
  }

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 25rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    img {
      max-width: 65vw;
      height: 100%;
    }
  }

  section {
    display: flex;
    flex-direction: column;

    h1 {
      max-width: 35vw;

      font-size: 62px;
      line-height: 72px;
      font-weight: 900;
      width: 100%;
    }
    a {
      text-decoration: none;

      margin-top: 32px;

      display: flex;
      align-items: center;
      justify-content: center;

      max-width: 180px;
      width: 100%;

      padding: 4px 10px;
      background-color: #f8961e;
      border-radius: 12px;

      font-size: 22px;
      font-weight: 800;
      letter-spacing: 0.5px;
      color: #ffffff;

      transition: background-color 0.2s;
    }
    a:hover {
      background-color: #d4882a;
    }
    span {
      margin-right: 4px;
    }
  }
`;
