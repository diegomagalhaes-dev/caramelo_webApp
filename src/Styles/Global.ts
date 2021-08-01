import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: #fff;
  background-color: #f1faee;
}

body,
input,
button,
textarea {
  font: 700 16px "M PLUS Rounded 1c", sans-serif;
}
`;
