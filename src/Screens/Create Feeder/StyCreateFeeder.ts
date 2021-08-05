import styled from "styled-components";

export const PageCreateFeeder = styled.div`
  display: flex;

  & main {
    flex: 1;
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
    color: #5c8599;
    font-weight: 700;

    border-bottom: 1px solid #d3e2e5;
    margin-bottom: 40px;
    padding-bottom: 24px;
  }

  & form.create-feeder-form .input-block {
  }

  & form.create-feeder-form .input-block + .input-block {
    margin-top: 24px;
  }

  & form.create-feeder-form .input-block label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  & form.create-feeder-form .input-block label span {
    font-size: 14px;
    color: #8fa7b3;
    margin-left: 24px;
    line-height: 24px;
  }

  & form.create-feeder-form .input-block input,
  & form.create-feeder-form .input-block textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
  }

  & form.create-feeder-form .input-block input {
    height: 64px;
    padding: 0 16px;
  }

  & form.create-feeder-form .input-block textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }

  & form.create-feeder-form .input-block .new-image {
    width: 100%;
    height: 64px;
    background: #f5f8fa;
    border: 1px dashed #96d2f0;
    border-radius: 20px;
    cursor: pointer;
  }

  & form.create-feeder-form .input-block .button-select {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  & form.create-feeder-form .input-block .button-select button {
    height: 64px;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    color: #5c8599;
    cursor: pointer;
  }

  & form.create-feeder-form .input-block .button-select button.active {
    background: #edfff6;
    border: 1px solid #a1e9c5;
    color: #37c77f;
  }

  & form.create-feeder-form .input-block .button-select button:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  & form.create-feeder-form .input-block .button-select button:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }
`;
