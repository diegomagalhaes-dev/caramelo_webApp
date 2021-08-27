import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  & header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & h1 {
      color: #4c95b6;
    }
  }
  & .noFeeders {
    color: #4c95b6;
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .countFeeders {
    color: #4c95b6;
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

    & img {
      top: 10px;

      position: absolute;
    }

    & .logout {
      cursor: pointer;
      position: absolute;

      bottom: 20px;
    }
  }
`;

export const Feeders = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  gap: 25px;
  flex-wrap: wrap;
`;

export const Feeder = styled.div`
  display: flex;
  flex-direction: column;
  flex: 28%;
  width: 28%;
  max-width: 50%;

  border-radius: 20px;
  background: #ffffff;
  border: solid 1px #d3e2e5;

  height: 240px;

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
    height: 60px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 12px;

      cursor: pointer;

      font-size: 18px;
      font-weight: 800;
      color: #ffffff;

      width: 100%;
      flex: 1;
      border: 0;
    }
    button:first-child {
      border-bottom-left-radius: 20px;
      background-color: #37c77f;
    }

    button:last-child {
      border-bottom-right-radius: 20px;
      background-color: rgba(245, 97, 96, 1);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  overflow-y: scroll;

  padding: 20px 45px;

  width: 100%;

  h1 {
    color: #7fbfdd;
  }
`;
