import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  h1 {
    color: #7fbfdd;
  }

  aside {
    width: 5vw;
    background: linear-gradient(
      329.54deg,
      #4c95b6 5.21%,
      #8ccae8 55.51%,
      #8ecae6 100%
    );

    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
  }
`;

export const Feeders = styled.div`
  margin-top: 120px;
  display: flex;
  width: 100%;
  width: 820px;
  max-height: 250px;
  gap: 30px;
`;

export const Feeder = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  flex: 33.33%;
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

  & .choose {
    display: flex;
    width: 100%;

    button {
      width: 100%;
      flex: 1;
    }

    button:first-child {
      border-bottom-left-radius: 20px;
    }
    button:last-child {
      border-bottom-right-radius: 20px;
    }
  }
`;
