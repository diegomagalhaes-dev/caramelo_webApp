import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #d3e2e5;
  border-radius: 10px;
  border: 2px solid #d3e2e5;
  padding: 16px;
  width: 100%;
  display: flex;
  margin-top: 14px;
  color: #306471;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #f56160;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: #f8961e;
      border-color: #f8961e;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #f8961e;
    `}

  input {
    flex: 1;
    font-size: 16px;
    color: #306471;
    border: 0;
    background: transparent;
    outline: none;
    & + input {
      margin-top: 8px;
    }

    &::placeholder {
      color: #306471;
    }
  }
  > svg {
    margin-right: 16px;
  }
`;

export const Error = styled.div`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
`;
