import styled from "styled-components";

export const StyDropzone = styled.div`
  height: 300px;
  background: #d4e4ed;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & p {
    color: #219EBC;
    font-size: 18px;
    font-weight: 600;
  }

  & p svg {
    color: #f8961e;
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }

  & .internalCallDropzone {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 20px;
    border: 2px dashed #f8961e;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;
