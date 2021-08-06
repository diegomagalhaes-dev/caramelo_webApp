import styled from "styled-components";

export const StySidebar = styled.aside`
  position: relative;
  width: 100vw;
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 18px 20px;
  background: linear-gradient(329.54deg, #577590 0%, #8ecae6 100%);

  & header {
    max-width: 1120px;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  & aside {
    width: 100%;
    max-width: 700px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    display: flex;

    & h1 {
      max-width: 360px;
      width: 100%;
      line-height: 44px;
      font-size: 36px;
      font-weight: 900;
      color: #fff;
    }

    & p {
      margin-top: 10px;
      margin-bottom: 72px;
      max-width: 690px;
      font-size: 22px;
      letter-spacing: 0.03em;
      line-height: 25px;
      font-weight: 500;
      color: #fff;
      opacity: 80%;
    }
  }

  & img {
    max-width: 10rem;
  }

  & a,
  & button {
    border: none;

    border-radius: 16px;

    cursor: pointer;
    background: none;
    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  & footer a:hover,
  & footer button:hover {
    background: #00c7c7;
  }
`;
