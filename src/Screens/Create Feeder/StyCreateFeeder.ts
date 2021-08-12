import styled from "styled-components";

export const PageCreateFeeder = styled.div`
  display: flex;
  flex-direction: column;

  & main {
    flex: 1;
    transform: translateY(-110px);
  }

  & form.create-feeder-form {
    width: 700px;
    margin: 64px auto;

    background: #ffffff;
    border: 1px solid #d3e2e5;
    border-radius: 20px;

    padding: 64px 80px;

    overflow: hidden;
  }

  & form.create-feeder-form fieldset {
    border: 0;
  }

  & form.create-feeder-form fieldset + fieldset {
    margin-top: 80px;
  }

  & form.create-feeder-form .input-block .new-image {
    width: 100%;
    height: 128px;
    background: #f5f8fa;
    border: 1px dashed #96d2f0;
    border-radius: 20px;
    cursor: pointer;
  }

  & form .confirm-button {
    margin-top: 40px;

    cursor: pointer;
    width: 100%;
    background: #219EBC;
    color: #ffffff;
    padding: 10px;

    border: none;

    border-radius: 7px;
    transition: background 1s ease;
  }

  & form .confirm-button:hover {
    background: #305c72;
  }
  & form.create-feeder-form .create-feeder-map {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    align-items: center;

    justify-content: center;
    border-radius: 20px;
    background: #7FBFDD;
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
  }
`;
