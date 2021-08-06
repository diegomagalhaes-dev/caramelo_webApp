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

  & form.create-feeder-form fieldset legend {
    width: 100%;

    font-size: 32px;
    line-height: 34px;
    color: #77a7c2;
    font-weight: 700;

    border-bottom: 1px solid #d3e2e5;
    margin-bottom: 40px;
    padding-bottom: 24px;
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
    margin-top: 60px;

    width: 100%;
    background-color: #023047;
    color: #ffffff;
    padding: 10px;

    border: none;

    border-radius: 7px;
  }
  & form.create-feeder-form .create-feeder-map {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    align-items: center;

    justify-content: center;
    border-radius: 20px;
    background: #77a7c2;
    border: solid 1px #d3e2e5;

    & p {
      padding: 10px 20px;
      font-size: 18px;
      line-height: 22px;
      font-weight: 600;
      letter-spacing: .02em;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    & .map {
      border-radius: 20px;
      border-bottom: solid 1px #d3e2e5;
    }
  }
`;
