import styled from "styled-components";

export const StySidebar = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #577590 0%, #00c7c7 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & img {
    width: 48px;
  }

  & footer a,
  & footer button {
    width: 48px;
    height: 48px;

    border: 0;

    background: #0089a5;
    border-radius: 16px;

    cursor: pointer;

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
