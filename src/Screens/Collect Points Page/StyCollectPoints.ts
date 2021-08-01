import styled from "styled-components";

export const StyCollectPoints = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  aside {
    width: 28vw;
    background: linear-gradient(329.54deg, #577590 0%, #00c7c7 100%);

    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: flex-start;
  }

  aside > header {
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
  }

  aside > header a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  aside > header a span {
    color: #fff;
    margin-left: 5px;
  }

  aside section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 8rem;
    padding: 1rem 2.5rem;
  }

  aside section h2 {
    font-size: 32px;
    font-weight: 800;
    line-height: 42px;

    margin: 0.8rem 0;
  }

  aside section img:first-child {
    max-width: 5rem;
    width: 100%;
  }

  aside section img:last-child {
    position: absolute;
    bottom: 1rem;
    left: 15%;

    max-width: 12rem;
    width: 100%;
  }

  .create-New-Point {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    position: absolute;

    z-index: 10;

    padding: 8px;

    background: #f8961e;
    right: 1.2rem;
    bottom: 1.2rem;
    border-radius: 12px;

    transition: background-color 0.2s;
  }

  .create-New-Point:hover {
    background-color: #d4882a;
  }

  .leaflet-container {
    z-index: 5;
  }
`;
