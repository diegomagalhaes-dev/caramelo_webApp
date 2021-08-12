import styled from "styled-components";

export const StyCollectPoints = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  aside {
    width: 32vw;
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

  aside > header {
    position: absolute;
    top: 1.2rem;
    left: 1.8rem;
  }

  aside > header a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  aside section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin-top: 30vh;
    padding: 0px 30px;
  }

  aside section h2 {
    font-size: 28px;
    font-weight: 800;
    line-height: 38px;
  }

  aside section img:first-child {
    max-width: 3rem;
    margin-bottom: 2rem;
    width: 100%;
  }

  aside section img:last-child {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    margin-left: -7rem;

    max-width: 14rem;
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

    background: #219ebc;
    right: 1.2rem;
    bottom: 1.2rem;
    border-radius: 12px;

    transition: background-color 0.2s;
  }

  .create-New-Point:hover {
    background-color: #305c72;
  }

  .leaflet-container {
    z-index: 5;
  }

  & .map-popup .leaflet-popup-content-wrapper {
    background-color: #d4e4ed;
    border-radius: 20px;
    box-shadow: none;
    box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.2);
  }

  & .map-popup .leaflet-popup-content {
    color: #219ebc;
    font-size: 16px;
    font-weight: bold;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    & img {
      width: 100%;
      border-radius: 20px;
    }

    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #219ebc;
    }
  }
  & .map-popup .leaflet-popup-tip-container {
    display: none;
  }

  & .leaflet-container a.leaflet-popup-close-button {
    padding: 8px;
    color: #219ebc;
    font-size: 28px;
    font-weight: bold;
    top: 5px;
    right: 18px;
  }
`;
