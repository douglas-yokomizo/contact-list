import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
  list-style: none;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto, sans-serif;
  width:100vw;
}
`
